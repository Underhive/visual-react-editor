export class MoveHotkeys extends HotkeyMap {
    tool: string;
    createCommand({ e: { code }, hotkeys }: {
        e: {
            code: any;
        };
        hotkeys: any;
    }): {
        negative: undefined;
        negative_modifier: undefined;
        amount: undefined;
        side: string;
    };
    displayCommand({ side }: {
        side: any;
    }): string;
}
import { HotkeyMap } from './base.element';
