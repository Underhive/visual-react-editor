export class Handle extends HTMLElement {
    static get observedAttributes(): string[];
    $shadow: ShadowRoot;
    styles: CSSStyleSheet[];
    connectedCallback(): void;
    button: HTMLButtonElement;
    placement: any;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    on_element_resize_start(e: any): void;
    disconnectedCallback(): void;
    render(): string;
}
