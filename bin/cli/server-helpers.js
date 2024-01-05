"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffJson = exports.jsxToCssName = exports.getFullSourcePathFromRef = exports.htmlToJsx = exports.jsonToJsx = exports.convertCssToJsx = exports.splitLines = exports.buildLineEndingPositions = void 0;
function buildLineEndingPositions(lineData, lastLineHasNewLineChar = false) {
    var cumulativeSum = (sum => lineCharCount => sum += lineCharCount)(0);
    var numLines = lineData.length;
    var lineLengths = lineData.map((line, index) => {
        if (numLines - 1 === index && !lastLineHasNewLineChar) {
            return line.length;
        }
        else {
            return line.length + 1;
        }
    });
    return lineLengths.map(cumulativeSum);
}
exports.buildLineEndingPositions = buildLineEndingPositions;
function splitLines(stringData, osLineBreak = '\n') {
    var lines = stringData.split(osLineBreak);
    if (stringData.slice(-1) === osLineBreak) {
        lines.pop();
        return [lines, true];
    }
    else {
        return [lines, false];
    }
}
exports.splitLines = splitLines;
function convertCssToJsx(cssString) {
    const styleObject = {};
    const styles = cssString.split(';').filter(style => style.trim());
    styles.forEach(style => {
        let [property, value] = style.split(':');
        if (property && value) {
            property = property.trim();
            value = value.trim();
            const camelCaseProperty = property.replace(/-./g, match => match.charAt(1).toUpperCase());
            styleObject[camelCaseProperty] = value;
        }
    });
    return styleObject;
}
exports.convertCssToJsx = convertCssToJsx;
function jsonToJsx(jsonString, spaces = 2) {
    try {
        const jsonObj = JSON.parse(jsonString);
        const spacer = ' '.repeat(spaces);
        const exitSpacer = ' '.repeat(spaces < 2 ? spaces : spaces - 2);
        let jsxString = '{\n ';
        for (const key in jsonObj) {
            if (jsonObj.hasOwnProperty(key)) {
                const camelCaseKey = key.replace(/-./g, match => match.charAt(1).toUpperCase());
                jsxString += `${spacer}${camelCaseKey}: "${jsonObj[key]}",\n `;
            }
        }
        jsxString = jsxString.replace(/, $/, '') + exitSpacer + '}';
        return jsxString;
    }
    catch (error) {
        console.error('Invalid JSON string');
        return '{}';
    }
}
exports.jsonToJsx = jsonToJsx;
function htmlToJsx(htmlString) {
    let jsxString = htmlString;
    jsxString = jsxString.replace(/class=/g, 'className=');
    jsxString = jsxString.replace(/<label for=/g, '<label htmlFor=');
    const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'area', 'base', 'col', 'embed', 'param', 'track', 'wbr'];
    selfClosingTags.forEach(tag => {
        const regex = new RegExp(`<${tag}(.*?)>`, 'g');
        jsxString = jsxString.replace(regex, `<${tag}$1 />`);
    });
    jsxString = jsxString.replace(/style="(.*?)"/g, (match, p1) => {
        const styleObject = p1.split(';').reduce((acc, style) => {
            if (style) {
                const [key, value] = style.split(':');
                acc[key.trim().replace(/-./g, c => c.substr(1).toUpperCase())] = value.trim();
            }
            return acc;
        }, {});
        return `style={${JSON.stringify(styleObject)}}`;
    });
    jsxString = jsxString.replace(/(data|aria)-([\w-]+)=/g, (match, p1, p2) => {
        return `${p1}-${p2.toLowerCase()}=`;
    });
    const booleanAttributes = ['disabled', 'checked', 'readonly', 'required', 'autofocus', 'autoplay', 'controls', 'loop', 'muted', 'default', 'novalidate', 'formNoValidate'];
    booleanAttributes.forEach(attr => {
        const regex = new RegExp(`${attr}="${attr}"`, 'g');
        jsxString = jsxString.replace(regex, `${attr}`);
        const regex2 = new RegExp(`${attr}=''`, 'g');
        jsxString = jsxString.replace(regex2, `${attr}`);
        const regex3 = new RegExp(`${attr}=""`, 'g');
        jsxString = jsxString.replace(regex3, `${attr}`);
    });
    return jsxString;
}
exports.htmlToJsx = htmlToJsx;
function getFullSourcePathFromRef(fileName1, fileName2) {
    const baseDirectory = fileName1.substring(0, fileName1.lastIndexOf('/'));
    const normalizedFileName2 = fileName2.replace(/^[a-z]+:\/\/\.?\//, '');
    const baseComponents = baseDirectory.split('/');
    const fileName2Components = normalizedFileName2.split('/');
    let commonRootIndex = 0;
    while (commonRootIndex < fileName2Components.length && baseComponents.includes(fileName2Components[commonRootIndex])) {
        commonRootIndex++;
    }
    const relativePath = fileName2Components.slice(commonRootIndex).join('/');
    return baseDirectory + '/' + relativePath;
}
exports.getFullSourcePathFromRef = getFullSourcePathFromRef;
function jsxToCssName(jsxAttributeName) {
    return jsxAttributeName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
exports.jsxToCssName = jsxToCssName;
function diffJson(json1, json2) {
    const diff = {};
    Object.keys(json2).forEach(key => {
        if (json1[key] !== json2[key]) {
            diff[key] = json2[key];
        }
    });
    return diff;
}
exports.diffJson = diffJson;
