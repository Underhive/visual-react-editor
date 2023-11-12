export const isFixed = (elem: HTMLElement): boolean => {
  do {
    if (window.getComputedStyle(elem).position === 'fixed') return true;
  } while (elem = elem.offsetParent as HTMLElement);
  return false;
}