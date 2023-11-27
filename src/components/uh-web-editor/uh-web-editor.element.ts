import $          from 'blingblingjs'
import hotkeys    from 'hotkeys-js'

import {
  Handles, Handle, Label, Overlay, Gridlines, Corners,
  Hotkeys, Metatip, Ally, Distance, BoxModel, Grip
} from '..'

import {
  Selectable, Moveable, Padding, Margin, EditText, Font,
  Flex, Search, ColorPicker, BoxShadow, HueShift, MetaTip,
  Guides, Screenshot, Position, Accessibility, draggable, Zoom
} from '../../features'

import {
  WebEditorStyles,
  WebEditorLightStyles,
  WebEditorDarkStyles
} from '../styles.store'

import { WebEditorModel }            from './model'
import * as Icons                 from './uh-web-editor.icons'
import { provideSelectorEngine }  from '../../features/search'
// import { PluginRegistry }         from '../../plugins/_registry'
import {
  metaKey,
  isPolyfilledCE,
  constructibleStylesheetSupport,
  schemeRule
} from '../../utilities'
import { Creator } from '../../features/creator'
import WebEditorSidebar from './sidebar.element'
import WebEditorDesignbar from './designbar.element'

export class WebEditor extends HTMLElement  {
  connected
  lastPowerPressed
  $shadow
  toolbar_model: {
    [key: string]: {
      tool: string,
      label: string,
      description: string,
      icon: string,
      instruction: string
    }
  }
  active_tool
  applyScheme
  designbar
  sidebar
  selectorEngine
  colorPicker
  deactivate_feature
  _tutsBaseURL


  constructor() {
    super()

    this.toolbar_model  = WebEditorModel
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.applyScheme    = schemeRule(
      this.$shadow,
      WebEditorStyles, WebEditorLightStyles, WebEditorDarkStyles
    )
    this.lastPowerPressed = 0
  }

  connectedCallback() {
    hotkeys.unbind('z') // z is poweroff
    this.connected = true
    this.designbar = new WebEditorDesignbar();
    this.sidebar = new WebEditorSidebar();
    this._tutsBaseURL = this.getAttribute('tutsBaseURL') || 'tuts'

    this.setup()

    this.selectorEngine = Selectable(this)
    // this.colorPicker    = ColorPicker(this.$shadow, this.selectorEngine)

    provideSelectorEngine(this.selectorEngine)

    if (this.getAttribute('viewmode') == 'artboard')
      Zoom.start(this.selectorEngine)

    this.toolSelected($('[data-tool="guides"]', this.$shadow)[0])
    
    document.firstElementChild.prepend(this.designbar)
    document.firstElementChild.prepend(this.sidebar)
    this.selectorEngine.onSelectedUpdate(this.designbar.updateTarget)
  }

  powerOff() {
    this.deactivate_feature()
    this.cleanup()
    this.selectorEngine.disconnect()
    hotkeys.unbind(
      Object.keys(this.toolbar_model).reduce((events, key) => {
        if(key != 'z') {
          return events += ',' + key
        }
        return events
      })) // z is poweroff
    hotkeys.unbind(`${metaKey}+/,${metaKey}+.`)

    if (this.getAttribute('viewmode') == 'artboard')
      Zoom.stop()
    this.designbar.remove()
    this.sidebar.remove()
    this.connected = false
    this.$shadow.querySelector('ol').dataset.connected = false
  }

  disconnectedCallback() {
    this.deactivate_feature()
    this.cleanup()
    this.selectorEngine.disconnect()
    hotkeys.unbind(
      Object.keys(this.toolbar_model).reduce((events, key) =>
        events += ',' + key, ''))
    hotkeys.unbind(`${metaKey}+/,${metaKey}+.`)

    if (this.getAttribute('viewmode') == 'artboard')
      Zoom.stop()
    this.designbar.remove()
    this.sidebar.remove()
  }

  static get observedAttributes() { return ['viewmode','color-scheme'] }

  attributeChangedCallback(name, oldValue, newValue) {
    newValue === 'artboard'
      ? Zoom.start(this.selectorEngine)
      : Zoom.stop()

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
      : this.setAttribute('color-scheme', 'dark')

    const main_ol = this.$shadow.querySelector('ol:not([colors])')
    const buttonPieces = $('li[data-tool], li[data-tool] *', main_ol)

    const clickEvent = (e) => {
      const target = e.currentTarget || e.target
      const toolButton = target.closest('[data-tool]')
      if (toolButton) {
        this.toolSelected(toolButton);
        e.stopPropagation()
      };
    }

    Array.from(buttonPieces)
    .forEach(toolButton => {
      draggable({
        el:this,
        surface: toolButton,
        cursor: 'pointer',
        clickEvent: clickEvent
      })
    })

    draggable({
      el: this,
      surface: main_ol,
      cursor: 'grab',
      clickEvent: clickEvent
    })

    Object.entries(this.toolbar_model).forEach(([key, value]) =>
      hotkeys(key, e => {
        e.preventDefault()
        this.toolSelected(
          $(`[data-tool="${(value as any).tool}"]`, this.$shadow)[0]
        )
      })
    )

    hotkeys(`${metaKey}+/,${metaKey}+.`, e => {
      this.$shadow.host.style.display =
        this.$shadow.host.style.display === 'none'
          ? 'block'
          : 'none'
    })
  }

  cleanup() {
    Array.from(document.body.children)
      .filter(node => node.nodeName.includes('web-editor'))
      .forEach(el => el.remove())

    document.querySelectorAll('[data-pseudo-select=true]')
      .forEach(el =>
        el.removeAttribute('data-pseudo-select'))
  }

  toolSelected(el) {
    if (typeof el === 'string')
      el = $(`[data-tool="${el}"]`, this.$shadow)[0]

    if (this.active_tool && this.active_tool.dataset.tool === el.dataset.tool && this.active_tool && this.active_tool?.dataset?.tool != 'power') return

    if (this.active_tool && el.dataset.tool != 'power') {
      this.active_tool.attr('data-active', null)
      this.deactivate_feature()
    }

    if(el.dataset.tool == 'power' && (Date.now() - this.lastPowerPressed < 500)) {
      el.attr('data-active', true)
      this.active_tool = el
      this[el.dataset.tool]()
      this.lastPowerPressed = 0
    } else if(el.dataset.tool != 'power') {
      el.attr('data-active', true)
      this.active_tool = el
      this[el.dataset.tool]()
    } else {
      this.lastPowerPressed = Date.now()
    }
  }

  render() {
    return `
      <uh-web-editor-hotkeys></uh-web-editor-hotkeys>
      <ol constructible-support="${constructibleStylesheetSupport ? 'false':'true'}" data-connected=${this.connected}>
        ${Object.entries(this.toolbar_model).reduce((list, [key, tool]) => `
          ${list}
          <li aria-label="${tool.label} Tool" aria-description="${tool.description}" aria-hotkey="${key}" data-tool="${tool.tool}" data-active="${key == 'g'}">
            ${tool.icon}
            ${this.demoTip({key, ...tool})}
          </li>
        `,'')}
      </ol>
    `
  }
  // ^^^^^^^^^^
  // <ol colors>
  //   <li class="color" id="foreground" aria-label="Text" aria-description="Change the text color">
  //     <input type="color">
  //     ${Icons.color_text}
  //   </li>
  //   <li class="color" id="background" aria-label="Background or Fill" aria-description="Change the background color or fill of svg">
  //     <input type="color">
  //     ${Icons.color_background}
  //   </li>
  //   <li class="color" id="border" aria-label="Border or Stroke" aria-description="Change the border color or stroke of svg">
  //     <input type="color">
  //     ${Icons.color_border}
  //   </li>
  // </ol>

  demoTip({key, tool, label, description, instruction}) {
    return `
      <aside ${tool}>
        <figure>
          <figcaption>
            <h2>
              ${label}
              <span hotkey>${key}</span>
            </h2>
            <p>${description}</p>
            ${instruction}
          </figcaption>
        </figure>
      </aside>
    `
  }

  move() {
    this.deactivate_feature = Moveable(this.selectorEngine)
  }

  margin() {
    this.deactivate_feature = Margin(this.selectorEngine)
  }

  padding() {
    this.deactivate_feature = Padding(this.selectorEngine)
  }

  font() {
    this.deactivate_feature = Font(this.selectorEngine)
  }

  text() {
    this.selectorEngine.onSelectedUpdate(EditText)
    this.deactivate_feature = () =>
      this.selectorEngine.removeSelectedCallback(EditText)
  }

  align() {
    this.deactivate_feature = Flex(this.selectorEngine)
  }

  search() {
    this.deactivate_feature = Search($('[data-tool="search"]', this.$shadow))
  }

  create() {
    this.deactivate_feature = Creator($('[data-tool="create"]', this.$shadow))
  }

  boxshadow() {
    this.deactivate_feature = BoxShadow(this.selectorEngine)
  }

  power() {
    // this.deactivate_feature = undefined
    if(Date.now() - this.lastPowerPressed < 500) {
      if(this.connected) {
        this.powerOff()
      } else {
        this.connectedCallback()
      }
      this.lastPowerPressed = 0
    } else {
      this.lastPowerPressed = Date.now()
    }
  }

  inspector() {
    this.deactivate_feature = MetaTip(this.selectorEngine)
  }

  accessibility() {
    this.deactivate_feature = Accessibility(this.selectorEngine)
  }

  guides() {
    this.deactivate_feature = Guides(this.selectorEngine)
  }

  screenshot() {
    this.deactivate_feature = Screenshot()
  }

  position() {
    let feature = Position()
    this.selectorEngine.onSelectedUpdate(feature.onNodesSelected)
    this.deactivate_feature = () => {
      this.selectorEngine.removeSelectedCallback(feature.onNodesSelected)
      feature.disconnect()
    }
  }

  execCommand(command) {
    const query = `/${command}`

    // if (PluginRegistry.has(query))
    //   return PluginRegistry.get(query)({
    //     selected: this.selectorEngine.selection(),
    //     query
    //   })

    return Promise.resolve(new Error("Query not found"))
  }

  get activeTool() {
    return this.active_tool.dataset.tool
  }
}

// customElements.define('uh-web-editor', WebEditor)

// export const WebEditorElement = new (customElements.get('uh-web-editor'))();