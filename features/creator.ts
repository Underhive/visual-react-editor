import $ from 'blingblingjs'
import hotkeys from 'hotkeys-js'
import { code } from '../components/uh-web-editor/uh-web-editor.icons'
import axios from 'axios'
import history, { cssPath } from '../utilities/history'
import { elementDebugSource } from '../utilities'

let SelectorEngine

// create input
const create_base = document.createElement('div')
create_base.classList.add('create')
create_base.innerHTML = `
  <input data="uh-web-editor-creator" type="text" placeholder="ex: follow button which looks like twitter's"/>
  <div class="submit-container">
    <div class="logo-svg">
      ${code}
    </div>
  </div>
  <div class="results" style="width: 300px; min-height: 100px; max-height: 400px; overflow-y: auto;">
    <div style="padding:8px;color:#999;font-size:12px;">Describe a UI element to generate with AI</div>
  </div>
`

const create        = $(create_base)
const createInput   = $('input', create_base)
const submit        = $('.submit-container', create_base)

const showCreatorBar = () => create.attr('style', 'display:block')
const hideCreatorBar = () => create.attr('style', 'display:none')

export function Creator(node) {
  if (node) node[0].appendChild(create[0])

  const onQuery = e => {
    e.preventDefault()
    e.stopPropagation()

    const query = e.target.value

    window.requestIdleCallback(_ =>
      queryCreator(query))
  }

  const stopBubbling  = e => {
    e.key != 'Escape' && e.stopPropagation()
    if(e.key === 'Enter') {
      e.preventDefault()
      onSubmit(e)
    }
  }

  const onSubmit = e => {
    const query = createInput[0].value
    queryCreator(query)
  }

  const focus = (_e?) => createInput[0].focus()

  createInput.on('click', focus)
  createInput.on('keydown', stopBubbling)

  submit.on('click', onSubmit)

  showCreatorBar()
  focus()

  return () => {
    hideCreatorBar()
    submit.off('click', onSubmit)
    createInput.off('keydown', stopBubbling)
    createInput[0].value = ''
  }
}

export function provideSelectorEngine(Engine) {
  SelectorEngine = Engine
}

const GEMINI_API_KEY_STORAGE = 'uh-gemini-api-key'

function getApiKey(): string | null {
  return localStorage.getItem(GEMINI_API_KEY_STORAGE)
}

function promptForApiKey(): string | null {
  const key = prompt('Enter your Gemini API key to enable AI element creation.\nGet one free at https://aistudio.google.com/apikey')
  if (key) {
    localStorage.setItem(GEMINI_API_KEY_STORAGE, key.trim())
  }
  return key ? key.trim() : null
}

function getResultsDiv(): HTMLElement {
  return create_base.querySelector('.results') as HTMLElement
}

export async function queryCreator(query, fn?) {
  if (!query) return

  let apiKey = getApiKey()
  if (!apiKey) {
    apiKey = promptForApiKey()
    if (!apiKey) return
  }

  const resultsDiv = getResultsDiv()
  resultsDiv.innerHTML = `
    <div style="padding:12px;color:#999;font-size:12px;text-align:center;">
      <div style="margin-bottom:8px;">Generating...</div>
      <div style="width:20px;height:20px;border:2px solid #555;border-top-color:#0C8CE9;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto;"></div>
      <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
    </div>
  `

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        contents: [{
          parts: [{
            text: `Generate only the raw HTML markup for the following UI element. Do not include any explanation, markdown fences, or commentary. Use inline styles for all styling. Make it visually polished and modern. Here is the request: ${query}`
          }]
        }]
      }
    )

    const rawText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || ''
    const cleanHtml = rawText.replace(/```html?\n?/gi, '').replace(/```/g, '').trim()

    if (!cleanHtml) {
      resultsDiv.innerHTML = '<div style="padding:12px;color:#f44;font-size:12px;">No content generated. Try a different prompt.</div>'
      return
    }

    // Show preview with insert button
    resultsDiv.innerHTML = `
      <div style="padding:8px;border-bottom:1px solid #333;">
        <div class="creator-insert-btn" style="padding:6px 12px;background:#0C8CE9;color:#fff;border-radius:6px;cursor:pointer;text-align:center;font-size:12px;font-weight:500;">
          Insert into page
        </div>
      </div>
      <div class="creator-preview" style="padding:8px;">${cleanHtml}</div>
    `

    const insertBtn = resultsDiv.querySelector('.creator-insert-btn')
    insertBtn?.addEventListener('click', () => {
      const target = globalThis.$target?.data || document.body
      const wrapper = document.createElement('div')
      wrapper.innerHTML = cleanHtml
      const newEl = wrapper.firstElementChild || wrapper

      if (wrapper.firstElementChild) {
        target.appendChild(wrapper.firstElementChild)
      } else {
        target.insertAdjacentHTML('beforeend', cleanHtml)
      }

      const inserted = target.lastElementChild
      if (inserted) {
        history.actions.do({
          parentLocation: cssPath(target),
          location: cssPath(inserted),
          element: {
            tagName: inserted.tagName.toLowerCase(),
            outerHTML: inserted.outerHTML,
            parentDebugSource: elementDebugSource(target),
          },
          action: 'add',
        })
      }

      resultsDiv.innerHTML = '<div style="padding:12px;color:#4CAF50;font-size:12px;text-align:center;">Inserted successfully!</div>'
      setTimeout(() => {
        resultsDiv.innerHTML = '<div style="padding:8px;color:#999;font-size:12px;">Describe another element to generate</div>'
      }, 2000)
    })

  } catch (err: any) {
    if (err.response?.status === 400 || err.response?.status === 403 || err.response?.status === 401) {
      localStorage.removeItem(GEMINI_API_KEY_STORAGE)
      resultsDiv.innerHTML = '<div style="padding:12px;color:#f44;font-size:12px;">Invalid API key. Please try again on next submit.</div>'
    } else {
      resultsDiv.innerHTML = `<div style="padding:12px;color:#f44;font-size:12px;">Error: ${err.message || 'Request failed'}</div>`
    }
  }
}
