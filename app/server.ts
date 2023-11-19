#!/usr/bin/env node

import express, { Request, Response, json } from 'express';
import { splitLines, buildLineEndingPositions, convertCssToJsx, jsonToJsx } from './server-helpers';
import * as fs from 'fs';
import { platform } from 'os';

import axios from 'axios';

const app = express();
const port = process.env.PORT || 38388;

const apiURL = process.env.API_URL || 'https://api.underhive.in';

const diffs: {
  [url: string]: any;
} = {}

type ReactFiberSourceDeclaration = {
  columnNumber: number,
  fileName: string,
  lineNumber: number
}

type GenericEditLog = {
  type: string,
  target: any,
  action: string,
}

type TextEditLog = {
  characterData: string
  oldValue: string
} & GenericEditLog

type AttributeEditLog = {
  attributeName: string
  attributeValue: string | null
  oldValue: string | null
} & GenericEditLog

type AddChildEditLog = {
  addedNodes: any
} & GenericEditLog

type RemoveChildEditLog = {
  removedNodes: any
} & GenericEditLog

const insideTags = (tagName: string) => new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\\/${tagName}>`, 'g')

const attributeInTag = (attr: string) => new RegExp(`^<\\w+\\s+(?:[^>]*?${attr}=\\{([^}]+\\})[^>]*?)>`, 'g')

app.use(json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get('/', (_req: Request, res: Response) => {
  res.send('pong');
});

app.post('/edit/', (req: Request, res: Response) => {
  const body: {
    log: GenericEditLog;
    source: ReactFiberSourceDeclaration;
  } = req.body;

  res.json({
    data: "honeypot"
  })
})

app.post('/edit/characterData', (req: Request, res: Response) => {
  const body: {
    log: TextEditLog;
    source: ReactFiberSourceDeclaration;
    timestamp: number;
  } = req.body;

  const line = body.source.lineNumber;
  const column = body.source.columnNumber;
  const osLineBreak = platform() === 'win32' ? '\r\n' : '\n';
  const fileData = fs.readFileSync(body.source.fileName, 'utf8');
  const [fileDataLines, lastLineHadNewLineChar] = splitLines(fileData, osLineBreak);
  const lineData = fileDataLines[line - 1];

  const cumulativeColEnds: number[] = buildLineEndingPositions(fileDataLines, lastLineHadNewLineChar);

  let afterCursor = `${lineData.substring(column - 1)}${osLineBreak}`
  let objectLevel = insideTags(body.log.target.tagName).exec(afterCursor);
  let lineWindow = line
  
  while(!objectLevel && lineWindow < fileDataLines.length) {
    lineWindow += 1;
    afterCursor += `${fileDataLines[lineWindow - 1]}${osLineBreak}`;
    objectLevel = insideTags(body.log.target.tagName).exec(afterCursor);
  }
  if (!objectLevel) {
    res.json({
      data: "ERROR"
    })
    return;
  }

  const tagData = objectLevel![1];

  // find line and col where tag data starts
  let colStart = cumulativeColEnds[body.source.lineNumber - 2];
  const tagStart = fileData.indexOf(afterCursor, colStart);
  const tagEnd = tagStart + afterCursor.length - 1;

  const newData = afterCursor.replace(tagData, body.log.characterData).replace(/^\s+|\s+$/g, '');

  const finalFileData = fileData.substring(0, tagStart) + newData + fileData.substring(tagEnd)

  fs.writeFileSync(body.source.fileName, finalFileData);

  res.json({
    data: "OK"
  })
})

app.post('/edit/attributes', (req: Request, res: Response) => {
  const body: {
    log: AttributeEditLog;
    source: ReactFiberSourceDeclaration;
    timestamp: number;
  } = req.body;

  console.log(body);

  const line = body.source.lineNumber;
  const column = body.source.columnNumber;
  const osLineBreak = platform() === 'win32' ? '\r\n' : '\n';
  const fileData = fs.readFileSync(body.source.fileName, 'utf8');
  const [fileDataLines, lastLineHadNewLineChar] = splitLines(fileData, osLineBreak);
  const lineData = fileDataLines[line - 1];

  const cumulativeColEnds: number[] = buildLineEndingPositions(fileDataLines, lastLineHadNewLineChar);

  let afterCursor = `${lineData.substring(column - 1)}${osLineBreak}`
  let objectLevel = attributeInTag(body.log.attributeName).exec(afterCursor);
  let lineWindow = line
  
  while(!objectLevel && lineWindow < fileDataLines.length) {
    lineWindow += 1;
    afterCursor += `${fileDataLines[lineWindow - 1]}`;
    objectLevel = attributeInTag(body.log.attributeName).exec(afterCursor);
    afterCursor += `${osLineBreak}`;
  }
  if (!objectLevel && body.log.attributeName === 'style') {
    afterCursor = afterCursor.replace(/^\s+|\s+$/g, '')
    // insert style attribute
    let styleObject = convertCssToJsx(body.log.attributeValue!);
    styleObject = jsonToJsx(JSON.stringify(styleObject, null, 2), body.source.columnNumber)
    
    console.log(fileData, afterCursor);

    const colStart = cumulativeColEnds[body.source.lineNumber - 2];
    const tagStart = fileData.indexOf(afterCursor, colStart);
    const tagEnd = tagStart + afterCursor.length;
    console.log(tagStart, afterCursor.length, fileData.length, tagEnd);
    
    const newStyle = ` style={${styleObject}}`
    const newData = afterCursor.replace(/\/?>/, newStyle + '>');
    const finalFileData = fileData.substring(0, tagStart) + newData + fileData.substring(tagEnd)
    fs.writeFileSync(body.source.fileName, finalFileData);
    res.json({
      data: "OK"
    })
    return;
  } else if(!objectLevel) {
    res.json({
      data: "ERROR"
    })
    return;
  }

  const tagData = objectLevel![1];

  // find line and col where tag data starts
  let colStart = cumulativeColEnds[body.source.lineNumber - 2];
  const tagStart = fileData.indexOf(afterCursor, colStart);
  const tagEnd = tagStart + afterCursor.length;

  let finalStyles
  if(body.log.attributeName === 'style') {
    finalStyles = convertCssToJsx(body.log.attributeValue);
  } else {
    res.json({ data: "OK" })
    return;
  }
  finalStyles = jsonToJsx(JSON.stringify(finalStyles, null, 2), body.source.columnNumber)
  const newData = afterCursor.replace(tagData, finalStyles);
  const finalFileData = fileData.substring(0, tagStart) + newData + fileData.substring(tagEnd)
  fs.writeFileSync(body.source.fileName, finalFileData);

  res.json({
    data: "OK"
  })
})

app.post('/edit/childList', (req: Request, res: Response) => {
  const body: {
    log: AddChildEditLog | RemoveChildEditLog;
    source: ReactFiberSourceDeclaration;
    timestamp: number;
  } = req.body;

  console.log(body);

  if(body.log.action === 'added') {

  } else if(body.log.action === 'removed') {

  }

  res.json({
    data: "OK"
  })
})

app.listen(port, () => {
  console.log(`Underhive Server running at http://localhost:${port}`);
});