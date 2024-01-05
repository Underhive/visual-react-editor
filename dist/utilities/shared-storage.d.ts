export default class SharedStorage {
    data: any;
    constructor();
    get(key: any): any;
    set(key: any, value: any): void;
    remove(key: any): void;
    clear(): void;
    keys(): string[];
    values(): unknown[];
    entries(): [string, unknown][];
    has(key: any): any;
    get size(): number;
    get length(): number;
}
