import { HotkeyMap } from './base.element'
import { accessibility as icon } from '../uh-web-editor/uh-web-editor.icons'
import { altKey } from '../../utilities';

export class AccessibilityHotkeys extends HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'p'
    this._usedkeys  = [altKey]
    this.tool       = 'accessibility'
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
            <span><b>Inspect A11y:</b> hover over any element</span>
            <span><b>Pin Tooltip:</b> click to pin accessibility info</span>
            <span><b>Shows:</b> ARIA roles, labels, contrast ratios</span>
            <span><b>Remove All:</b> press Escape</span>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-accessibility', AccessibilityHotkeys)
