import {
  SidebarStyles,
} from '../styles.store'

import {
  schemeRule,
  updateAppliedStyles,
  cssPath,
  showOneOffHandle,
  elementDebugSource,
  hitEditSytlesheet,
  elementAlternateDebugSource
} from '../../utilities'
import { EditText } from '../../features'

import Incrementable from '../../utilities/incrementable'

type ElementNode = {
  name: string
  selector: string
  open: boolean
  selected?: boolean
  parentSelected?: boolean
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
  rootFiberNode: any
  latestTarget: any

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
        this.rootFiberNode = (document.querySelector('#root') as any)
        if(!this.rootFiberNode) {
          this.rootFiberNode = (document.querySelector('body') as any) // Next JS with react doesn't have a root element
        }

        if(!this.rootFiberNode) return console.error('No root element found')

        this.rootFiberNode.scrollIntoView({ behavior: 'smooth',  block: 'start', inline: 'center'})

        let blingHash
        for(let key in this.rootFiberNode) {
          if(key.startsWith('__reactContainer$') || key.startsWith('__reactFiber$')) {
            blingHash = key.split('$')[1]
            break
          }
        }
        globalThis.$blingHash = blingHash
        this.elementTree = this.createElementTree(this.rootFiberNode)
        const latestStyles = updateAppliedStyles(this.rootFiberNode)
        this.appliedStyles = latestStyles
        this.cleanup()
        this.setup()
      }
    })

    globalThis.sharedStorage.set('currentStyles', new Proxy({ data: [] }, {
      set: (target, key, value) => {
        if(key === 'data') {
          target[key] = value
          this.appliedStyles = value
        }
        return true
      }
    }))

    globalThis.$target = new Proxy({ data: {} }, {
      set: (target, key, value) => {
        if(key === 'data') {
          target[key] = value

          this.setNodeSelected(cssPath(globalThis.$target.data))
          this.cleanup()
          this.setup()

          const selectedNode = this.$shadow.querySelector(`.node [data-selector="${cssPath(globalThis.$target.data)}"]`)
          selectedNode?.parentElement?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' });
          
          if(value.parentNode) {
            this.elementTree = this.createElementTree(value.parentNode)
          } else {
            this.elementTree = this.createElementTree(value)
          }
        }
        return true
      }
    })

    this.updateTarget = this.updateTarget.bind(this)
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

  updateTarget(target: any) {
    if(!target[0]) return
    this.latestTarget = target[0]

  }

  editClassName = (action: {
    edit?: { [oldName: string]: string },
    add?: string[]
  }) => {
    const data = {
      log: {
        classNameChanges: action,
        source: {
          type: 'inline'
        }
      },
      source: globalThis.sharedStorage.get('currentElementReactFiberSource')
    }
    hitEditSytlesheet(data, elementAlternateDebugSource(globalThis.$target.data))
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
        data.log.source = latestStyles.find(style => style.parentRuleSelector === e.target.dataset.selector && style.sourceMapJSON?.sources?.[0] === e.target.dataset.file) ?? {
          type: 'inline',
        }
        hitEditSytlesheet(data, elementAlternateDebugSource(globalThis.$target.data))
        this.blurAwaitingPost = undefined
      }
    }
  }

  setNodeSelected = (selector: string) => {
    const node = this.elementTree    
    const foundNode = this.findNode(node, selector)
    if(!foundNode) return
    foundNode.selected = true
    this.setChildrenSelected(foundNode)
  }

  setChildrenSelected = (node: ElementNode) => {
    node.children.forEach(child => {
      child.parentSelected = true
      if(child.children.length > 0) {
        this.setChildrenSelected(child)
      }
    })
  }

  findNode = (node: ElementNode, selector: string): ElementNode => {
    if(node.selector === selector) return node
    if(node.children.length > 0) {
      for(let i = 0; i < node.children.length; i++) {
        const foundNode = this.findNode(node.children[i], selector)
        if(foundNode) return foundNode
      }
    }
    return undefined
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
    if(!this.rootFiberNode) return
    const rootFiberNode = this.rootFiberNode
    rootFiberNode.scrollIntoView({ behavior: 'smooth',  block: 'start', inline: 'center'})
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
    const foundNode = this.findNode(node, selector)
    if(!foundNode) return
    foundNode.open = !state
    this.cleanup()
    this.setup()
  }

  onTreeNodeNameClicked = e => {
    const selector = e.target.parentNode.dataset.selector
    const elementFromSelector = document.querySelector(selector)

    elementFromSelector.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })

    setTimeout(() => {
      elementFromSelector.animate([
        { backgroundColor: 'transparent' },
        { backgroundColor: 'hsla(330, 100%, 40%, 70%)' },
        { backgroundColor: 'transparent' },
      ], 600)
    }, 500)
    
    showOneOffHandle(elementFromSelector, -9999)

    const latestStyles = updateAppliedStyles(elementFromSelector)
    this.appliedStyles = latestStyles
    console.log('latestStyles', latestStyles)
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

  onClassNameDeleteClicked = e => {
      const className = e.target.parentNode.querySelector('input').value
      this.editClassName({ edit: { [className]: '' } })
  }

  onClassNameEdited = e => {
    const className = e.target.value
    const oldClassName = e.target.dataset.old
    this.editClassName({ edit: { [oldClassName]: className } })
    e.target.dataset.old = className
  }

  onClassNameAddClicked = e => {
    const classInput = this.$shadow.querySelector('.class-new-input') as HTMLInputElement
    const newClass = classInput.value
    globalThis.$target.data.classList.add(newClass)
    this.cleanup()
    this.setup()
    this.editClassName({ add: [newClass] })
  }

  stopBubbling = e => e.key != 'Escape' && e.stopPropagation()

  onInsertCssClassFocus = e => {
    e.target.addEventListener('keydown', this.stopBubbling)
  }

  onInsertCssClassBlur = e => {
    e.target.removeEventListener('keydown', this.stopBubbling)
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
    this.$shadow.querySelector('.show-root')?.addEventListener('click', this.onShowRootTreeClicked)

    this.$shadow.querySelectorAll('.class-list .class')?.forEach(e => {
      e.querySelector('.delete')?.addEventListener('dblclick', this.onClassNameDeleteClicked)
      e.querySelector('input')?.addEventListener('change', this.onClassNameEdited)
      e.querySelector('input')?.addEventListener('focus', this.onInsertCssClassFocus)
      e.querySelector('input')?.addEventListener('blur', this.onInsertCssClassBlur)
    })

    this.$shadow.querySelector('.add-class')?.addEventListener('click', this.onClassNameAddClicked)
  }

  createElementTree(element: Element, ariaLevel = 1) {
    const children = element.children.length > 0 ? Array.from(element.children).map(child => this.createElementTree(child, ariaLevel + 1)) : []
    const _debugSource = elementDebugSource(element)
    const fileName = _debugSource?.fileName ? `${_debugSource?.fileName.split('/').pop()}(${_debugSource?.lineNumber}:${_debugSource?.columnNumber})` : 'inline'
    const selector = cssPath(element)
    return {
      name: `${element.tagName.toLowerCase()}`,
      selector,
      open: children.length > 0 && ariaLevel < 4,
      children: children,
      fileName: ariaLevel < 6 ? fileName : '',
      isSelected: cssPath(globalThis.$target.data) === selector,
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
    if(!this.$shadow) return
    
    this.$shadow.removeEventListener('click', this.doubleClickAttr)
    this.$shadow.querySelectorAll('.tabs .tab')?.forEach(e => e.removeEventListener('click', this.onTabClicked))
    const allOpenClose = this.$shadow.querySelectorAll(`.open-close`)
    allOpenClose?.forEach(e => e.removeEventListener('click', this.onTreeNodeOpenCloseClicked))
    const allTreeNodeNames = this.$shadow.querySelectorAll(`.node .name`)
    allTreeNodeNames?.forEach(e => e.removeEventListener('click', this.onTreeNodeNameClicked))
    const allTreeNodeActionButtons = this.$shadow.querySelectorAll(`.node .actions .button`)
    allTreeNodeActionButtons?.forEach(e => e.addEventListener('click', this.onTreeNodeActionClicked))
    this.$shadow.querySelector('.show-root')?.removeEventListener('click', this.onShowRootTreeClicked)
    this.$shadow.querySelectorAll('.class-list .class')?.forEach(e => {
      e.querySelector('.delete')?.removeEventListener('dblclick', this.onClassNameDeleteClicked)
      e.querySelector('input')?.removeEventListener('change', this.onClassNameEdited)
      e.querySelector('input')?.removeEventListener('focus', this.onInsertCssClassFocus)
      e.querySelector('input')?.removeEventListener('blur', this.onInsertCssClassBlur)
    })
    this.$shadow.querySelector('.add-class')?.removeEventListener('click', this.onClassNameAddClicked)
    this.$shadow.innerHTML = ''
  }

  renderTree(node: ElementNode) {
    if(!node) return ''
    const rgbLevel = node.ariaLevel * 8
    return `
      <div class="node">
        <div class="header" 
          data-parent-selected="${node.parentSelected}"
          style="
            padding-left: ${18 * node.ariaLevel}px; 
            ${node.selected ? `border: 1px solid var(--theme-blue);` : ``} 
            ${!node.parentSelected ? `background-color: rgb(${rgbLevel}, ${rgbLevel}, ${rgbLevel});` : ``}
          ">
          <div 
            class="left"
            data-selector="${node.selector}"
          > 
          
            <div class="name button" title="${node.fileName}"> ${node.name} </div>
            ${node.children.length > 0 ? 
              `<div 
                class="open-close button" 
                data-state="${node.open}"
                style="color: ${node.open ? '#bfb1b0' : '#69a7ff'};"
              > 
                ${node.open ? '▲' : '▼'} 
              </div>` : ''}
          </div>  
          <div class="actions">
          <!-- <div class="button edit"> edit </div> --->
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
    const treeActive = this.activeTab.data === 'tree';
    const classList = this.latestTarget?.classList?.value?.trim()?.split(' ').filter( name => name.length > 0 ) ?? []

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
          <div class="class-list" data-length="${classList.length}">
            <div class="header">Element Classes</div>
              <div class="list">
                <div class="empty-box">
                  No classes found
                </div>
                ${classList.map(className => `
                  <div class="class">
                    <input value="${className}" data-old="${className}" title="edit it to a new class"></input>
                    <div class="delete" title="Double click to delete"> delete </div>
                  </div>`
                ).join('\n')}
                
                <div class="class" style="display: none;">
                  <input class="class-new-input" placeholder="new class"></input>
                  <div class="add-class">insert</div>
                </div>
              </div>
          </div>
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
              coming soon
            </div>
          </div>
          <div class="modal hidden add-element">
            <div class="content">
              coming soon
            </div>
          </div>
          <div style="display: flex; justify-content: start;"> 
            <div class="show-root">Show Root</div>
          </div>
            ${this.renderTree(this.elementTree)}
        </div>
      </div>`
  }
}

customElements.define('uh-web-editor-sidebar', EditorSidebar)
