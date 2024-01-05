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
exports.removeElement = void 0;
const parser_1 = require("@babel/parser");
const traverse_1 = __importDefault(require("@babel/traverse"));
const generator_1 = __importDefault(require("@babel/generator"));
const fs = __importStar(require("fs"));
const prettier_1 = __importDefault(require("prettier"));
function removeElement(filePath, lineNumber, columnNumber, mainLanguage) {
    return __awaiter(this, void 0, void 0, function* () {
        const code = fs.readFileSync(filePath, 'utf8');
        const ast = (0, parser_1.parse)(code, {
            sourceType: 'module',
            plugins: ['jsx', 'typescript']
        });
        let removed = false;
        (0, traverse_1.default)(ast, {
            JSXElement(path) {
                const { start } = path.node.loc;
                if (start.line === lineNumber && start.column === columnNumber - 1) {
                    path.remove();
                    removed = true;
                }
            }
        });
        if (!removed) {
            console.warn('No removal made. Target position might be incorrect.');
            return;
        }
        const generatedCode = (0, generator_1.default)(ast, { retainLines: true }).code;
        const options = yield prettier_1.default.resolveConfig(filePath);
        const formattedCode = yield prettier_1.default.format(generatedCode, Object.assign({ parser: mainLanguage === 'ts' ? "babel-ts" : "babel" }, options));
        return formattedCode;
    });
}
exports.removeElement = removeElement;
