export function getStyle(el: any, name: any): string;
export function getStyles(el: any): {
    prop: string;
    value: any;
}[];
export function getComputedCanvasBackgroundColor(): any;
export function getComputedBackgroundColor(el: any): string;
export function findNearestParentElement(el: any): any;
export function findNearestChildElement(el: any): any;
export function loadStyles(stylesheets: any): Promise<void>;
export function getShadowValues(shadow: any): RegExpExecArray;
export function getTextShadowValues(shadow: any): RegExpExecArray;
export function firstUsableFontFromFamily(family: any): any;
