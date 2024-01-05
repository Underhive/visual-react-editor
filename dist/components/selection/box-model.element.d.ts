export class BoxModel extends HTMLElement {
    $shadow: ShadowRoot;
    drawable: {};
    connectedCallback(): void;
    disconnectedCallback(): void;
    set position(payload: any);
    render({ mode, bounds, sides, color }: {
        mode: any;
        bounds: any;
        sides: any;
        color?: string;
    }): string;
    styles({ sides }: {
        sides: any;
    }): void;
    createMeasurements({ mode, bounds, sides, color }: {
        mode: any;
        bounds: any;
        sides: any;
        color: any;
    }): void;
    createMeasurement(line_model: any, node_label_id?: number): void;
}
