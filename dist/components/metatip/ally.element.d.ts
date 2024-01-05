export class Ally extends Metatip {
    copyColorSwatch(event: any): void;
    copyToClipboard(text: any): Promise<void>;
    render({ el, ally_attributes, contrast_results }: {
        el: any;
        ally_attributes: any;
        contrast_results: any;
    }): string;
}
import { Metatip } from './metatip.element.js';
