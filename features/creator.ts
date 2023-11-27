import $ from 'blingblingjs'
import hotkeys from 'hotkeys-js'
import { code } from '../components/uh-web-editor/uh-web-editor.icons'
import axios from 'axios'

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
  <div class="results" style="width: 300px; height: 300px;">
    here you go
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
  // createInput.on('input', onQuery)
  createInput.on('keydown', stopBubbling)

  submit.on('click', onSubmit)

  showCreatorBar()
  focus()

  return () => {
    hideCreatorBar()
    submit.off('click', onSubmit)
    createInput.off('oninput', onQuery)
    createInput.off('keydown', stopBubbling)
    createInput.off('blur', hideCreatorBar)
  }
}

export function provideSelectorEngine(Engine) {
  SelectorEngine = Engine
}

export function queryCreator(query, fn?) {
  if (!query) return
  console.log('queryCreator', query)
}
