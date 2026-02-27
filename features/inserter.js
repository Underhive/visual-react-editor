import $ from 'blingblingjs'
import history, { cssPath } from '../utilities/history'
import { elementDebugSource } from '../utilities'

let SelectorEngine

export function provideSelectorEngine(Engine) {
  SelectorEngine = Engine
}

const elementTypes = [
  {
    label: 'Container',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 2"/></svg>`,
    create() {
      const el = document.createElement('div')
      Object.assign(el.style, {
        minHeight: '100px', minWidth: '100px', padding: '16px',
        background: '#f5f5f5', border: '1px dashed #ccc',
      })
      return el
    },
  },
  {
    label: 'Text',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M5 4v3h5.5v12h3V7H19V4H5z" fill="currentColor"/></svg>`,
    create() {
      const el = document.createElement('p')
      el.textContent = 'Text paragraph'
      Object.assign(el.style, {
        fontSize: '16px', color: '#333', padding: '8px',
      })
      return el
    },
  },
  {
    label: 'Heading',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M5 4v16h3v-6h8v6h3V4h-3v7H8V4H5z" fill="currentColor"/></svg>`,
    create() {
      const el = document.createElement('h2')
      el.textContent = 'Heading'
      Object.assign(el.style, {
        fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', padding: '8px',
      })
      return el
    },
  },
  {
    label: 'Button',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="6" width="20" height="12" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`,
    create() {
      const el = document.createElement('button')
      el.textContent = 'Button'
      Object.assign(el.style, {
        padding: '10px 20px', background: '#0C8CE9', color: '#fff',
        border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px',
      })
      return el
    },
  },
  {
    label: 'Link',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" fill="currentColor"/></svg>`,
    create() {
      const el = document.createElement('a')
      el.textContent = 'Link text'
      el.href = '#'
      Object.assign(el.style, {
        color: '#0C8CE9', textDecoration: 'underline', padding: '8px', fontSize: '14px',
      })
      return el
    },
  },
  {
    label: 'Image',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/></svg>`,
    create() {
      const el = document.createElement('img')
      el.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="150"><rect width="200" height="150" fill="#e0e0e0"/><text x="100" y="80" text-anchor="middle" fill="#999" font-family="sans-serif" font-size="14">Image</text></svg>')
      el.alt = 'Placeholder image'
      Object.assign(el.style, {
        width: '200px', height: '150px', display: 'block',
      })
      return el
    },
  },
  {
    label: 'List',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z" fill="currentColor"/></svg>`,
    create() {
      const el = document.createElement('ul')
      Object.assign(el.style, {
        padding: '8px 8px 8px 24px', listStyle: 'disc',
      })
      for (const text of ['List item 1', 'List item 2', 'List item 3']) {
        const li = document.createElement('li')
        li.textContent = text
        el.appendChild(li)
      }
      return el
    },
  },
  {
    label: 'Input',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM1 11h8v2H1v-2z" fill="currentColor"/></svg>`,
    create() {
      const el = document.createElement('input')
      el.type = 'text'
      el.placeholder = 'Type here...'
      Object.assign(el.style, {
        padding: '8px 12px', border: '1px solid #ccc', borderRadius: '4px',
        fontSize: '14px', width: '200px',
      })
      return el
    },
  },
  {
    label: 'Section',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M3 5v14h18V5H3zm16 12H5V7h14v10z" fill="currentColor"/></svg>`,
    create() {
      const el = document.createElement('section')
      Object.assign(el.style, {
        padding: '24px', minHeight: '120px', background: '#fafafa',
        border: '1px solid #eee',
      })
      return el
    },
  },
  {
    label: 'Flex Row',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="6" width="5" height="12" rx="1" fill="currentColor" opacity="0.5"/><rect x="9.5" y="6" width="5" height="12" rx="1" fill="currentColor" opacity="0.5"/><rect x="17" y="6" width="5" height="12" rx="1" fill="currentColor" opacity="0.5"/></svg>`,
    create() {
      const el = document.createElement('div')
      Object.assign(el.style, {
        display: 'flex', gap: '8px', padding: '12px', minHeight: '60px',
        background: '#f5f5f5', border: '1px dashed #ccc',
      })
      return el
    },
  },
  {
    label: 'Flex Column',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="4" y="2" width="16" height="5" rx="1" fill="currentColor" opacity="0.5"/><rect x="4" y="9.5" width="16" height="5" rx="1" fill="currentColor" opacity="0.5"/><rect x="4" y="17" width="16" height="5" rx="1" fill="currentColor" opacity="0.5"/></svg>`,
    create() {
      const el = document.createElement('div')
      Object.assign(el.style, {
        display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px',
        minHeight: '80px', background: '#f5f5f5', border: '1px dashed #ccc',
      })
      return el
    },
  },
  {
    label: 'Card',
    icon: `<svg viewBox="0 0 24 24" width="20" height="20"><rect x="2" y="3" width="20" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="6" y1="8" x2="18" y2="8" stroke="currentColor" stroke-width="1.5"/><line x1="6" y1="12" x2="14" y2="12" stroke="currentColor" stroke-width="1" opacity="0.5"/></svg>`,
    create() {
      const el = document.createElement('div')
      Object.assign(el.style, {
        padding: '16px', background: '#fff', borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)', minWidth: '200px',
      })
      const h = document.createElement('h3')
      h.textContent = 'Card Title'
      Object.assign(h.style, { margin: '0 0 8px 0', fontSize: '16px', color: '#1a1a1a' })
      const p = document.createElement('p')
      p.textContent = 'Card description text goes here.'
      Object.assign(p.style, { margin: '0', fontSize: '14px', color: '#666' })
      el.appendChild(h)
      el.appendChild(p)
      return el
    },
  },
]

// Build the panel DOM once
const insert_base = document.createElement('div')
insert_base.classList.add('insert')
insert_base.innerHTML = `
  <div class="insert-grid">
    ${elementTypes.map((type, i) => `
      <div class="insert-card" data-index="${i}">
        <div class="insert-card-icon">${type.icon}</div>
        <div class="insert-card-label">${type.label}</div>
      </div>
    `).join('')}
  </div>
`

const insert = $(insert_base)
const showInsertPanel = () => insert.attr('style', 'display:block')
const hideInsertPanel = () => insert.attr('style', 'display:none')

export function Inserter(node) {
  if (node) node[0].appendChild(insert_base)

  const onClick = (e) => {
    const card = e.target.closest('.insert-card')
    if (!card) return

    e.preventDefault()
    e.stopPropagation()

    const index = parseInt(card.dataset.index, 10)
    const type = elementTypes[index]
    if (!type) return

    const target = globalThis.$target?.data || document.body
    const newEl = type.create()

    target.appendChild(newEl)

    // Track in history for undo support
    history.actions.do({
      parentLocation: cssPath(target),
      location: cssPath(newEl),
      element: {
        tagName: newEl.tagName.toLowerCase(),
        outerHTML: newEl.outerHTML,
        parentDebugSource: elementDebugSource(target),
      },
      action: 'add',
    })

    // Auto-select the newly inserted element
    if (SelectorEngine) {
      SelectorEngine.select(newEl)
    }
  }

  insert_base.addEventListener('click', onClick)
  showInsertPanel()

  return () => {
    hideInsertPanel()
    insert_base.removeEventListener('click', onClick)
  }
}
