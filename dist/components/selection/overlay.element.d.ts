export class Overlay extends HTMLElement {
    $shadow: ShadowRoot;
    connectedCallback(): void;
    disconnectedCallback(): void;
    set position(boundingRect: any);
    set update({ top, left, width, height }: any);
    render({ height, width }: {
        height: any;
        width: any;
    }): string;
}
