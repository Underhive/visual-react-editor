import $ from 'blingblingjs'
import hotkeys from 'hotkeys-js'
import { getNodeIndex, showEdge, notList } from '../utilities/'
import { toggleWatching } from './imageswap'

const key_events = 'up,down,left,right'
const state = {
  drag: {
    src:        null,
    parent:     null,
    parent_ui:  [],
    siblings:   new Map(),
    ghost:      null,
  },
  hover: {
    dropzones: [],
    observers: [],
  },
}
// todo: indicator for when node can descend
// todo: have it work with shadowDOM
export function Moveable(uhWebEditor) {
  hotkeys(key_events, (e, {key}) => {
    if (e.cancelBubble) return

    e.preventDefault()
    e.stopPropagation()

    uhWebEditor.selection().forEach(el => {
      moveElement(el, key)
      updateFeedback(el)
    })
  })

  uhWebEditor.onSelectedUpdate(dragNDrop)
  toggleWatching({watch: false})

  return () => {
    toggleWatching({watch: true})
    uhWebEditor.removeSelectedCallback(dragNDrop)
    clearListeners()
    hotkeys.unbind(key_events)
  }
}

export function moveElement(el, direction) {
  if (!el) return

  switch(direction) {
    case 'left':
      if (canMoveLeft(el))
        el.parentNode.insertBefore(el, el.previousElementSibling)
      else
        showEdge(el.parentNode)
      break

    case 'right':
      if (canMoveRight(el) && el.nextElementSibling.nextSibling)
        el.parentNode.insertBefore(el, el.nextElementSibling.nextSibling)
      else if (canMoveRight(el))
        el.parentNode.appendChild(el)
      else
        showEdge(el.parentNode)
      break

    case 'up':
      if (canMoveUp(el))
        popOut({el})
      break

    case 'down':
      if (canMoveUnder(el))
        popOut({el, under: true})
      else if (canMoveDown(el))
        el.nextElementSibling.prepend(el)
      break
  }
}

export const canMoveLeft    = el => el.previousElementSibling
export const canMoveRight   = el => el.nextElementSibling
export const canMoveDown    = el => el.nextElementSibling && el.nextElementSibling.children.length
export const canMoveUnder   = el => !el.nextElementSibling && el.parentNode && el.parentNode.parentNode
export const canMoveUp      = el => el.parentNode && el.parentNode.parentNode

export const popOut = ({el, under = false}) =>
  el.parentNode.parentNode.insertBefore(el,
    el.parentNode.parentNode.children[
      under
        ? getNodeIndex(el) + 1
        : getNodeIndex(el)])

const getLayoutDirection = (parent) => {
  const style = getComputedStyle(parent)
  if (style.display.includes('flex') && style.flexDirection.startsWith('row')) return 'horizontal'
  if (style.display.includes('grid')) {
    const cols = style.gridTemplateColumns
    if (cols && cols.split(' ').filter(v => v !== '').length > 1) return 'horizontal'
  }
  return 'vertical'
}

const createGhost = (src) => {
  const ghost = src.cloneNode(true)
  ghost.setAttribute('uh-web-editor-drop-ghost', '')
  ghost.removeAttribute('draggable')
  ghost.removeAttribute('uh-web-editor-selected')
  ghost.removeAttribute('uh-web-editor-drag-src')
  Object.assign(ghost.style, {
    opacity: '0.4',
    pointerEvents: 'none',
    outline: '2px dashed var(--theme-color, #0C8CE9)',
    outlineOffset: '-2px',
    transition: 'none',
  })
  return ghost
}

export function dragNDrop(selection) {
  if (!selection.length)
    return

  clearListeners()

  const [src]         = selection
  const {parentNode}  = src

  const validMoveableChildren = [...parentNode.querySelectorAll(':scope > *' + notList)]

  const tooManySelected       = selection.length !== 1
  const hasNoSiblingsToDrag   = validMoveableChildren.length <= 1
  const isAnSVG               = src instanceof SVGElement

  if (tooManySelected || hasNoSiblingsToDrag || isAnSVG)
    return

  validMoveableChildren.forEach(sibling =>
    state.drag.siblings.set(sibling, createGripUI(sibling)))

  state.drag.parent     = parentNode
  state.drag.parent_ui  = createParentUI(parentNode)

  moveWatch(state.drag.parent)
}

const moveWatch = node => {
  const $node = $(node)

  $node.on('dragstart', dragStart)

  state.drag.siblings.forEach((grip, sibling) => {
    sibling.setAttribute('draggable', true)
    $(sibling).on('mouseenter', siblingHoverIn)
    $(sibling).on('mouseleave', siblingHoverOut)
  })
}

const moveUnwatch = node => {
  const $node = $(node)

  $node.off('dragstart', dragStart)

  state.drag.siblings.forEach((grip, sibling) => {
    sibling.removeAttribute('draggable')
    $(sibling).off('mouseenter', siblingHoverIn)
    $(sibling).off('mouseleave', siblingHoverOut)
  })
}

const dragStart = (e) => {
  const target = e.target
  if (!state.drag.siblings.has(target))
    return

  state.drag.src = target
  state.drag.ghost = createGhost(target)
  state.hover.dropzones.push(createDropzoneUI(target))
  state.drag.siblings.get(target).style.opacity = 0.01

  target.setAttribute('uh-web-editor-drag-src', true)
  ghostNode(target)

  // Hide browser's default drag image
  const img = new Image()
  img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  e.dataTransfer.setDragImage(img, 0, 0)
  e.dataTransfer.effectAllowed = 'move'

  document.addEventListener('dragover', documentDragOver)
  document.addEventListener('drop', documentDrop)
  target.addEventListener('dragend', dragEnd)

  $('uh-web-editor-hover').forEach(el =>
    !el.hasAttribute('uh-web-editor-drag-container') && el.remove())
}

const documentDragOver = e => {
  e.preventDefault()
  e.dataTransfer.dropEffect = 'move'

  if (!state.drag.src) return

  const ghost = state.drag.ghost
  const src = state.drag.src

  // Temporarily hide ghost to find element underneath
  if (ghost.parentNode) ghost.style.display = 'none'
  let target = document.elementFromPoint(e.clientX, e.clientY)
  if (ghost.parentNode) ghost.style.display = ''

  if (!target) return

  // Walk up past editor UI and ghost elements
  while (target && target !== document.body && target !== document.documentElement) {
    const tag = (target.tagName || '').toLowerCase()
    if (tag.startsWith('uh-web-editor') || target.hasAttribute('uh-web-editor-drop-ghost')) {
      target = target.parentElement
      continue
    }
    break
  }

  if (!target || target === document.body || target === document.documentElement) return

  // Don't drop inside the source element
  if (src.contains(target) || target === src) return

  const container = target.parentElement
  if (!container || container === document.documentElement) return

  // Don't insert into the source element
  if (src.contains(container)) return

  const rect = target.getBoundingClientRect()
  const direction = getLayoutDirection(container)
  const isHorizontal = direction === 'horizontal'

  const ratio = isHorizontal
    ? (e.clientX - rect.left) / rect.width
    : (e.clientY - rect.top) / rect.height
  const before = ratio < 0.5

  let refChild = before ? target : target.nextElementSibling
  // Skip ghost and src in ref chain
  while (refChild && (refChild === ghost || refChild === src)) {
    refChild = refChild.nextElementSibling
  }

  // Avoid unnecessary DOM thrashing - check if ghost is already at the right spot
  if (ghost.parentNode === container) {
    let ghostNext = ghost.nextElementSibling
    while (ghostNext && ghostNext === src) ghostNext = ghostNext.nextElementSibling
    if (refChild === ghostNext) return
  }

  // Move ghost to position
  if (ghost.parentNode) ghost.remove()
  if (refChild && refChild.parentNode === container) {
    container.insertBefore(ghost, refChild)
  } else {
    container.appendChild(ghost)
  }
}

const documentDrop = e => {
  e.preventDefault()
  if (!state.drag.src || !state.drag.ghost) return

  const src = state.drag.src
  const ghost = state.drag.ghost

  // Insert src at ghost's position
  if (ghost.parentNode) {
    ghost.parentNode.insertBefore(src, ghost)
    ghost.remove()
  }

  cleanupDrag()
}

const dragEnd = () => {
  // Fires after drop or on cancel (Esc)
  // If ghost still exists in DOM, drag was cancelled
  if (state.drag.ghost && state.drag.ghost.parentNode)
    state.drag.ghost.remove()

  cleanupDrag()
}

const cleanupDrag = () => {
  const src = state.drag.src
  if (!src) return

  src.removeAttribute('uh-web-editor-drag-src')
  ghostBuster(src)
  src.removeEventListener('dragend', dragEnd)

  if (state.drag.siblings.has(src))
    state.drag.siblings.get(src).style.opacity = null

  state.hover.dropzones.forEach(zone =>
    zone.remove())

  document.removeEventListener('dragover', documentDragOver)
  document.removeEventListener('drop', documentDrop)

  state.drag.src = null
  state.drag.ghost = null
}

const siblingHoverIn = ({target}) => {
  if (!state.drag.siblings.has(target))
    return

  state.drag.siblings.get(target)
    .toggleHovering({hovering:true})
}

const siblingHoverOut = ({target}) => {
  if (!state.drag.siblings.has(target))
    return

  state.drag.siblings.get(target)
    .toggleHovering({hovering:false})
}

const ghostNode = ({style}) => {
  style.transition  = 'opacity .25s ease-out'
  style.opacity     = 0.3
}

const ghostBuster = ({style}) => {
  style.transition  = null
  style.opacity     = null
}

const createDropzoneUI = el => {
  const zone = document.createElement('uh-web-editor-corners')

  zone.position = {el}
  document.body.insertAdjacentElement('afterend', zone)

  const observer = new MutationObserver(list =>
    zone.position = {el})

  observer.observe(el.parentNode, {
    childList: true,
    subtree: true,
  })

  state.hover.observers.push(observer)

  return zone
}

const createGripUI = el => {
  const grip = document.createElement('uh-web-editor-grip')

  grip.position = {el}
  document.body.insertAdjacentElement('afterend', grip)

  const observer = new MutationObserver(list =>
    grip.position = {el})

  observer.observe(el.parentNode, {
    childList: true,
    subtree: true,
  })

  state.hover.observers.push(observer)

  return grip
}

const createParentUI = parent => {
  const hover = document.createElement('uh-web-editor-hover')
  const label = document.createElement('uh-web-editor-label')

  hover.position = {el:parent}
  hover.setAttribute('uh-web-editor-drag-container', true)

  label.text = 'Drag Bounds'
  label.position = {boundingRect: parent.getBoundingClientRect()}
  label.style.setProperty('--label-bg', 'var(--theme-purple)')

  document.body.insertAdjacentElement('afterend', hover)
  document.body.insertAdjacentElement('afterend', label)

  const observer = new MutationObserver(list => {
    hover.position = {el:parent}
    label.position = {boundingRect: parent.getBoundingClientRect()}
  })

  observer.observe(parent, {
    childList: true,
    subtree: true,
  })

  state.hover.observers.push(observer)

  return [hover,label]
}

export function clearListeners() {
  moveUnwatch(state.drag.parent)

  state.hover.observers.forEach(observer =>
    observer.disconnect())

  state.hover.dropzones.forEach(zone =>
    zone.remove())

  state.drag.siblings.forEach((grip, sibling) =>
    grip.remove())

  state.drag.parent_ui.forEach(ui =>
    ui.remove())

  if (state.drag.ghost) {
    if (state.drag.ghost.parentNode) state.drag.ghost.remove()
    state.drag.ghost = null
  }

  document.removeEventListener('dragover', documentDragOver)
  document.removeEventListener('drop', documentDrop)

  if (state.drag.src) {
    state.drag.src.removeEventListener('dragend', dragEnd)
  }

  state.hover.observers = []
  state.hover.dropzones = []
  state.drag.parent_ui  = []
  state.drag.siblings.clear()
}

const updateFeedback = el => {
  let options = ''
  // get current elements offset/size
  if (canMoveLeft(el))  options += '⇠'
  if (canMoveRight(el)) options += '⇢'
  if (canMoveDown(el))  options += '⇣'
  if (canMoveUp(el))    options += '⇡'
  // create/move arrows in absolute/fixed to overlay element
  options && console.info('%c'+options, "font-size: 2rem;")
}
