export function Selectable(uhWebEditor: any): {
    select: (el: any) => void;
    selection: () => any[];
    unselect_all: ({ silent }?: {
        silent?: boolean;
    }) => void;
    onSelectedUpdate: (cb: any, immediateCallback?: boolean) => void;
    removeSelectedCallback: (cb: any) => any[];
    disconnect: () => void;
};
export function handleLabelText(el: any, activeTool: any): string;
