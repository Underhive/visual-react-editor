export class Distance extends HTMLElement {
    $shadow: ShadowRoot;
    connectedCallback(): void;
    disconnectedCallback(): void;
    set position({ line_model, node_label_id }: any);
    set styleProps({ y, x, d, q, v, color }: any);
    render({ q, d }: {
        q: any;
        d: any;
    }, node_label_id: any): string;
}
