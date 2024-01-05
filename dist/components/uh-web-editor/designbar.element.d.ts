import { Processors } from './designActionProcessors';
type ElementNode = {
    name: string;
    selector: string;
    open: boolean;
    children: ElementNode[];
    ariaLevel: number;
    fileName: string;
};
export default class EditorDesignbar extends HTMLElement {
    $shadow: ShadowRoot;
    applyScheme: Function;
    appliedStyles: any[];
    blurAwaitingPost: any;
    elementTree: ElementNode;
    activeTab: any;
    lastTarget: any;
    latestTarget: any;
    processor: Processors;
    designState: {
        align: true;
        size: true;
        autoLayout: true;
        layer: true;
        fill: true;
    };
    constructor();
    updateTarget(target: any): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    setup(): void;
    cleanup(): void;
    onDesignButtonClick(e: any, actions: any): void;
    sendActions(actions: any, ...values: any[]): void;
    setupListeners(): void;
    render(): string;
}
export {};
