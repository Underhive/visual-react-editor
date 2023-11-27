import { metaKey } from './utilities'
import SharedStorage from './utilities/shared-storage'
import { WebEditor } from './components/uh-web-editor/uh-web-editor.element'

export function attachEditor() {
  Object.defineProperty(globalThis, 'sharedStorage', {
    value: new SharedStorage(),
  });
  
  if ('ontouchstart' in document.documentElement)
    document.getElementById('mobile-info')!.style.display = ''
  
  if (metaKey === 'ctrl')
    [...document.querySelectorAll('kbd')]
      .forEach(node => {
        node.textContent = node.textContent!.replace('cmd','ctrl')
        node.textContent = node.textContent!.replace('opt','alt')
      })
    
  if(!customElements.get('uh-web-editor')) customElements.define('uh-web-editor', WebEditor)
  
  if(!document.querySelector('uh-web-editor')) {
    const WebEditorElement = new WebEditor();
    document.firstElementChild.prepend(WebEditorElement)
  }
}

export function detachEditor() {
  const WebEditorElement = document.querySelector('uh-web-editor')
  if(WebEditorElement) WebEditorElement.remove()
}

export default WebEditor