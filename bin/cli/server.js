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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const server_helpers_1 = require("./server-helpers");
const fs = __importStar(require("fs"));
const os_1 = require("os");
const styler_1 = require("./modifiers/styler");
const inserter_1 = require("./modifiers/inserter");
const remover_1 = require("./modifiers/remover");
const uuid_1 = require("uuid");
var Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init('1e96a8909b2f68bc0b56b93e15914b6e');
let user_id = '';
const os = require('os');
const path = require('path');
const configPath = path.join(os.homedir(), '.underhive');
if (fs.existsSync(configPath)) {
    const profileJson = fs.readFileSync(configPath, 'utf8');
    user_id = JSON.parse(profileJson).user_id;
}
else {
    user_id = (0, uuid_1.v4)();
    const profile = {
        user_id,
    };
    fs.writeFileSync(configPath, JSON.stringify(profile));
}
const apiURL = process.env.API_URL || 'https://api.underhive.in';
const insideTags = (tagName) => new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\\/${tagName}>`, 'g');
const attributeInTag = (attr) => new RegExp(`^<\\w+\\s+(?:[^>]*?${attr}=\\{([^}]+\\})[^>]*?)>`, 'g');
const runServer = () => {
    let language = 'ts';
    const port = process.env.PORT || 38388;
    mixpanel.track('Server Instance Started', {
        distinct_id: user_id,
        language,
    });
    try {
        const underhiveJson = JSON.parse(fs.readFileSync('./underhive.json', 'utf8'));
        language = underhiveJson.language;
        mixpanel.track('Server Instance Config Init', Object.assign({ distinct_id: user_id }, underhiveJson));
    }
    catch (e) { }
    const app = (0, express_1.default)();
    app.use((0, express_1.json)());
    const fileQueues = new Map();
    function queueMiddleware(req, res, next) {
        if (!fileQueues.has(req.body.source.fileName)) {
            fileQueues.set(req.body.source.fileName, {
                queue: [],
                isProcessing: false,
            });
        }
        const jobQueue = fileQueues.get(req.body.source.fileName);
        jobQueue.queue.push({ req, res, next });
        if (!jobQueue.isProcessing) {
            processQueue(jobQueue);
        }
    }
    function processQueue(jobQueue) {
        let requestQueue = jobQueue.queue;
        let isProcessing = jobQueue.isProcessing;
        if (requestQueue.length > 0) {
            isProcessing = true;
            const { req, res, next } = requestQueue.shift();
            next();
            res.on('finish', () => {
                processQueue(jobQueue);
            });
        }
        else {
            isProcessing = false;
        }
    }
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
        res.json({
            data: "honeypot"
        });
    });
    app.post('/edit/characterData', queueMiddleware, (req, res) => {
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
            mixpanel.track('error/edit/characterData', {
                distinct_id: user_id,
                error: "Unable to find tag data"
            });
            res.json({
                data: "ERROR"
            });
            return;
        }
        const tagData = objectLevel[1];
        let colStart = cumulativeColEnds[body.source.lineNumber - 2];
        const tagStart = fileData.indexOf(afterCursor, colStart);
        const tagEnd = tagStart + afterCursor.length - 1;
        const newData = afterCursor.replace(tagData, body.log.characterData).replace(/^\s+|\s+$/g, '');
        const finalFileData = fileData.substring(0, tagStart) + newData + fileData.substring(tagEnd);
        fs.writeFileSync(body.source.fileName, finalFileData);
        mixpanel.track('/edit/characterData', { distinct_id: user_id });
        res.json({
            data: "OK"
        });
    });
    app.post('/edit/stylesheet', queueMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const body = req.body;
        console.log(body);
        if ((!((_b = (_a = body.log) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.range) || !((_c = body.source) === null || _c === void 0 ? void 0 : _c.fileName)) && ((_e = (_d = body.log) === null || _d === void 0 ? void 0 : _d.source) === null || _e === void 0 ? void 0 : _e.type) != 'inline') {
            res.json({
                data: "OK"
            });
            return;
        }
        if (body.log.source.type === 'inline') {
            try {
                if (!body.log.classNameChanges) {
                    const finalFileData = yield (0, styler_1.modifyElementStyle)(body.source.fileName, body.source.lineNumber, body.source.columnNumber, {
                        [body.log.name]: body.log.value
                    }, language);
                    fs.writeFileSync(body.source.fileName, finalFileData);
                }
                else {
                    const finalFileData = yield (0, styler_1.modifyElementClass)(body.source.fileName, body.source.lineNumber, body.source.columnNumber, body.log.classNameChanges, language);
                    fs.writeFileSync(body.source.fileName, finalFileData);
                }
            }
            catch (e) {
                console.error(e);
                if (e.message === "Unable to modify style") {
                    mixpanel.track('error/edit/stylesheet', {
                        distinct_id: user_id,
                        error: "Unable to modify style",
                    });
                    res.status(500).json({
                        data: "Unable to modify style"
                    });
                    return;
                }
            }
            mixpanel.track('/edit/stylesheet', { distinct_id: user_id });
            res.json({
                data: "OK"
            });
            return;
        }
        const styleSheetSource = (0, server_helpers_1.getFullSourcePathFromRef)(body.source.fileName, body.log.file);
        const fileData = fs.readFileSync(styleSheetSource, 'utf8');
        const rangeToEdit = body.log.source.range;
        const cssName = (0, server_helpers_1.jsxToCssName)(body.log.name);
        const regex = new RegExp(`${cssName}(\\s*:\\s*)[^;]+`, 'g');
        const updatedCssText = rangeToEdit.blockContent.replace(regex, `${cssName}: ${body.log.value}`);
        const finalFileData = fileData.substring(0, rangeToEdit.startIndex) + updatedCssText + fileData.substring(rangeToEdit.endIndex);
        fs.writeFileSync(styleSheetSource, finalFileData);
        mixpanel.track('/edit/stylesheet', { distinct_id: user_id });
        res.json({
            data: "OK"
        });
    }));
    app.post('/edit/attributes', queueMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const body = req.body;
        console.log(body);
        if (body.log.attributeName != 'style') {
            res.json({
                data: "OK"
            });
            return;
        }
        const cssJson = (0, server_helpers_1.convertCssToJsx)(body.log.attributeValue);
        const oldCssJson = (0, server_helpers_1.convertCssToJsx)(body.log.oldValue);
        const diff = (0, server_helpers_1.diffJson)(oldCssJson, cssJson);
        console.log(diff);
        try {
            const finalFileData = yield (0, styler_1.modifyElementStyle)(body.source.fileName, body.source.lineNumber, body.source.columnNumber, diff, language);
            fs.writeFileSync(body.source.fileName, finalFileData);
        }
        catch (e) {
            console.error(e);
            if (e.message === "Unable to modify style") {
                mixpanel.track('/edit/attributes', {
                    distinct_id: user_id,
                    error: "Unable to modify style",
                });
                res.status(500).json({
                    data: "Unable to modify style"
                });
                return;
            }
        }
        mixpanel.track('/edit/attributes', { distinct_id: user_id });
        res.json({
            data: "OK"
        });
    }));
    app.post('/edit/childList', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const body = req.body;
        console.log(body);
        if (!body.source) {
            res.json({
                data: "OK"
            });
            return;
        }
        let finalFileData;
        if (body.log.action === 'added') {
            finalFileData = yield (0, inserter_1.insertChildrenIntoElement)(body.source.fileName, body.source.lineNumber, body.source.columnNumber, body.log.html, language);
        }
        else if (body.log.action === 'removed') {
            finalFileData = yield (0, remover_1.removeElement)(body.source.fileName, body.source.lineNumber, body.source.columnNumber, language);
        }
        fs.writeFileSync(body.source.fileName, finalFileData);
        mixpanel.track('/edit/childList', { distinct_id: user_id });
        res.json({
            data: "OK"
        });
    }));
    app.listen(port, () => {
        console.log(`Underhive Server running at http://localhost:${port}`);
    });
};
exports.default = runServer;
