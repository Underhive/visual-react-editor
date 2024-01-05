"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertElement = exports.insertChildrenIntoElement = void 0;
const parser_1 = require("@babel/parser");
const traverse_1 = __importDefault(require("@babel/traverse"));
const generator_1 = __importDefault(require("@babel/generator"));
const t = __importStar(require("@babel/types"));
const fs = __importStar(require("fs"));
const prettier_1 = __importDefault(require("prettier"));
const html_react_parser_1 = __importDefault(require("html-react-parser"));
const react_1 = __importDefault(require("react"));
function insertChildrenIntoElement(filePath, lineNumber, columnNumber, childrenHtmlString, mainLanguage) {
    return __awaiter(this, void 0, void 0, function* () {
        const code = fs.readFileSync(filePath, 'utf8');
        const ast = (0, parser_1.parse)(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript']
        });
        const childrenElements = convertHtmlToJsxElements(childrenHtmlString);
        let inserted = false;
        (0, traverse_1.default)(ast, {
            JSXElement(path) {
                var _a;
                const { start } = (_a = path.node.loc) !== null && _a !== void 0 ? _a : { start: { line: -1, column: -1 } };
                if (start.line === lineNumber && start.column === columnNumber - 1) {
                    if (path.node.children) {
                        path.node.children.push(...childrenElements);
                        inserted = true;
                    }
                }
            }
        });
        if (!inserted) {
            console.warn('No insertion made. Target position might be incorrect.');
            return;
        }
        const generatedCode = (0, generator_1.default)(ast, { retainLines: true }).code;
        const options = yield prettier_1.default.resolveConfig(filePath);
        const formattedCode = yield prettier_1.default.format(generatedCode, Object.assign({ parser: mainLanguage === 'ts' ? "babel-ts" : "babel" }, options));
        return formattedCode;
    });
}
exports.insertChildrenIntoElement = insertChildrenIntoElement;
function insertElement(filePath, lineNumber, columnNumber, htmlString, insertAfter = true, mainLanguage) {
    return __awaiter(this, void 0, void 0, function* () {
        const code = fs.readFileSync(filePath, 'utf8');
        const ast = (0, parser_1.parse)(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript']
        });
        const jsxElement = convertHtmlToJsx(htmlString);
        let inserted = false;
        (0, traverse_1.default)(ast, {
            JSXElement(path) {
                if (!inserted) {
                    const { start, end } = path.node.loc;
                    if (start.line === lineNumber && start.column === columnNumber - 1) {
                        console.log("Insertion point found, inserting element.");
                        if (insertAfter)
                            path.insertAfter(jsxElement);
                        else
                            path.insertBefore(jsxElement);
                        inserted = true;
                        console.log(`Inserted at line ${start.line}, column ${start.column}`);
                    }
                }
            }
        });
        if (!inserted) {
            console.warn('No insertion made. Target position might be incorrect.');
        }
        const generatedCode = (0, generator_1.default)(ast, { retainLines: true }).code;
        const options = yield prettier_1.default.resolveConfig(filePath);
        const formattedCode = yield prettier_1.default.format(generatedCode, Object.assign({ parser: mainLanguage === 'ts' ? "babel-ts" : "babel" }, options));
        return formattedCode;
    });
}
exports.insertElement = insertElement;
function convertHtmlToJsx(htmlString) {
    const reactElement = (0, html_react_parser_1.default)(htmlString);
    console.log("Parsed HTML:", JSON.stringify(reactElement, null, 2));
    return convertReactElementToJsxElement(reactElement);
}
function convertReactElementToJsxElement(reactElement) {
    console.log(typeof reactElement);
    if (typeof reactElement === 'string') {
        return t.jsxElement(t.jsxOpeningElement(t.jsxIdentifier('div'), [], false), t.jsxClosingElement(t.jsxIdentifier('div')), [t.jsxText(reactElement)], false);
    }
    const propsWithoutChildren = Object.assign({}, reactElement.props);
    delete propsWithoutChildren.children;
    const openingElement = t.jsxOpeningElement(t.jsxIdentifier(reactElement.type), reactElement.props ? convertPropsToJsxAttributes(propsWithoutChildren) : [], false);
    const closingElement = t.jsxClosingElement(t.jsxIdentifier(reactElement.type));
    const children = reactElement.props.children
        ? convertChildrenToJsxElements(reactElement.props.children)
        : [];
    return t.jsxElement(openingElement, closingElement, children, false);
}
function convertPropsToJsxAttributes(props) {
    return Object.entries(props).map(([key, value]) => {
        if (key === 'className' || key === 'class') {
            key = 'className';
        }
        else if (key === 'style') {
            value = t.jsxExpressionContainer(t.objectExpression(Object.entries(value).map(([key, value]) => {
                return t.objectProperty(t.identifier(key), t.stringLiteral(value));
            })));
        }
        else if (key.startsWith('on')) {
            value = t.jsxExpressionContainer(t.arrowFunctionExpression([], t.blockStatement([
                t.expressionStatement(t.callExpression(t.memberExpression(t.memberExpression(t.thisExpression(), t.identifier('props')), t.identifier(key)), [t.identifier('event')]))
            ])));
        }
        else if (typeof value === 'object') {
            value = t.jsxExpressionContainer(t.objectExpression(Object.entries(value).map(([key, value]) => {
                return t.objectProperty(t.identifier(key), t.stringLiteral(value));
            })));
        }
        else {
            value = t.stringLiteral(value);
        }
        console.log("Converted prop:", key, value);
        return t.jsxAttribute(t.jsxIdentifier(key), !t.isStringLiteral(value) && typeof value != 'object' ? t.stringLiteral(value) : value);
    });
}
function convertChildrenToJsxElements(children) {
    if (!Array.isArray(children)) {
        children = [children];
    }
    return children.map(child => {
        if (typeof child === 'string') {
            return t.jsxText(child);
        }
        else if (react_1.default.isValidElement(child)) {
            return convertReactElementToJsxElement(child);
        }
        else {
            return t.jsxText('');
        }
    });
}
function convertHtmlToJsxElements(htmlString) {
    const reactElements = (0, html_react_parser_1.default)(htmlString);
    if (Array.isArray(reactElements)) {
        return reactElements.map(element => convertReactElementToJsxElement(element));
    }
    else {
        return [convertReactElementToJsxElement(reactElements)];
    }
}
