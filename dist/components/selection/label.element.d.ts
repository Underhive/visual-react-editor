export class Label extends HTMLElement {
    $shadow: ShadowRoot;
    on_resize(): void;
    dispatchQuery(e: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    set position({ boundingRect, node_label_id, isFixed }: any);
    set text(content: any);
    _text: any;
    set update({ boundingRect, isFixed }: any);
    top: any;
    left: number;
    render(node_label_id: any): string;
    detectOutsideViewport(): void;
}
