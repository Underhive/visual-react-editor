export class Grip extends Handles {
    toggleHovering({ hovering }: {
        hovering: any;
    }): void;
    render({ width, height, top, left }: {
        width: any;
        height: any;
        top: any;
        left: any;
    }): string;
}
import { Handles } from './handles.element';
