import {
  isFixed,
  colors,
  numberBetween
} from '../utilities/'

export const commands = [
    'detect overflows',
    'overflow',
]

export const description = 'find elements that overflow the page body'

export default (elements) => {
    let selectedElements;
    if (elements && elements.selected.length) {
        selectedElements = elements.selected
    } else {
        selectedElements = [document.body]
    }

    document.body.querySelectorAll('uh-web-editor-label')
        .forEach((el) => el.remove())

    selectedElements.map(container => {
        const elementsToCheck = container.querySelectorAll('*')
        elementsToCheck.forEach(el => {
            const overflowingX = el.offsetWidth > container.offsetWidth
            const overflowingY = el.offsetHeight > container.offsetHeight
            const isFlag = el?.tagName?.toLowerCase() === 'uh-web-editor-label'
            const alreadyHasFlag = el.lastChild && el.lastChild.tagName === 'uh-web-editor-label'
            if ((overflowingX || overflowingY) && !isFlag && !alreadyHasFlag) {
                const label = document.createElement('uh-web-editor-label')
                const overflowingBoth = overflowingX && overflowingY;
                label.text = `overflowing ${overflowingBoth ? 'x and y' : overflowingX ? 'x' : 'y'}`
                label.position = {
                    boundingRect: el.getBoundingClientRect(),
                    isFixed: isFixed(el),
                }
                const color = colors[numberBetween(0, colors.length)]
                label.style.setProperty('--label-bg', color)
                container.appendChild(label)
                el.style.setProperty('outline', `1px solid ${color}`)
            }
        })
    })
}