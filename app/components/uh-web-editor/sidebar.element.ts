import $          from 'blingblingjs'
import hotkeys    from 'hotkeys-js'

import {
  SidebarStyles,
} from '../styles.store'

import * as Icons                 from './uh-web-editor.icons'
import { provideSelectorEngine }  from '../../features/search'
import {
  metaKey,
  isPolyfilledCE,
  constructibleStylesheetSupport,
  schemeRule,
  apiURL,
  updateAppliedStyles
} from '../../utilities'
import { EditText } from '../../features'

import axios from 'axios'
import Incrementable from '../../utilities/incrementable'

export default class EditorSidebar extends HTMLElement {
  
  $shadow: ShadowRoot
  applyScheme: Function
  appliedStyles: any[]
  blurAwaitingPost: any

  constructor() {
    super()

    this.$shadow = this.attachShadow({mode: 'closed'})
    this.applyScheme    = schemeRule(
      this.$shadow,
      SidebarStyles, SidebarStyles, SidebarStyles
    )
  }

  connectedCallback() {
    this.setup()
  }

  disconnectedCallback() {
    this.cleanup()
  }

  static get observedAttributes() { return ['viewmode','color-scheme'] }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color-scheme')
      this.applyScheme(newValue)
  }

  editAttribute = e => {
    const data = {
      name: e.target.dataset.name,
      value: e.target.value ?? e.target.textContent,
      file: e.target.dataset.file,
      selector: e.target.dataset.selector
    }
    const source = globalThis.sharedStorage.get('currentElementReactFiberSource')
    this.blurAwaitingPost = {
      log: data,
      source: source,
      timestamp: Date.now()
    }
  }

  onBlurAttribute = e => {
    e.target.removeEventListener('input', this.editAttribute)
    e.target.removeEventListener('blur', this.onBlurAttribute)

    if(globalThis.$target) {
      const latestStyles = updateAppliedStyles(globalThis.$target, true)
      if(this.blurAwaitingPost) {
        const data = this.blurAwaitingPost
        data.log.source = latestStyles.find(style => style.parentRuleSelector === e.target.dataset.selector && style.sourceMapJSON?.sources?.[0] === e.target.dataset.file)
        axios.post(`${apiURL}/edit/stylesheet`, this.blurAwaitingPost)
        this.blurAwaitingPost = undefined
      }
    }
  }

  doubleClickAttr = e => {
    if(e.target.matches('.attr .value')) {
      e.stopPropagation()
      EditText([e.target])
      e.target.addEventListener('input', this.editAttribute)
      e.target.addEventListener('blur', this.onBlurAttribute)
      new Incrementable(e.target)
    }
  }

  setup() {
    this.$shadow.innerHTML = this.render()

    this.hasAttribute('color-mode')
      ? this.getAttribute('color-mode')
      : this.setAttribute('color-mode', 'hex')

    this.hasAttribute('viewmode')
      ? this.getAttribute('viewmode')
      : this.setAttribute('viewmode', 'artboard')

    this.hasAttribute('color-scheme')
      ? this.getAttribute('color-scheme')
      : this.setAttribute('color-scheme', 'auto')

    this.$shadow.addEventListener('click', this.doubleClickAttr)

    globalThis.sharedStorage.set('currentStyles', new Proxy({ data: [] }, {
      set: (target, key, value) => {
        if(key === 'data') {
          this.appliedStyles = value
          this.$shadow.innerHTML = this.render()
        }
        target[key] = value
        return true
      }
    }))
  }

  extractFilename(path) {
    if (!path) return 'inline';
    const regex = /[^/]+$/;
    const match = path.match(regex);
    return match ? match[0] : 'inline';
  }
  
  cleanup() {
    this.$shadow.innerHTML = '' 
    this.$shadow.removeEventListener('click', this.doubleClickAttr)
  }

  render() {
    return `
      <div>
        <div class="tabs">
          <div class="tab" data-active="true" data-name="styles">
            Styles
          </div>
          <div class="tab" data-name="tree">
            Tree
          </div>
        </div>
        <div class="styles">
          <div class="styles-list">
            ${this.appliedStyles ? this.appliedStyles.map(style => {
                const fileName = this.extractFilename(style.sourceMapJSON?.sources?.[0])
                return `
                  <div class="style-info">
                    <div class="selector-header">
                      <div class="selector-name">${style.parentRuleSelector?.trim()?.replace("\n", "") ?? 'element.style'}</div>
                      <div class="file-name">(${fileName})</div>
                    </div>
                    ${style.styles ? Object.keys(style.styles).map(attr => {
                      return `
                        <div class="attr">
                          <div class="name">${attr}:</div>
                          <textarea 
                            class="value" 
                            data-name="${attr}" 
                            data-file="${style.sourceMapJSON?.sources?.[0]}"
                            data-selector="${style.parentRuleSelector}"
                          >${style.styles[attr]}</textarea>
                          <div class="delete">(-)</div>
                        </div>
                      `
                    }).join('\n') : ''}
                    <div class="attr-new">+</div>
                  </div>
                `
              }).join('\n') : ''}
          </div>
        </div>

        <div class="tree">
              
        </div>
      </div>`
  }
}

customElements.define('uh-web-editor-sidebar', EditorSidebar)

export const WebEditorSidebar = new (customElements.get('uh-web-editor-sidebar'))();