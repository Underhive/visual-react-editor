export function HueShift({ Color, WebEditor }: {
    Color: any;
    WebEditor: any;
}): () => void;
export function changeHue(els: any, direction: any, prop: any, Color: any): void;
export function extractPalleteColors(el: any): {
    foreground: {
        style: string;
        color: TinyColor;
    };
    background: {
        style: string;
        color: TinyColor;
    };
    border: {
        style: string;
        color: TinyColor;
    };
};
import { TinyColor } from '@ctrl/tinycolor';
