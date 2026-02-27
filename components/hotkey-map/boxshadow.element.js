import { HotkeyMap } from './base.element'
import { boxshadow as icon } from '../uh-web-editor/uh-web-editor.icons'
import { metaKey, altKey } from '../../utilities';

export class BoxshadowHotkeys extends HotkeyMap {
  constructor() {
    super()

    this._hotkey    = 'd'
    this._usedkeys  = ['shift',metaKey]
    this.tool       = 'boxshadow'
  }

  createCommand({e:{code}, hotkeys}) {
    let amount              = hotkeys.shift ? 10 : 1
    let negative            = '[increase/decrease]'
    let negative_modifier   = 'by'
    let side                = '[arrow key]'

    // opacity
    if (hotkeys[metaKey] && (code === 'ArrowLeft' || code === 'ArrowRight')) {
      side = 'opacity'

      if (code === 'ArrowLeft')
        negative = 'decrease'
      if (code === 'ArrowRight')
        negative = 'increase'
    }
    // blur
    else if (hotkeys[altKey === 'opt' ? 'alt' : altKey] && (code === 'ArrowUp' || code === 'ArrowDown')) {
      side = 'blur'

      if (code === 'ArrowUp')
        negative = 'increase'
      if (code === 'ArrowDown')
        negative = 'decrease'
    }
    // spread
    else if (hotkeys[altKey === 'opt' ? 'alt' : altKey] && (code === 'ArrowLeft' || code === 'ArrowRight')) {
      side = 'spread'

      if (code === 'ArrowLeft')
        negative = 'decrease'
      if (code === 'ArrowRight')
        negative = 'increase'
    }
    // x/y position
    else if (code === 'ArrowUp' || code === 'ArrowDown') {
      side = 'y position'

      if (code === 'ArrowUp')
        negative = 'decrease'
      if (code === 'ArrowDown')
        negative = 'increase'
    }
    else if (code === 'ArrowLeft' || code === 'ArrowRight') {
      side = 'x position'

      if (code === 'ArrowLeft')
        negative = 'decrease'
      if (code === 'ArrowRight')
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
      <span amount>${amount}</span>
    `
  }
}

customElements.define('hotkeys-boxshadow', BoxshadowHotkeys)
