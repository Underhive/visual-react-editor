import $ from 'blingblingjs'
import { nodeKey } from './strings'
import { convertCssToJsx } from '../cli/server-helpers';
import axios from 'axios';

export const updateAppliedStyles = (el, dontUpdate) => {
  const elStyleObject = el.style
  const sheets = document.styleSheets;
  var influencingStyles = [];
  var q = (rules) => {
    for (var r in rules) {
      var rule = rules[r];
      if(rule instanceof CSSMediaRule && window.matchMedia(rule.conditionText).matches){
        influencingStyles.concat(q(rule.cssRules));
      } else if(rule instanceof CSSSupportsRule){
        try{
          if(CSS.supports(rule.conditionText)){
            influencingStyles.concat(q(rule.cssRules));
          }
        } catch (e) {
          console.error(e);
        }
      } else if(rule instanceof CSSStyleRule){
        try{
          if(el.matches(rule.selectorText)){
            influencingStyles.push(rule.style);
          }
        } catch(e){
          console.error(e);
        }
      }
    }
  };
  for (var i in sheets) {
    if(sheets.item(i).href) continue;
    try{
      q(sheets.item(i).cssRules);
    } catch(e){
      console.error(e);
    }
  }

  const inlineStyles = {
    styles: convertCssToJsx(elStyleObject.cssText),
    type: 'inline'
  }

  let appliedStyles = []

  for(const style of influencingStyles) {
    const sourceMap = style.parentRule.parentStyleSheet.ownerNode.textContent.match(/\/\*\#\s*sourceMappingURL\s*=\s*([^\s*]+)\s*\*\//gm)[0]
    const sourceMapJSON = JSON.parse(decodeBase64(extractSourceMappingURL(sourceMap)))
    const parentRuleCssText = style.parentRule.cssText
    const parentRuleSelector = style.parentRule.selectorText
    const range = findCssBlockRange(sourceMapJSON.sourcesContent[0], parentRuleSelector);
    
    const styles = JSON.parse(cssToJson(parentRuleCssText))
    appliedStyles.push({
      sourceMapJSON,
      parentRuleCssText,
      parentRuleSelector,
      range,
      styles: styles[parentRuleSelector.trim()],
      type: 'stylesheet'
    })
  }

  elStyleObject.cssText.length > 0 && appliedStyles.push(inlineStyles)

  let reactContainerProp = `__reactContainer$${globalThis.$blingHash}`

  const container = el[reactContainerProp]
  const source = container?.stateNode?.current?.memoizedState?.element?._source ?? elementDebugSource(el)
  globalThis.sharedStorage.set('currentElementReactFiberSource', source)

  if(dontUpdate) return appliedStyles.reverse()

  const currentStyles = globalThis.sharedStorage.get('currentStyles')
  currentStyles.data = appliedStyles.reverse()
  return currentStyles.data
}

export const deepElementFromPoint = (x, y) => {
  const el = document.elementFromPoint(x, y)

  const crawlShadows = node => {
    if (node.shadowRoot) {
      const potential = node.shadowRoot.elementFromPoint(x, y)

      if (potential == node)          return node
      else if (potential.shadowRoot)  return crawlShadows(potential)
      else                            return potential
    }
    else return node
  }

  const nested_shadow = crawlShadows(el)

  return nested_shadow || el
}

export const getSide = direction => {
  let start = direction.split('+').pop().replace(/^\w/, c => c.toUpperCase())
  if (start == 'Up') start = 'Top'
  if (start == 'Down') start = 'Bottom'
  return start
}

export const getNodeIndex = el => {
  return [...el.parentElement.parentElement.children]
    .indexOf(el.parentElement)
}

export function showEdge(el) {
  return el.animate([
    { outline: '1px solid transparent' },
    { outline: '1px solid rgb(218, 103, 58)' },
    { outline: '1px solid transparent' },
  ], 600)
}

let timeoutMap = {}
export const showHideSelected = (el, duration = 750) => {
  el.setAttribute('data-selected-hide', true)
  showHideNodeLabel(el, true)

  if (timeoutMap[nodeKey(el)])
    clearTimeout(timeoutMap[nodeKey(el)])

  timeoutMap[nodeKey(el)] = setTimeout(_ => {
    el.removeAttribute('data-selected-hide')
    showHideNodeLabel(el, false)
  }, duration)

  return el
}

export const showHideNodeLabel = (el, show = false) => {
  if (!el.hasAttribute('data-label-id'))
    return

  const label_id = el.getAttribute('data-label-id')

  const nodes = $(`
    uh-web-editor-label[data-label-id="${label_id}"],
    uh-web-editor-handles[data-label-id="${label_id}"]
  `)

  nodes.length && show
    ? nodes.forEach(el =>
      el.style.display = 'none')
    : nodes.forEach(el =>
      el.style.display = null)
}

export const htmlStringToDom = (htmlString = "") =>
  (new DOMParser().parseFromString(htmlString, 'text/html'))
    .body.firstChild

export const isOffBounds = node =>
  node.closest && (
       node.closest('uh-web-editor')
    || node.closest('hotkey-map')
    || node.closest('uh-web-editor-metatip')
    || node.closest('uh-web-editor-ally')
    || node.closest('uh-web-editor-label')
    || node.closest('uh-web-editor-handles')
    || node.closest('uh-web-editor-corners')
    || node.closest('uh-web-editor-grip')
    || node.closest('uh-web-editor-gridlines')
  )

export const isSelectorValid = (qs => (
  selector => {
    try { qs(selector) } catch (e) { return false }
    return true
  }
))(s => document.createDocumentFragment().querySelector(s))

export const swapElements = (src, target) => {
  var temp = document.createElement("div")

  src.parentNode.insertBefore(temp, src)
  target.parentNode.insertBefore(src, target)
  temp.parentNode.insertBefore(target, temp)

  temp.parentNode.removeChild(temp)
}

export const showOneOffHandle = (el, node_label_id = -1) => {
  if(!el) return
  Array.from([
    ...$('uh-web-editor-handles'),
  ]).forEach(el =>
    el.remove())
  const handle = document.createElement('uh-web-editor-handles')
  handle.position = { el, node_label_id }
  document.body.insertAdjacentElement('afterend', handle)
}

export function extractSourceMappingURL(cssContent) {
  const regex = /\/\*\#\s*sourceMappingURL\s*=\s*data:application\/json;base64,([^\s*]+)\s*\*\//;
  const matches = regex.exec(cssContent);
  if (matches && matches[1]) {
      return matches[1];
  }
  return null;
}

export function decodeBase64(base64String) {
  return atob(base64String);
}

export function findCssBlockRange(cssString, selector) {
  // Escape special characters in the selector
  const escapedSelector = selector.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  // Create a regex pattern to find the selector and capture everything from opening to closing brace
  const pattern = `${escapedSelector}\\s*{([^}]*)}`;

  // Create a regex object
  const regex = new RegExp(pattern, 'g');

  // Find the block in the CSS string
  let match;
  while ((match = regex.exec(cssString)) !== null) {
      // Include the matched braces in the range
      const startIndex = match.index;
      const endIndex = regex.lastIndex;
      return { startIndex, endIndex, blockContent: match[0].trim() };
  }

  return null;
}

export function cssToJson(cssString) {
  // Extract the selector and the CSS rules
  const match = cssString.match(/(.+?)\s*\{\s*(.+)\s*\}/);
  if (!match) return "{}";

  const selector = match[1].trim();
  const cssRules = match[2].trim();

  // Split the rules into an array
  const cssArray = cssRules.replace(/\s*;\s*/g, ';').replace(/\s*:\s*/g, ':').split(';');

  // Create an object for the CSS properties
  let properties = {};

  // Process each CSS property
  cssArray.forEach(item => {
      let [property, value] = item.split(':');
      if (property && value) {
          // Convert CSS property to camelCase for JSON
          let jsonProperty = property.replace(/-./g, match => match.charAt(1).toUpperCase());
          properties[jsonProperty] = value;
      }
  });

  // Create the final JSON object with the selector
  let cssObject = {};
  cssObject[selector] = properties;

  return JSON.stringify(cssObject, null, 2);
}

export const elementDebugSource = el => {
  const fiberNode = el['__reactFiber$' + globalThis.$blingHash]
  if(!fiberNode) return {}
  return fiberNode._debugSource
}

export const elementAlternateDebugSource = el => {
  const fiberNode = el['__reactFiber$' + globalThis.$blingHash]
  if(!fiberNode?.alternate) return {}
  if(fiberNode.alternate) return fiberNode.alternate._debugSource
}

export const hitEditSytlesheet = async (data, alternateSource) => {
  let response
  try {
    response = await axios.post(`${apiURL}/edit/stylesheet`, data)
  } catch (e) {
    console.log(e)
    if(e.response.status === 500) axios.post(`${apiURL}/edit/stylesheet`, { ...data, source: {...alternateSource} })
  }
}

export const apiURL = 'http://localhost:38388'