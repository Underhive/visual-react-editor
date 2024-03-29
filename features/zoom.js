import { metaKey } from '../utilities/'
import { hideGridlines } from './guides'
import { ArtboardStyles } from '../components/styles.store'

const state = {
  page: {
    scale: 1,
  },
  meta: {
    down: false,
  },
  mouse: {
    x: 0,
    y: 0,
  }
}

const setupDocument = () => {
  const html = document.firstElementChild

  html.style.height = (window.innerHeight + document.body.clientHeight * 1.75) + 'px'
  html.style.width = document.body.clientWidth * 2.5 + 'px'
  document.originalAdoptedStyles = document.adoptedStyleSheets
  document.adoptedStyleSheets = [...document.adoptedStyleSheets, ArtboardStyles]

  document.body.scrollIntoView({
    inline: 'end',
    block: 'start',
    behavior: 'smooth',
  })
}

const isMetaKey = e => 
  e[`${metaKey}Key`] || e.metaKey

export const zoomIn = (amount = .1) => {
  state.page.scale += amount
  state.page.originX = state.mouse.x 
  state.page.originY = state.mouse.y 

  scale()
}

export const zoomOut = (amount = .1) => {
  state.page.scale -= amount
  state.page.originX = state.mouse.x * state.page.scale
  state.page.originY = state.mouse.y * state.page.scale

  if (state.page.scale < .001)
    state.page.scale = .001

  scale()
}

export const zoomToFit = async () => {
  const fixedScale = ((window.innerWidth * .75) / document.body.clientWidth).toFixed(2)
  state.page.scale = parseFloat(fixedScale)

  await scale()

  document.body.scrollIntoView({
    block: 'center',
    inline: 'center',
    behavior: 'smooth',
  })
}

export const zoomToHomebase = async () => {
  state.page.scale = 1

  await scale()

  document.body.scrollIntoView({
    inline: 'center',
    behavior: 'smooth',
  })
}

const scale = async () => {
  const stash = state.webeditor.selection()
  state.webeditor.unselect_all()
  hideGridlines()

  await document.body.animate([{
    transform: `scale(${state.page.scale})`,
    transformOrigin: `${state.page.originX}px ${state.page.originY}px`,
    easing: 'cubic-bezier(0.39, 0.58, 0.57, 1)',
  }], {
    duration: 150,
    fill: 'forwards',
  }).finished

  stash.forEach(el =>
    state.webeditor.select(el))
}

const handleKeydown = e => {
  if (!state.meta.down && isMetaKey(e))
    state.meta.down = true

  if (state.meta.down) {
    switch(e.key) {
      case '=':
        zoomIn()
        break
      case '-':
        zoomOut()
        break
      case '0':
        zoomToHomebase()
        break
      case '9':
        zoomToFit()
        break
    }

    e.preventDefault()
  }
}

const handleKeyup = e => {
  if (state.meta.down && !isMetaKey(e))
    state.meta.down = false
}

const handleWheel = e => {
  if (state.meta.down) {
    e.preventDefault()

    const scaleUp = e.deltaY < 0

    document.body.style.cursor = scaleUp
      ? 'zoom-in'
      : 'zoom-out'

    const speed = .0005
    const finalScale = scaleUp ? state.page.scale + (e.deltaY * speed) : state.page.scale - (e.deltaY * speed)
    state.page.originX = e.clientX * finalScale
    state.page.originY = e.clientY * finalScale

    scaleUp
      ? zoomIn((e.deltaY * speed) * -1)
      : zoomOut(e.deltaY * speed)
  } else {
    document.body.style.cursor = ''
  }
}

const handleMousemove = e => {
  state.mouse.x = e.clientX
  state.mouse.y = e.clientY
}

const start = SelectorEngine => {
  state.webeditor = SelectorEngine

  setupDocument()

  window.addEventListener("keydown", handleKeydown)
  window.addEventListener("keyup", handleKeyup)
  window.addEventListener("wheel", handleWheel, { passive: false })
  window.addEventListener('mousemove', handleMousemove, {passive: true})
}

const stop = () => {
  window.removeEventListener("keydown", handleKeydown)
  window.removeEventListener("keyup", handleKeyup)
  window.removeEventListener("wheel", handleWheel)
  window.removeEventListener('mousemove', handleMousemove)
  document.body.getAnimations().forEach(anim => anim.cancel())
  document.firstElementChild.removeAttribute('style')
  document.adoptedStyleSheets = document.originalAdoptedStyles
}

export const Zoom = {
  start,
  stop,
}
