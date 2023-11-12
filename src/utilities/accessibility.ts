import { desiredAccessibilityMap, desiredPropMap, largeWCAG2TextMap } from './design-properties'
import { getStyles } from './styles'
import { TinyColor, mostReadable, random } from '@ctrl/tinycolor'

interface AccessibilityAttribute {
  prop: string;
  value: string;
}

export const getA11ys = (el: HTMLElement): AccessibilityAttribute[] => {
  const elAttributes = el.getAttributeNames()

  return desiredAccessibilityMap.reduce((acc: AccessibilityAttribute[], attribute: string) => {
    if (elAttributes.includes(attribute))
      acc.push({
        prop: attribute,
        value: el.getAttribute(attribute) || ''
      })

    if (attribute === 'aria-*')
      elAttributes.forEach(attr => {
        if (attr.includes('aria'))
          acc.push({
            prop: attr,
            value: el.getAttribute(attr) || ''
          })
      })

    return acc
  }, [])
}

export const getWCAG2TextSize = (el: HTMLElement): 'large' | 'small' | undefined =>  {
  
  const styles = getStyles(el).reduce((styleMap: { [key: string]: string }, style) => {
      styleMap[style.prop] = style.value
      return styleMap
  }, {})

  const { fontSize = desiredPropMap.fontSize, fontWeight = desiredPropMap.fontWeight } = styles
  
  const isLarge = largeWCAG2TextMap.some(
    (largeProperties) => parseFloat(fontSize) >= parseFloat(largeProperties.fontSize) 
       && parseFloat(fontWeight) >= parseFloat(largeProperties.fontWeight) 
  )

  return isLarge ? 'large' : 'small'
}

export const getContrastingColor = (color: string) => {
  return mostReadable(
    color,
    ['#000', '#fff'],
    {
      includeFallbackColors: true,
      level: 'AAA',
      size: 'small'
    }
  )
}