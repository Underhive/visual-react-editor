import { desiredPropMap } from './design-properties'

export const getStyle = (el: Element, name: string): string | undefined => {
  if (document.defaultView && document.defaultView.getComputedStyle) {
    name = name.replace(/([A-Z])/g, '-$1')
    name = name.toLowerCase()
    let s = document.defaultView.getComputedStyle(el, '')
    return s && s.getPropertyValue(name)
  } 
}

interface Style {
  prop: string;
  value: string;
}

export const getStyles = (el): Style[] => {
  const elStyleObject = el.style
  const computedStyle = window.getComputedStyle(el, null)
  const vettedStyles: Style[] = []
  const borders: {[key: string]: string} = {}

  for (const prop in el.style) {
    const is_desired = desiredPropMap[prop]

    if (is_desired && is_desired != computedStyle[prop])
      vettedStyles.push({
        prop: prop,
        value: computedStyle[prop],
      })

    if (prop === 'borderColor' || prop === 'borderWidth' || prop === 'borderStyle')
      borders[prop] = computedStyle[prop].replace(/, rgba/g, '\rrgba')
  }

  const { borderColor, borderWidth, borderStyle } = borders

  if (parseFloat(borderWidth) > 0) {
    vettedStyles.push({
      prop: 'borderColor',
      value: borderColor,
    })

    vettedStyles.push({
      prop: 'borderStyle',
      value: borderStyle,
    })

    vettedStyles.push({
      prop: 'borderWidth',
      value: borderWidth,
    })
  }

  return vettedStyles.sort(function({prop:propA}, {prop:propB}) {
    if (propA < propB) return -1
    if (propA > propB) return 1
    return 0
  })
}

let canvas_color: string
export const getComputedCanvasBackgroundColor = (): string => {
  if (canvas_color) return canvas_color

  const foo = document.createElement('span')
  foo.style.backgroundColor = 'Canvas'
  document.body.appendChild(foo)
  canvas_color = getComputedStyle(foo).backgroundColor
  document.body.removeChild(foo)

  return canvas_color
}

export const getComputedBackgroundColor = (el: Element) => {
  let background = getStyle(el, 'background-color')

  if (background === 'rgba(0, 0, 0, 0)') {
    let node  = findNearestParentElement(el)
      , found = false

    while(!found) {
      let bg  = getStyle(node, 'background-color')

      if (node.nodeName === 'HTML') {
        found = true
        background = getComputedCanvasBackgroundColor()
      }

      if (bg !== 'rgba(0, 0, 0, 0)') {
        found = true
        background = bg
      }

      node = findNearestParentElement(node)
    }
  }

  return background
}

export const findNearestParentElement = (el): Element => {
  if (el.nodeName === 'HTML') return el

  return el.parentNode && el.parentNode.nodeType === 1
    ? el.parentNode as Element
    : el.parentNode.nodeName === '#document-fragment'
      ? el.parentNode.host as Element
      : el.parentNode.parentNode.host as Element
}

export const findNearestChildElement = (el: Element): Element | undefined => {
  if (el.shadowRoot && el.shadowRoot.children.length) {
    return [...el.shadowRoot.children]
      .filter(({nodeName}) => 
        !['LINK','STYLE','SCRIPT','HTML','HEAD'].includes(nodeName)
      )[0]
  }
  else if (el.children.length)
    return el.children[0]
}

export const loadStyles = async (stylesheets: string[]): Promise<void> => {
  const fetches = await Promise.all(stylesheets.map(url => fetch(url)))
  const texts   = await Promise.all(fetches.map(url => url.text()))
  const style   = document.createElement('style')

  style.textContent = texts.reduce((styles, fileContents) => 
    styles + fileContents
  , '')

  document.head.appendChild(style)
}

// returns [full, color, x, y, blur, spread]
export const getShadowValues = (shadow: string): RegExpExecArray | null =>
  /([^\)]+\)) ([^\s]+) ([^\s]+) ([^\s]+) ([^\s]+)/.exec(shadow)

// returns [full, color, x, y, blur]
export const getTextShadowValues = (shadow: string): RegExpExecArray | null =>
  /([^\)]+\)) ([^\s]+) ([^\s]+) ([^\s]+)/.exec(shadow)

const fontCacheMap = new Map<string, string | boolean>()
export const firstUsableFontFromFamily = (family: string) => {
  if (fontCacheMap.has(family))
    return fontCacheMap.get(family) as string | false

  // todo: check cache for family string and return already computed value
  const fonts = family.split(',')
  const canvas = window.document.createElement('canvas')
  const context = canvas.getContext('2d')

  const match = fonts
    .map(font => font.trim())
    .map(name => {
      const matches = String(name).match(/^["']?(.+?)["']?$/i);
      return Array.isArray(matches) ? matches[1] : '';
    })
    .map(fontName => {
      const baselineSize = context?.measureText('font-test').width

      context!.font = `12px ${fontName}, sans-serif`

      return baselineSize !== context?.measureText('font-test').width 
        ? fontName 
        : false
  }).filter(value => value !== false)[0]

  fontCacheMap.set(family, match)

  return match
}
