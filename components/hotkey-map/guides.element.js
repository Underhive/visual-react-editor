import { HotkeyMap } from './base.element'
import { guides as icon } from '../uh-web-editor/uh-web-editor.icons'

export class GuidesHotkeys extends HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'g'
    this._usedkeys  = ['shift']
    this.tool       = 'guides'
  }

  render() {
    return `
      <article>
        <div tool-icon>
          <span>
            ${icon}
            ${this._tool} Tool
          </span>
        </div>
        <div command>
          <div style="display:flex;flex-direction:column;gap:0.5em;padding:0.5em;">
            <span><b>Element Guides:</b> hover over elements</span>
            <span><b>Measure Distance:</b> click element, then hover another</span>
            <span><b>Sticky Measurement:</b> shift + click</span>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-guides', GuidesHotkeys)
