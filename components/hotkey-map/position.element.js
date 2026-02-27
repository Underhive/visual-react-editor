import { HotkeyMap } from './base.element'
import { position as icon } from '../uh-web-editor/uh-web-editor.icons'
import { metaKey, altKey } from '../../utilities';

export class PositionHotkeys extends HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'l'
    this._usedkeys  = ['shift',altKey]
    this.tool       = 'position'
  }

  createCommand({e:{code}, hotkeys}) {
    let amount              = hotkeys.shift ? 10 : 1
    let negative            = '[increase/decrease]'
    let negative_modifier   = 'by'
    let side                = '[arrow key]'

    if (code === 'ArrowUp') {
      side     = 'top'
      negative = 'decrease'
    }
    if (code === 'ArrowDown') {
      side     = 'top'
      negative = 'increase'
    }
    if (code === 'ArrowLeft') {
      side     = 'left'
      negative = 'decrease'
    }
    if (code === 'ArrowRight') {
      side     = 'left'
      negative = 'increase'
    }

    return {
      negative, negative_modifier, amount, side,
    }
  }

  displayCommand({negative, negative_modifier, side, amount}) {
    if (negative === `±[${altKey}] `)
      negative = '[increase/decrease]'
    if (negative_modifier === ' to ')
      negative_modifier = ' by '

    return `
      <span negative>${negative}</span>
      <span side tool>${side}</span>
      <span light>${negative_modifier}</span>
      <span amount>${amount}px</span>
    `
  }
}

customElements.define('hotkeys-position', PositionHotkeys)
