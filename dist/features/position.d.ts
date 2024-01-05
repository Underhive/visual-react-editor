export function Position(): {
    onNodesSelected: (els: any) => void;
    disconnect: () => void;
};
export function draggable({ el, surface, cursor, clickEvent }: {
    el: any;
    surface?: any;
    cursor?: string;
    clickEvent: any;
}): any;
export function positionElement(els: any, direction: any): void;
