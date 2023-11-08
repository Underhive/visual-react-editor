const state = {
  history: []
}

const redoStack = []

const mutations = {
  DO (state, payload) {
    state.history.push(payload)
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
  },
  UNDO (state) {
    const last = state.history.length > 0 && state.history.pop() 
    if(!last) return console.error('Nothing to undo')
    const { parentLocation, location, element, action } = last
    if(action === 'add') {
      const el = document.querySelector(location)
      el.remove()
    } else if(action === 'delete') {
      const el = document.createElement(element.tagName)
      const parent = document.querySelector(parentLocation)
      parent.appendChild(el)
      el.outerHTML = element.outerHTML
    } else if (action === 'edit') {
      const el = document.querySelector(location)
      el.outerHTML = element.outerHTML
    }
    redoStack.push(last)
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
  },
  REDO () {
    const redoingAnUndo = redoStack.length > 0
    if(!redoingAnUndo) return console.error('Nothing to redo')
    const last = redoStack.pop()
    const { parentLocation, location, element, action } = last
    
    if(action === 'add') {
      const el = document.createElement(element.tagName)
      const parent = document.querySelector(parentLocation)
      parent.appendChild(el)
      el.outerHTML = element.outerHTML
      actions.do({
        parentLocation: parentLocation,
        location: location,
        element: {
          tagName: element.tagName,
          outerHTML: element.outerHTML,
        },
        action: 'add',
      })

    } else if (action === 'delete') {
      const el = document.querySelector(location)
      actions.do({
        parentLocation: parentLocation,
        location: location,
        element: {
          tagName: el.tagName,
          outerHTML: el.outerHTML,
        },
        action: 'delete',
      })
      el.remove()
    } else if(action === 'edit') {
      const el = document.querySelector(location)
      actions.do({
        parentLocation: parentLocation,
        location: location,
        element: {
          tagName: el.tagName,
          outerHTML: el.outerHTML,
          finalOuterHTML: element.finalOuterHTML,
        },
        action: 'edit',
      })
      el.outerHTML = element.finalOuterHTML
    }
    console.log('history', state.history.map(i => i.action))
    console.log('redoStack', redoStack.map(i => i.action))
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
  }
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

export default {
  state,
  mutations,
  actions,
  getters,
  cssPath
}
