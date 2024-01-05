export function createOffscreenLabelIndicator(node_label_id: any, text: any, hoverText: any, left: any, top: any, color: any, adjustRightSideToCount: any): void;
export function removeOffscreenLabelIndicators(): void;
export class OffscreenLabel extends HTMLElement {
    $shadow: ShadowRoot;
    dispatchQuery(e: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    set text(content: any);
    _text: any;
    set position({ boundingRect, node_label_id, isFixed }: any);
    set update({ boundingRect, isFixed }: any);
    set count(count: any);
    get count(): any;
    _count: any;
    render(node_label_id: any): string;
}
