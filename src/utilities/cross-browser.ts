export const isFirefox: boolean = navigator.userAgent.search('Firefox') > 0;
export const isSafarish: boolean = navigator.userAgent.search('Safari') > 0;
export const isChrome: boolean = navigator.userAgent.search('Chrome') > 0;
export const isSafari: boolean = isSafarish && !isChrome;

export const isPolyfilledCE = (shadow_node: HTMLElement): boolean =>
  shadow_node.children.length === 1 && shadow_node?.firstElementChild?.nodeName === 'STYLE';

const testConstructible = (): boolean => {
  try {
    new window.CSSStyleSheet({});
    return true;
  } catch (e) {
    return false;
  }
};

export const constructibleStylesheetSupport: boolean = testConstructible();