import { HotkeyMap } from './base.element'
import { text as icon } from '../uh-web-editor/uh-web-editor.icons'

export class TextHotkeys extends HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'e'
    this._usedkeys  = []
    this.tool       = 'text'
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
            <span><b>Edit Text:</b> double-click any text element</span>
            <span><b>Finish Editing:</b> click outside or press Escape</span>
            <span><b>Note:</b> changes are saved to source automatically</span>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-text', TextHotkeys)
