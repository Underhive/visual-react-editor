export class WebEditor extends HTMLElement {
    static get observedAttributes(): string[];
    connected: any;
    lastPowerPressed: number;
    toolbar_model: {
        g: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        i: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        x: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        v: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        m: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        p: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        a: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        d: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        l: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        f: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        e: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        z: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
        c: {
            tool: string;
            icon: string;
            label: string;
            description: string;
            instruction: string;
        };
    };
    $shadow: ShadowRoot;
    applyScheme: (attr: any) => void;
    connectedCallback(): void;
    designbar: WebEditorDesignbar;
    sidebar: WebEditorSidebar;
    _tutsBaseURL: string;
    selectorEngine: {
        select: (el: any) => void;
        selection: () => any[];
        unselect_all: ({ silent }?: {
            silent?: boolean;
        }) => void;
        onSelectedUpdate: (cb: any, immediateCallback?: boolean) => void;
        removeSelectedCallback: (cb: any) => any[];
        disconnect: () => void;
    };
    preventContextMenu(e: any): void;
    powerOff(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    setup(): void;
    cleanup(): void;
    toolSelected(el: any): void;
    active_tool: any;
    render(): string;
    demoTip({ key, tool, label, description, instruction }: {
        key: any;
        tool: any;
        label: any;
        description: any;
        instruction: any;
    }): string;
    move(): void;
    deactivate_feature: (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => any[]) | (() => void);
    margin(): void;
    padding(): void;
    font(): void;
    text(): void;
    align(): void;
    search(): void;
    create(): void;
    boxshadow(): void;
    power(): void;
    inspector(): void;
    accessibility(): void;
    guides(): void;
    screenshot(): void;
    position(): void;
    execCommand(command: any): Promise<Error>;
    get activeTool(): any;
}
import WebEditorDesignbar from './designbar.element';
import WebEditorSidebar from './sidebar.element';
