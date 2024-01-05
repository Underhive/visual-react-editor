export function Moveable(uhWebEditor: any): () => void;
export function moveElement(el: any, direction: any): void;
export function dragNDrop(selection: any): void;
export function clearListeners(): void;
export function canMoveLeft(el: any): any;
export function canMoveRight(el: any): any;
export function canMoveDown(el: any): any;
export function canMoveUnder(el: any): any;
export function canMoveUp(el: any): any;
export function popOut({ el, under }: {
    el: any;
    under?: boolean;
}): any;
