export declare function insertChildrenIntoElement(filePath: string, lineNumber: number, columnNumber: number, childrenHtmlString: string, mainLanguage: 'js' | 'ts'): Promise<string>;
export declare function insertElement(filePath: string, lineNumber: number, columnNumber: number, htmlString: string, insertAfter: boolean, mainLanguage: 'js' | 'ts'): Promise<string>;
