export class Gridlines extends HTMLElement {
    $shadow: ShadowRoot;
    connectedCallback(): void;
    disconnectedCallback(): void;
    set position(boundingRect: any);
    set update({ width, height, top, left }: any);
    render({ x, y, width, height, top, left }: {
        x: any;
        y: any;
        width: any;
        height: any;
        top: any;
        left: any;
    }): string;
}
