import {
    isFixed,
    colors,
    numberBetween
} from '../utilities/'

export const commands = [
    'zindex',
    'z-index'
]

export const description = 'show the z-index values of all elements that have z-index explicitly set (not auto)'

export default function () {
    // Fun prior art https://gist.github.com/paulirish/211209
    Array.from(document.querySelectorAll('*'))
        .filter(el => window.getComputedStyle(el).getPropertyValue('z-index') !== 'auto')
        .filter(el => el.nodeName !== 'uh-web-editor')
        .forEach(el => {
            const color = colors[numberBetween(0, colors.length)];
            const zindex = window.getComputedStyle(el).getPropertyValue('z-index')

            const label = document.createElement('uh-web-editor-label')

            label.text = `z-index: ${zindex}`
            label.position = {
                boundingRect: el.getBoundingClientRect(),
                isFixed: isFixed(el),
            }
            label.style.setProperty(`--label-bg`, color)

            const overlay = document.createElement('uh-web-editor-hover')
            overlay.position = { el }
            overlay.style.setProperty(`--hover-stroke`, color)
            overlay.style.setProperty(`--position`, isFixed(el) ? 'fixed' : 'absolute')

            document.body.insertAdjacentElement('afterend', label)
            document.body.insertAdjacentElement('afterend', overlay)
        })
}
