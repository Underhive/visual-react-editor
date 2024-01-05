export namespace actions {
    function _do(payload: any): void;
    export { _do as do };
    export function undo(): void;
    export function redo(): void;
}
export namespace getters {
    function history(state: any): any;
}
export function cssPath(el: any): string;
declare namespace _default {
    export { state };
    export { mutations };
    export { actions };
    export { getters };
    export { cssPath };
}
export default _default;
declare namespace state {
    let history: any[];
}
declare namespace mutations {
    function DO(state: any, payload: any): void;
    function UNDO(state: any): void;
    function REDO(): void;
    function saveSourceMap(map: any): void;
}
