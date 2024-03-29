import {
  DesignbarStyles,
} from '../styles.store'

import * as Icons                 from './uh-web-editor.icons'
import {
  schemeRule,
} from '../../utilities'

import Incrementable from '../../utilities/incrementable'
import { Processors, actions } from './designActionProcessors'
import tinycolor from '@ctrl/tinycolor'

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
  latestTarget: any
  processor = new Processors()
  designState: {
    align: true,
    size: true,
    autoLayout: true,
    layer: true,
    fill: true,
  } // TODO: show only the tabs that are needed

  constructor() {
    super()

    this.$shadow = this.attachShadow({mode: 'closed'})
    this.applyScheme    = schemeRule(
      this.$shadow,
      DesignbarStyles, DesignbarStyles, DesignbarStyles
    )

    this.updateTarget = this.updateTarget.bind(this)
  }

  updateTarget(target: any) {
    if(!target[0]) return
    this.latestTarget = target[0]
    const designActionsCategories = actions
    Object.keys(designActionsCategories).forEach(action => {
      Object.keys(designActionsCategories[action]).forEach(key => {
        const type = designActionsCategories[action][key].type
        const prop = designActionsCategories[action][key].prop
        const activationValue = designActionsCategories[action][key].activationValue
        const defaultValue = designActionsCategories[action][key].default
        const regex: RegExp = designActionsCategories[action][key].regex
        const actionName = key
        const el = this.$shadow.querySelector(`[data-name="${actionName}"]`)
        if(el) {
          const styles = window.getComputedStyle(target[0])
          if(Array.isArray(prop)) {
            const value = prop.map(p => styles[p])
            if(value.some(v => activationValue.includes(v))) {
              el.classList.add('active')
            } else {
              el.classList.remove('active')
            }
            return
          }
          const jsxProp = prop.replace(/-./g, match => match.charAt(1).toUpperCase());
          const value = styles[jsxProp]
          if(type === 'button' && prop) {
            if(value === activationValue) {
              el.classList.add('active')
            } else {
              el.classList.remove('active')
            }
          } else if(type === 'input') {
            const valueFromRegex = regex.exec(value)?.[1] ?? regex.exec(value)?.[0] ?? defaultValue
            if(valueFromRegex?.includes?.('rgb')) {
              el.querySelector('input').value = tinycolor(valueFromRegex).toHexString()
              el.querySelector('label').textContent = tinycolor(valueFromRegex).toHexString().toUpperCase()
            } else if(prop === 'opacity') {
              el.querySelector('input').value = (valueFromRegex * 100).toFixed(0)
            } else {
              el.querySelector('input').value = valueFromRegex
            }
          } else if(type === 'select') { 
            el.querySelector('select').value = value ?? defaultValue
          }
        }
      })
    })
  }

  connectedCallback() {
    this.setup()
    this.setupListeners()
  }

  disconnectedCallback() {
    this.cleanup()
  }

  static get observedAttributes() { return ['viewmode','color-scheme'] }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color-scheme')
      this.applyScheme(newValue)
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
    if(!this.$shadow) return
    this.$shadow.innerHTML = ''
  }

  onDesignButtonClick(e, actions) {
    if(!globalThis.$target.data.style) return
    e.stopPropagation()
    e.preventDefault()
    this.sendActions(actions)
  }

  sendActions(actions, ...values) {
    actions.forEach(fn => {
      if(values) {
        this.processor[fn](...values)
      } else {
        this.processor[fn]()
      }
    })
  }

  setupListeners() {
    const designActionsCategories = actions
    Object.keys(designActionsCategories).forEach(action => {
      Object.keys(designActionsCategories[action]).forEach(key => {
        const type = designActionsCategories[action][key].type
        const actions = designActionsCategories[action][key].actions
        const draggable = designActionsCategories[action][key].draggable
        const actionName = key
        const el = this.$shadow.querySelector(`[data-name="${actionName}"]`)
          if(el) {
            if(type === 'button') {
              el.addEventListener('click', e => this.onDesignButtonClick(e, actions))
            } else if(type === 'input') {
              const input = el.querySelector('input')
              if(input.type === "text" && draggable) {
                new Incrementable(input)
                if(el.querySelector('label')) {
                  el.querySelector('label')!.style.cursor = 'ew-resize'
                  el.querySelector('label')!.addEventListener('mousedown', (e: any) => {
                    if(!globalThis.$target.data.style) return
                    e.stopPropagation()
                    e.preventDefault()
                    const value = input.value
                    let startX = e.clientX
                    const onUpdate = (e: any) => {
                      const diff = e.clientX - startX
                      const newValue = parseInt(value) + diff
                      input.value = newValue.toString()
                      // (value, updateUi, updateCode)
                      if(globalThis.$target.data.style) this.sendActions(actions, newValue, true, false)
                    }
                    document.addEventListener('mousemove', onUpdate)
                    document.addEventListener('mouseup', () => {
                      if(!globalThis.$target.data.style) return
                      document.removeEventListener('mousemove', onUpdate)
                      if(globalThis.$target.data.style) this.sendActions(actions, input.value)
                    })
                  })
                }
              }
              input.addEventListener('input', (e: any) => {
                if(!globalThis.$target.data.style) return
                e.stopPropagation()
                e.preventDefault()
                const value = e.target.value
                this.sendActions(actions, value)
              })
            } else if (type === 'select') {
              const select = el.querySelector('select')
              select.addEventListener('change', (e: any) => {
                if(!globalThis.$target.data.style) return
                e.stopPropagation()
                e.preventDefault()
                const value = e.target.value
                this.sendActions(actions, value)
              })
            }
          }
      })
    })
  }

  render() {
    return `
    <div>
        <div class="connection bottom-border">
          <div class="content">
            <div class="row">
              <div class="row">
                <div class="status"></div>
                <span>Not connected</span>
              </div>
              <div class="info" title="If this is a demo, ignore this. If you're running it and this is red then contact support"> i </div>
            </div>
          </div>
        </div>
        <div class="alignments bottom-border">
          <div class="header"><span> Align </span></div>
          <div class="content">
            <div class="button h32 w32" data-name="left" class="align-left" title="Align Left">${Icons.alignments.left}</div>
            <div class="button h32 w32" data-name="hcenter" class="align-hcenter" title="Align Horizontally Center">${Icons.alignments.hcenter}</div>
            <div class="button h32 w32" data-name="right" class="align-right" title="Align Right">${Icons.alignments.right}</div>
            <div class="button h32 w32" data-name="top" class="align-top" title="Align Top">${Icons.alignments.top}</div>
            <div class="button h32 w32" data-name="vcenter" class="align-vcenter" title="Align Vertically Center">${Icons.alignments.vcenter}</div>
            <div class="button h32 w32" data-name="bottom" class="align-bottom" title="Align Bottom">${Icons.alignments.bottom}</div>
          </div>
        </div>

        <div class="sizes-and-borders bottom-border">
          <div class="header">
            <span> Frame </span>
            <div class="button h32 w32 right-set" title="Resize to fit" data-resize="fit"> ${Icons.arrowBoxInward} </div> 
          </div>

          <div class="content">
            <div class="row">
              <div class="boh" data-name="width"> <label>W</label> <input value="128"/> </div>
              <div class="boh" data-name="height"> <label>H</label> <input value="128"/> </div>
              <div class="button h32 w32 right-set" data-name="proportion"> 
                ${'proportional' ? Icons.proportional : Icons.unproportional} 
              </div>
            </div>

            <div class="row">
              <div class="boh" data-name="rotation"> <label>${Icons.rightAngle}</label> <input value="0"/> </div>
              <div class="boh" data-name="borderRadius"> <label>${Icons.corners.topLeft}</label> <input value="0"/> </div>
              <div class="button h32 w32 right-set" data-name="allBorders"> ${Icons.corners.all} </div>
            </div>
            <div class="checkbox" data-name="clipContent"> 
              <input type="checkbox" label="Clip" class="clip" title="Clip"/> <label>Clip content</label> 
            </div>
          </div>
        </div>

        <div class="auto-layout">
          <div class="header">
            <span class="title">Auto layout</span>
          </div>
          <div class="content">
            <div class="row">
              <div class="controls row bohover min-width min-height">
                <div class="button h32 w32" data-name="flexColumn">${Icons.arrowDown}</div>
                <div class="button h32 w32" data-name="flexRow">${Icons.arrowRight}</div>
                <div class="button h32 w32" data-name="flexWrap">${Icons.arrowBack}</div>
              </div>
            </div>
            <div class="alignment-container" data-name="alignGrid">
              ${Icons.dot9Grid}
            </div>
            <div class="row"> 
              <div class="boh" title="Horizontal gap between the elements" data-name="horizontalGap"> <label>HG</label> <input value="128"/> </div>
              <div class="boh" title="Vertical gap between the elements" data-name="verticalGap"> <label>VG</label> <input value="128"/> </div>
            </div>
            <div class="row"> 
              <div class="boh" title="Horizontal padding between the elements" data-name="horizontalPadding"> <label>HP</label> <input value="128"/> </div>
              <div class="boh" title="Vertical padding between the elements" data-name="verticalPadding"> <label>VP</label> <input value="128"/> </div>
            </div>
          </div>
        </div>

        <div class="layer">
          <div class="header">
            <span class="title">Layer</span>
          </div>
          <div class="content">
            <div class="row">
              <div class="boh" data-name="mixBlendMode"> 
                <label>${Icons.tearDrop}</label>
                <select size="1" style="margin-right: 12px;"> 
                  <option value="normal">Normal</option>
                  <option value="multiply">Multiply</option>
                  <option value="screen">Screen</option>
                  <option value="overlay">Overlay</option>
                  <option value="darken">Darken</option>
                  <option value="lighten">Lighten</option>
                  <option value="color-dodge">Color Dodge</option>
                  <option value="color-burn">Color Burn</option>
                  <option value="hard-light">Hard Light</option>
                  <option value="soft-light">Soft Light</option>
                  <option value="difference">Difference</option>
                  <option value="exclusion">Exclusion</option>
                  <option value="hue">Hue</option>
                  <option value="saturation">Saturation</option>
                  <option value="color">Color</option>
                  <option value="luminosity">Luminosity</option>
                  <option value="plus-lighter">Plus Lighter</option>
                </select> 
              </div>
              <div class="boh" data-name="mixBlendModeAlpha"> <input type="text" value="100%"/> </div>
            </div>
          </div>
        </div>

        <div class="fill">
          <div class="header">
            <span class="title">Fill</span>
          </div>
          <div class="content">
            <div class="row">
              <div class="boh" data-name="backgroundColor"> 
                <input id="fill-color" type="color" value="#000000"/>
                <label for="fill-color" style="margin-right: 12px"> #000000 </label>  
              </div>
              <div class="boh" data-name="backgroundColorAlpha"> <input type="text" value="100%"/> </div>
            </div>
          </div>
        </div>

        <div class="stroke">
          <div class="header">
            <span class="title">Stroke</span>
          </div>
          <div class="content">
            <div class="row" style="margin-bottom: 8px" data-name="strokeColor">
              <div class="boh"> 
                <input id="fill-stroke" type="color" value="#000000"/>
                <label for="fill-stroke" style="margin-right: 12px"> #000000 </label>  
              </div>
              <div class="boh" data-name="strokeColorAlpha"> <input type="text" value="100%"/> </div>
            </div>
            <div class="row">
              <div class="boh" data-name="strokeWidth"> 
                <label>${Icons.strokeWidth}</label> <input type="text" value="1"/> 
              </div>
              <div class="boh" data-name="strokeType"> 
                <select size="1" style="margin-right: 12px;"> 
                  <option value="inside">Inside</option>
                  <option value="outside">Outside</option>
                  <option value="center">Center</option>
                </select> 
              </div>
              <div class="button allsides h32 w32 right-set"> ${Icons.allSidesBox} </div>
            </div>
          </div>
        </div>
      </div>`
  }
}

customElements.define('uh-web-editor-designbar', EditorDesignbar)
