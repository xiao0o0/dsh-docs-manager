import { spawn } from 'node:child_process'
import { promises as fsp } from 'node:fs'
import { homedir } from 'node:os'
import path from 'node:path'

const API_PREFIX = '/docs-manager/api'
const DEFAULT_ROOT = path.join(homedir(), '.dsh', 'docs')
const CFG_DIR = path.join(homedir(), '.dsh', 'storages', 'dsh-docs-manager')
const CFG_FILE = path.join(CFG_DIR, 'config.json')
const MAX_DEPTH = 5
const MD_RE = /\.(md|markdown)$/i

function expandHome(input) {
  const raw = String(input ?? '').trim()
  if (raw === '') return ''
  if (raw === '~') return homedir()
  if (raw.startsWith('~/') || raw.startsWith('~\\')) return path.join(homedir(), raw.slice(2))
  return raw
}

async function readConfig() {
  try {
    const text = await fsp.readFile(CFG_FILE, 'utf8')
    const parsed = JSON.parse(text)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

async function writeConfig(config) {
  await fsp.mkdir(CFG_DIR, { recursive: true })
  await fsp.writeFile(CFG_FILE, JSON.stringify(config, null, 2), 'utf8')
}

async function currentRoot() {
  const config = await readConfig()
  const configured = expandHome(config.root)
  return configured ? path.resolve(configured) : DEFAULT_ROOT
}

function relativeOf(root, absolute) {
  const rel = path.relative(root, absolute)
  return rel.split(path.sep).join('/')
}

/** Resolve a document path inside the root; reject escapes and non-Markdown targets. */
function safeJoin(root, rel) {
  const raw = String(rel ?? '').replace(/\\/g, '/').trim()
  if (raw === '') throw new Error('缺少文档路径')
  if (raw.includes('\0')) throw new Error('文档路径非法')
  if (raw.split('/').includes('..')) throw new Error('文档路径非法')
  const base = path.resolve(root)
  const absolute = path.resolve(base, raw)
  if (absolute !== base && !absolute.startsWith(base + path.sep)) throw new Error('文档路径越界')
  if (!MD_RE.test(absolute)) throw new Error('只支持 .md 文档')
  return absolute
}

/** Read the head of a document and flatten it into a one-paragraph preview. */
async function readHead(absolute) {
  let handle = null
  try {
    handle = await fsp.open(absolute, 'r')
    const buffer = Buffer.alloc(2048)
    const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0)
    return buffer.subarray(0, bytesRead).toString('utf8')
  } catch {
    return ''
  } finally {
    if (handle) await handle.close().catch(() => {})
  }
}

function titleOf(text) {
  const match = /^#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*$/m.exec(String(text || ''))
  return match ? match[1].trim() : ''
}

function excerptOf(text) {
  return String(text || '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#{1,6}\s*/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[>*_`~|#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200)
}

async function metaOf(absolute) {
  const head = await readHead(absolute)
  return { title: titleOf(head), excerpt: excerptOf(head) }
}

/** Breadth-first scan of Markdown files, at most MAX_DEPTH nested directories. */
async function scan(root) {
  const groups = []
  const queue = [{ absolute: root, dir: '', depth: 0 }]
  while (queue.length > 0) {
    const current = queue.shift()
    let entries
    try {
      entries = await fsp.readdir(current.absolute, { withFileTypes: true })
    } catch (error) {
      if (current.depth === 0) throw new Error(`无法读取根目录：${error?.message ?? error}`)
      continue
    }
    const files = []
    for (const entry of entries) {
      const name = entry?.name
      if (!name || name.startsWith('.')) continue
      const childAbsolute = path.join(current.absolute, name)
      const childDir = current.dir ? `${current.dir}/${name}` : name
      if (entry.isDirectory()) {
        if (current.depth + 1 <= MAX_DEPTH) queue.push({ absolute: childAbsolute, dir: childDir, depth: current.depth + 1 })
        continue
      }
      if (!entry.isFile() || !MD_RE.test(name)) continue
      let stat = null
      try {
        stat = await fsp.stat(childAbsolute)
      } catch {
        continue
      }
      const meta = await metaOf(childAbsolute)
      files.push({ path: childDir, name, size: stat.size, mtime: stat.mtimeMs, title: meta.title, excerpt: meta.excerpt })
    }
    if (files.length > 0) {
      files.sort((a, b) => a.name.localeCompare(b.name))
      groups.push({ dir: current.dir, files })
    }
  }
  groups.sort((a, b) => {
    if (a.dir === b.dir) return 0
    if (a.dir === '') return -1
    if (b.dir === '') return 1
    return a.dir.localeCompare(b.dir)
  })
  return groups
}

function send(res, status, payload) {
  const body = JSON.stringify(payload)
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('cache-control', 'no-store')
  res.end(body)
}

async function readJsonBody(req) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > 8 * 1024 * 1024) throw new Error('请求体过大')
    chunks.push(chunk)
  }
  if (chunks.length === 0) return {}
  const text = Buffer.concat(chunks).toString('utf8').trim()
  if (text === '') return {}
  try {
    const parsed = JSON.parse(text)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    throw new Error('请求体不是合法 JSON')
  }
}

function normalizeRootInput(root) {
  const expanded = expandHome(root)
  if (expanded === '') throw new Error('根目录不能为空')
  if (!path.isAbsolute(expanded)) throw new Error('根目录必须是绝对路径，或以 ~ 开头')
  return path.resolve(expanded)
}

async function handleState() {
  const root = await currentRoot()
  await fsp.mkdir(root, { recursive: true })
  const groups = await scan(root)
  return { ok: true, root, maxDepth: MAX_DEPTH, groups }
}

async function handleRead(body) {
  const root = await currentRoot()
  const absolute = safeJoin(root, body.path)
  const content = await fsp.readFile(absolute, 'utf8')
  const stat = await fsp.stat(absolute)
  return { ok: true, path: relativeOf(root, absolute), content, mtime: stat.mtimeMs }
}

async function handleWrite(body) {
  const root = await currentRoot()
  const absolute = safeJoin(root, body.path)
  const content = typeof body.content === 'string' ? body.content : ''
  await fsp.mkdir(path.dirname(absolute), { recursive: true })
  const existed = await fsp
    .stat(absolute)
    .then(() => true)
    .catch(() => false)
  await fsp.writeFile(absolute, content, 'utf8')
  return { ok: true, path: relativeOf(root, absolute), created: !existed }
}

async function handleDelete(body) {
  const root = await currentRoot()
  const absolute = safeJoin(root, body.path)
  await fsp.unlink(absolute)
  return { ok: true, path: relativeOf(root, absolute) }
}

async function handleOpenRoot() {
  const root = await currentRoot()
  await fsp.mkdir(root, { recursive: true })
  const command = process.platform === 'win32' ? 'explorer.exe' : process.platform === 'darwin' ? 'open' : 'xdg-open'
  const child = spawn(command, [root], { detached: true, stdio: 'ignore' })
  child.unref()
  return { ok: true, root }
}

async function handleGetConfig() {
  const config = await readConfig()
  return { ok: true, root: await currentRoot(), stored: typeof config.root === 'string' ? config.root : '', fallback: DEFAULT_ROOT }
}

async function handleSetConfig(body) {
  const resolved = normalizeRootInput(body.root)
  await fsp.mkdir(resolved, { recursive: true })
  const config = await readConfig()
  await writeConfig({ ...config, root: String(body.root ?? '').trim() })
  return { ok: true, root: resolved }
}

/**
 * Apply Connection's Host/Origin checks and browser authentication to this
 * route. Without it any web page the user has open could call it, because
 * `webServer.register` routes bypass the admission the API channel gets.
 * Returns 401/403 when the request must not be served, undefined when the
 * runtime offers no check to apply.
 */
function trustRejection(ctx, req) {
  const connection = ctx.get('connection')
  if (!connection || typeof connection.requestRejection !== 'function') return undefined
  return connection.requestRejection({ headers: req.headers })
}

export function apply(ctx) {
  const handler = async (req, res) => {
    const rejection = trustRejection(ctx, req)
    if (rejection !== undefined) {
      return send(res, rejection, { ok: false, error: rejection === 401 ? '未授权访问' : '来源不受信任' })
    }
    try {
      const url = new URL(req.url ?? '/', 'http://docs-manager.local')
      const action = url.pathname.slice(API_PREFIX.length).replace(/^\/+/, '').replace(/\/+$/, '')
      const method = String(req.method ?? 'GET').toUpperCase()
      const body = method === 'GET' || method === 'HEAD' ? {} : await readJsonBody(req)

      switch (action) {
        case 'state':
          return send(res, 200, await handleState())
        case 'read':
          return send(res, 200, await handleRead(body))
        case 'write':
          return send(res, 200, await handleWrite(body))
        case 'delete':
          return send(res, 200, await handleDelete(body))
        case 'config':
          return send(res, 200, method === 'GET' ? await handleGetConfig() : await handleSetConfig(body))
        case 'open-root':
          return send(res, 200, await handleOpenRoot())
        default:
          return send(res, 404, { ok: false, error: `未知接口：${action || '/'}` })
      }
    } catch (error) {
      const message = error?.message ?? String(error)
      send(res, 400, { ok: false, error: message })
    }
  }

  ctx.inject(['webServer'], (scoped) => {
    const webServer = scoped.webServer
    if (!webServer || typeof webServer.register !== 'function') {
      console.warn('[dsh-docs-manager] webServer 服务不可用，文档管理接口未注册')
      return
    }
    scoped.effect(
      () => webServer.register({ kind: 'prefix', path: API_PREFIX, handler }),
      'dsh-docs-manager: document api',
    )
  })
}
