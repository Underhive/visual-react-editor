import $ from 'blingblingjs'
import { HandleStyles } from '../styles.store'
import { clamp } from '../../utilities/numbers'
import { paintBackgrounds as paintMarginBackgrounds, removeBackgrounds as removeMarginBackgrounds } from '../../features/margin'
import { paintBackgrounds as paintPaddingBackgrounds, removeBackgrounds as removePaddingBackgrounds  } from '../../features/padding'

export class Handle extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.styles = [HandleStyles]
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = this.styles
    this.$shadow.innerHTML = this.render()
    
    this.button = this.$shadow.querySelector('button')
    this.button.addEventListener('pointerdown', this.on_element_resize_start.bind(this))
    this.placement = this.getAttribute('placement')
  }

  static get observedAttributes() {
    return ['placement']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'placement') {
      this.placement = newValue
    }
  }

  on_element_resize_start(e) {
    e.preventDefault()
    e.stopPropagation()

    if (e.button !== 0 && e.button !== 2) return
    const increasing = e.button === 0

    const placement = this.placement
    const handlesEl = e.composedPath().find(el => el?.tagName?.toLowerCase() === 'uh-web-editor-handles')
    const nodeLabelId = handlesEl.getAttribute('data-label-id')
    const [sourceEl] = $(`[data-label-id="${nodeLabelId}"]`)

    if (!sourceEl) return

    const { x: initialX, y: initialY } = e
    const initialStyle = getComputedStyle(sourceEl)
    const initialWidth = parseFloat(initialStyle.width)
    const initialHeight = parseFloat(initialStyle.height)
    const initialTransform = new DOMMatrix(initialStyle.transform)

    const originalElTransition = sourceEl.style.transition
    const originalDocumentCursor = document.body.style.cursor
    const originalDocumentUserSelect = document.body.style.userSelect
    sourceEl.style.transition = 'none'
    document.body.style.cursor = getComputedStyle(this).getPropertyValue('--cursor')
    document.body.style.userSelect = 'none'

    document.addEventListener('pointermove', on_element_resize_move)

    function on_element_resize_move(e) {
      e.preventDefault()
      e.stopPropagation()

      const newX = clamp(0, e.clientX, document.documentElement.clientWidth)
      const newY = clamp(0, e.clientY, document.documentElement.clientHeight)
    
      const diffX = newX - initialX
      const diffY = newY - initialY

      const paddingOrMargin = placement.includes('top') ? diffY > 0 ? 'padding' : 'margin' : placement.includes('bottom') ? diffY < 0 ? 'padding' : 'margin' : placement.includes('start') ? diffX > 0 ? 'padding' : 'margin' : placement.includes('end') ? diffX < 0 ? 'padding' : 'margin' : null

      if(this.paddingOrMargin != paddingOrMargin) {
        removeMarginBackgrounds([sourceEl])
        removePaddingBackgrounds([sourceEl])
        if(paddingOrMargin == 'margin') {
          paintMarginBackgrounds([sourceEl])
        } else if(paddingOrMargin == 'padding') {
          paintPaddingBackgrounds([sourceEl])
        }
        this.paddingOrMargin = paddingOrMargin
      }

      if (paddingOrMargin) {
        const absDiffX = (increasing ? Math.abs(diffX) : -Math.abs(diffX)) * 0.01
        const absDiffY = (increasing ? Math.abs(diffY) : -Math.abs(diffY)) * 0.01
        if((placement.includes('end') || placement.includes('start')) && (placement.includes('top') || placement.includes('bottom'))) {
          const newPadding = parseFloat(initialStyle[paddingOrMargin]) + absDiffX
          sourceEl.style[paddingOrMargin] = `${newPadding}px`
        } else if(placement.includes('top')) {
          const styleName = `${paddingOrMargin}-top`
          const newPadding = parseFloat(initialStyle[styleName]) + absDiffY
          sourceEl.style[styleName] = `${newPadding}px`
        } else if(placement.includes('bottom')) {
          const styleName = `${paddingOrMargin}-bottom`
          const newPadding = parseFloat(initialStyle[styleName]) + absDiffY
          sourceEl.style[styleName] = `${newPadding}px`
        } else if(placement.includes('middle')) {
          if(placement.includes('start')) {
            const styleName = `${paddingOrMargin}-left`
            const newPadding = parseFloat(initialStyle[styleName]) + absDiffX
            sourceEl.style[styleName] = `${newPadding}px`
          }
          if(placement.includes('end')) {
            const styleName = `${paddingOrMargin}-right`
            const newPadding = parseFloat(initialStyle[styleName]) + absDiffX
            sourceEl.style[styleName] = `${newPadding}px`
          }
        }
      }

      // switch (placement) {
      //   case 'top-start': {
      //     const newWidth = initialWidth - diffX
      //     const newHeight = initialHeight - diffY
      //     const newTranslate = initialTransform.translate(diffX, diffY).transformPoint()

      //     requestAnimationFrame(() => {
      //       sourceEl.style.width = `${newWidth}px`
      //       sourceEl.style.height = `${newHeight}px`
      //       sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
      //     })
      //     break
      //   }
      //   case 'top-center': {
      //     const newHeight = initialHeight - diffY
      //     const newTranslate = initialTransform.translate(0, diffY).transformPoint()

      //     requestAnimationFrame(() => {
      //       sourceEl.style.height = `${newHeight}px`
      //       sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
      //     })
      //     break
      //   }
      //   case 'top-end': {
      //     const newWidth = initialWidth + diffX
      //     const newHeight = initialHeight - diffY
      //     const newTranslate = initialTransform.translate(0, diffY).transformPoint()

      //     requestAnimationFrame(() => {
      //       sourceEl.style.width = `${newWidth}px`
      //       sourceEl.style.height = `${newHeight}px`
      //       sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
      //     })
      //     break
      //   }
      //   case 'middle-start': {
      //     const newWidth = initialWidth - diffX
      //     const newTranslate = initialTransform.translate(diffX).transformPoint()

      //     requestAnimationFrame(() => {
      //       sourceEl.style.width = `${newWidth}px`
      //       sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
      //     })
      //     break
      //   }
      //   case 'middle-end': {
      //     const newWidth = initialWidth + diffX

      //     requestAnimationFrame(() => {
      //       sourceEl.style.width = `${newWidth}px`
      //     })
      //     break
      //   }
      //   case 'bottom-start': {
      //     const newWidth = initialWidth - diffX
      //     const newHeight = initialHeight + diffY
      //     const newTranslate = initialTransform.translate(diffX, 0).transformPoint()

      //     requestAnimationFrame(() => {
      //       sourceEl.style.width = `${newWidth}px`
      //       sourceEl.style.height = `${newHeight}px`
      //       sourceEl.style.transform = `translate(${newTranslate.x}px, ${newTranslate.y}px)`
      //     })
      //     break
      //   }
      //   case 'bottom-center': {
      //     const newHeight = initialHeight + diffY

      //     requestAnimationFrame(() => {
      //       sourceEl.style.height = `${newHeight}px`
      //     })
      //     break
      //   }
      //   case 'bottom-end': {
      //     const newWidth = initialWidth + diffX
      //     const newHeight = initialHeight + diffY

      //     requestAnimationFrame(() => {
      //       sourceEl.style.width = `${newWidth}px`
      //       sourceEl.style.height = `${newHeight}px`
      //     })
      //     break
      //   }
      // }
    }

    document.addEventListener('pointerup', on_element_resize_end, { once: true })
    document.addEventListener('mouseleave', on_element_resize_end, { once: true })

    function on_element_resize_end() {
      document.removeEventListener('pointermove', on_element_resize_move)
      document.body.style.cursor = originalDocumentCursor
      document.body.style.userSelect = originalDocumentUserSelect
      sourceEl.style.transition = originalElTransition
      // removeMarginBackgrounds([sourceEl])
      // removePaddingBackgrounds([sourceEl])
    }
  }

  disconnectedCallback() {
    this.button.removeEventListener('pointerdown', this.on_element_resize_start.bind(this))
  }

  render() {
    return `
      <button type="button" aria-label="Resize"></button>
    `
  }
}

customElements.define('uh-web-editor-handle', Handle)
