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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntrypointAndLanguage = void 0;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const ignore_1 = __importDefault(require("ignore"));
function readFilesRecursively(dir, filelist = []) {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    files.forEach((file) => {
        if (file.isDirectory()) {
            filelist = readFilesRecursively(path.join(dir, file.name), filelist);
        }
        else {
            filelist.push(path.join(dir, file.name));
        }
    });
    return filelist;
}
function detectMainLanguage(projectPath) {
    console.log(`Detecting main language in ${projectPath}`);
    const gitignorePath = path.join(projectPath, '.gitignore');
    const ig = (0, ignore_1.default)();
    ig.add(['node_modules']);
    if (fs.existsSync(gitignorePath)) {
        const gitignore = fs.readFileSync(gitignorePath, 'utf8');
        ig.add(gitignore);
    }
    const allFiles = readFilesRecursively(projectPath);
    const relevantFiles = allFiles.filter(file => (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.tsx')) &&
        !ig.ignores(path.relative(projectPath, file)));
    const fileExtensions = relevantFiles.map(file => file.split('.').pop());
    const tsFilesCount = fileExtensions.filter(ext => ext === 'ts' || ext === 'tsx').length;
    return tsFilesCount > fileExtensions.length / 2 ? 'ts' : 'js';
}
function findEntrypoint(projectPath, mainLanguage) {
    console.log(`Finding entrypoint in ${projectPath}`);
    const packageJsonPath = `${projectPath}/package.json`;
    if (!fs.existsSync(packageJsonPath)) {
        throw new Error('package.json not found');
    }
    const entryPoints = {
        js: ['src/index.js', 'src/index.jsx', 'src/main.js', 'src/main.jsx', 'app/index.js', 'app/index.jsx', 'src/app/layout.jsx'],
        ts: ['src/index.ts', 'src/index.tsx', 'src/main.js', 'src/main.jsx', 'app/index.ts', 'app/index.tsx', 'src/app/layout.tsx']
    };
    let entrypoint;
    for (const candidate of entryPoints[mainLanguage]) {
        if (fs.existsSync(`${projectPath}/${candidate}`)) {
            entrypoint = candidate;
            break;
        }
    }
    return entrypoint;
}
function getEntrypointAndLanguage(projectPath) {
    const mainLanguage = detectMainLanguage(projectPath);
    console.log(`Detected main language: ${mainLanguage}`);
    const entrypoint = findEntrypoint(projectPath, mainLanguage);
    console.log(`Entrypoint: ./${entrypoint}`);
    const entrypointPath = `${projectPath}/${entrypoint}`;
    if (!fs.existsSync(entrypointPath)) {
        console.log(`Entrypoint file not found.`);
        return { language: mainLanguage, entrypoint: "" };
    }
    return {
        language: mainLanguage,
        entrypoint
    };
}
exports.getEntrypointAndLanguage = getEntrypointAndLanguage;
