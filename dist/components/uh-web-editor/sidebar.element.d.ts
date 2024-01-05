type ElementNode = {
    name: string;
    selector: string;
    open: boolean;
    selected?: boolean;
    parentSelected?: boolean;
    children: ElementNode[];
    ariaLevel: number;
    fileName: string;
    isSelected: boolean;
};
export default class EditorSidebar extends HTMLElement {
    $shadow: ShadowRoot;
    applyScheme: Function;
    appliedStyles: any[];
    blurAwaitingPost: any;
    elementTree: ElementNode;
    activeTab: any;
    lastTarget: any;
    rootFiberNode: any;
    latestTarget: any;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    static get observedAttributes(): string[];
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    updateTarget(target: any): void;
    editClassName: (action: {
        edit?: {
            [oldName: string]: string;
        };
        add?: string[];
    }) => void;
    editAttribute: (e: any) => void;
    onBlurAttribute: (e: any) => void;
    setNodeSelected: (selector: string) => void;
    setChildrenSelected: (node: ElementNode) => void;
    findNode: (node: ElementNode, selector: string) => ElementNode;
    doubleClickAttr: (e: any) => void;
    onShowRootTreeClicked: (e: any) => void;
    onTabClicked: (e: any) => void;
    onTreeNodeOpenCloseClicked: (e: any) => void;
    onTreeNodeNameClicked: (e: any) => void;
    onTreeNodeActionClicked: (e: any) => void;
    onClassNameDeleteClicked: (e: any) => void;
    onClassNameEdited: (e: any) => void;
    onClassNameAddClicked: (e: any) => void;
    stopBubbling: (e: any) => any;
    onInsertCssClassFocus: (e: any) => void;
    onInsertCssClassBlur: (e: any) => void;
    setup(): void;
    createElementTree(element: Element, ariaLevel?: number): any;
    extractFilename(path: any): any;
    cleanup(): void;
    renderTree(node: ElementNode): any;
    render(): string;
}
export {};
