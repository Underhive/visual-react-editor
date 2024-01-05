export function zoomIn(amount?: number): void;
export function zoomOut(amount?: number): void;
export function zoomToFit(): Promise<void>;
export function zoomToHomebase(): Promise<void>;
export namespace Zoom {
    export { start };
    export { stop };
}
declare function start(SelectorEngine: any): void;
declare function stop(): void;
export {};
