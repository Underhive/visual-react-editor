type StyleObject = {
    [key: string]: string;
};
export declare function modifyElementStyle(filePath: string, lineNumber: number, columnNumber: number, newStyles: StyleObject, mainLanguage: 'js' | 'ts'): Promise<string>;
export declare function modifyElementClass(filePath: string, lineNumber: number, columnNumber: number, classNameChanges: {
    edit?: {
        [oldName: string]: string;
    };
    add?: string[];
}, mainLanguage: 'js' | 'ts'): Promise<string>;
export {};
