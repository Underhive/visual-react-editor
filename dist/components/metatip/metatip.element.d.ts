export class Metatip extends HTMLElement {
    $shadow: ShadowRoot;
    applyScheme: (attr: any) => void;
    observe(): void;
    dispatchQuery(e: any): void;
    dispatchUnQuery(e: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    unobserve(): void;
    set meta(data: any);
    render({ el, width, height, localModifications, notLocalModifications }: {
        el: any;
        width: any;
        height: any;
        localModifications: any;
        notLocalModifications: any;
    }): string;
}
