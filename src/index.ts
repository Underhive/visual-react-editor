import VisBug from './components/vis-bug/vis-bug.element';
import { metaKey } from './utilities';

if ('ontouchstart' in document.documentElement) {
  (document.getElementById('mobile-info') as HTMLElement).style.display = '';
}

if (metaKey === 'ctrl') {
  [...document.querySelectorAll('kbd')].forEach((node: HTMLElement) => {
    if(node.textContent) {
      node.textContent = node.textContent.replace('cmd', 'ctrl');
      node.textContent = node.textContent.replace('opt', 'alt');
    }
  });
}