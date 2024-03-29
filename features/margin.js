import hotkeys from 'hotkeys-js'
import { metaKey, getStyle, getSide, showHideSelected } from '../utilities/'

const key_events = 'up,down,left,right'
  .split(',')
  .reduce((events, event) =>
    `${events},${event},alt+${event},shift+${event},shift+alt+${event}`
  , '')
  .substring(1)

const command_events = `${metaKey}+up,${metaKey}+shift+up,${metaKey}+down,${metaKey}+shift+down`

export function Margin(uhWebEditor) {
  hotkeys(key_events, (e, handler) => {
    if (e.cancelBubble) return

    e.preventDefault()
    pushElement(uhWebEditor.selection(), handler.key)
  })

  hotkeys(command_events, (e, handler) => {
    e.preventDefault()
    pushAllElementSides(uhWebEditor.selection(), handler.key)
  })

  uhWebEditor.onSelectedUpdate(paintBackgrounds)

  return () => {
    hotkeys.unbind(key_events)
    hotkeys.unbind(command_events)
    hotkeys.unbind('up,down,left,right') // bug in lib?
    uhWebEditor.removeSelectedCallback(paintBackgrounds)
    removeBackgrounds(uhWebEditor.selection())
  }
}

export function pushElement(els, direction) {
  els
    .map(el => showHideSelected(el))
    .map(el => ({
      el,
      style:    'margin' + getSide(direction),
      current:  parseInt(getStyle(el, 'margin' + getSide(direction)), 10),
      amount:   direction.split('+').includes('shift') ? 10 : 1,
      negative: direction.split('+').includes('alt'),
    }))
    .map(payload =>
      Object.assign(payload, {
        margin: payload.negative
          ? payload.current - payload.amount
          : payload.current + payload.amount
      }))
    .forEach(({el, style, margin}) =>
      el.style[style] = `${margin < 0 ? 0 : margin}px`)
}

export function pushAllElementSides(els, keycommand) {
  const combo = keycommand.split('+')
  let spoof = ''

  if (combo.includes('shift'))  spoof = 'shift+' + spoof
  if (combo.includes('down'))   spoof = 'alt+' + spoof

  'up,down,left,right'.split(',')
    .forEach(side => pushElement(els, spoof + side))
}

export function paintBackgrounds(els) {
  els.forEach(el => {
    const label_id = el.getAttribute('data-label-id')

    document
      .querySelector(`uh-web-editor-handles[data-label-id="${label_id}"]`)
      .backdrop = {
        element:  createMarginVisual(el),
        update:   createMarginVisual,
      }
  })
}

export function removeBackgrounds(els) {
  els.forEach(el => {
    const label_id = el.getAttribute('data-label-id')
    const boxmodel = document.querySelector(`uh-web-editor-handles[data-label-id="${label_id}"]`)
      .$shadow.querySelector('uh-web-editor-boxmodel')

    if (boxmodel) boxmodel.remove()
  })
}

export function createMarginVisual(el, hover = false) {
  const bounds            = el.getBoundingClientRect()
  const calculatedStyle   = getStyle(el, 'margin')
  const boxdisplay        = document.createElement('uh-web-editor-boxmodel')

  if (calculatedStyle !== '0px') {
    const sides = {
      top:    getStyle(el, 'marginTop'),
      right:  getStyle(el, 'marginRight'),
      bottom: getStyle(el, 'marginBottom'),
      left:   getStyle(el, 'marginLeft'),
    }

    Object.entries(sides).forEach(([side, val]) => {
      if (typeof val !== 'number')
        val = parseInt(getStyle(el, 'margin'+'-'+side).slice(0, -2))

      sides[side] = Math.round(val.toFixed(1) * 100) / 100
    })

    boxdisplay.position = { 
      mode: 'margin',
      color: hover ? 'var(--theme-purple)' : 'var(--theme-color)',
      bounds, 
      sides,
    }
  }

  return boxdisplay
}
