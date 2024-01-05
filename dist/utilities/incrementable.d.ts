/**
 * Make numbers in a textfield incrementable/decrementable (like in dev tools)
 * https://github.com/leaverou/incrementable
 * @author Lea Verou
 * @license MIT
 * @version 2.0.0
 */
export declare const NUMBER: RegExp;
export declare const PREFIX_SUFFIX: RegExp;
export declare const PARTIAL_TOKEN: RegExp;
export default class Incrementable {
    target: any;
    options: any;
    step: any;
    multiplier: any;
    prefixes: any;
    suffixes: any;
    constructor(target: any, options?: {});
    static value(token: any, { decrement, multiplier, step }?: {
        decrement?: boolean;
        multiplier?: number;
        step?: number;
    }): any;
    static defaultOptions: {
        multiplier: (evt: any) => 1 | 10 | 0.1;
    };
}
export declare function precision(number: any): {
    integer: any;
    decimals: number;
};
