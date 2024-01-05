export class Handles extends HTMLElement {
    $shadow: ShadowRoot;
    styles: CSSStyleSheet[];
    on_window_resize(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    set position({ el, node_label_id }: any);
    set backdrop(bd: any);
    _backdrop: any;
    render({ x, y, width, height, top, left }: {
        x: any;
        y: any;
        width: any;
        height: any;
        top: any;
        left: any;
    }, node_label_id: any, isFixed: any): string;
}
