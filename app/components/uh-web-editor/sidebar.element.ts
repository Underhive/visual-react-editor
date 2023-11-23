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
  updateAppliedStyles,
  cssPath,
  showOneOffHandle
} from '../../utilities'
import { EditText } from '../../features'

import axios from 'axios'
import Incrementable from '../../utilities/incrementable'
import { createMarginVisual } from '../../features/margin'

type ElementNode = {
  name: string
  selector: string
  open: boolean
  children: ElementNode[]
  ariaLevel: number
  fileName: string
  isSelected: boolean
}

export default class EditorSidebar extends HTMLElement {
  
  $shadow: ShadowRoot
  applyScheme: Function
  appliedStyles: any[]
  blurAwaitingPost: any
  elementTree: ElementNode
  activeTab: any
  lastTarget: any

  constructor() {
    super()

    this.$shadow = this.attachShadow({mode: 'closed'})
    this.applyScheme    = schemeRule(
      this.$shadow,
      SidebarStyles, SidebarStyles, SidebarStyles
    )

    this.activeTab = new Proxy({ data: 'tree' }, {
      set: (target, p, newValue, receiver) => {
        target[p] = newValue
        this.$shadow.querySelector('.tabs .styles').setAttribute('data-active', (newValue === 'styles').toString())
        this.$shadow.querySelector('.tabs .tree').setAttribute('data-active', (newValue === 'tree').toString())
        if(newValue === 'styles') {
          this.$shadow.querySelector('.styles-content').setAttribute('style', 'display: flex;')
          this.$shadow.querySelector('.tree-content').setAttribute('style', 'display: none;')
        } else if(newValue === 'tree') {
          this.$shadow.querySelector('.styles-content').setAttribute('style', 'display: none;')
          this.$shadow.querySelector('.tree-content').setAttribute('style', 'display: flex;')
        }
        return true
      },
    })

    document.addEventListener('readystatechange', e => {
      if(document.readyState === "complete") {
        const rootFiberNode = (document.querySelector('#root') as any)
        let blingHash
        for(let key in rootFiberNode) {
          if(key.startsWith('__reactContainer$')) {
            blingHash = key.split('$')[1]
            break
          }
        }
        globalThis.$blingHash = blingHash
        this.elementTree = this.createElementTree(rootFiberNode)
        const latestStyles = updateAppliedStyles(rootFiberNode)
        this.appliedStyles = latestStyles
        this.cleanup()
        this.setup()
      }
    })

    globalThis.sharedStorage.set('currentStyles', new Proxy({ data: [] }, {
      set: (target, key, value) => {
        if(key === 'data') {
          this.appliedStyles = value
          this.cleanup()
          this.setup()
        }
        target[key] = value
        return true
      }
    }))

    globalThis.$target = new Proxy({ data: {} }, {
      set: (target, key, value) => {
        if(key === 'data') {
          target[key] = value
          if(value.parentNode) {
            this.elementTree = this.createElementTree(value.parentNode)
          } else {
            this.elementTree = this.createElementTree(value)
          }
        }
        return true
      }
    })
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

    if(globalThis.$target.data.style) {
      const latestStyles = updateAppliedStyles(globalThis.$target.data, true)
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

  onShowRootTreeClicked = e => {
    const rootFiberNode = (document.querySelector('#root') as any)
    this.elementTree = this.createElementTree(rootFiberNode)
    this.cleanup()
    this.setup()
  }

  onTabClicked = e => {
    this.activeTab.data = (e.target as any).classList.contains('styles') ? 'styles' : 'tree'
  }

  onTreeNodeOpenCloseClicked = e => {
    e.stopPropagation()
    const state = e.target.dataset.state === "true";
    // e.target.dataset.state = (!state).toString()
    const selector = e.target.parentNode.dataset.selector
    // find selector in tree
    const node = this.elementTree
    const findNode = (node: ElementNode, selector: string) => {
      if(node.selector === selector) return node
      if(node.children.length > 0) {
        for(let i = 0; i < node.children.length; i++) {
          const foundNode = findNode(node.children[i], selector)
          if(foundNode) return foundNode
        }
      }
      return null
    }
    const foundNode = findNode(node, selector)
    if(!foundNode) return
    foundNode.open = !state
    this.cleanup()
    this.setup()
  }

  onTreeNodeNameClicked = e => {
    const selector = e.target.parentNode.dataset.selector
    const elementFromSelector = document.querySelector(selector)
    
    elementFromSelector.animate([
      { backgroundColor: 'transparent' },
      { backgroundColor: 'hsla(330, 100%, 40%, 70%)' },
      { backgroundColor: 'transparent' },
    ], 600)

    elementFromSelector.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' })
    
    showOneOffHandle(elementFromSelector, -9999)

    const latestStyles = updateAppliedStyles(elementFromSelector)
    this.appliedStyles = latestStyles
    this.cleanup()
    this.setup()
  }

  onTreeNodeActionClicked = e => {
    if(e.target.classList.contains('edit')) {
      const editModal: HTMLElement = this.$shadow.querySelector('.modal.edit-element')
      editModal.classList.remove('hidden')
      editModal.style.display = 'flex'
      console.log('edit clicked')
    } else if(e.target.classList.contains('add')) {
      const addModal: HTMLElement = this.$shadow.querySelector('.modal.add-element')
      addModal.classList.remove('hidden')
      addModal.style.display = 'flex' 
      console.log('add clicked')
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

    this.$shadow.querySelectorAll('.tabs .tab').forEach(e => e.addEventListener('click', this.onTabClicked))
    if(this.activeTab.data === 'styles') {
      this.$shadow.querySelector('.styles-content').setAttribute('style', 'display: flex;')
      this.$shadow.querySelector('.tree-content').setAttribute('style', 'display: none;')
    } else if(this.activeTab.data === 'tree') {
      this.$shadow.querySelector('.styles-content').setAttribute('style', 'display: none;')
      this.$shadow.querySelector('.tree-content').setAttribute('style', 'display: flex;')
    }

    const allOpenClose = this.$shadow.querySelectorAll(`.open-close`)
    allOpenClose.forEach(e => e.addEventListener('click', this.onTreeNodeOpenCloseClicked))

    const allTreeNodeNames = this.$shadow.querySelectorAll(`.node .name`)
    allTreeNodeNames.forEach(e => e.addEventListener('click', this.onTreeNodeNameClicked))

    const allTreeNodeActionButtons = this.$shadow.querySelectorAll(`.node .actions .button`)
    allTreeNodeActionButtons.forEach(e => e.addEventListener('click', this.onTreeNodeActionClicked))
    this.$shadow.querySelector('.show-root').addEventListener('click', this.onShowRootTreeClicked)
  }

  createElementTree(element: Element, ariaLevel = 0) {
    const children = element.children.length > 0 ? Array.from(element.children).map(child => this.createElementTree(child, ariaLevel + 1)) : []
    const _debugSource = (element as any)[`__reactFiber$${globalThis.$blingHash}`]?._debugSource
    const fileName = _debugSource ? `${_debugSource?.fileName.split('/').pop()}(${_debugSource?.lineNumber}:${_debugSource?.columnNumber})` : 'inline'
    const selector = cssPath(element)
    return {
      name: `${element.tagName.toLowerCase()}`,
      selector,
      open: children.length > 0 && ariaLevel < 4,
      children: children,
      fileName: ariaLevel < 6 ? fileName : '',
      isSelected: cssPath(globalThis.$target) === selector,
      ariaLevel
    }
  }

  extractFilename(path) {
    if (!path) return 'inline';
    const regex = /[^/]+$/;
    const match = path.match(regex);
    return match ? match[0] : 'inline';
  }
  
  cleanup() {
    this.$shadow.removeEventListener('click', this.doubleClickAttr)
    this.$shadow.querySelectorAll('.tabs .tab').forEach(e => e.removeEventListener('click', this.onTabClicked))
    const allOpenClose = this.$shadow.querySelectorAll(`.open-close`)
    allOpenClose.forEach(e => e.removeEventListener('click', this.onTreeNodeOpenCloseClicked))
    const allTreeNodeNames = this.$shadow.querySelectorAll(`.node .name`)
    allTreeNodeNames.forEach(e => e.removeEventListener('click', this.onTreeNodeNameClicked))
    const allTreeNodeActionButtons = this.$shadow.querySelectorAll(`.node .actions .button`)
    allTreeNodeActionButtons.forEach(e => e.addEventListener('click', this.onTreeNodeActionClicked))
    this.$shadow.querySelector('.show-root').removeEventListener('click', this.onShowRootTreeClicked)
    this.$shadow.innerHTML = ''
  }

  renderTree(node: ElementNode) {
    if(!node) return ''
    const rgbLevel = node.ariaLevel * 14
    return `
      <div class="node">
        <div class="header" 
          style="padding-left: ${18 * node.ariaLevel}px; ${node.isSelected ? `border: 2px solid blue;` : ``} background-color: rgb(${rgbLevel}, ${rgbLevel}, ${rgbLevel});">
          <div 
            class="left"
            data-selector="${node.selector}"
          > 
            <div class="name button" title="${node.fileName}"> ${node.name} </div>
            ${node.children.length > 0 ? 
            `<div 
              class="open-close button" 
              data-state="${node.open}"
              style="color: ${node.open ? '#bfb1b0' : '#ff8400'};"
            > 
              ${node.open ? '▲' : '▼'} 
            </div>` : ''}
          </div>  
          <div class="actions">
            <div class="button edit"> edit </div>
            <div class="button add"> (+) </div>
          </div>
        </div>
        <div class="children">
          ${node.open ? node.children.map(child => this.renderTree(child)).join('\n') : ''} 
        </div>
      </div>
    `
  }

  render() {
    const stylesActive = this.activeTab.data === 'styles'
    const treeActive = this.activeTab.data === 'tree'

    return `
      <div>
        <div class="tabs">
          <div class="tab styles" data-active="${stylesActive}" data-name="styles">
            Styles
          </div>
          <div class="tab tree" data-active="${treeActive}" data-name="tree">
            Tree
          </div>
        </div>
        <div class="styles-content">
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
        <div class="tree-content">
          <div class="modal hidden edit-element">
            <div class="content">
              asodijasodijasoidj
            </div>
          </div>
          <div class="modal hidden add-element">
            <div class="content">
              asodijasodijasoidj
            </div>
          </div>
          <div style="display: flex; justify-content: start;"> 
            <div class="show-root">show root</div>
          </div>
            ${this.renderTree(this.elementTree)}
        </div>
      </div>`
  }
}

customElements.define('uh-web-editor-sidebar', EditorSidebar)

export const WebEditorSidebar = new (customElements.get('uh-web-editor-sidebar'))();