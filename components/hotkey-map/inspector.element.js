import { HotkeyMap } from './base.element'
import { inspector as icon } from '../uh-web-editor/uh-web-editor.icons'
import { altKey } from '../../utilities';

export class InspectorHotkeys extends HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'i'
    this._usedkeys  = [altKey]
    this.tool       = 'inspector'
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
            <span><b>Inspect:</b> hover over any element</span>
            <span><b>Pin Tooltip:</b> click to pin the info panel</span>
            <span><b>Move Tooltip:</b> drag a pinned tooltip</span>
            <span><b>Remove All:</b> press Escape</span>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-inspector', InspectorHotkeys)
