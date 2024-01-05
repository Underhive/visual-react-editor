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
exports.modifyElementClass = exports.modifyElementStyle = void 0;
const parser_1 = require("@babel/parser");
const traverse_1 = __importDefault(require("@babel/traverse"));
const generator_1 = __importDefault(require("@babel/generator"));
const t = __importStar(require("@babel/types"));
const fs = __importStar(require("fs"));
const prettier_1 = __importDefault(require("prettier"));
const path = __importStar(require("path"));
function modifyElementStyleForImported(filePath, styleVariableName, newStyles, mainLanguage) {
    return __awaiter(this, void 0, void 0, function* () {
        const code = fs.readFileSync(filePath, 'utf8');
        const ast = (0, parser_1.parse)(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript']
        });
        let didModify = false;
        (0, traverse_1.default)(ast, {
            VariableDeclarator(path) {
                if (path.node.id.type === 'Identifier' && path.node.id.name === styleVariableName) {
                    if (path.node.init && t.isObjectExpression(path.node.init)) {
                        didModify = applyNewStylesToObjectExpression(path.node.init, newStyles);
                    }
                }
            }
        });
        const modifiedCode = (0, generator_1.default)(ast, { retainLines: true, }).code;
        const formattedCode = yield prettier_1.default.format(modifiedCode, { parser: mainLanguage === 'ts' ? "babel-ts" : "babel" });
        fs.writeFileSync(filePath, formattedCode);
        return didModify;
    });
}
function modifyElementStyle(filePath, lineNumber, columnNumber, newStyles, mainLanguage) {
    return __awaiter(this, void 0, void 0, function* () {
        const code = fs.readFileSync(filePath, 'utf8');
        const ast = (0, parser_1.parse)(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript']
        });
        let styleVariableName = null;
        let didModify = false;
        (0, traverse_1.default)(ast, {
            JSXOpeningElement(path) {
                const { loc } = path.node;
                if (loc && loc.start.line === lineNumber && loc.start.column === columnNumber - 1) {
                    let foundStyle = false;
                    path.node.attributes.forEach(attribute => {
                        if (t.isJSXAttribute(attribute) && attribute.name.name === 'style') {
                            foundStyle = true;
                            if (t.isJSXExpressionContainer(attribute.value) && t.isObjectExpression(attribute.value.expression)) {
                                didModify = applyNewStylesToObjectExpression(attribute.value.expression, newStyles);
                            }
                            else if (t.isJSXExpressionContainer(attribute.value) && t.isIdentifier(attribute.value.expression)) {
                                const expression = attribute.value.expression;
                                if (t.isIdentifier(expression)) {
                                    styleVariableName = expression.name;
                                }
                            }
                        }
                    });
                    if (!foundStyle) {
                        const styleExpression = t.objectExpression([]);
                        path.node.attributes.push(t.jsxAttribute(t.jsxIdentifier('style'), t.jsxExpressionContainer(styleExpression)));
                        didModify = applyNewStylesToObjectExpression(styleExpression, newStyles);
                    }
                }
            }
        });
        if (styleVariableName) {
            let isImported = false;
            (0, traverse_1.default)(ast, {
                ImportDeclaration(path) {
                    path.node.specifiers.forEach((specifier) => __awaiter(this, void 0, void 0, function* () {
                        if (t.isImportSpecifier(specifier) && specifier.imported.type === 'Identifier' && specifier.imported.name === styleVariableName) {
                            isImported = true;
                            const importedFilePath = yield resolveImportedFilePath(path.node.source.value, filePath);
                            didModify = yield modifyElementStyleForImported(importedFilePath, styleVariableName, newStyles, mainLanguage);
                        }
                    }));
                }
            });
            if (!isImported) {
                (0, traverse_1.default)(ast, {
                    VariableDeclarator(path) {
                        if (path.node.id.type === 'Identifier' && path.node.id.name === styleVariableName) {
                            if (path.node.init && t.isObjectExpression(path.node.init)) {
                                didModify = applyNewStylesToObjectExpression(path.node.init, newStyles);
                            }
                        }
                    }
                });
            }
        }
        if (!didModify) {
            throw new Error('Unable to modify style');
        }
        const generatedCode = (0, generator_1.default)(ast, { retainLines: true }).code;
        const options = yield prettier_1.default.resolveConfig(filePath);
        return yield prettier_1.default.format(generatedCode, Object.assign({ parser: mainLanguage === 'ts' ? "babel-ts" : "babel" }, options));
    });
}
exports.modifyElementStyle = modifyElementStyle;
function resolveImportedFilePath(importPath, relativeTo) {
    return __awaiter(this, void 0, void 0, function* () {
        let resolvedPath = '';
        if (importPath.startsWith('.')) {
            resolvedPath = path.resolve(path.dirname(relativeTo), importPath);
        }
        else {
            resolvedPath = path.resolve(relativeTo, '..', 'node_modules', importPath);
        }
        if (!resolvedPath.endsWith('.ts') && fs.existsSync(`${resolvedPath}.ts`)) {
            resolvedPath += '.ts';
        }
        if (!resolvedPath.endsWith('.tsx') && fs.existsSync(`${resolvedPath}.tsx`)) {
            resolvedPath += '.tsx';
        }
        else if (!resolvedPath.endsWith('.js') && fs.existsSync(`${resolvedPath}.js`)) {
            resolvedPath += '.js';
        }
        return resolvedPath;
    });
}
function applyNewStylesToObjectExpression(objectExpression, newStyles) {
    let didModify = false;
    Object.entries(newStyles).forEach(([key, value]) => {
        const existingProp = objectExpression.properties.find(prop => t.isObjectProperty(prop) && t.isIdentifier(prop.key) && prop.key.name === key);
        if (existingProp && t.isObjectProperty(existingProp)) {
            existingProp.value = t.stringLiteral(value);
            didModify = true;
        }
        else {
            objectExpression.properties.push(t.objectProperty(t.identifier(key), t.stringLiteral(value)));
            didModify = true;
        }
    });
    return didModify;
}
function modifyElementClassForComplexClassName(node, classNameChanges) {
    let didModify = false;
    if (t.isJSXExpressionContainer(node.value) && t.isBinaryExpression(node.value.expression, { operator: '+' })) {
        const binaryExpr = node.value.expression;
        if (t.isStringLiteral(binaryExpr.left)) {
            let staticClassNames = binaryExpr.left.value.trim().split(' ');
            staticClassNames = modifyClassNames(staticClassNames, classNameChanges);
            binaryExpr.left = t.stringLiteral(staticClassNames.join(' ') + ' ');
            didModify = true;
        }
        if (t.isConditionalExpression(binaryExpr.right)) {
            const conditionalExpr = binaryExpr.right;
            if (t.isStringLiteral(conditionalExpr.consequent)) {
                let trueClassNames = conditionalExpr.consequent.value.trim().split(' ');
                trueClassNames = modifyClassNames(trueClassNames, classNameChanges);
                conditionalExpr.consequent = t.stringLiteral(trueClassNames.join(' ') + ' ');
                didModify = true;
            }
            if (t.isStringLiteral(conditionalExpr.alternate)) {
                let falseClassNames = conditionalExpr.alternate.value.trim().split(' ');
                falseClassNames = modifyClassNames(falseClassNames, classNameChanges);
                conditionalExpr.alternate = t.stringLiteral(falseClassNames.join(' '));
                didModify = true;
            }
        }
    }
    return didModify;
}
function modifyElementClass(filePath, lineNumber, columnNumber, classNameChanges, mainLanguage) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log({ filePath, lineNumber, columnNumber, classNameChanges, mainLanguage });
        const code = fs.readFileSync(filePath, 'utf8');
        const ast = (0, parser_1.parse)(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript']
        });
        let didModify = false;
        let exists = false;
        (0, traverse_1.default)(ast, {
            JSXOpeningElement(path) {
                const { loc } = path.node;
                if (loc && loc.start.line === lineNumber && loc.start.column === columnNumber - 1) {
                    path.node.attributes.forEach(attribute => {
                        if (t.isJSXAttribute(attribute) && attribute.name.name === 'className') {
                            exists = true;
                            if (t.isStringLiteral(attribute.value)) {
                                let classNames = attribute.value.value.split(' ');
                                classNames = modifyClassNames(classNames, classNameChanges);
                                attribute.value.value = classNames.join(' ');
                                didModify = true;
                            }
                            else if (t.isJSXExpressionContainer(attribute.value)) {
                                didModify = modifyElementClassForComplexClassName(attribute, classNameChanges);
                            }
                        }
                    });
                    if (!didModify && !exists) {
                        const newClassNames = modifyClassNames([], classNameChanges);
                        path.node.attributes.push(t.jsxAttribute(t.jsxIdentifier('className'), t.stringLiteral(newClassNames.join(' '))));
                        didModify = true;
                    }
                }
            }
        });
        if (!didModify) {
            throw new Error('Unable to modify className');
        }
        const generatedCode = (0, generator_1.default)(ast, { retainLines: true }).code;
        const options = yield prettier_1.default.resolveConfig(filePath);
        return yield prettier_1.default.format(generatedCode, Object.assign({ parser: mainLanguage === 'ts' ? "babel-ts" : "babel" }, options));
    });
}
exports.modifyElementClass = modifyElementClass;
function modifyClassNames(classNames, changes) {
    if (changes.edit) {
        let tobeRemoved = [];
        classNames = classNames.map(className => {
            if (changes.edit[className] && changes.edit[className].length > 0) {
                return changes.edit[className];
            }
            else if (changes.edit[className] === '') {
                tobeRemoved.push(className);
            }
            return className;
        });
        classNames = classNames.filter(className => !tobeRemoved.includes(className));
    }
    if (changes.add) {
        changes.add.forEach(className => {
            if (!classNames.includes(className)) {
                classNames.push(className);
            }
        });
    }
    return classNames;
}
