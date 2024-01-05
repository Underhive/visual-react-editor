export class HotkeyMap extends HTMLElement {
    keyboard_model: {
        num: string[];
        tab: string[];
        caps: string[];
        shift: string[];
        space: string[];
    };
    key_size_model: {
        num: {
            12: number;
        };
        tab: {
            0: number;
        };
        caps: {
            0: number;
            11: number;
        };
        shift: {
            0: number;
            11: number;
        };
        space: {
            2: number;
        };
    };
    $shadow: ShadowRoot;
    _hotkey: string;
    _usedkeys: any[];
    set tool(tool: any);
    applyScheme: (attr: any) => void;
    connectedCallback(): void;
    $shift: any;
    $ctrl: any;
    $alt: any;
    $cmd: any;
    $up: any;
    $down: any;
    $left: any;
    $right: any;
    disconnectedCallback(): void;
    _tool: any;
    show(): void;
    hide(): void;
    watchKeys(e: any, handler: any): void;
    createCommand({ e: { code }, hotkeys }: {
        e: {
            code: any;
        };
        hotkeys: any;
    }): {
        negative: string;
        negative_modifier: string;
        amount: number;
        side: string;
    };
    displayCommand({ negative, negative_modifier, side, amount }: {
        negative: any;
        negative_modifier: any;
        side: any;
        amount: any;
    }): string;
    render(): string;
}
