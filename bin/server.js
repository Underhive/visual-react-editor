#!/usr/bin/env node
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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const server_helpers_1 = require("./server-helpers");
const fs = __importStar(require("fs"));
const os_1 = require("os");
const app = (0, express_1.default)();
const port = process.env.PORT || 38388;
const apiURL = process.env.API_URL || 'https://api.underhive.in';
const diffs = {};
const insideTags = (tagName) => new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\\/${tagName}>`, 'g');
app.use((0, express_1.json)());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.get('/', (_req, res) => {
    res.send('pong');
});
app.post('/edit/', (req, res) => {
    const body = req.body;
    res.json({
        data: "honeypot"
    });
});
app.post('/edit/characterData', (req, res) => {
    const body = req.body;
    const line = body.source.lineNumber;
    const column = body.source.columnNumber;
    const osLineBreak = (0, os_1.platform)() === 'win32' ? '\r\n' : '\n';
    const fileData = fs.readFileSync(body.source.fileName, 'utf8');
    const [fileDataLines, lastLineHadNewLineChar] = (0, server_helpers_1.splitLines)(fileData, osLineBreak);
    const lineData = fileDataLines[line - 1];
    const cumulativeColEnds = (0, server_helpers_1.buildLineEndingPositions)(fileDataLines, lastLineHadNewLineChar);
    let afterCursor = `${lineData.substring(column - 1)}${osLineBreak}`;
    let objectLevel = insideTags(body.log.target.tagName).exec(afterCursor);
    let lineWindow = line;
    while (!objectLevel && lineWindow < fileDataLines.length) {
        lineWindow += 1;
        afterCursor += `${fileDataLines[lineWindow - 1]}${osLineBreak}`;
        objectLevel = insideTags(body.log.target.tagName).exec(afterCursor);
    }
    if (!objectLevel) {
        res.json({
            data: "ERROR"
        });
        return;
    }
    const tagData = objectLevel[1];
    // find line and col where tag data starts
    let colStart = cumulativeColEnds[body.source.lineNumber - 2];
    const tagStart = fileData.indexOf(afterCursor, colStart);
    const tagEnd = tagStart + afterCursor.length - 1;
    const newData = afterCursor.replace(tagData, body.log.characterData).replace(/^\s+|\s+$/g, '');
    ;
    const finalFileData = fileData.substring(0, tagStart) + newData + fileData.substring(tagEnd);
    fs.writeFileSync(body.source.fileName, finalFileData);
    res.json({
        data: "OK"
    });
});
app.post('/edit/attributes', (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({
        data: "OK"
    });
});
app.post('/edit/childList', (req, res) => {
    const body = req.body;
    console.log(body);
    res.json({
        data: "OK"
    });
});
app.listen(port, () => {
    console.log(`Underhive Server running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map