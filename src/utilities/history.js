import axios from "axios"
import { apiURL as apiUrl, elementDebugSource } from "./common"

const state = {
  history: []
}

const redoStack = []

// AS we're making these changes from the source now so we should probably keep the history there only (edit can stay here)
// Also there's a bug where if you undo and then redo it doesn't work

const updateSource = (payload) => {
  const { parentLocation, location, element, action } = payload
  const log = {
    type: 'childList',
    target: {},
    action: action === 'add' ? 'added' : 'removed',
  }
  const apiURL = `${apiUrl}/edit/childList`
  const target = document.querySelector(action === 'add' ? parentLocation : location)
  if((action === 'add' || action === 'delete') && (element.debugSource || element.parentDebugSource)) {
    log.target = {
      tagName: target.localName
    }
    if(element.nodeName === "#text") {
      log.html = element.textContent
    } else {
      log.html = element.outerHTML
    }
    axios.post(apiURL, {
      log,
      source: action === 'add' ? element.parentDebugSource : element.debugSource,
      timestamp: Date.now()
    })
  }
}

const mutations = {
  DO (state, payload) {
    state.history.push(payload)
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
    updateSource(payload)
  },
  UNDO (state) {
    const last = state.history.length > 0 && state.history.pop() 
    if(!last) return console.error('Nothing to undo')
    const { parentLocation, location, element, action } = last
    if(action === 'add') {
      const el = document.querySelector(location)
      // el.remove()
    } else if(action === 'delete') {
      const el = document.createElement(element.tagName)
      const parent = document.querySelector(parentLocation)
      // parent.appendChild(el)
      // el.outerHTML = element.outerHTML
    } else if (action === 'edit') {
      const el = document.querySelector(location)
      el.outerHTML = element.outerHTML
    }
    redoStack.push(last)
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
    const payload = { ...last, action: action === 'add' ? 'delete' : 'add' }
    updateSource(payload)
  },
  REDO () {
    const redoingAnUndo = redoStack.length > 0
    if(!redoingAnUndo) return console.error('Nothing to redo')
    const last = redoStack.pop()
    const { parentLocation, location, element, action } = last
    
    if(action === 'add') {
      const el = document.createElement(element.tagName)
      const parent = document.querySelector(parentLocation)
      // parent.appendChild(el)
      // el.outerHTML = element.outerHTML
      actions.do(last)
    } else if (action === 'delete') {
      const el = document.querySelector(location)
      actions.do({
        parentLocation: parentLocation,
        location: location,
        element: {
          tagName: el?.tagName?.toLowerCase(),
          outerHTML: el.outerHTML,
          debugSource: {...elementDebugSource(el)}
        },
        action: 'delete',
      })
      // el.remove() // REACT DOES THIS
    } else if(action === 'edit') {
      const el = document.querySelector(location)
      actions.do({
        parentLocation: parentLocation,
        location: location,
        element: {
          tagName: el?.tagName?.toLowerCase(),
          outerHTML: el.outerHTML,
          finalOuterHTML: element.finalOuterHTML,
        },
        action: 'edit',
      })
      el.outerHTML = element.finalOuterHTML
    }
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
  },
  saveSourceMap (map) {
    sourceMap = map
  }
}

export const actions = {
  do (payload) {
    mutations.DO(state, payload)
  },
  undo () {
    mutations.UNDO(state)
  },
  redo () {
    mutations.REDO()
  }
}

export const getters = {
  history (state) {
    return state.history
  },
}

export const cssPath = (el) => {
  if (!(el instanceof Element)) 
      return;
  var path = [];
  while (el.nodeType === Node.ELEMENT_NODE) {
      var selector = el.nodeName.toLowerCase();
      if (el.id) {
          selector += '#' + el.id;
          path.unshift(selector);
          break;
      } else {
          var sib = el, nth = 1;
          while (sib = sib.previousElementSibling) {
              if (sib.nodeName.toLowerCase() == selector)
                 nth++;
          }
          if (nth != 1)
              selector += ":nth-of-type("+nth+")";
      }
      path.unshift(selector);
      el = el.parentNode;
  }
  return path.join(" > ");
}

document.addEventListener("readystatechange", (event) => {
  if(document.readyState === "complete") {
    var observer = new MutationObserver(onMutation);
    var observerSettings = {
      subtree: true,
      attributes: true,
      attributeOldValue: true,
      characterData: true,
      characterDataOldValue: true,
    };

    function onMutation(records) {
      for (const record of records) {
        if (record.type === 'childList') {
          record.addedNodes.forEach(observeShadowRoots)
        }
        logMutation(record);
      }
    }

    function logMutation(r) {
      let logOrNot = false
      let target = r.target
      if(target.nodeName === "#text" && r.type === 'characterData') {
        target = target.parentElement
      }
      const propName = Object.keys(target).find(prop => prop.includes("__reactFiber"))
      logOrNot = Object.keys(target).some(prop => prop.includes("__reactFiber"));
      if(!logOrNot) return

      const apiURL = `${apiUrl}/edit/${r.type}`

      let log = {
        type: r.type,
        target: target,
        action: ''
      }

      if(r.type === 'attributes' && r.attributeName != 'contenteditable' && r.attributeName != 'spellcheck' && !r.attributeName.includes('data-')) {
        log.attributeName = r.attributeName
        log.attributeValue = r.target.getAttribute(r.attributeName)
        log.oldValue = r.oldValue
        log.action = 'edit'
        log.target = {
          tagName: target.localName
        }
        // axios.post(apiURL, {
        //   log,
        //   source: target[propName]._debugSource,
        //   timestamp: Date.now()
        // })
      } else if(r.type === 'characterData') {
        log.characterData = r.target.textContent
        log.oldValue = r.oldValue
        log.action = 'edit'
        log.target = {
          tagName: target.localName
        }
        axios.post(apiURL, {
          log,
          source: elementDebugSource(target),
          timestamp: Date.now()
        })
      }
    }

    function observeShadowRoots(node) {
      findShadowRoots(node).forEach((shadowRoot) => {
        observer.observe(shadowRoot, observerSettings);
      });
    }

    function findShadowRoots(node, list = new Set()) {
      if (node.shadowRoot) list.add(node.shadowRoot);
      node?.querySelectorAll && node.querySelectorAll('*').forEach((child) => {
        if (child.shadowRoot) findShadowRoots(child, list);
      });
      return list;
    }

    observer.observe(document, observerSettings);
    // observeShadowRoots(document);
  }
});

export default {
  state,
  mutations,
  actions,
  getters,
  cssPath
}
