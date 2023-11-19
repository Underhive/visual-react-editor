import $ from 'blingblingjs'
import { HandlesStyles } from '../styles.store'
import { isFixed } from '../../utilities/';

export class Handles extends HTMLElement {

  constructor() {
    super()
    this.$shadow = this.attachShadow({mode: 'closed'})
    this.styles = [HandlesStyles]
    this.on_window_resize = this.on_window_resize.bind(this)
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = this.styles
    window.addEventListener('resize', this.on_window_resize)
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.on_window_resize)
  }

  on_window_resize() {
    window.requestAnimationFrame(() => {
      const node_label_id = this.$shadow.host.getAttribute('data-label-id')
      const [source_el] = $(`[data-label-id="${node_label_id}"]`)

      if (!source_el) return

      this.position = {
        node_label_id,
        el: source_el,
        isFixed: isFixed(source_el),
      }
    })
  }

  set position({el, node_label_id}) {
    this.$shadow.innerHTML = this.render(el.getBoundingClientRect(), node_label_id, isFixed(el))

    if (this._backdrop) {
      this.backdrop = {
        element: this._backdrop.update(el),
        update:  this._backdrop.update,
      }
    }
  }

  set backdrop(bd) {
    this._backdrop = bd

    const cur_child = this.$shadow.querySelector('uh-web-editor-boxmodel')

    cur_child
      ? this.$shadow.replaceChild(bd.element, cur_child)
      : this.$shadow.appendChild(bd.element)
  }

  render({ x, y, width, height, top, left }, node_label_id, isFixed) {
    this.$shadow.host.setAttribute('data-label-id', node_label_id)

    this.style.setProperty('--top', `${top+window.scrollY}px`)
    this.style.setProperty('--left', `${left+window.scrollX}px`)
    this.style.setProperty('--position', isFixed ? 'fixed' : 'absolute')
    this.style.setProperty('--width', `${width}px`)
    this.style.setProperty('--height', `${height}px`)

    return `
      <svg
        class="uh-web-editor-handles"
        width="${width}" height="${height}"
        viewBox="0 0 ${width} ${height}"
        version="1.1" xmlns="http://www.w3.org/2000/svg"
      >
        <rect stroke="hotpink" fill="none" width="100%" height="100%"></rect>
      </svg>
      <uh-web-editor-handle placement="top-start"></uh-web-editor-handle>
      <uh-web-editor-handle placement="top-center"></uh-web-editor-handle>
      <uh-web-editor-handle placement="top-end"></uh-web-editor-handle>
      <uh-web-editor-handle placement="middle-start"></uh-web-editor-handle>
      <uh-web-editor-handle placement="middle-end"></uh-web-editor-handle>
      <uh-web-editor-handle placement="bottom-start"></uh-web-editor-handle>
      <uh-web-editor-handle placement="bottom-center"></uh-web-editor-handle>
      <uh-web-editor-handle placement="bottom-end"></uh-web-editor-handle>
    `
  }
}

customElements.define('uh-web-editor-handles', Handles)
