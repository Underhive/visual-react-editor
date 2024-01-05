export class AlignHotkeys extends HotkeyMap {
    _usedkeys: string[];
    _htool: number;
    _vtool: number;
    _dtool: number;
    _side: string;
    _direction: string;
    _distribution: string;
    _wrap: string;
    tool: string;
    createCommand({ e: { code }, hotkeys }: {
        e: {
            code: any;
        };
        hotkeys: any;
    }): {
        negative: string;
        negative_modifier: string;
        amount: string;
        side: string;
    };
    clamp(range: any, tool: any, increment?: boolean): any;
}
import { HotkeyMap } from './base.element';
