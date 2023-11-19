import { WebEditorElement } from './components/uh-web-editor/uh-web-editor.element'
import { metaKey } from './utilities'
if ('ontouchstart' in document.documentElement)
  document.getElementById('mobile-info')!.style.display = ''

if (metaKey === 'ctrl')
  [...document.querySelectorAll('kbd')]
    .forEach(node => {
      node.textContent = node.textContent!.replace('cmd','ctrl')
      node.textContent = node.textContent!.replace('opt','alt')
    })

// document.body.prepend(WebEditorElement)
document.firstElementChild.prepend(WebEditorElement)

export default WebEditorElement