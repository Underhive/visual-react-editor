import $          from 'blingblingjs'
import hotkeys    from 'hotkeys-js'

import {
  DesignbarStyles,
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
}

export default class EditorDesignbar extends HTMLElement {
  
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
      DesignbarStyles, DesignbarStyles, DesignbarStyles
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
  }

  cleanup() {
    this.$shadow.innerHTML = ''
  }


  render() {

    return `
    <div>
        <div class="alignments bottom-border">
          <div class="header"><span> Align </span></div>
          <div class="content">
            <div class="button h32 w32" data-align="left" class="align-left" title="Align Left">${Icons.alignments.left}</div>
            <div class="button h32 w32" data-align="hcenter" class="align-hcenter" title="Align Horizontally Center">${Icons.alignments.hcenter}</div>
            <div class="button h32 w32" data-align="right" class="align-right" title="Align Right">${Icons.alignments.right}</div>
            <div class="button h32 w32" data-align="top" class="align-top" title="Align Top">${Icons.alignments.top}</div>
            <div class="button h32 w32" data-align="vcenter" class="align-vcenter" title="Align Vertically Center">${Icons.alignments.vcenter}</div>
            <div class="button h32 w32" data-align="bottom" class="align-bottom" title="Align Bottom">${Icons.alignments.bottom}</div>
          </div>
        </div>

        <div class="sizes-and-borders bottom-border">
          <div class="header">
            <span> Frame </span>
            <div class="button h32 w32 right-set" title="Resize to fit"> ${Icons.arrowBoxInward} </div> 
          </div>

          <div class="content">
            <div class="row">
              <div class="boh"> <label>W</label> <input value="128"/> </div>
              <div class="boh"> <label>H</label> <input value="128"/> </div>
              <div class="button h32 w32 right-set"> ${'proportional' ? Icons.proportional : Icons.unproportional} </div>
            </div>

            <div class="row">
              <div class="boh"> <label>${Icons.rightAngle}</label> <input value="0"/> </div>
              <div class="boh"> <label>${Icons.corners.topLeft}</label> <input value="0"/> </div>
              <div class="button h32 w32 right-set"> ${Icons.corners.all} </div>
            </div>
            <input type="checkbox" label="Clip" class="clip" title="Clip"> Clip content </input>
          </div>
        </div>

        <div class="auto-layout">
          <div class="header">
            <span class="title">Auto layout</span>
          </div>
          <div class="content">
            <div class="row">
              <div class="controls row bohover min-width min-height">
                <div class="button h32 w32">${Icons.arrowDown}</div>
                <div class="button h32 w32 ">${Icons.arrowRight}</div>
                <div class="button h32 w32 ">${Icons.arrowBack}</div>
              </div>
            </div>
            <div class="alignment-container">
              ${Icons.dot9Grid}
            </div>
          </div>
        </div>
      </div>`
  }
}

customElements.define('uh-web-editor-designbar', EditorDesignbar)

export const WebEditorDesignbar = new (customElements.get('uh-web-editor-designbar'))();
