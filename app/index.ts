import { VisBugElement } from './components/vis-bug/vis-bug.element'
import { metaKey } from './utilities'

if ('ontouchstart' in document.documentElement)
  document.getElementById('mobile-info')!.style.display = ''

if (metaKey === 'ctrl')
  [...document.querySelectorAll('kbd')]
    .forEach(node => {
      node.textContent = node.textContent!.replace('cmd','ctrl')
      node.textContent = node.textContent!.replace('opt','alt')
    })

document.body.prepend(VisBugElement)
export default VisBugElement