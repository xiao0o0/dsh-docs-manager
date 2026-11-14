window.__ModuleLoader__.load({
  id: 'dsh-docs-manager',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    const MAIN_ID = 'docs-manager'
    const API = '/docs-manager/api'
    const MAX_DEPTH = 5

    const ZH = {
      panel: '文档管理',
      panelDesc: '按目录浏览 Markdown 文档',
      new: '新建文档',
      newToDir: '在此目录新建文档（%s）',
      dirPlaceholder: '留空则保存到根目录',
      refresh: '刷新',
      root: '根目录',
      search: '搜索',
      empty: '还没有文档',
      emptyHint: '点右上角「+」新建一篇',
      emptySearch: '没有匹配的文档',
      loading: '正在读取…',
      cancel: '取消',
      close: '关闭',
      save: '保存',
      del: '删除',
      edit: '编辑',
      back: '返回',
      backChat: '返回会话',
      name: '文件名',
      dir: '目录',
      content: '内容',
      dirHint: '当前根目录：%s；选择现有文件夹，或选「新建文件夹」输入名称',
      dirRoot: '根目录（/）',
      dirCustom: '新建文件夹…',
      dirNewHint: '输入文件夹名称，如 notes/meeting',
      nameHint: '请输入文件名...',
      contentHint: '请输入文件内容',
      openRoot: '打开根目录文件夹',
      saveAsDoc: '存为文档',
      quickAdd: '记录成文档',
      quickAddDesc: '把这段内容保存进文档库',
      saved: '已保存',
      deleted: '已删除',
      needName: '请填写文件名',
      confirmDelete: '删除「%s」？',
      rootUpdated: '根目录已更新',
      depthHint: '最多读取 5 层目录',
      rootPlaceholder: '~/.dsh/docs',
      quickNote: '记一条文档',
      files: '篇',
      readFailed: '读取失败',
      editTitle: '编辑文档',
      newTitle: '新建文档',
      rootTitle: '文档根目录',
      openFailed: '打开文档失败',
      nameOccupied: '同名文档已存在，请换一个名字',
      noPreview: '空文档',
      autosave: '自动保存',
      savedAt: '已保存 %s',
      titlePlaceholder: '文档标题',
      toolBold: '加粗',
      toolItalic: '斜体',
      toolStrike: '删除线',
      toolH1: '一级标题',
      toolH2: '二级标题',
      toolH3: '三级标题',
      toolQuote: '引用',
      toolUl: '无序列表',
      toolOl: '有序列表',
      toolCode: '代码块',
      toolLink: '链接',
      toolHr: '分隔线',
      words: '%s 字',
      pin: '置顶',
      unpin: '取消置顶',
      cardColor: '卡片颜色',
      toneYellow: '黄色',
      toneBlue: '蓝色',
      toneGreen: '绿色',
      tonePink: '粉色',
      tonePurple: '紫色',
      toneGray: '灰色',
      sortTitle: '排序方式',
      sortName: '按名称',
      sortUpdated: '按更新时间',
      sortManual: '手动排序',
      pinned: '置顶',
      preview: '预览',
      editMode: '编辑',
      format: '排版',
      sourceMd: 'Markdown',
      richPlaceholder: '开始写正文…',
    }

    const EN = {
      panel: 'Documents',
      panelDesc: 'Browse Markdown documents by directory',
      new: 'New document',
      newToDir: 'New document in %s',
      dirPlaceholder: 'Leave empty to save at the root',
      refresh: 'Refresh',
      root: 'Root directory',
      search: 'Search',
      empty: 'No documents yet',
      emptyHint: 'Use + in the top right to create one',
      emptySearch: 'No matching documents',
      loading: 'Loading…',
      cancel: 'Cancel',
      close: 'Close',
      save: 'Save',
      del: 'Delete',
      edit: 'Edit',
      back: 'Back',
      backChat: 'Back to chat',
      name: 'File name',
      dir: 'Directory',
      content: 'Content',
      dirHint: 'Root directory: %s; pick an existing folder or create one by name',
      dirRoot: 'Root (/)',
      dirCustom: 'New folder...',
      dirNewHint: 'Folder name, e.g. notes/meeting',
      nameHint: 'Please enter a file name...',
      contentHint: 'Please enter the document content',
      openRoot: 'Open root folder',
      saveAsDoc: 'Save as document',
      quickAdd: 'Capture as document',
      quickAddDesc: 'Save this content into the document library',
      saved: 'Saved',
      deleted: 'Deleted',
      needName: 'File name is required',
      confirmDelete: 'Delete "%s"?',
      rootUpdated: 'Root directory updated',
      depthHint: 'Reads up to 5 nested directories',
      rootPlaceholder: '~/.dsh/docs',
      quickNote: 'Capture to docs',
      files: '',
      readFailed: 'Failed to read',
      editTitle: 'Edit document',
      newTitle: 'New document',
      rootTitle: 'Document root',
      openFailed: 'Failed to open document',
      nameOccupied: 'A document with this name already exists',
      noPreview: 'Empty document',
      autosave: 'Auto save',
      savedAt: 'Saved %s',
      titlePlaceholder: 'Document title',
      toolBold: 'Bold',
      toolItalic: 'Italic',
      toolStrike: 'Strikethrough',
      toolH1: 'Heading 1',
      toolH2: 'Heading 2',
      toolH3: 'Heading 3',
      toolQuote: 'Quote',
      toolUl: 'Bulleted list',
      toolOl: 'Numbered list',
      toolCode: 'Code block',
      toolLink: 'Link',
      toolHr: 'Divider',
      words: '%s words',
      pin: 'Pin',
      unpin: 'Unpin',
      cardColor: 'Card color',
      toneYellow: 'Yellow',
      toneBlue: 'Blue',
      toneGreen: 'Green',
      tonePink: 'Pink',
      tonePurple: 'Purple',
      toneGray: 'Gray',
      sortTitle: 'Sort by',
      sortName: 'Name',
      sortUpdated: 'Updated',
      sortManual: 'Manual',
      pinned: 'Pinned',
      preview: 'Preview',
      editMode: 'Edit',
      format: 'Rich text',
      sourceMd: 'Markdown',
      richPlaceholder: 'Start writing…',
    }

    let boundTranslate = null
    function t(key) {
      if (boundTranslate) {
        try {
          const value = boundTranslate(key)
          if (typeof value === 'string' && value !== '' && value !== key) return value
        } catch {
          /* 回退到中文词典 */
        }
      }
      return ZH[key] !== undefined ? ZH[key] : key
    }

    function message(error) {
      if (!error) return '未知错误'
      if (typeof error === 'string') return error
      return error.message ? String(error.message) : String(error)
    }

    const CSS = `
.dm-host{position:relative;display:flex;flex-direction:column;height:100%;min-height:0}
.dm-main{flex:1;min-height:0;display:flex;flex-direction:column}
.dm-app{position:relative;height:100%;min-height:0;display:flex;flex-direction:column;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;font-size:13px;line-height:1.5}
.dm-app *{box-sizing:border-box}
.dm-head{display:flex;align-items:center;gap:8px;padding:16px 16px 10px}
.dm-head-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.dm-title{font-size:14px;font-weight:650;letter-spacing:.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dm-sub{font-size:11px;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;direction:rtl;text-align:left}
.dm-actions{display:flex;align-items:center;gap:2px;flex:0 0 auto}
.dm-glyph{width:26px;height:26px;padding:0;display:inline-flex;align-items:center;justify-content:center;flex:none;border:0 !important;background:transparent !important;box-shadow:none !important;border-radius:7px;color:var(--dsw-alias-label-secondary);cursor:pointer;appearance:none;-webkit-appearance:none;font:inherit;line-height:1}
.dm-glyph:hover{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 12%, transparent) !important;color:var(--dsw-alias-label-primary)}
.dm-glyph:active{transform:scale(.94)}
.dm-glyph:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}
.dm-glyph:disabled{opacity:.4;cursor:default}
.dm-toolbar{display:flex;align-items:center;gap:6px;padding:0 16px 10px}
.dm-search{display:flex;align-items:center;gap:6px;height:28px;padding:0 10px;border-radius:9px;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 5%, transparent);color:var(--dsw-alias-label-secondary);flex:1 1 auto;min-width:0;transition:background .15s ease}
.dm-search:focus-within{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 10%, transparent)}
.dm-search input{flex:1;min-width:0;border:0;background:transparent;outline:none;font:inherit;font-size:12px;color:var(--dsw-alias-label-primary)}
.dm-search input::placeholder{color:color-mix(in srgb, var(--dsw-alias-label-secondary) 78%, transparent)}
.dm-sort{flex:0 0 auto;display:inline-flex}
.dm-sort select{height:28px;padding:0 24px 0 9px;border:1px solid transparent;border-radius:9px;background-color:color-mix(in srgb, var(--dsw-alias-label-secondary) 5%, transparent);color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;line-height:18px;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5 6 6.5l5-5' fill='none' stroke='%238a8f98' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;background-size:10px;cursor:pointer;transition:background-color .15s ease}
.dm-sort select:hover{background-color:color-mix(in srgb, var(--dsw-alias-label-secondary) 10%, transparent)}
.dm-sort select:focus-visible{outline:2px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 60%, transparent);outline-offset:1px}
.dm-body{flex:1;min-height:0;overflow-y:auto;overflow-x:hidden;padding:0 14px 26px}
.dm-group{margin:0 0 20px;position:relative}
.dm-grouphead{display:flex;align-items:center;gap:8px;margin:0 0 8px;min-width:0}
.dm-dir{display:flex;align-items:center;gap:5px;min-width:0;color:var(--dsw-alias-label-secondary);font-size:11.5px;font-weight:600;letter-spacing:.01em}
.dm-dir span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dm-groupadd{flex:none;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;padding:0;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);cursor:pointer;opacity:.55;transition:opacity .15s ease,background .15s ease}
.dm-group:hover .dm-groupadd{opacity:1}
.dm-groupadd:hover{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 14%, transparent)}
.dm-groupadd:active{transform:scale(.94)}
.dm-count{flex:none;font-size:10px;font-weight:600;padding:1px 6px;border-radius:99px;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 12%, transparent);color:var(--dsw-alias-label-secondary)}
.dm-strip{display:flex;gap:10px;overflow-x:auto;overflow-y:hidden;padding:2px 0 10px;scrollbar-width:thin}
.dm-strip::-webkit-scrollbar{height:6px}
.dm-strip::-webkit-scrollbar-thumb{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 22%, transparent);border-radius:99px}
.dm-card{position:relative;flex:0 0 auto;width:236px;height:158px;display:flex;flex-direction:column;gap:5px;padding:12px 13px 8px;overflow:hidden;border-radius:14px;border:1px solid rgba(20,24,16,.07);background:#FFF1A6;cursor:pointer;text-align:left;color:#2e2a22;font:inherit;box-shadow:0 1px 2px rgba(16,24,40,.08);transition:box-shadow .15s ease, transform .15s ease}
.dm-card[data-tone="yellow"]{background:#FFF1A6}
.dm-card[data-tone="blue"]{background:#BBD8F7}
.dm-card[data-tone="green"]{background:#C3E6B0}
.dm-card[data-tone="pink"]{background:#F9C6D6}
.dm-card[data-tone="purple"]{background:#D9C6F5}
.dm-card[data-tone="gray"]{background:#E9E9E6}
.dm-card:hover{box-shadow:0 10px 24px rgba(16,24,40,.16);transform:translateY(-1px)}
.dm-card:active{transform:translateY(0) scale(.995)}
.dm-card[draggable="true"]{cursor:grab}
.dm-card-dragging{opacity:.4;box-shadow:none}
.dm-card-over{outline:2px dashed rgba(10,124,255,.55);outline-offset:-2px}
.dm-card-title{font-size:13px;font-weight:650;line-height:1.35;color:#2b2721;max-height:2.7em;overflow:hidden;word-break:break-word}
.dm-card-text{flex:1;min-height:0;font-size:11.5px;line-height:1.55;color:#5c5346;overflow:hidden;word-break:break-word}
.dm-card-text-empty{opacity:.6}
.dm-card-foot{display:flex;align-items:center;justify-content:flex-end;min-height:22px}
.dm-card-actions{display:flex;gap:2px;opacity:.68;transition:opacity .12s ease}
.dm-card:hover .dm-card-actions,.dm-card:focus-within .dm-card-actions{opacity:1}
.dm-card-act{width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;padding:0;border:0;border-radius:6px;background:rgba(255,255,255,.45);color:#5c5346;cursor:pointer;transition:background .12s ease,color .12s ease}
.dm-card-act:hover{background:rgba(255,255,255,.92);color:#2b2721}
.dm-card-act[data-on="true"]{color:#c9821a}
.dm-card-act[data-on="true"]:hover{color:#a76a10}
.dm-tone-pop{position:absolute;right:9px;bottom:34px;z-index:2;display:grid;grid-template-columns:repeat(3,20px);gap:6px;padding:7px;border-radius:10px;background:rgba(255,255,255,.96);box-shadow:0 8px 22px rgba(16,24,40,.18);border:1px solid rgba(20,24,16,.08)}
.dm-tone-dot{width:20px;height:20px;padding:0;border:1px solid rgba(20,24,16,.12);border-radius:50%;cursor:pointer;transition:transform .12s ease,box-shadow .12s ease}
.dm-tone-dot:hover{transform:scale(1.08)}
.dm-tone-dot[data-tone="yellow"]{background:#FFF1A6}
.dm-tone-dot[data-tone="blue"]{background:#BBD8F7}
.dm-tone-dot[data-tone="green"]{background:#C3E6B0}
.dm-tone-dot[data-tone="pink"]{background:#F9C6D6}
.dm-tone-dot[data-tone="purple"]{background:#D9C6F5}
.dm-tone-dot[data-tone="gray"]{background:#E9E9E6}
.dm-tone-dot[data-on="true"]{box-shadow:0 0 0 2px rgba(10,124,255,.75)}
.dm-ed-mode{height:26px;padding:0 10px;border:0;border-radius:7px;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 8%, transparent);color:var(--dsw-alias-label-secondary);font:inherit;font-size:11.5px;font-weight:600;cursor:pointer}
.dm-ed-mode:hover{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 15%, transparent);color:var(--dsw-alias-label-primary)}
.dm-ed-preview{flex:1;min-height:0;overflow:auto;padding:6px 22px 22px}
.dm-ed-rich{flex:1;min-height:0;overflow:auto;padding:4px 22px 22px;outline:none;max-width:none}
.dm-ed-rich:focus{outline:none}
.dm-ed-rich:empty::before{content:attr(data-placeholder);color:var(--dsw-alias-label-secondary)}
.dm-rich-field{border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:color-mix(in srgb, var(--dsw-alias-bg-base) 60%, transparent);padding:6px 8px 8px;max-height:44vh;overflow:auto}
.dm-rich-field .dm-ed-tools{padding:2px 0 6px;border-bottom:1px solid var(--dsw-alias-border-l1);margin-bottom:6px;flex-wrap:wrap}
.dm-rich-field .dm-rich-input{min-height:150px;padding:4px 4px 6px;outline:none}
.dm-sheet-note{font-size:12.5px;line-height:1.6;color:var(--dsw-alias-label-secondary)}
.dm-card-add{flex:0 0 auto;width:132px;justify-content:center;align-items:center;gap:7px;border:1px dashed color-mix(in srgb, var(--dsw-alias-label-secondary) 30%, transparent);background:transparent;box-shadow:none;color:var(--dsw-alias-label-secondary)}
.dm-card-add:hover{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 7%, transparent);color:var(--dsw-alias-label-primary);box-shadow:none;transform:none}
.dm-card-add-icon{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9px;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 10%, transparent)}
.dm-card-add-text{font-size:12px;font-weight:600}
.dm-empty{padding:44px 10px;text-align:center;color:var(--dsw-alias-label-secondary)}
.dm-empty b{display:block;font-size:13px;font-weight:600;color:var(--dsw-alias-label-primary);margin-bottom:4px}
.dm-empty small{font-size:11.5px}
.dm-error{margin:0 0 10px;padding:9px 11px;border-radius:10px;background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 10%, transparent);color:var(--dsw-alias-state-error-primary);font-size:12px;word-break:break-word}
.dm-doc{display:flex;flex-direction:column;flex:1;min-height:0}
.dm-doc-head{display:flex;align-items:center;gap:4px;padding:12px 12px 10px}
.dm-doc-title{flex:1;min-width:0;font-size:14px;font-weight:650;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dm-confirm{display:flex;align-items:center;gap:8px;margin:0 12px 8px;padding:8px 11px;border-radius:10px;background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 9%, transparent);font-size:12px;color:var(--dsw-alias-label-secondary)}
.dm-confirm span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dm-doc-body{flex:1;min-height:0;overflow:auto;padding:2px 20px 40px}
.dm-md{font-size:13.5px;line-height:1.72;word-break:break-word;max-width:760px}
.dm-md .dm-h{margin:22px 0 8px;font-weight:650;line-height:1.35;letter-spacing:-.01em}
.dm-md .dm-h:first-child{margin-top:6px}
.dm-md .dm-h1{font-size:21px}.dm-md .dm-h2{font-size:17px}.dm-md .dm-h3{font-size:15px}
.dm-md .dm-h4,.dm-md .dm-h5,.dm-md .dm-h6{font-size:13.5px;color:var(--dsw-alias-label-secondary)}
.dm-md .dm-p{margin:0 0 10px;white-space:pre-wrap}
.dm-md .dm-list{margin:0 0 10px;padding-left:22px}
.dm-md .dm-list li{margin:2px 0}
.dm-md .dm-quote{margin:0 0 10px;padding:2px 12px;border-left:3px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 45%, transparent);color:var(--dsw-alias-label-secondary)}
.dm-md .dm-hr{margin:18px 0;border:none;border-top:1px solid var(--dsw-alias-border-l1)}
.dm-md .dm-pre{margin:0 0 12px;padding:11px 13px;border-radius:10px;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 9%, transparent);border:0;overflow:auto;font-size:12px;line-height:1.55}
.dm-md code{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
.dm-md .dm-code-inline{padding:1px 5px;border-radius:5px;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 12%, transparent);font-size:12px}
.dm-md a{color:var(--dsw-alias-brand-primary);text-decoration:none}
.dm-md a:hover{text-decoration:underline}
.dm-md .dm-table{width:100%;border-collapse:collapse;margin:0 0 12px;font-size:12.5px}
.dm-md .dm-table th,.dm-md .dm-table td{border:1px solid var(--dsw-alias-border-l1);padding:6px 9px;text-align:left;vertical-align:top}
.dm-md .dm-table th{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 8%, transparent);font-weight:600}
.dm-mask{position:absolute;inset:0;z-index:30;display:flex;align-items:center;justify-content:center;padding:24px;background:color-mix(in srgb, #0b1220 32%, transparent);backdrop-filter:blur(3px) saturate(120%);-webkit-backdrop-filter:blur(3px) saturate(120%);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;font-size:13px;line-height:1.5;color:var(--dsw-alias-label-primary)}
.dm-mask *{box-sizing:border-box}
.dm-sheet{width:100%;max-width:440px;max-height:100%;display:flex;flex-direction:column;border-radius:16px;background:var(--dsw-alias-bg-overlay);box-shadow:0 24px 64px rgba(16,24,40,.28), 0 1px 3px rgba(16,24,40,.16);overflow:hidden}
.dm-sheet-wide{max-width:560px}
.dm-sheet-head{display:flex;align-items:center;gap:8px;padding:18px 20px 6px;font-size:15px;font-weight:650;letter-spacing:-.01em}
.dm-sheet-head span{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.dm-sheet-close{width:24px;height:24px;padding:0;border:0;border-radius:99px;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 12%, transparent);color:var(--dsw-alias-label-secondary);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex:none}
.dm-sheet-close:hover{color:var(--dsw-alias-label-primary)}
.dm-sheet-body{padding:6px 20px 2px;overflow:auto;display:flex;flex-direction:column;gap:14px}
.dm-sheet-foot{display:flex;align-items:center;justify-content:flex-end;gap:4px;padding:14px 18px 16px;border-top:1px solid var(--dsw-alias-border-l1);margin-top:14px}
.dm-field{display:flex;flex-direction:column;gap:6px}
.dm-field label{font-size:11.5px;font-weight:600;color:var(--dsw-alias-label-secondary);letter-spacing:.02em}
.dm-input,.dm-textarea{width:100%;border:1px solid transparent;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 9%, transparent);border-radius:10px;padding:9px 11px;font:inherit;font-size:13px;color:var(--dsw-alias-label-primary);outline:none;transition:box-shadow .15s ease, background .15s ease}
.dm-input{height:34px;line-height:18px}
select.dm-input{height:auto;min-height:34px;line-height:20px;padding:6px 32px 6px 10px;appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2.6 4.6 6 8l3.4-3.4' fill='none' stroke='%238a8f98' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center;background-size:12px;cursor:pointer}
.dm-textarea{min-height:132px;resize:vertical;line-height:1.6;font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12.5px}
.dm-input:focus,.dm-textarea:focus{background-color:var(--dsw-alias-bg-layer-2);border-color:color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, transparent);box-shadow:0 0 0 3.5px color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, transparent)}
.dm-input-sub{margin-top:8px}
.dm-hint{word-break:break-all;font-size:11px;color:var(--dsw-alias-label-secondary)}
.dm-btn{height:32px;padding:0 15px;border-radius:10px;border:0;background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;font-weight:500;cursor:pointer}
.dm-btn:hover{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 12%, transparent)}
.dm-btn:disabled{opacity:.45;cursor:default}
.dm-btn-primary{background:#0a7cff;color:#fff;font-weight:600;padding:0 18px;box-shadow:0 1px 2px rgba(10,124,255,.28)}
.dm-btn-primary:hover{background:#1c86ff}
.dm-btn-primary:active{background:#0a6fe5}
.dm-btn-danger{color:var(--dsw-alias-state-error-primary)}
.dm-btn-danger:hover{background:color-mix(in srgb, var(--dsw-alias-state-error-primary) 12%, transparent)}
.dm-modal-error{font-size:11.5px;color:var(--dsw-alias-state-error-primary);word-break:break-word}
.dm-notice{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);z-index:30;padding:7px 14px;border-radius:99px;background:var(--dsw-alias-bg-overlay);border:1px solid var(--dsw-alias-border-l1);color:var(--dsw-alias-label-primary);font-size:12px;box-shadow:0 8px 24px rgba(16,24,40,.18);pointer-events:none}
.dm-quick-catch{position:fixed;inset:0;z-index:60;background:transparent}
.dm-quick{position:fixed;z-index:61;left:50%;top:50%;transform:translate(-50%,-50%);width:min(560px,calc(100% - 48px));max-height:86vh;display:flex;flex-direction:column;border-radius:16px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;font-size:13px;line-height:1.5;overflow:hidden;box-shadow:0 24px 64px rgba(16,24,40,.26), 0 0 0 1px color-mix(in srgb,#0b1220 8%,transparent)}
.dm-quick *{box-sizing:border-box}
.dm-overlay{position:absolute;inset:0;z-index:40;display:flex;align-items:center;justify-content:center;padding:32px;background:color-mix(in srgb, #0b1220 32%, transparent);backdrop-filter:blur(3px) saturate(120%);-webkit-backdrop-filter:blur(3px) saturate(120%)}
.dm-editor-sheet{width:min(780px,100%);height:min(760px,90vh);display:flex;flex-direction:column;border-radius:18px;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;box-shadow:0 28px 72px rgba(16,24,40,.32), 0 1px 3px rgba(16,24,40,.16);overflow:hidden}
.dm-editor-sheet *{box-sizing:border-box}
.dm-ed-head{display:flex;align-items:center;gap:10px;padding:20px 22px 8px}
.dm-ed-title{flex:1;min-width:0;border:0;background:transparent;outline:none;font:inherit;font-size:20px;font-weight:650;letter-spacing:-.015em;color:var(--dsw-alias-label-primary);padding:2px 0}
.dm-ed-tools{display:flex;align-items:center;gap:1px;flex-wrap:wrap;padding:4px 16px 8px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.dm-ed-tool{width:30px;height:30px;padding:0;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;font:inherit;font-size:12.5px;line-height:1}
.dm-ed-tool:hover{background:color-mix(in srgb, var(--dsw-alias-label-secondary) 12%, transparent);color:var(--dsw-alias-label-primary)}
.dm-ed-tool:active{transform:scale(.94)}
.dm-ed-sep{width:1px;height:16px;margin:0 5px;background:var(--dsw-alias-border-l1)}
.dm-ed-body{flex:1;min-height:0;overflow:auto;padding:18px 24px}
.dm-ed-text{width:100%;height:100%;min-height:320px;border:0;background:transparent;outline:none;resize:none;font:inherit;font-size:14px;line-height:1.8;color:var(--dsw-alias-label-primary)}
.dm-ed-foot{display:flex;align-items:center;gap:12px;padding:12px 20px;border-top:1px solid var(--dsw-alias-border-l1)}
.dm-ed-foot-note{font-size:11.5px;color:var(--dsw-alias-label-secondary)}
.dm-ed-spacer{flex:1}
.dm-switch{position:relative;width:34px;height:20px;flex:none;border:0;border-radius:99px;padding:0;cursor:pointer;background:color-mix(in srgb, var(--dsw-alias-label-secondary) 30%, transparent);transition:background .16s ease}
.dm-switch[data-on="true"]{background:var(--dsw-alias-brand-primary)}
.dm-knob{position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:99px;background:#fff;box-shadow:0 1px 2px rgba(16,24,40,.25);transition:transform .16s ease}
.dm-switch[data-on="true"] .dm-knob{transform:translateX(14px)}
.dm-entry{display:inline-flex;align-items:center;justify-content:center;color:inherit;cursor:pointer}
`

    /* ---------------- styles ---------------- */

    const STYLE_ID = 'dsh-docs-manager-styles'
    function installStyles(ctx) {
      if (typeof document === 'undefined') return
      let el = document.getElementById(STYLE_ID)
      if (!el) {
        el = document.createElement('style')
        el.id = STYLE_ID
        el.textContent = CSS
        document.head.appendChild(el)
      }
      ctx.effect(() => () => {
        const live = document.getElementById(STYLE_ID)
        if (live) live.remove()
      }, 'dsh-docs-manager: styles')
    }
    function StyleTag() {
      return null
    }

    /* ---------------- store ---------------- */

    // 这三个键在建 store 时就会被读取，必须先于 store 声明
    const PIN_KEY = 'dsh-docs-manager:pinned'
    const SORT_KEY = 'dsh-docs-manager:sort'
    const ORDER_KEY = 'dsh-docs-manager:order'
    const TONE_KEY = 'dsh-docs-manager:tones'
    const SORT_MODES = ['name', 'updated', 'manual']

    const store = {
      state: {
        root: '',
        groups: [],
        loading: true,
        error: '',
        search: '',
        openPath: '',
        rev: 0,
        pinned: loadPinned(),
        sort: loadSort(),
        order: loadOrder(),
        tones: loadTones(),
        confirmDelete: '',
        editing: '',
        draft: null,
        settings: null,
        quickAdd: null,
        notice: '',
      },
      listeners: new Set(),
      subscribe(listener) {
        store.listeners.add(listener)
        return () => {
          store.listeners.delete(listener)
        }
      },
      getSnapshot() {
        return store.state
      },
      patch(next) {
        store.state = Object.assign({}, store.state, next)
        for (const listener of Array.from(store.listeners)) {
          try {
            listener()
          } catch (error) {
            console.error('[dsh-docs-manager] 状态订阅者异常', error)
          }
        }
      },
    }

    function loadPinned() {
      try {
        const parsed = JSON.parse(window.localStorage.getItem(PIN_KEY) || '[]')
        return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : []
      } catch {
        return []
      }
    }

    function togglePin(path) {
      const current = store.getSnapshot().pinned || []
      const next = current.includes(path) ? current.filter((item) => item !== path) : current.concat([path])
      store.patch({ pinned: next })
      try {
        window.localStorage.setItem(PIN_KEY, JSON.stringify(next))
      } catch {
        /* 置顶偏好写不进 localStorage 时忽略 */
      }
    }

    function loadSort() {
      try {
        const stored = window.localStorage.getItem(SORT_KEY) || ''
        return SORT_MODES.indexOf(stored) >= 0 ? stored : 'name'
      } catch {
        return 'name'
      }
    }

    function saveSort(mode) {
      try {
        window.localStorage.setItem(SORT_KEY, mode)
      } catch {
        /* 排序偏好写不进 localStorage 时忽略 */
      }
    }

    function loadOrder() {
      try {
        const parsed = JSON.parse(window.localStorage.getItem(ORDER_KEY) || '{}')
        if (parsed === null || typeof parsed !== 'object') return {}
        const next = {}
        for (const dir of Object.keys(parsed)) {
          const list = parsed[dir]
          if (Array.isArray(list)) next[dir] = list.filter((item) => typeof item === 'string')
        }
        return next
      } catch {
        return {}
      }
    }

    function saveOrder(order) {
      try {
        window.localStorage.setItem(ORDER_KEY, JSON.stringify(order))
      } catch {
        /* 手动顺序写不进 localStorage 时忽略 */
      }
    }

    function loadTones() {
      try {
        const parsed = JSON.parse(window.localStorage.getItem(TONE_KEY) || '{}')
        if (parsed === null || typeof parsed !== 'object') return {}
        const next = {}
        for (const path of Object.keys(parsed)) {
          const tone = parsed[path]
          if (typeof tone === 'string' && tone !== '') next[path] = tone
        }
        return next
      } catch {
        return {}
      }
    }

    // 手动选的卡片颜色按文档路径记住；没选过的用路径哈希算出的固定颜色
    function setTone(path, tone) {
      const snapshot = store.getSnapshot()
      const tones = Object.assign({}, snapshot.tones)
      const current = tones[path] || ''
      if (current === tone) {
        delete tones[path]
      } else {
        tones[path] = tone
      }
      try {
        window.localStorage.setItem(TONE_KEY, JSON.stringify(tones))
      } catch {
        /* 卡片颜色写不进 localStorage 时忽略 */
      }
      store.patch({ tones })
    }

    function compareFiles(mode) {
      if (mode === 'updated') {
        return (a, b) => (b.mtime || 0) - (a.mtime || 0)
      }
      return (a, b) => {
        const left = String(a.title || '').trim() || stripExtension(a.name)
        const right = String(b.title || '').trim() || stripExtension(b.name)
        return left.localeCompare(right, 'zh-Hans-CN')
      }
    }

    function sortGroupFiles(files, mode, dir, order) {
      const sorted = (files || []).slice().sort(compareFiles(mode))
      if (mode !== 'manual') return sorted
      const list = (order || {})[dir] || []
      const rank = new Map(list.map((path, index) => [path, index]))
      const known = sorted.filter((file) => rank.has(file.path)).sort((a, b) => rank.get(a.path) - rank.get(b.path))
      const unknown = sorted.filter((file) => !rank.has(file.path))
      return known.concat(unknown)
    }

    function reorderFiles(dir, fromPath, toPath) {
      if (fromPath === '' || fromPath === toPath) return
      const snapshot = store.getSnapshot()
      const group = (snapshot.groups || []).find((item) => item.dir === dir)
      if (!group) return
      const paths = sortGroupFiles(group.files, 'manual', dir, snapshot.order).map((file) => file.path)
      const from = paths.indexOf(fromPath)
      const to = paths.indexOf(toPath)
      if (from < 0 || to < 0) return
      const next = paths.slice()
      next.splice(from, 1)
      next.splice(to, 0, fromPath)
      const order = Object.assign({}, snapshot.order, { [dir]: next })
      saveOrder(order)
      saveSort('manual')
      store.patch({ order, sort: 'manual' })
    }

    function useStore() {
      const [snapshot, setSnapshot] = React.useState(store.getSnapshot())
      React.useEffect(() => store.subscribe(() => setSnapshot(store.getSnapshot())), [])
      return snapshot
    }

    let noticeTimer = null
    function notify(text) {
      store.patch({ notice: text })
      if (noticeTimer) clearTimeout(noticeTimer)
      noticeTimer = setTimeout(() => {
        noticeTimer = null
        store.patch({ notice: '' })
      }, 2200)
    }

    async function api(path, body) {
      const options =
        body === undefined
          ? {}
          : { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }
      let response
      try {
        response = await fetch(API + path, options)
      } catch (error) {
        throw new Error('无法连接文档服务：' + message(error))
      }
      let data = null
      try {
        data = await response.json()
      } catch {
        data = null
      }
      if (!response.ok) throw new Error((data && data.error) || '请求失败：HTTP ' + response.status)
      if (data && data.ok === false) throw new Error(data.error || '请求失败')
      return data || {}
    }

    let refreshSeq = 0
    async function openRootFolder() {
      try {
        const data = await api('/open-root', {})
        if (data && data.ok === false) notify(message(data.error))
      } catch (error) {
        notify(message(error))
      }
    }

    async function refresh() {
      const seq = ++refreshSeq
      store.patch({ loading: true, error: '' })
      try {
        const data = await api('/state')
        if (seq !== refreshSeq) return
        store.patch({
          root: typeof data.root === 'string' ? data.root : '',
          groups: Array.isArray(data.groups) ? data.groups : [],
          loading: false,
          error: '',
        })
      } catch (error) {
        if (seq !== refreshSeq) return
        store.patch({ loading: false, error: message(error) })
      }
    }

    /* ---------------- icons ---------------- */

    function svg(size, paths) {
      return h(
        'svg',
        {
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: 1.7,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': 'true',
          focusable: 'false',
        },
        paths.map((d, index) => h('path', { key: index, d })),
      )
    }

    const IconDoc = (props) => svg(props?.size || 16, ['M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5z', 'M13.5 3v5.5H19', 'M8.5 12.5h7', 'M8.5 16h4.5'])
    const IconPlus = (props) => svg(props?.size || 16, ['M12 5v14', 'M5 12h14'])
    const IconRefresh = (props) => svg(props?.size || 16, ['M20 11a8 8 0 1 0-2.3 5.7', 'M20 5v6h-6'])
    const IconGear = (props) => svg(props?.size || 16, ['M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z', 'M19.4 13.4a7.6 7.6 0 0 0 0-2.8l1.7-1.2-1.8-3.1-2 .8a7.6 7.6 0 0 0-2.4-1.4L14.5 3h-3.6l-.4 2.3a7.6 7.6 0 0 0-2.4 1.4l-2-.8-1.8 3.1 1.7 1.2a7.6 7.6 0 0 0 0 2.8l-1.7 1.2 1.8 3.1 2-.8a7.6 7.6 0 0 0 2.4 1.4l.4 2.3h3.6l.4-2.3a7.6 7.6 0 0 0 2.4-1.4l2 .8 1.8-3.1z'])
    const IconStar = (props) => {
      const size = props?.size || 16
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: props?.filled ? 'currentColor' : 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true', focusable: 'false' },
        h('path', { d: 'M12 4.6l2.3 4.7 5.2.75-3.75 3.65.9 5.15L12 16.3l-4.65 2.55.9-5.15L4.5 10.05l5.2-.75z' }),
      )
    }
    const IconBack = (props) => svg(props?.size || 16, ['M15 5l-7 7 7 7'])
    const IconTrash = (props) => svg(props?.size || 16, ['M4 7h16', 'M9 7V5h6v2', 'M6 7l1 13h10l1-13'])
    const IconPen = (props) => svg(props?.size || 16, ['M4 20h4l10-10-4-4L4 16z', 'M14 4l4 4'])
    const IconX = (props) => svg(props?.size || 16, ['M6 6l12 12', 'M18 6L6 18'])
    const IconSearch = (props) => svg(props?.size || 16, ['M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z', 'M16.5 16.5L21 21'])
    const IconFolder = (props) => svg(props?.size || 16, ['M3 7.5A2.5 2.5 0 0 1 5.5 5h3.2l2 2.2h7.8A2.5 2.5 0 0 1 21 9.7v6.8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z'])
    const IconQuote = (props) => svg(props?.size || 16, ['M7 7h4v4c0 3-1.4 4.6-4 5', 'M13.5 7h4v4c0 3-1.4 4.6-4 5'])
    const IconUl = (props) => svg(props?.size || 16, ['M9 7h11', 'M9 12h11', 'M9 17h11', 'M4.5 7h.01', 'M4.5 12h.01', 'M4.5 17h.01'])
    const IconOl = (props) => svg(props?.size || 16, ['M9 7h11', 'M9 12h11', 'M9 17h11', 'M4 6h1v3', 'M4 12h2l-2 2.6h2', 'M4 17h2l-2 2.6h2'])
    const IconCode = (props) => svg(props?.size || 16, ['M9 8l-4 4 4 4', 'M15 8l4 4-4 4'])
    const IconLink = (props) => svg(props?.size || 16, ['M10 13.5a4 4 0 0 0 5.6 0l2.4-2.4a4 4 0 0 0-5.6-5.6L11 6.8', 'M14 10.5a4 4 0 0 0-5.6 0L6 13a4 4 0 0 0 5.6 5.6l1.4-1.3'])
    const IconMinus = (props) => svg(props?.size || 16, ['M5 12h14'])
    const IconPalette = (props) => svg(props?.size || 16, ['M12 3.2a8.8 8.8 0 1 0 0 17.6h1.5a1.75 1.75 0 0 0 0-3.5h-.7a1.35 1.35 0 0 1 0-2.7H16a4.8 4.8 0 0 0 4.8-4.8c0-3.7-3.9-6.6-8.8-6.6z', 'M8.2 9.6h.01', 'M12 7.4h.01', 'M15.8 9.6h.01'])

    const TextTool = (props) => h('span', { style: { fontWeight: props.weight || 600, fontStyle: props.italic ? 'italic' : 'normal', fontFamily: props.serif ? 'Georgia, "Times New Roman", serif' : 'inherit', textDecoration: props.strike ? 'line-through' : 'none', fontSize: props.size || 12.5 } }, props.children)

    function IconButton(props) {
      return h(
        'button',
        {
          type: 'button',
          className: props.className || 'dm-glyph',
          title: props.title,
          'aria-label': props.title,
          disabled: !!props.disabled,
          onClick: props.onClick,
        },
        props.icon,
      )
    }

    /* ---------------- markdown ---------------- */

    function renderInline(text, keyPrefix) {
      const source = String(text ?? '')
      const nodes = []
      const pattern = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[[^\]]+\]\([^)\s]+\))/g
      let last = 0
      let index = 0
      let match = pattern.exec(source)
      while (match) {
        if (match.index > last) nodes.push(source.slice(last, match.index))
        const token = match[0]
        if (token.startsWith('`')) {
          nodes.push(h('code', { key: keyPrefix + '-c' + index++, className: 'dm-code-inline' }, token.slice(1, -1)))
        } else if (token.startsWith('**')) {
          nodes.push(h('strong', { key: keyPrefix + '-b' + index++ }, token.slice(2, -2)))
        } else if (token.startsWith('*')) {
          nodes.push(h('em', { key: keyPrefix + '-i' + index++ }, token.slice(1, -1)))
        } else {
          const linked = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(token)
          if (linked) {
            nodes.push(
              h('a', { key: keyPrefix + '-a' + index++, href: linked[2], target: '_blank', rel: 'noreferrer noopener' }, linked[1]),
            )
          } else {
            nodes.push(token)
          }
        }
        last = match.index + token.length
        match = pattern.exec(source)
      }
      if (last < source.length) nodes.push(source.slice(last))
      return nodes
    }

    function splitRow(row) {
      return String(row)
        .trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
        .map((cell) => cell.trim())
    }

    function renderMarkdown(source) {
      const lines = String(source ?? '').replace(/\r\n?/g, '\n').split('\n')
      const out = []
      let cursor = 0
      let key = 0
      while (cursor < lines.length) {
        const line = lines[cursor]
        if (/^\s*```/.test(line)) {
          const buffer = []
          cursor += 1
          while (cursor < lines.length && !/^\s*```/.test(lines[cursor])) {
            buffer.push(lines[cursor])
            cursor += 1
          }
          cursor += 1
          out.push(h('pre', { key: 'pre' + key++, className: 'dm-pre' }, h('code', null, buffer.join('\n'))))
          continue
        }
        if (/^\s*$/.test(line)) {
          cursor += 1
          continue
        }
        const heading = /^(#{1,6})\s+(.*)$/.exec(line)
        if (heading) {
          const level = heading[1].length
          out.push(h('div', { key: 'h' + key++, className: 'dm-h dm-h' + level }, renderInline(heading[2].replace(/\s+#+\s*$/, ''), 'h' + key)))
          cursor += 1
          continue
        }
        if (/^\s*([-*_])\s*\1\s*\1[\s\-*_]*$/.test(line)) {
          out.push(h('hr', { key: 'hr' + key++, className: 'dm-hr' }))
          cursor += 1
          continue
        }
        if (/^\s*>/.test(line)) {
          const buffer = []
          while (cursor < lines.length && /^\s*>/.test(lines[cursor])) {
            buffer.push(lines[cursor].replace(/^\s*>\s?/, ''))
            cursor += 1
          }
          out.push(h('blockquote', { key: 'q' + key++, className: 'dm-quote' }, renderInline(buffer.join('\n'), 'q' + key)))
          continue
        }
        const unordered = /^\s*[-*+]\s+(.*)$/
        const ordered = /^\s*(\d+)[.)]\s+(.*)$/
        if (unordered.test(line) || ordered.test(line)) {
          const isOrdered = ordered.test(line)
          const items = []
          while (cursor < lines.length) {
            const current = lines[cursor]
            const hitUnordered = unordered.exec(current)
            const hitOrdered = ordered.exec(current)
            if (isOrdered && hitOrdered) {
              items.push(hitOrdered[2])
              cursor += 1
              continue
            }
            if (!isOrdered && hitUnordered) {
              items.push(hitUnordered[1])
              cursor += 1
              continue
            }
            break
          }
          out.push(
            h(
              isOrdered ? 'ol' : 'ul',
              { key: 'l' + key++, className: 'dm-list' },
              items.map((item, position) => h('li', { key: 'li' + position }, renderInline(item, 'li' + position))),
            ),
          )
          continue
        }
        if (/^\s*\|.*\|\s*$/.test(line) && cursor + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[cursor + 1])) {
          const head = splitRow(line)
          cursor += 2
          const rows = []
          while (cursor < lines.length && /^\s*\|.*\|\s*$/.test(lines[cursor])) {
            rows.push(splitRow(lines[cursor]))
            cursor += 1
          }
          out.push(
            h('table', { key: 't' + key++, className: 'dm-table' }, [
              h('thead', { key: 'th' }, h('tr', null, head.map((cell, position) => h('th', { key: 'h' + position }, renderInline(cell, 'th' + position))))),
              h(
                'tbody',
                { key: 'tb' },
                rows.map((row, rowIndex) =>
                  h('tr', { key: 'r' + rowIndex }, row.map((cell, cellIndex) => h('td', { key: 'c' + cellIndex }, renderInline(cell, 'td' + rowIndex + '-' + cellIndex)))),
                ),
              ),
            ]),
          )
          continue
        }
        const paragraph = [line]
        cursor += 1
        while (cursor < lines.length && !/^\s*$/.test(lines[cursor]) && !/^\s*(#{1,6}\s|>|[-*+]\s|\d+[.)]\s|```|\|)/.test(lines[cursor])) {
          paragraph.push(lines[cursor])
          cursor += 1
        }
        out.push(h('p', { key: 'p' + key++, className: 'dm-p' }, renderInline(paragraph.join('\n'), 'p' + key)))
      }
      return out
    }

    /* ---------------- helpers ---------------- */

    function formatSize(bytes) {
      const value = Number(bytes) || 0
      if (value < 1024) return value + ' B'
      if (value < 1024 * 1024) return (value / 1024).toFixed(1) + ' KB'
      return (value / (1024 * 1024)).toFixed(1) + ' MB'
    }

    function formatDate(mtime) {
      const value = Number(mtime) || 0
      if (!value) return ''
      const date = new Date(value)
      const pad = (part) => String(part).padStart(2, '0')
      const now = new Date()
      if (date.toDateString() === now.toDateString()) return pad(date.getHours()) + ':' + pad(date.getMinutes())
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
    }

    function formatClock() {
      const date = new Date()
      const pad = (part) => String(part).padStart(2, '0')
      return pad(date.getHours()) + ':' + pad(date.getMinutes())
    }

    function stripExtension(name) {
      return String(name ?? '').replace(/\.(md|markdown)$/i, '')
    }

    function extensionOf(name) {
      const match = /\.(md|markdown)$/i.exec(String(name ?? ''))
      return match ? match[0] : '.md'
    }

    function dirOf(relPath) {
      const parts = String(relPath ?? '').split('/')
      parts.pop()
      return parts.join('/')
    }

    function normalizeDir(input) {
      return String(input ?? '')
        .trim()
        .replace(/\\/g, '/')
        .replace(/^\/+/, '')
        .replace(/\/+$/, '')
    }

    function buildPath(dir, name) {
      const cleanDir = normalizeDir(dir)
      let cleanName = String(name ?? '').trim().replace(/\\/g, '/')
      if (cleanName === '') throw new Error(t('needName'))
      if (cleanName.includes('/')) throw new Error('文件名不能包含 /')
      if (!/\.(md|markdown)$/i.test(cleanName)) cleanName += '.md'
      return cleanDir ? cleanDir + '/' + cleanName : cleanName
    }

    function deriveTitle(text) {
      const firstLine = String(text ?? '')
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line !== '')[0]
      if (!firstLine) return ''
      return firstLine
        .replace(/^#{1,6}\s*/, '')
        .replace(/[`*_>[\]()]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 60)
    }

    function blocksText(blocks) {
      if (!Array.isArray(blocks)) return ''
      return blocks
        .map((block) => (block && block.kind === 'text' && typeof block.text === 'string' ? block.text : ''))
        .filter((text) => text !== '')
        .join('\n')
        .trim()
    }

    function messageText(state, messageId) {
      const legacyNodes = state && state.legacy && state.legacy.nodes
      if (Array.isArray(legacyNodes)) {
        for (const node of legacyNodes) {
          if (!node || node.kind !== 'assistant' || node.messageId !== messageId) continue
          const text = blocksText(node.blocks)
          if (text !== '') return text
        }
      }
      const values = state && state.nodes && typeof state.nodes.values === 'function' ? state.nodes.values() : null
      if (Array.isArray(values)) {
        for (const entry of values) {
          const data = entry && entry.data
          if (data == null) continue
          const finalNode = data.finalNode
          if (finalNode && finalNode.messageId !== messageId) continue
          const text = blocksText(data.blocks) || blocksText(finalNode && finalNode.blocks)
          if (text !== '') return text
        }
      }
      return ''
    }

    function countWords(text) {
      const source = String(text ?? '').replace(/\s+/g, '')
      return source.length
    }

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    /* ---------------- board ---------------- */

    function matchesSearch(file, search) {
      if (search === '') return true
      const needle = search.toLowerCase()
      return (
        String(file.path).toLowerCase().includes(needle) ||
        String(file.name).toLowerCase().includes(needle) ||
        String(file.excerpt || '').toLowerCase().includes(needle)
      )
    }

    function visibleGroups(groups, search) {
      const result = []
      for (const group of groups) {
        const files = (group.files || []).filter((file) => matchesSearch(file, search))
        if (files.length > 0) result.push({ dir: group.dir, files })
      }
      return result
    }

    const derivedCache = new Map()
    const pendingMeta = new Set()

    function excerptOf(text) {
      let value = String(text || '')
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/^\s{0,3}#{1,6}\s+/gm, '')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/[>*_`~|#]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
      if (value.length > 200) value = value.slice(0, 200)
      return value
    }

    // 文档自带 H1 时用 H1 当标题，否则退回文件名
    function titleOf(source) {
      const match = /^[ \t]{0,3}#{1,6}[ \t]+(.+?)[ \t]*#*[ \t]*$/m.exec(String(source || ''))
      return match ? match[1].trim() : ''
    }

    function replaceFirstHeading(source, nextTitle) {
      return String(source || '').replace(/^([ \t]{0,3}#{1,6}[ \t]+)(.+?)[ \t]*#*[ \t]*$/m, (all, marks) => marks + nextTitle)
    }

    function cacheDerived(path, content) {
      derivedCache.set(path, { excerpt: excerptOf(content), title: titleOf(content) })
      pendingMeta.delete(path)
    }

    function withDerived(groups) {
      return (groups || []).map((group) => ({
        dir: group.dir,
        files: (group.files || []).map((file) => {
          const meta = derivedCache.get(file.path)
          if (!meta) return file
          return {
            ...file,
            excerpt: file.excerpt === undefined ? meta.excerpt : file.excerpt,
            title: file.title || meta.title,
          }
        }),
      }))
    }

    function escapeHtml(text) {
      return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    }

    function inlineToHtml(text) {
      let out = escapeHtml(text)
      out = out.replace(/`([^`]+)`/g, '<code>$1</code>')
      out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      out = out.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      out = out.replace(/~~([^~]+)~~/g, '<s>$1</s>')
      out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
      return out
    }

    // Markdown -> HTML，供 contenteditable 富文本编辑使用（覆盖插件渲染器支持的子集）
    function mdToHtml(source) {
      const lines = String(source || '').replace(/\r\n?/g, '\n').split('\n')
      const out = []
      let i = 0
      while (i < lines.length) {
        const line = lines[i]
        if (/^\s*```/.test(line)) {
          const body = []
          i += 1
          while (i < lines.length && !/^\s*```/.test(lines[i])) {
            body.push(lines[i])
            i += 1
          }
          i += 1
          out.push('<pre><code>' + escapeHtml(body.join('\n')) + '</code></pre>')
          continue
        }
        if (/^\s*$/.test(line)) {
          i += 1
          continue
        }
        const heading = /^(#{1,6})\s+(.*)$/.exec(line)
        if (heading) {
          const level = heading[1].length
          out.push('<h' + level + '>' + inlineToHtml(heading[2].replace(/\s+#+\s*$/, '')) + '</h' + level + '>')
          i += 1
          continue
        }
        if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) {
          out.push('<hr>')
          i += 1
          continue
        }
        if (/^\s*\|.*\|\s*$/.test(line) && i + 1 < lines.length && /^\s*\|?\s*:?-{2,}/.test(lines[i + 1])) {
          const split = (row) => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim())
          const head = split(line)
          i += 2
          const rows = []
          while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
            rows.push(split(lines[i]))
            i += 1
          }
          out.push(
            '<table><thead><tr>' +
              head.map((cell) => '<th>' + inlineToHtml(cell) + '</th>').join('') +
              '</tr></thead><tbody>' +
              rows.map((row) => '<tr>' + row.map((cell) => '<td>' + inlineToHtml(cell) + '</td>').join('') + '</tr>').join('') +
              '</tbody></table>',
          )
          continue
        }
        if (/^\s*>\s?/.test(line)) {
          const body = []
          while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
            body.push(lines[i].replace(/^\s*>\s?/, ''))
            i += 1
          }
          out.push('<blockquote><p>' + body.map((item) => inlineToHtml(item)).join('<br>') + '</p></blockquote>')
          continue
        }
        if (/^\s*[-*+]\s+/.test(line)) {
          const items = []
          while (i < lines.length && /^\s*[-*+]\s+/.test(lines[i])) {
            items.push(lines[i].replace(/^\s*[-*+]\s+/, ''))
            i += 1
          }
          out.push('<ul>' + items.map((item) => '<li>' + inlineToHtml(item) + '</li>').join('') + '</ul>')
          continue
        }
        if (/^\s*\d+[.)]\s+/.test(line)) {
          const items = []
          while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) {
            items.push(lines[i].replace(/^\s*\d+[.)]\s+/, ''))
            i += 1
          }
          out.push('<ol>' + items.map((item) => '<li>' + inlineToHtml(item) + '</li>').join('') + '</ol>')
          continue
        }
        const para = []
        while (
          i < lines.length &&
          !/^\s*$/.test(lines[i]) &&
          !/^#{1,6}\s+/.test(lines[i]) &&
          !/^\s*[-*+]\s+/.test(lines[i]) &&
          !/^\s*\d+[.)]\s+/.test(lines[i]) &&
          !/^\s*>/.test(lines[i]) &&
          !/^\s*```/.test(lines[i]) &&
          !/^\s*\|.*\|\s*$/.test(lines[i])
        ) {
          para.push(lines[i])
          i += 1
        }
        if (para.length === 0) {
          i += 1
          continue
        }
        out.push('<p>' + para.map((item) => inlineToHtml(item)).join('<br>') + '</p>')
      }
      return out.join('')
    }

    // 单个节点转成行内 Markdown（包含节点自身的加粗/斜体等标记）
    function mdInline(node) {
      if (!node) return ''
      if (node.nodeType === 3) return String(node.nodeValue || '')
      if (node.nodeType !== 1) return ''
      const tag = String(node.tagName || '').toLowerCase()
      if (tag === 'br') return '  \n'
      const inner = Array.from(node.childNodes).map(mdInline).join('')
      if (inner.trim() === '') return ''
      if (tag === 'strong' || tag === 'b') return '**' + inner + '**'
      if (tag === 'em' || tag === 'i') return '*' + inner + '*'
      if (tag === 's' || tag === 'del' || tag === 'strike') return '~~' + inner + '~~'
      if (tag === 'code') return '`' + String(node.textContent || '') + '`'
      if (tag === 'a') return '[' + inner + '](' + (node.getAttribute('href') || '') + ')'
      return inner
    }

    function inlineFromNode(node) {
      if (!node) return ''
      return Array.from(node.childNodes).map(mdInline).join('')
    }

    // HTML -> Markdown，保存富文本编辑结果
    function htmlToMd(root) {
      if (!root) return ''
      const parts = []
      let lastKind = ''
      const push = (text, kind) => {
        if (text === '') return
        if (parts.length === 0) parts.push(text)
        else parts.push(lastKind === 'li' && kind === 'li' ? '\n' + text : '\n\n' + text)
        lastKind = kind
      }
      root.childNodes.forEach((node) => {
        if (node.nodeType === 3) {
          const text = String(node.nodeValue || '').replace(/\s+/g, ' ').trim()
          if (text !== '') push(text, 'p')
          return
        }
        if (node.nodeType !== 1) return
        const tag = node.tagName.toLowerCase()
        if (/^h[1-6]$/.test(tag)) {
          push('#'.repeat(Number(tag[1])) + ' ' + inlineFromNode(node).trim(), 'h')
        } else if (tag === 'p' || tag === 'div') {
          push(inlineFromNode(node).trim(), 'p')
        } else if (tag === 'ul' || tag === 'ol') {
          Array.from(node.children).forEach((item, index) => {
            if (item.tagName.toLowerCase() !== 'li') return
            const text = inlineFromNode(item).trim()
            push((tag === 'ol' ? String(index + 1) + '. ' : '- ') + text, 'li')
          })
        } else if (tag === 'blockquote') {
          const text = inlineFromNode(node).trim()
          push(text.split('\n').map((line) => '> ' + line).join('\n'), 'quote')
        } else if (tag === 'pre') {
          push('```\n' + String(node.textContent || '').replace(/\n$/, '') + '\n```', 'code')
        } else if (tag === 'hr') {
          push('---', 'hr')
        } else if (tag === 'table') {
          const rows = Array.from(node.querySelectorAll('tr')).map((row) =>
            Array.from(row.children).map((cell) => inlineFromNode(cell).trim()),
          )
          if (rows.length > 0) {
            push('| ' + rows[0].join(' | ') + ' |', 'table')
            push('| ' + rows[0].map(() => '---').join(' | ') + ' |', 'table')
            rows.slice(1).forEach((row) => push('| ' + row.join(' | ') + ' |', 'table'))
          }
        } else {
          push(mdInline(node).trim(), 'p')
        }
      })
      return parts.join('') + (parts.length > 0 ? '\n' : '')
    }

    const CARD_TONES = ['yellow', 'blue', 'green', 'pink', 'purple', 'gray']

    function toneOf(path) {
      let hash = 2166136261
      const value = String(path || '')
      for (let i = 0; i < value.length; i += 1) {
        hash ^= value.charCodeAt(i)
        hash = Math.imul(hash, 16777619) >>> 0
      }
      return CARD_TONES[hash % CARD_TONES.length]
    }

    function FileCard(props) {
      const file = props.file
      const excerpt = String(file.excerpt || '').trim()
      const pinned = props.pinned === true
      const tone = props.tone || toneOf(file.path)
      const [pickerOpen, setPickerOpen] = React.useState(false)
      const label = String(file.title || '').trim() || stripExtension(file.name)
      const open = () => store.patch({ editing: file.path })
      const action = (fn) => (event) => {
        event.preventDefault()
        event.stopPropagation()
        fn()
      }
      const act = (key, icon, title, on, onState) =>
        h(
          'button',
          { key, type: 'button', className: 'dm-card-act', title, 'aria-label': title, 'data-on': onState ? 'true' : 'false', onClick: action(on) },
          icon,
        )
      return h(
        'div',
        {
          className:
            'dm-card' +
            (props.draggable === true ? ' dm-card-draggable' : '') +
            (props.dragging === true ? ' dm-card-dragging' : '') +
            (props.over === true ? ' dm-card-over' : ''),
          role: 'button',
          tabIndex: 0,
          title: file.path,
          draggable: props.draggable === true,
          'data-tone': tone,
          onClick: open,
          onDragStart: (event) => {
            if (props.draggable !== true) return
            try {
              event.dataTransfer.effectAllowed = 'move'
              event.dataTransfer.setData('text/plain', file.path)
            } catch {
              /* 某些浏览器在 dragstart 里不允许写 dataTransfer */
            }
            if (props.onDragStart) props.onDragStart(file.path)
          },
          onDragOver: (event) => {
            if (props.draggable !== true) return
            event.preventDefault()
            event.stopPropagation()
            try {
              event.dataTransfer.dropEffect = 'move'
            } catch {
              /* ignore */
            }
            if (props.onDragOver) props.onDragOver(file.path)
          },
          onDragLeave: () => {
            if (props.onDragLeave) props.onDragLeave(file.path)
          },
          onDrop: (event) => {
            if (props.draggable !== true) return
            event.preventDefault()
            event.stopPropagation()
            if (props.onDrop) props.onDrop(file.path)
          },
          onDragEnd: () => {
            if (props.onDragEnd) props.onDragEnd()
          },
          onKeyDown: (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              open()
            }
          },
        },
        [
          h('div', { key: 'n', className: 'dm-card-title' }, label),
          h('div', { key: 'p', className: 'dm-card-text' + (excerpt === '' ? ' dm-card-text-empty' : '') }, excerpt === '' ? t('noPreview') : excerpt),
          pickerOpen
            ? h(
                'div',
                { key: 't', className: 'dm-tone-pop', onClick: (event) => event.stopPropagation() },
                CARD_TONES.map((item) =>
                  h('button', {
                    key: item,
                    type: 'button',
                    className: 'dm-tone-dot',
                    title: t('tone' + item.charAt(0).toUpperCase() + item.slice(1)),
                    'aria-label': t('tone' + item.charAt(0).toUpperCase() + item.slice(1)),
                    'data-tone': item,
                    'data-on': tone === item ? 'true' : 'false',
                    onClick: action(() => {
                      setTone(file.path, item)
                      setPickerOpen(false)
                    }),
                  }),
                ),
              )
            : null,
          h('div', { key: 'f', className: 'dm-card-foot' }, [
            h('div', { key: 'a', className: 'dm-card-actions' }, [
              act('pin', h(IconStar, { size: 13, filled: pinned }), pinned ? t('unpin') : t('pin'), () => togglePin(file.path), pinned),
              act('tone', h(IconPalette, { size: 13 }), t('cardColor'), () => setPickerOpen((open) => !open), pickerOpen),
              act('edit', h(IconPen, { size: 13 }), t('edit'), open),
              act('del', h(IconTrash, { size: 13 }), t('del'), () => store.patch({ confirmDelete: file.path })),
            ]),
          ]),
        ],
      )
    }

    function GroupRow(props) {
      const group = props.group
      const pinnedSet = props.pinnedSet || new Set()
      const sortable = props.sortable === true
      const [dragPath, setDragPath] = React.useState('')
      const [overPath, setOverPath] = React.useState('')
      const dragRef = React.useRef('')
      const drop = (target) => {
        reorderFiles(group.dir, dragRef.current, target)
        dragRef.current = ''
        setDragPath('')
        setOverPath('')
      }
      const label = group.dir === '' ? '/' : group.dir
      const head = [
        h('div', { key: 'd', className: 'dm-dir', title: label }, [
          h(IconFolder, { key: 'i', size: 13 }),
          h('span', { key: 't' }, label),
        ]),
        h('span', { key: 'c', className: 'dm-count' }, String(group.files.length) + (t('files') || '')),
        h(
          'button',
          {
            key: 'a',
            type: 'button',
            className: 'dm-groupadd',
            title: t('newToDir').replace('%s', label),
            'aria-label': t('newToDir').replace('%s', label),
            onClick: () => store.patch({ draft: { dir: group.dir, name: '', content: '' } }),
          },
          h(IconPlus, { size: 14 }),
        ),
      ]
      return h('div', { className: 'dm-group' }, [
        h('div', { key: 'h', className: 'dm-grouphead' }, head),
        h('div', { key: 's', className: 'dm-strip' }, [
          ...group.files.map((file) =>
            h(FileCard, {
              key: file.path,
              file,
              tone: (props.tones || {})[file.path] || toneOf(file.path),
              pinned: pinnedSet.has(file.path),
              draggable: sortable,
              dragging: sortable && dragPath === file.path,
              over: sortable && overPath === file.path && dragPath !== '' && dragPath !== file.path,
              onDragStart: (path) => {
                dragRef.current = path
                setDragPath(path)
                setOverPath(path)
              },
              onDragOver: (path) => setOverPath(path),
              onDragLeave: (path) => setOverPath((current) => (current === path ? dragPath : current)),
              onDrop: (path) => drop(path),
              onDragEnd: () => {
                dragRef.current = ''
                setDragPath('')
                setOverPath('')
              },
            }),
          ),
          h(
            'button',
            {
              key: '__add',
              type: 'button',
              className: 'dm-card dm-card-add',
              title: t('new'),
              'aria-label': t('new'),
              onClick: () => store.patch({ draft: { dir: group.dir === '' ? '' : group.dir, name: '', content: '' } }),
            },
            [
              h('span', { key: 'i', className: 'dm-card-add-icon' }, h(IconPlus, { size: 18 })),
              h('span', { key: 't', className: 'dm-card-add-text' }, t('new')),
            ],
          ),
        ]),
      ])
    }

    function Board() {
      const snapshot = useStore()
      const filtered = visibleGroups(snapshot.groups, snapshot.search)
      const pinnedSet = new Set(snapshot.pinned || [])
      const groups = filtered.map((group) => {
        const sorted = sortGroupFiles(group.files, snapshot.sort, group.dir, snapshot.order)
        const ahead = sorted.filter((file) => pinnedSet.has(file.path))
        const rest = sorted.filter((file) => !pinnedSet.has(file.path))
        return Object.assign({}, group, { files: ahead.concat(rest) })
      })
      const total = groups.reduce((sum, group) => sum + group.files.length, 0)

      // Host 未提供摘要时（旧版 Host 或首次加载），按需读取正文补齐卡片预览
      React.useEffect(() => {
        const missing = []
        for (const group of snapshot.groups || []) {
          for (const file of group.files || []) {
            if ((file.excerpt === undefined || !file.title) && !pendingMeta.has(file.path)) missing.push(file.path)
          }
        }
        if (missing.length === 0) return undefined
        let alive = true
        const batch = missing.slice(0, 40)
        for (const p of batch) pendingMeta.add(p)
        Promise.all(
          batch.map((p) =>
            api('/read', { path: p })
              .then((data) => cacheDerived(p, data && data.content))
              .catch(() => cacheDerived(p, '')),
          ),
        ).then(() => {
          if (alive) store.patch({ groups: withDerived(store.getSnapshot().groups) })
        })
        return () => {
          alive = false
        }
      }, [snapshot.groups])

      let body = null
      if (snapshot.error !== '') {
        body = h('div', { className: 'dm-error' }, snapshot.error)
      } else if (snapshot.loading && snapshot.groups.length === 0) {
        body = h('div', { className: 'dm-empty' }, t('loading'))
      } else if (total === 0) {
        body =
          snapshot.search !== ''
            ? h('div', { className: 'dm-empty' }, [h('b', { key: 'b' }, t('emptySearch'))])
            : h('div', { className: 'dm-empty' }, [h('b', { key: 'b' }, t('empty')), h('small', { key: 's' }, t('emptyHint'))])
      } else {
        body = groups.map((group) =>
          h(GroupRow, {
            key: group.dir === '' ? '\u0000root' : group.dir,
            group,
            pinnedSet,
            tones: snapshot.tones,
            sortable: snapshot.sort === 'manual',
          }),
        )
      }
      return h('div', { className: 'dm-app' }, [
        h('div', { key: 'head', className: 'dm-head' }, [
          IconButton({ key: 'back', icon: h(IconBack, { size: 16 }), title: t('backChat'), onClick: () => backToConversation() }),
          h('div', { key: 't', className: 'dm-title' }, t('panel')),
        ]),
        h('div', { key: 'tools', className: 'dm-toolbar' }, [
          h('label', { key: 's', className: 'dm-search' }, [
            h(IconSearch, { key: 'i', size: 13 }),
            h('input', {
              key: 'in',
              value: snapshot.search,
              placeholder: t('search'),
              onChange: (event) => store.patch({ search: event.target.value }),
            }),
          ]),
          h(
            'label',
            { key: 'sort', className: 'dm-sort', title: t('sortTitle') },
            h(
              'select',
              {
                key: 'sel',
                value: snapshot.sort,
                'aria-label': t('sortTitle'),
                onChange: (event) => {
                  const next = event.target.value
                  saveSort(next)
                  store.patch({ sort: next })
                },
              },
              [
                h('option', { key: 'name', value: 'name' }, t('sortName')),
                h('option', { key: 'updated', value: 'updated' }, t('sortUpdated')),
                h('option', { key: 'manual', value: 'manual' }, t('sortManual')),
              ],
            ),
          ),
          h('div', { key: 'x', className: 'dm-actions' }, [
            IconButton({ key: 'new', icon: h(IconPlus, { size: 16 }), title: t('new'), onClick: () => store.patch({ draft: { dir: '', name: '', content: '' } }) }),
            IconButton({ key: 'refresh', icon: h(IconRefresh, { size: 15 }), title: t('refresh'), onClick: () => refresh() }),
            IconButton({ key: 'folder', icon: h(IconFolder, { size: 15 }), title: t('openRoot'), onClick: () => openRootFolder() }),
            IconButton({ key: 'root', icon: h(IconGear, { size: 15 }), title: t('rootTitle'), onClick: () => store.patch({ settings: { root: snapshot.root } }) }),
          ]),
        ]),
        h('div', { key: 'body', className: 'dm-body' }, body),
      ])
    }

    /* ---------------- sheet ---------------- */

    function Sheet(props) {
      return h(
        'div',
        {
          className: 'dm-mask',
          onMouseDown: (event) => {
            if (event.target === event.currentTarget) props.onClose()
          },
        },
        h('div', { className: 'dm-sheet' + (props.wide ? ' dm-sheet-wide' : '') }, [
          h('div', { key: 'h', className: 'dm-sheet-head' }, [
            h('span', { key: 't' }, props.title),
            h(
              'button',
              { key: 'x', type: 'button', className: 'dm-sheet-close', title: t('close'), 'aria-label': t('close'), onClick: props.onClose },
              h(IconX, { size: 13 }),
            ),
          ]),
          h('div', { key: 'b', className: 'dm-sheet-body' }, props.children),
          h('div', { key: 'f', className: 'dm-sheet-foot' }, props.footer),
        ]),
      )
    }

    function Field(props) {
      return h('div', { className: 'dm-field' }, [
        h('label', { key: 'l' }, props.label),
        props.children,
        props.hint ? h('div', { key: 'h', className: 'dm-hint' }, props.hint) : null,
      ])
    }

    function DirPicker(props) {
      const dirs = props.dirs || []
      const known = props.value === '' || dirs.indexOf(props.value) >= 0
      const [mode, setMode] = React.useState(known ? props.value : '__new__')
      const [custom, setCustom] = React.useState(known ? '' : props.value)
      const options = [h('option', { key: 'root', value: '' }, t('dirRoot'))].concat(
        dirs.map((dir) => h('option', { key: dir, value: dir }, dir)),
        [h('option', { key: '__c', value: '__new__' }, t('dirCustom'))],
      )
      const pick = (event) => {
        const next = event.target.value
        setMode(next)
        if (next === '__new__') props.onChange(custom)
        else props.onChange(next)
      }
      const type = (event) => {
        setCustom(event.target.value)
        props.onChange(event.target.value)
      }
      return h(React.Fragment, null, [
        h('select', { key: 's', className: 'dm-input', value: mode, onChange: pick }, options),
        mode === '__new__'
          ? h('input', {
              key: 'i',
              className: 'dm-input dm-input-sub',
              value: custom,
              placeholder: t('dirNewHint'),
              onChange: type,
            })
          : null,
      ])
    }

    function DraftModal(props) {
      const draft = props.draft
      const snapshot = useStore()
      const [form, setForm] = React.useState(() => ({ dir: draft.dir || '', name: draft.name || '' }))
      const richRef = React.useRef(null)
      const [busy, setBusy] = React.useState(false)
      const [error, setError] = React.useState('')
      const close = () => store.patch({ draft: null })
      const submit = async () => {
        if (busy) return
        setBusy(true)
        setError('')
        try {
          const path = buildPath(form.dir, form.name)
          const existing = store.getSnapshot().groups.some((group) => (group.files || []).some((file) => file.path === path))
          if (existing) throw new Error(t('nameOccupied'))
          const content = richRef.current ? htmlToMd(richRef.current) : ''
          await api('/write', { path, content })
          store.patch({ draft: null, openPath: '', search: '', editing: '' })
          await refresh()
          notify(t('saved'))
        } catch (failure) {
          setError(message(failure))
        } finally {
          setBusy(false)
        }
      }
      return h(Sheet, {
        title: t('newTitle'),
        wide: true,
        onClose: close,
        children: [
          h(Field, { key: 'd', label: t('dir'), hint: t('dirHint').replace('%s', snapshot.root || '') }, h(DirPicker, {
            value: form.dir,
            dirs: (snapshot.groups || []).map((group) => group.dir).filter((dir) => dir !== ''),
            onChange: (dir) => setForm({ ...form, dir }),
          })),
          h(Field, { key: 'n', label: t('name') }, h('input', {
            className: 'dm-input',
            value: form.name,
            placeholder: t('nameHint'),
            onChange: (event) => setForm({ ...form, name: event.target.value }),
            onKeyDown: (event) => {
              if (event.key === 'Enter') submit()
            },
          })),
          h(Field, { key: 'c', label: t('content') }, h(RichField, {
            innerRef: richRef,
            initial: draft.content || '',
            placeholder: t('contentHint'),
          })),
          error !== '' ? h('div', { key: 'e', className: 'dm-modal-error' }, error) : null,
        ],
        footer: [
          h('button', { key: 'c', type: 'button', className: 'dm-btn', onClick: close }, t('cancel')),
          h('button', { key: 's', type: 'button', className: 'dm-btn dm-btn-primary', disabled: busy, onClick: submit }, t('save')),
        ],
      })
    }

    function SettingsModal(props) {
      const [root, setRoot] = React.useState(() => props.settings.root || '')
      const [busy, setBusy] = React.useState(false)
      const [error, setError] = React.useState('')
      const close = () => store.patch({ settings: null })
      const submit = async () => {
        if (busy) return
        setBusy(true)
        setError('')
        try {
          await api('/config', { root })
          store.patch({ settings: null })
          await refresh()
          notify(t('rootUpdated'))
        } catch (failure) {
          setError(message(failure))
        } finally {
          setBusy(false)
        }
      }
      return h(Sheet, {
        title: t('rootTitle'),
        onClose: close,
        children: [
          h(Field, { key: 'r', label: t('root'), hint: t('depthHint') }, h('input', {
            className: 'dm-input',
            value: root,
            placeholder: t('rootPlaceholder'),
            onChange: (event) => setRoot(event.target.value),
            onKeyDown: (event) => {
              if (event.key === 'Enter') submit()
            },
          })),
          error !== '' ? h('div', { key: 'e', className: 'dm-modal-error' }, error) : null,
        ],
        footer: [
          h('button', { key: 'c', type: 'button', className: 'dm-btn', onClick: close }, t('cancel')),
          h('button', { key: 's', type: 'button', className: 'dm-btn dm-btn-primary', disabled: busy, onClick: submit }, t('save')),
        ],
      })
    }

    /* ---------------- editor ---------------- */

    function surroundSelection(before, after) {
      return (value, start, end) => {
        const selected = value.slice(start, end)
        const next = value.slice(0, start) + before + selected + after + value.slice(end)
        return { value: next, start: start + before.length, end: start + before.length + selected.length }
      }
    }

    function prefixLines(prefix, matcher) {
      return (value, start, end) => {
        const lineStart = value.lastIndexOf('\n', Math.max(0, start - 1)) + 1
        const found = value.indexOf('\n', end)
        const lineEnd = found === -1 ? value.length : found
        const lines = value.slice(lineStart, lineEnd).split('\n')
        const allMatched = lines.every((line) => matcher.test(line))
        const nextLines = lines.map((line) => (allMatched ? line.replace(matcher, '') : prefix + line))
        const nextBlock = nextLines.join('\n')
        return {
          value: value.slice(0, lineStart) + nextBlock + value.slice(lineEnd),
          start: lineStart,
          end: lineStart + nextBlock.length,
        }
      }
    }

    function insertBlock(text) {
      return (value, start, end) => {
        const next = value.slice(0, start) + text + value.slice(end)
        return { value: next, start: start + text.length, end: start + text.length }
      }
    }

    function execIn(ref, command, value) {
      const el = ref.current
      if (!el) return
      el.focus()
      try {
        document.execCommand(command, false, value)
      } catch (failure) {
        console.error('[dsh-docs-manager] 编辑命令失败', failure)
      }
    }

    function wrapInline(ref, tag) {
      const el = ref.current
      if (!el) return
      el.focus()
      const picked = String(window.getSelection ? window.getSelection().toString() : '')
      const inner = picked === '' ? (tag === 'code' ? 'code' : 'link') : escapeHtml(picked)
      execIn(ref, 'insertHTML', tag === 'code' ? '<code>' + inner + '</code>' : '<a href="https://">' + inner + '</a>')
    }

    function richTools(run, wrap) {
      return [
        { key: 'bold', title: t('toolBold'), icon: h(TextTool, { weight: 700 }, 'B'), act: () => run('bold') },
        { key: 'italic', title: t('toolItalic'), icon: h(TextTool, { weight: 500, italic: true, serif: true, size: 13 }, 'I'), act: () => run('italic') },
        { key: 'strike', title: t('toolStrike'), icon: h(TextTool, { weight: 500, strike: true }, 'S'), act: () => run('strikeThrough') },
        { key: 'sep1', separator: true },
        { key: 'h1', title: t('toolH1'), icon: h(TextTool, { weight: 700, size: 12 }, 'H1'), act: () => run('formatBlock', 'h1') },
        { key: 'h2', title: t('toolH2'), icon: h(TextTool, { weight: 700, size: 11.5 }, 'H2'), act: () => run('formatBlock', 'h2') },
        { key: 'h3', title: t('toolH3'), icon: h(TextTool, { weight: 700, size: 11 }, 'H3'), act: () => run('formatBlock', 'h3') },
        { key: 'sep2', separator: true },
        { key: 'quote', title: t('toolQuote'), icon: h(IconQuote, { size: 14 }), act: () => run('formatBlock', 'blockquote') },
        { key: 'ul', title: t('toolUl'), icon: h(IconUl, { size: 14 }), act: () => run('insertUnorderedList') },
        { key: 'ol', title: t('toolOl'), icon: h(IconOl, { size: 14 }), act: () => run('insertOrderedList') },
        { key: 'sep3', separator: true },
        { key: 'code', title: t('toolCode'), icon: h(IconCode, { size: 14 }), act: () => wrap('code') },
        { key: 'link', title: t('toolLink'), icon: h(IconLink, { size: 14 }), act: () => wrap('link') },
        { key: 'hr', title: t('toolHr'), icon: h(IconMinus, { size: 14 }), act: () => run('insertHTML', '<hr>') },
      ]
    }

    function RichToolbar(props) {
      return h('div', { className: 'dm-ed-tools' }, props.tools.map((tool) =>
        tool.separator
          ? h('span', { key: tool.key, className: 'dm-ed-sep' })
          : h('button', {
              key: tool.key,
              type: 'button',
              className: 'dm-ed-tool',
              title: tool.title,
              'aria-label': tool.title,
              onMouseDown: (event) => event.preventDefault(),
              onClick: tool.act,
            }, tool.icon),
      ))
    }

    function RichField(props) {
      const ownRef = React.useRef(null)
      const ref = props.innerRef || ownRef
      React.useEffect(() => {
        const el = ref.current
        if (!el || el.dataset.ready === 'true') return
        el.innerHTML = mdToHtml(String(props.initial || ''))
        el.dataset.ready = 'true'
      }, [])
      const run = (command, value) => execIn(ref, command, value)
      const wrap = (tag) => wrapInline(ref, tag)
      const tools = richTools(run, wrap)
      return h('div', { className: 'dm-rich-field' }, [
        h(RichToolbar, { key: 'tools', tools }),
        h('div', {
          key: 'rich',
          ref,
          className: 'dm-md dm-ed-rich dm-rich-input',
          contentEditable: true,
          suppressContentEditableWarning: true,
          spellCheck: false,
          'data-placeholder': props.placeholder || '',
        }),
      ])
    }

    function Editor(props) {
      const path = props.path
      const dir = dirOf(path)
      const fileName = path.split('/').pop() || path
      const ext = extensionOf(fileName)
      const baseName = stripExtension(fileName)
      const [loaded, setLoaded] = React.useState(false)
      const [text, setText] = React.useState('')
      const [title, setTitle] = React.useState(baseName)
      const [auto, setAuto] = React.useState(false)
      const [source, setSource] = React.useState(false)
      const [status, setStatus] = React.useState('')
      const [busy, setBusy] = React.useState(false)
      const [error, setError] = React.useState('')
      const [rev, setRev] = React.useState(0)
      const saved = React.useRef({ text: '', title: baseName, heading: false })
      const richRef = React.useRef(null)
      const areaRef = React.useRef(null)

      React.useEffect(() => {
        let alive = true
        api('/read', { path })
          .then((data) => {
            if (!alive) return
            const content = typeof data.content === 'string' ? data.content : ''
            const heading = titleOf(content)
            const label = heading !== '' ? heading : baseName
            setText(content)
            setTitle(label)
            saved.current = { text: content, title: label, heading: heading !== '' }
            setLoaded(true)
          })
          .catch((failure) => {
            if (!alive) return
            setError(message(failure))
            setLoaded(true)
          })
        return () => {
          alive = false
        }
      }, [path])

      // 富文本区域首次挂载时用 Markdown 原文填充，之后交给浏览器编辑
      React.useEffect(() => {
        const el = richRef.current
        if (source || !el || !loaded) return
        if (el.dataset.ready === 'true') return
        el.innerHTML = mdToHtml(text)
        el.dataset.ready = 'true'
        setRev((value) => value + 1)
      }, [source, loaded])

      const close = () => store.patch({ editing: '' })

      const markdown = () => {
        if (source) {
          if (areaRef.current) return areaRef.current.value
          return text
        }
        if (richRef.current) return htmlToMd(richRef.current)
        return text
      }

      const persist = async (nextTitle, silent) => {
        if (busy) return
        setBusy(true)
        setError('')
        try {
          const body = markdown()
          const cleanTitle = String(nextTitle || '').trim() || baseName
          let content = body
          let nextPath = path
          if (cleanTitle !== saved.current.title) {
            if (saved.current.heading) content = replaceFirstHeading(body, cleanTitle)
            else nextPath = buildPath(dir, cleanTitle + ext)
          }
          await api('/write', { path: nextPath, content })
          if (nextPath !== path) await api('/delete', { path })
          const heading = titleOf(content)
          const label = heading !== '' ? heading : cleanTitle
          saved.current = { text: content, title: label, heading: heading !== '' }
          setTitle(label)
          await refresh()
          if (silent) {
            store.patch({ rev: (store.getSnapshot().rev || 0) + 1 })
            setStatus(t('savedAt').replace('%s', formatClock()))
          } else {
            store.patch({ editing: '', rev: (store.getSnapshot().rev || 0) + 1 })
            notify(t('saved'))
          }
        } catch (failure) {
          setError(message(failure))
        } finally {
          setBusy(false)
        }
      }

      // 自动保存：只在标题未变时静默落盘，避免后台静默改名
      React.useEffect(() => {
        if (!auto || !loaded) return undefined
        if (title !== saved.current.title) return undefined
        if (markdown() === saved.current.text) return undefined
        const timer = setTimeout(() => {
          persist(title, true)
        }, 1200)
        return () => clearTimeout(timer)
      }, [rev, auto, loaded, title])

      const run = (command, value) => {
        const el = richRef.current
        if (!el) return
        el.focus()
        try {
          document.execCommand(command, false, value)
        } catch (failure) {
          console.error('[dsh-docs-manager] 编辑命令失败', failure)
        }
        setRev((value) => value + 1)
        setStatus('')
      }

      const wrap = (tag) => {
        const el = richRef.current
        if (!el) return
        el.focus()
        const picked = String(window.getSelection ? window.getSelection().toString() : '')
        const inner = picked === '' ? (tag === 'code' ? 'code' : 'link') : escapeHtml(picked)
        run('insertHTML', tag === 'code' ? '<code>' + inner + '</code>' : '<a href="https://">' + inner + '</a>')
      }

      const toggleSource = () => {
        if (!source) {
          setText(markdown())
          setSource(true)
        } else {
          setSource(false)
        }
        setStatus('')
      }

      const chars = React.useMemo(() => countWords(markdown()), [rev, source, text, loaded])

      const tools = richTools(run, wrap)

      return h(
        'div',
        {
          className: 'dm-overlay',
          style: { pointerEvents: 'auto' },
          onMouseDown: (event) => {
            if (event.target === event.currentTarget) close()
          },
        },
        h('div', { className: 'dm-editor-sheet' }, [
          StyleTag({ key: 'style' }),
          h('div', { key: 'head', className: 'dm-ed-head' }, [
            h('input', {
              key: 't',
              className: 'dm-ed-title',
              value: title,
              placeholder: t('titlePlaceholder'),
              onChange: (event) => {
                setTitle(event.target.value)
                setStatus('')
              },
            }),
            h(
              'button',
              {
                key: 'm',
                type: 'button',
                className: 'dm-ed-mode',
                title: source ? t('format') : t('sourceMd'),
                onClick: toggleSource,
              },
              source ? t('format') : t('sourceMd'),
            ),
            h(
              'button',
              { key: 'x', type: 'button', className: 'dm-sheet-close', title: t('close'), 'aria-label': t('close'), onClick: close },
              h(IconX, { size: 13 }),
            ),
          ]),
          source ? null : h(RichToolbar, { key: 'tools', tools }),
          h('div', { key: 'body', className: 'dm-ed-body' }, [
            error !== '' ? h('div', { key: 'e', className: 'dm-error' }, error) : null,
            source
              ? h('textarea', {
                  key: 'ta',
                  ref: areaRef,
                  className: 'dm-ed-text',
                  value: text,
                  spellCheck: false,
                  placeholder: '# ' + (title || t('name')),
                  onChange: (event) => {
                    setText(event.target.value)
                    setStatus('')
                  },
                })
              : h('div', {
                  key: 'rich',
                  ref: richRef,
                  className: 'dm-md dm-ed-rich',
                  contentEditable: true,
                  suppressContentEditableWarning: true,
                  spellCheck: false,
                  'data-placeholder': t('richPlaceholder'),
                  onInput: () => {
                    setRev((value) => value + 1)
                    setStatus('')
                  },
                }),
          ]),
          h('div', { key: 'foot', className: 'dm-ed-foot' }, [
            h(
              'button',
              {
                key: 'sw',
                type: 'button',
                className: 'dm-switch',
                'data-on': auto ? 'true' : 'false',
                title: t('autosave'),
                'aria-label': t('autosave'),
                'aria-checked': auto ? 'true' : 'false',
                role: 'switch',
                onClick: () => setAuto(!auto),
              },
              h('span', { key: 'k', className: 'dm-knob' }),
            ),
            h('span', { key: 'l', className: 'dm-ed-foot-note' }, t('autosave')),
            h('span', { key: 's', className: 'dm-ed-foot-note' }, status || t('words').replace('%s', String(chars))),
            h('div', { key: 'sp', className: 'dm-ed-spacer' }),
            h('button', { key: 'c', type: 'button', className: 'dm-btn', onClick: close }, t('cancel')),
            h('button', { key: 'sv', type: 'button', className: 'dm-btn dm-btn-primary', disabled: busy || !loaded, onClick: () => persist(title, false) }, t('save')),
          ]),
        ]),
      )
    }

    /* ---------------- screens ---------------- */

    function ConfirmDelete(props) {
      const path = props.path
      const [busy, setBusy] = React.useState(false)
      const close = () => store.patch({ confirmDelete: '' })
      const name = stripExtension(path.split('/').pop() || path)
      const run = async () => {
        if (busy) return
        setBusy(true)
        try {
          await api('/delete', { path })
          store.patch({ confirmDelete: '' })
          await refresh()
          notify(t('deleted'))
        } catch (failure) {
          notify(message(failure))
        } finally {
          setBusy(false)
        }
      }
      return h(Sheet, {
        title: t('del'),
        onClose: close,
        children: h('div', { key: 'n', className: 'dm-sheet-note' }, t('confirmDelete').replace('%s', name)),
        footer: [
          h('button', { key: 'c', type: 'button', className: 'dm-btn', onClick: close }, t('cancel')),
          h('button', { key: 'd', type: 'button', className: 'dm-btn dm-btn-danger', disabled: busy, onClick: run }, t('del')),
        ],
      })
    }

    function Screen() {
      const snapshot = useStore()
      return h('div', { className: 'dm-host' }, [
        h('div', { key: 'main', className: 'dm-main' }, h(Board, { key: 'board' })),
        snapshot.draft ? h(DraftModal, { key: 'draft', draft: snapshot.draft }) : null,
        snapshot.settings ? h(SettingsModal, { key: 'settings', settings: snapshot.settings }) : null,
        snapshot.editing !== '' ? h(Editor, { key: 'editor', path: snapshot.editing }) : null,
        snapshot.confirmDelete !== '' ? h(ConfirmDelete, { key: 'confirm', path: snapshot.confirmDelete }) : null,
        snapshot.notice ? h('div', { key: 'notice', className: 'dm-notice' }, snapshot.notice) : null,
      ])
    }

    /* ---------------- quick add ---------------- */

    function QuickAdd() {
      const snapshot = useStore()
      const request = snapshot.quickAdd
      if (!request) return null
      return h(QuickAddForm, { request })
    }

    function QuickAddForm(props) {
      const request = props.request
      const snapshot = useStore()
      const [form, setForm] = React.useState(() => ({ dir: request.dir || '', name: request.name || '' }))
      const richRef = React.useRef(null)
      const [busy, setBusy] = React.useState(false)
      const [error, setError] = React.useState('')
      const close = () => store.patch({ quickAdd: null })
      const submit = async () => {
        if (busy) return
        setBusy(true)
        setError('')
        try {
          const path = buildPath(form.dir, form.name || ('note-' + Date.now()))
          const content = richRef.current ? htmlToMd(richRef.current) : ''
          await api('/write', { path, content })
          store.patch({ quickAdd: null })
          await refresh()
          notify(t('saved'))
        } catch (failure) {
          setError(message(failure))
        } finally {
          setBusy(false)
        }
      }
      return h(React.Fragment, null, [
        h('div', {
          key: 'catch',
          className: 'dm-quick-catch',
          onMouseDown: (event) => {
            if (event.target === event.currentTarget) close()
          },
        }),
        h('div', { key: 'card', className: 'dm-quick' }, [
          h('div', { key: 'h', className: 'dm-sheet-head' }, [
            h('span', { key: 't' }, t('quickAdd')),
            h(
              'button',
              { key: 'x', type: 'button', className: 'dm-sheet-close', title: t('close'), 'aria-label': t('close'), onClick: close },
              h(IconX, { size: 13 }),
            ),
          ]),
          h('div', { key: 'b', className: 'dm-sheet-body' }, [
            h(Field, { key: 'd', label: t('dir'), hint: t('dirHint').replace('%s', snapshot.root || '') }, h(DirPicker, {
              value: form.dir,
              dirs: (snapshot.groups || []).map((group) => group.dir).filter((dir) => dir !== ''),
              onChange: (dir) => setForm({ ...form, dir }),
            })),
            h(Field, { key: 'n', label: t('name') }, h('input', {
              className: 'dm-input',
              value: form.name,
              placeholder: t('nameHint'),
              onChange: (event) => setForm({ ...form, name: event.target.value }),
            })),
            h(Field, { key: 'c', label: t('content') }, h(RichField, {
              innerRef: richRef,
              initial: request.text || '',
              placeholder: t('contentHint'),
            })),
            error !== '' ? h('div', { key: 'e', className: 'dm-modal-error' }, error) : null,
          ]),
          h('div', { key: 'f', className: 'dm-sheet-foot' }, [
            h('button', { key: 'c', type: 'button', className: 'dm-btn', onClick: close }, t('cancel')),
            h('button', { key: 's', type: 'button', className: 'dm-btn dm-btn-primary', disabled: busy, onClick: submit }, t('save')),
          ]),
        ]),
      ])
    }

    function openQuickAdd(seed) {
      store.patch({
        quickAdd: {
          dir: (seed && seed.dir) || '',
          name: (seed && seed.name) || '',
          text: (seed && seed.text) || '',
        },
      })
      refresh()
    }

    /* ---------------- entries ---------------- */

    function SidebarEntry(props) {
      const size = (props && props.size) || 18
      const active = !!(props && props.active)
      const ref = React.useRef(null)

      // 侧栏按钮由 DSH 自己渲染，它的 onClick 会 selectPanel(id) 切走中央面板，
      // 右栏随之收起。这里在按钮上以捕获阶段拦掉这次点击，只做“打开右栏”。
      React.useEffect(() => {
        const node = ref.current
        if (!node) return undefined
        const button = node.closest('button')
        if (!button) return undefined
        const intercept = (event) => {
          event.preventDefault()
          event.stopPropagation()
          openDocsPanel()
        }
        button.addEventListener('click', intercept, true)
        return () => button.removeEventListener('click', intercept, true)
      }, [])

      return h(
        'span',
        {
          ref: ref,
          className: 'dm-entry',
          style: { width: size, height: size, opacity: active ? 1 : undefined },
          title: t('panel') + ' — ' + t('panelDesc'),
          'aria-label': t('panel'),
        },
        h(IconDoc, { size }),
      )
    }

    function MainPanel() {
      React.useEffect(() => {
        refresh()
      }, [])
      return h(Screen)
    }

    function composerDraft(props) {
      if (!props || typeof props.useInput !== 'function') return ''
      try {
        const draft = props.useInput((state) => (state ? state.draft : ''))
        if (typeof draft === 'string') return draft
        if (draft && typeof draft === 'object') {
          if (typeof draft.text === 'string') return draft.text
          if (typeof draft.value === 'string') return draft.value
        }
        return ''
      } catch (error) {
        return ''
      }
    }

    function InputToolbar(props) {
      const draft = composerDraft(props)
      return h('button', {
        type: 'button',
        className: 'dm-glyph',
        title: t('quickNote'),
        'aria-label': t('quickNote'),
        onClick: () => openQuickAdd({ text: draft }),
      }, h(IconDoc, { size: 16 }))
    }

    function AssistantAction(props) {
      const readText = props && typeof props.useChat === 'function' ? props.useChat : null
      let text = ''
      try {
        if (readText) text = readText((state) => messageText(state, props.messageId))
      } catch (error) {
        text = ''
      }
      return h('button', {
        type: 'button',
        className: 'dm-glyph',
        title: t('saveAsDoc'),
        'aria-label': t('saveAsDoc'),
        onClick: () => openQuickAdd({ text: text || '', name: deriveTitle(text) }),
      }, h(IconDoc, { size: 16 }))
    }

    /* ---------------- panel opening ---------------- */

    let rootCtx = null

    function getService(name) {
      if (!rootCtx) return undefined
      try {
        return rootCtx.get(name) || undefined
      } catch {
        return undefined
      }
    }

    // DSH 右栏的可视区域由 frame 的第三列宽度决定，且 tab 正文要等会话表面挂载完才渲染；
    // 直接选中央面板最稳，点一次就到位，也不会再闪回会话。
    function openDocsPanel() {
      const layout = getService('layout')
      if (!layout || typeof layout.selectPanel !== 'function') return
      try {
        layout.selectPanel(MAIN_ID)
      } catch (error) {
        console.error('[dsh-docs-manager] 打开文档面板失败', error)
      }
    }

    function backToConversation() {
      const layout = getService('layout')
      if (!layout || typeof layout.selectPanel !== 'function') return
      try {
        layout.selectPanel(null)
      } catch (error) {
        console.error('[dsh-docs-manager] 返回会话失败', error)
      }
    }

    /* ---------------- apply ---------------- */

    function apply(ctx) {
      rootCtx = ctx
      installStyles(ctx)

      const locale = getService('locale')
      if (locale && typeof locale.register === 'function' && typeof locale.bind === 'function') {
        try {
          ctx.effect(() => locale.register('dshDocsManager', 'zh', ZH), 'dsh-docs-manager: locale zh')
          ctx.effect(() => locale.register('dshDocsManager', 'en', EN), 'dsh-docs-manager: locale en')
          boundTranslate = locale.bind('dshDocsManager')
        } catch (error) {
          console.error('[dsh-docs-manager] 注册文案失败，使用内置中文', error)
        }
      }

      if (typeof ctx.slots?.inject === 'function') {
        ctx.slots.inject('sidebar.panellist', () =>
          ctx.slots.register({ name: 'sidebar.panellist', id: MAIN_ID, order: 70, label: t('panel') }, SidebarEntry),
        )
        ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: MAIN_ID }, MainPanel))
        ctx.slots.inject('shell.overlay', () =>
          ctx.slots.register({ name: 'shell.overlay', id: 'dsh-docs-manager-quickadd', order: 61 }, QuickAdd),
        )
        ctx.slots.inject('conversation.input.left', () =>
          ctx.slots.register({ name: 'conversation.input.left', id: 'dsh-docs-manager-capture', order: 61 }, InputToolbar),
        )
        ctx.slots.inject('conversation.chat.assistant-actions', () =>
          ctx.slots.register({ name: 'conversation.chat.assistant-actions', id: 'dsh-docs-manager-save-message', order: 61 }, AssistantAction),
        )
      } else {
        console.error('[dsh-docs-manager] slots 服务不可用，界面未注册')
      }

      ctx.effect(() => () => {
        if (noticeTimer) {
          clearTimeout(noticeTimer)
          noticeTimer = null
        }
      }, 'dsh-docs-manager: notice timer')

      refresh()
    }

    return { inject: ['slots'], apply }
  },
})

