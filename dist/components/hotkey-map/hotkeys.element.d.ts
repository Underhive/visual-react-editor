export class Hotkeys extends HTMLElement {
    tool_map: {
        guides: HTMLElement;
        inspector: HTMLElement;
        accessibility: HTMLElement;
        move: HTMLElement;
        margin: HTMLElement;
        padding: HTMLElement;
        align: HTMLElement;
        hueshift: HTMLElement;
        boxshadow: HTMLElement;
        position: HTMLElement;
        font: HTMLElement;
        text: HTMLElement;
        search: HTMLElement;
    };
    connectedCallback(): void;
    disconnectedCallback(): void;
    hideTool(): void;
    cur_tool: any;
    showTool(): void;
}
