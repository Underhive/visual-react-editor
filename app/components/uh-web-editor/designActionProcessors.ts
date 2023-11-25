import axios from 'axios'
import { apiURL, elementAlternateDebugSource, hitEditSytlesheet, updateAppliedStyles } from '../../utilities'

export class Processors {
  alignLeft: () => void
  alignHCenter: () => void
  alignRight: () => void
  alignTop: () => void
  alignVCenter: () => void
  alignBottom: () => void
  resizeFit: () => void
  resizeWidth: (value: string) => void
  resizeHeight: (value: string) => void
  resizeProportion: () => void
  resizeRotation: (value: string) => void
  resizeBorderRadius: (value: string) => void
  resizeAllBorders: () => void
  autoLayoutFlexRow: () => void
  autoLayoutFlexColumn: () => void
  autoLayoutFlexWrap: () => void
  autoLayoutAlignGrid: (num: number) => void
  autoLayoutHorizontalGap: (value: string) => void
  autoLayoutVerticalGap: (value: string) => void
  autoLayoutHorizontalPadding: (value: string) => void
  autoLayoutVerticalPadding: (value: string) => void
  layerMixBlendMode: (value: string) => void
  layerMixBlendModeAlpha: (value: string) => void
  fillBackgroundColor: (value: string) => void
  fillBackgroundColorAlpha: (value: string) => void
  strokeColor: (value: string) => void
  strokeColorAlpha: (value: string) => void
  strokeWidth: (value: string) => void
  strokeType: (value: string) => void
  strokeTop: () => void
  strokeRight: () => void
  strokeBottom: () => void
  strokeLeft: () => void

  constructor() {
    this.alignLeft = alignLeft
    this.alignHCenter = alignHCenter
    this.alignRight = alignRight
    this.alignTop = alignTop
    this.alignVCenter = alignVCenter
    this.alignBottom = alignBottom
    this.resizeFit = resizeFit
    this.resizeWidth = resizeWidth
    this.resizeHeight = resizeHeight
    this.resizeProportion = resizeProportion
    this.resizeRotation = resizeRotation
    this.resizeBorderRadius = resizeBorderRadius
    this.resizeAllBorders = resizeAllBorders
    this.autoLayoutFlexRow = autoLayoutFlexRow
    this.autoLayoutFlexColumn = autoLayoutFlexColumn
    this.autoLayoutFlexWrap = autoLayoutFlexWrap
    this.autoLayoutAlignGrid = autoLayoutAlignGrid
    this.autoLayoutHorizontalGap = autoLayoutHorizontalGap
    this.autoLayoutVerticalGap = autoLayoutVerticalGap
    this.autoLayoutHorizontalPadding = autoLayoutHorizontalPadding
    this.autoLayoutVerticalPadding = autoLayoutVerticalPadding
    this.layerMixBlendMode = layerMixBlendMode
    this.layerMixBlendModeAlpha = layerMixBlendModeAlpha
    this.fillBackgroundColor = fillBackgroundColor
    this.fillBackgroundColorAlpha = fillBackgroundColorAlpha
    this.strokeColor = strokeColor
    this.strokeColorAlpha = strokeColorAlpha
    this.strokeWidth = strokeWidth
    this.strokeType = strokeType
    this.strokeTop = strokeTop
    this.strokeRight = strokeRight
    this.strokeBottom = strokeBottom
    this.strokeLeft = strokeLeft
  }
}

export const alignLeft = () => {
  const target = globalThis.$target.data
  
  const parent = target.parentElement

  if (parent) {
    const isFlex = parent.style.display === 'flex'
    const isFlexRow = parent.style.flexDirection === 'row'
    const isFlexColumn = parent.style.flexDirection === 'column'

    if (isFlex && isFlexRow) {
      const data = {
        name: 'justify-self',
        value: 'flex-start',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else if (isFlex && isFlexColumn) {
      const data = {
        name: 'align-self',
        value: 'flex-start',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else {
      // make parent flex
      const parentData = {
        name: 'display',
        value: 'flex',
      }
      parent.style[parentData.name] = parentData.value
      sendInlineStyle(parentData)


      const data = {
        name: 'align-self',
        value: 'flex-start',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    }
  }
}

export const alignHCenter = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'align-self',
    value: 'center',
  }

  const parent = target.parentElement
  if(parent) {
    const isFlex = parent.style.display === 'flex'
    const isFlexRow = parent.style.flexDirection === 'row'
    const isFlexColumn = parent.style.flexDirection === 'column'

    if (isFlex && isFlexRow) {
      const data = {
        name: 'justify-self',
        value: 'center',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else if (isFlex && isFlexColumn) {
      const data = {
        name: 'align-self',
        value: 'center',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else {
      // make parent flex
      const parentData = {
        name: 'display',
        value: 'flex',
      }
      parent.style[parentData.name] = parentData.value
      sendInlineStyle(parentData)


      const data = {
        name: 'align-self',
        value: 'center',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    }
  }
}

export const alignRight = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'align-self',
    value: 'flex-end',
  }

  const parent = target.parentElement
  if(parent) {
    const isFlex = parent.style.display === 'flex'
    const isFlexRow = parent.style.flexDirection === 'row'
    const isFlexColumn = parent.style.flexDirection === 'column'

    if (isFlex && isFlexRow) {
      const data = {
        name: 'justify-self',
        value: 'flex-end',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else if (isFlex && isFlexColumn) {
      const data = {
        name: 'align-self',
        value: 'flex-end',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else {
      // make parent flex
      const parentData = {
        name: 'display',
        value: 'flex',
      }
      parent.style[parentData.name] = parentData.value
      sendInlineStyle(parentData)

      const data = {
        name: 'align-self',
        value: 'flex-end',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    }
  }
}

export const alignTop = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'justify-self',
    value: 'flex-start',
  }

  const parent = target.parentElement
  if(parent) {
    const isFlex = parent.style.display === 'flex'
    const isFlexRow = parent.style.flexDirection === 'row'
    const isFlexColumn = parent.style.flexDirection === 'column'

    if (isFlex && isFlexRow) {
      const data = {
        name: 'align-self',
        value: 'flex-start',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else if (isFlex && isFlexColumn) {
      const data = {
        name: 'justify-self',
        value: 'flex-start',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else {
      // make parent flex
      const parentData = {
        name: 'display',
        value: 'flex',
      }
      parent.style[parentData.name] = parentData.value
      sendInlineStyle(parentData)

      const data = {
        name: 'justify-self',
        value: 'flex-start',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    }
  }
}

export const alignVCenter = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'justify-self',
    value: 'center',
  }

  const parent = target.parentElement
  if(parent) {
    const isFlex = parent.style.display === 'flex'
    const isFlexRow = parent.style.flexDirection === 'row'
    const isFlexColumn = parent.style.flexDirection === 'column'

    if (isFlex && isFlexRow) {
      const data = {
        name: 'align-self',
        value: 'center',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else if (isFlex && isFlexColumn) {
      const data = {
        name: 'justify-self',
        value: 'center',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else {
      // make parent flex
      const parentData = {
        name: 'display',
        value: 'flex',
      }
      parent.style[parentData.name] = parentData.value
      sendInlineStyle(parentData)

      
      const data = {
        name: 'justify-self',
        value: 'center',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    }
  }
}

export const alignBottom = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'justify-self',
    value: 'flex-end',
  }

  const parent = target.parentElement
  if(parent) {
    const isFlex = parent.style.display === 'flex'
    const isFlexRow = parent.style.flexDirection === 'row'
    const isFlexColumn = parent.style.flexDirection === 'column'

    if (isFlex && isFlexRow) {
      const data = {
        name: 'align-self',
        value: 'flex-end',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else if (isFlex && isFlexColumn) {
      const data = {
        name: 'justify-self',
        value: 'flex-end',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    } else {
      // make parent flex
      const parentData = {
        name: 'display',
        value: 'flex',
      }
      parent.style[parentData.name] = parentData.value
      sendInlineStyle(parentData)


      const data = {
        name: 'justify-self',
        value: 'flex-end',
      }
      // target.style[data.name] = data.value
      sendInlineStyle(data)
    }
  }
}

export const resizeFit = () => {
  const target = globalThis.$target.data
  // resize width and height to fit content
  const data = {
    name: 'width',
    value: 'fit-content',
  }
  // target.style[data.name] = data.value

  const data2 = {
    name: 'height',
    value: 'fit-content',
  }
  // target.style[data2.name] = data2.value
}

export const resizeWidth = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'width',
    value: `${value}px`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const resizeHeight = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'height',
    value: `${value}px`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const resizeProportion = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'object-fit',
    value: 'cover',
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const resizeRotation = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'transform',
    value: `rotate(${value}deg)`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const resizeBorderRadius = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'border-radius',
    value: `${value}px`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const resizeAllBorders = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'border',
    value: '1px solid #000',
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const autoLayoutFlexRow = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'display',
    value: 'flex',
  }
  const data2 = {
    name: 'flex-direction',
    value: 'row',
  }
  // target.style[data2.name] = data2.value

  // target.style[data.name] = data.value
  sendInlineStyle(data)
  sendInlineStyle(data2)
}

export const autoLayoutFlexColumn = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'display',
    value: 'flex',
  }
  // target.style[data.name] = data.value

  const data2 = {
    name: 'flex-direction',
    value: 'column',
  }
  // target.style[data2.name] = data2.value
  sendInlineStyle(data)
  sendInlineStyle(data2)
}


export const autoLayoutFlexWrap = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'display',
    value: 'flex',
  }
  // target.style[data.name] = data.value

  const data2 = {
    name: 'flex-wrap',
    value: 'wrap',
  }
  target.style[data.name] = data2.value
  sendInlineStyle(data)
}

export const autoLayoutAlignGrid = (num: number) => {
  const target = globalThis.$target.data
  // | 0: top-left | 1: top-center | 2: top-right | 
  // | 3: center-left | 4: center-center | 5: center-right |
  // | 6: bottom-left | 7: bottom-center | 8: bottom-right |

  if(num === 0) {
    const data = {
      name: 'justify-content',
      value: 'flex-start',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'flex-start',
    }
    // target.style[data2.name] = data2.value
  }

  if(num === 1) {
    const data = {
      name: 'justify-content',
      value: 'center',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'flex-start',
    }
    // target.style[data2.name] = data2.value
  }

  if(num === 2) {
    const data = {
      name: 'justify-content',
      value: 'flex-end',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'flex-start',
    }
    // target.style[data2.name] = data2.value
  }

  if(num === 3) {
    const data = {
      name: 'justify-content',
      value: 'flex-start',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'center',
    }
    // target.style[data2.name] = data2.value
  }

  if(num === 4) {
    const data = {
      name: 'justify-content',
      value: 'center',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'center',
    }
    // target.style[data2.name] = data2.value
  }

  if(num === 5) {
    const data = {
      name: 'justify-content',
      value: 'flex-end',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'center',
    }
    // target.style[data2.name] = data2.value
  }

  if(num === 6) {
    const data = {
      name: 'justify-content',
      value: 'flex-start',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'flex-end',
    }
    // target.style[data2.name] = data2.value
  }

  if(num === 7) {
    const data = {
      name: 'justify-content',
      value: 'center',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'flex-end',
    }
    // target.style[data2.name] = data2.value
  }

  if(num === 8) {
    const data = {
      name: 'justify-content',
      value: 'flex-end',
    }
    // target.style[data.name] = data.value

    const data2 = {
      name: 'align-items',
      value: 'flex-end',
    }
    // target.style[data2.name] = data2.value
  }
  // sendInlineStyle(data)

}

export const autoLayoutHorizontalGap = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'gap',
    value: `0 ${value}px`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const autoLayoutVerticalGap = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'gap',
    value: `${value}px 0`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const autoLayoutHorizontalPadding = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'padding',
    value: `0 ${value}px`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const autoLayoutVerticalPadding = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'padding',
    value: `${value}px 0`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const layerMixBlendMode = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'mix-blend-mode',
    value: value,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const layerMixBlendModeAlpha = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'opacity',
    value: Number(value) / 100,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const fillBackgroundColor = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'background-color',
    value: value,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const fillBackgroundColorAlpha = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'opacity',
    value: Number(value) / 100,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const strokeColor = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'border-color',
    value: value,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const strokeColorAlpha = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'opacity',
    value: Number(value) / 100,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const strokeWidth = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'border-width',
    value: `${value}px`,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const strokeType = (value) => {
  const target = globalThis.$target.data
  const data = {
    name: 'border-style',
    value: value,
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const strokeTop = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'border-top',
    value: '1px solid #000',
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const strokeRight = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'border-right',
    value: '1px solid #000',
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const strokeBottom = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'border-bottom',
    value: '1px solid #000',
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

export const strokeLeft = () => {
  const target = globalThis.$target.data
  const data = {
    name: 'border-left',
    value: '1px solid #000',
  }
  // target.style[data.name] = data.value
  sendInlineStyle(data)
}

const sendInlineStyle = (data) => {
  updateAppliedStyles(globalThis.$target.data, true)
  const source = globalThis.sharedStorage.get('currentElementReactFiberSource')
  data.name = data.name.replace(/-./g, match => match.charAt(1).toUpperCase())
  const event = {
    log: {...data, source: { type: 'inline' }},
    source: source,
    timestamp: Date.now()
  }

  hitEditSytlesheet(event, elementAlternateDebugSource(globalThis.$target.data))
}

export const actions = {
  align: {
    left: {
      type: 'button',
      prop: 'align-self',
      activationValue: 'flex-start',
      actions: ['alignLeft']
    },
    hcenter: {
      type: 'button',
      prop: 'align-self',
      activationValue: 'center',
      actions: ['alignHCenter']
    },
    right: {
      type: 'button',
      prop: 'align-self',
      activationValue: 'flex-end',
      actions: ['alignRight']
    },
    top: {
      type: 'button',
      prop: 'justify-self',
      activationValue: 'flex-start',
      actions: ['alignTop']
    },
    vcenter: {
      type: 'button',
      prop: 'justify-self',
      activationValue: 'center',
      actions: ['alignVCenter']
    },
    bottom: {
      type: 'button',
      prop: 'justify-self',
      activationValue: 'flex-end',
      actions: ['alignBottom']
    },
  },
  resize: {
    fit: {
      type: 'button',
      prop: 'object-fit',
      activationValue: 'cover',
      actions: ['resizeFit']
    },
    width: {
      type: 'input',
      default: '0',
      prop: 'width',
      regex: /(.*?)px/,
      actions: ['resizeWidth']
    },
    height: {
      type: 'input',
      default: '0',
      prop: 'height',
      regex: /(.*?)px/,
      actions: ['resizeHeight']
    },
    proportion: {
      type: 'button',
      prop: 'object-fit',
      activationValue: 'cover',
      actions: ['resizeProportion'] // this is wrong
    },
    rotation: {
      type: 'input',
      default: '0',
      prop: 'transform',
      regex: /rotate\((.*?)deg\)/,
      actions: ['resizeRotation']
    },
    borderRadius: {
      type: 'input',
      default: '0',
      prop: 'border-radius',
      regex: /(.*?)px/,
      actions: ['resizeBorderRadius']
    },
    allBorders: {
      type: 'button',
      prop: 'border',
      activationValue: '1px solid #000',
      actions: ['resizeAllBorders']
    },
  },
  autoLayout: {
    flexRow: {
      type: 'button',
      prop: ['display', 'flex-direction'],
      activationValue: ['flex', 'row'],
      actions: ['autoLayoutFlexRow']
    },
    flexColumn: {
      type: 'button',
      prop: ['flex-direction'],
      activationValue: ['column'],
      actions: ['autoLayoutFlexColumn']
    },
    flexWrap: {
      type: 'button',
      prop: ['flex-wrap'],
      activationValue: ['wrap'],
      actions: ['autoLayoutFlexWrap']
    },
    alignGrid: {
      type: 'button',
      prop: ['justify-content', 'align-items'],
      activationValue: ['flex-start', 'flex-start'],
      actions: ['autoLayoutAlignGrid']
    },
    horizontalGap: {
      type: 'input',
      default: '0',
      prop: 'gap',
      regex: /0 (.*?)px/,
      actions: ['autoLayoutHorizontalGap']
    },
    verticalGap: {
      type: 'input',
      default: '0',
      prop: 'gap',
      regex: /(.*?)px 0/,
      actions: ['autoLayoutVerticalGap']
    },
    horizontalPadding: {
      type: 'input',
      default: '0',
      prop: 'padding',
      regex: /0 (.*?)px/,
      actions: ['autoLayoutHorizontalPadding']
    },
    verticalPadding: {
      type: 'input',
      default: '0',
      prop: 'padding',
      regex: /(.*?)px 0/,
      actions: ['autoLayoutVerticalPadding']
    },
  },
  layer: {
    mixBlendMode: {
      type: 'select',
      prop: 'mix-blend-mode',
      actions: ['layerMixBlendMode']
    },
    mixBlendModeAlpha: {
      type: 'input',
      default: '100',
      prop: 'opacity',
      regex: /.*/,
      actions: ['layerMixBlendModeAlpha']
    },
  },
  fill: {
    backgroundColor: {
      type: 'input',
      default: '#000000',
      prop: 'background-color',
      regex: /.*/,
      actions: ['fillBackgroundColor']
    },
    backgroundColorAlpha: {
      type: 'input',
      default: '100',
      prop: 'opacity',
      regex: /.*/,
      actions: ['fillBackgroundColorAlpha']
    },
  },
  stroke: {
    strokeColor: {
      type: 'input',
      default: '#000000',
      prop: 'border-color',
      regex: /.*/,
      actions: ['strokeColor']
    },
    strokeColorAlpha: {
      type: 'input',
      default: '100',
      prop: 'opacity',
      regex: /.*/,
      actions: ['strokeColorAlpha']
    },
    strokeWidth: {
      type: 'input',
      default: '0',
      prop: 'border-width',
      regex: /(.*?)px/,
      actions: ['strokeWidth']
    },
    strokeType: {
      type: 'select',
      prop: 'border-style',
      actions: ['strokeType']
    },
    allSides: {
      type: 'button',
      prop: ['border-top', 'border-right', 'border-bottom', 'border-left'],
      activationValue: ['1px solid #000', '1px solid #000', '1px solid #000', '1px solid #000'],
      actions: ['strokeTop', 'strokeRight', 'strokeBottom', 'strokeLeft']
    },
  },
}
