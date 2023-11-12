export const camelToDash = (camelString: string = ""): string =>
  camelString.replace(/([A-Z])/g, ($1) =>
    "-"+$1.toLowerCase())

export const nodeKey = (node: HTMLElement): string => {
  let tree: HTMLElement[] = []
  let furthest_leaf: HTMLElement | false = node

  while (furthest_leaf) {
    tree.push(furthest_leaf)
    furthest_leaf = furthest_leaf.parentNode
      ? furthest_leaf.parentNode as HTMLElement
      : false
  }

  return tree.reduce((path, branch) => `
    ${path}${branch.tagName}_${branch.className}_${[...node.parentNode!.children].indexOf(node)}_${node.children.length}
  `, '')
}

export const createClassname = (el: Element, ellipse = false): string => {
  if (!el.className) return ''
  
  const combined = Array.from(el.classList).reduce((classnames, classname) =>
    classnames += '.' + classname
  , '')

  return ellipse && combined.length > 30
    ? combined.substring(0,30) + '...'
    : combined
}

export const metaKey = window.navigator.platform.includes('Mac')
  ? 'cmd'
  : 'ctrl'

export const altKey = window.navigator.platform.includes('Mac')
  ? 'opt'
  : 'alt'

export const notList = ':not(vis-bug):not(script):not(hotkey-map):not(.visbug-metatip):not(visbug-label):not(visbug-handles):not(visbug-corners):not(visbug-grip):not(visbug-gridlines)'
