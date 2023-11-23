import { metaKey } from './utilities'
import SharedStorage from './utilities/shared-storage'
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

import { WebEditorElement } from './components/uh-web-editor/uh-web-editor.element'
import { WebEditorSidebar } from './components/uh-web-editor/sidebar.element'
import { WebEditorDesignbar } from './components/uh-web-editor/designbar.element'
document.firstElementChild.prepend(WebEditorElement)
document.firstElementChild.prepend(WebEditorDesignbar)
document.firstElementChild.prepend(WebEditorSidebar)

export default WebEditorElement