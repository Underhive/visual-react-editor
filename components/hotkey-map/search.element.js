import { HotkeyMap } from './base.element'
import { search as icon } from '../uh-web-editor/uh-web-editor.icons'

export class SearchHotkeys extends HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 's'
    this._usedkeys  = []
    this.tool       = 'search'
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
            <span><b>CSS Selector:</b> type any valid selector (e.g. .btn, #hero)</span>
            <span><b>Aliases:</b> "images", "buttons", "links", "text"</span>
            <span><b>Multi-select:</b> use comma-separated selectors</span>
          </div>
        </div>
      </article>
    `
  }
}

customElements.define('hotkeys-search', SearchHotkeys)
