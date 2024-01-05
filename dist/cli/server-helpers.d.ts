/**
 * Returns an array with the cumulative character count from the beginning,
 *     based on the line number
 *
 * @param {array} lineData The lines of the string
 * @param {boolean} lastLineHasNewLineChar Whether or not the last line had a newLineChar
 *
 * @return {array} The cumulative character counts for each line
 *     (e.g.) Line 0 has 18 chars plus a newLine, or 19; Line 1 has 8 chars, so 28, etc, etc.
 */
export declare function buildLineEndingPositions(lineData: any, lastLineHasNewLineChar?: boolean): any;
/**
 * Returns a tuple (array with two elements) containing the split lines
 *     and whether or not the last character was a newLine
 *
 * @param {string} stringData The string to split
 *
 * @return {array} a tuple containing the lines
 *     and a boolean for if the last line has a newLine
 */
export declare function splitLines(stringData: any, osLineBreak?: string): any[];
export declare function convertCssToJsx(cssString: any): {};
export declare function jsonToJsx(jsonString: any, spaces?: number): string;
export declare function htmlToJsx(htmlString: any): any;
export declare function getFullSourcePathFromRef(fileName1: any, fileName2: any): string;
export declare function jsxToCssName(jsxAttributeName: any): any;
export declare function diffJson(json1: {}, json2: {}): {};
