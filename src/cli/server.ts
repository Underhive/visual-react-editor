#!/usr/bin/env node

import express, { Request, Response, json } from 'express';
import { splitLines, buildLineEndingPositions, convertCssToJsx, jsonToJsx, getFullSourcePathFromRef, jsxToCssName, diffJson } from './server-helpers';
import * as fs from 'fs';
import { platform } from 'os';
import { modifyElementStyle } from './modifiers/styler';
import { insertChildrenIntoElement, insertElement } from './modifiers/inserter';
import { removeElement } from './modifiers/remover';

const apiURL = process.env.API_URL || 'https://api.underhive.in';

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
  html: string
  action: 'added'
} & GenericEditLog

type RemoveChildEditLog = {
  html: string
  action: 'removed'
} & GenericEditLog

type Styles = {
  [property: string]: string;
}
type SourceMapJSON = {
  version: number;
  sources: string[];
  names: any[];
  mappings: string;
  sourcesContent: string[];
  sourceRoot: string;
}

type StyleSheetSource = {
  sourceMapJSON?: SourceMapJSON;
  parentRuleCssText?: string;
  parentRuleSelector?: string;
  range?: {
    startIndex: number;
    endIndex: number;
    blockContent: string;
  };
  styles: Styles;
  type: "inline" | "stylesheet";
}

type StyleSheetEditLog = {
  name: string,
  value: string,
  file: string,
  selector: string,
  source: StyleSheetSource
}

const insideTags = (tagName: string) => new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\\/${tagName}>`, 'g')

const attributeInTag = (attr: string) => new RegExp(`^<\\w+\\s+(?:[^>]*?${attr}=\\{([^}]+\\})[^>]*?)>`, 'g')

const runServer = () => {
  const underhiveJson: {
    language: 'js' | 'ts';
    entrypoint: string;
    port: number;
  } = JSON.parse(fs.readFileSync('./underhive.json', 'utf8'));
  const port = underhiveJson.port || 38388;
  const language = underhiveJson.language ?? 'ts'

  const app = express();

  app.use(json());

  const fileQueues = new Map<string, { queue: any[], isProcessing: boolean }>();
  function queueMiddleware(req, res, next) {
    if(!fileQueues.has(req.body.source.fileName)) {
      fileQueues.set(req.body.source.fileName, {
        queue: [],
        isProcessing: false,
      });
    }
    const jobQueue = fileQueues.get(req.body.source.fileName);
    jobQueue.queue.push({ req, res, next });

    // Process the queue if not already processing
    if (!jobQueue.isProcessing) {
      processQueue(jobQueue);
    }
  }

  function processQueue(jobQueue: { queue: any[], isProcessing: boolean }) {
    let requestQueue = jobQueue.queue;
    let isProcessing = jobQueue.isProcessing;
    if(requestQueue.length > 0) {
      isProcessing = true;
      const { req, res, next } = requestQueue.shift();

      // Process the request, then call the actual handler
      next();

      // After the response is finished, process the next item in the queue
      res.on('finish', () => {
        processQueue(jobQueue);
      });
    } else {
      isProcessing = false;
    }
  }

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
    res.json({
      data: "honeypot"
    })
  })

  app.post('/edit/characterData', queueMiddleware, (req: Request, res: Response) => {
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

  app.post('/edit/stylesheet', queueMiddleware, async (req: Request, res: Response) => {
    const body: {
      log: StyleSheetEditLog;
      source: ReactFiberSourceDeclaration;
      timestamp: number;
    } = req.body;

    console.log(body);

    if((!body.log?.source?.range || !body.source?.fileName) && body.log?.source?.type != 'inline') {
      res.json({
        data: "OK"
      })
      return;
    }

    if(body.log.source.type === 'inline') {
      try {
        const finalFileData = await modifyElementStyle(body.source.fileName, body.source.lineNumber, body.source.columnNumber, {
          [body.log.name]: body.log.value
        }, language)
        fs.writeFileSync(body.source.fileName, finalFileData);
      } catch(e) {
        console.error(e);
        if(e.message === "Unable to modify style") {
          res.status(500).json({
            data: "Unable to modify style"
          })
          return;
        }
      }
      res.json({
        data: "OK"
      })
      return;
    }

    const styleSheetSource = getFullSourcePathFromRef(
      body.source.fileName,
      body.log.file,
    )

    const fileData = fs.readFileSync(styleSheetSource, 'utf8');
    const rangeToEdit = body.log.source.range
    const cssName = jsxToCssName(body.log.name);
    const regex = new RegExp(`${cssName}(\\s*:\\s*)[^;]+`, 'g')
    const updatedCssText = rangeToEdit.blockContent.replace(regex, `${cssName}: ${body.log.value}`);
    
    const finalFileData = fileData.substring(0, rangeToEdit.startIndex) + updatedCssText + fileData.substring(rangeToEdit.endIndex)

    fs.writeFileSync(styleSheetSource, finalFileData);

    res.json({
      data: "OK"
    })
  })

  app.post('/edit/attributes', queueMiddleware, async (req: Request, res: Response) => {
    const body: {
      log: AttributeEditLog;
      source: ReactFiberSourceDeclaration;
      timestamp: number;
    } = req.body;

    console.log(body);
    if(body.log.attributeName != 'style') {
      res.json({
        data: "OK"
      })
      return
    }

    const cssJson = convertCssToJsx(body.log.attributeValue!);
    const oldCssJson = convertCssToJsx(body.log.oldValue!);
    const diff = diffJson(oldCssJson, cssJson);

    console.log(diff);

    try {
      const finalFileData = await modifyElementStyle(body.source.fileName, body.source.lineNumber, body.source.columnNumber, diff, language)
      fs.writeFileSync(body.source.fileName, finalFileData);
    } catch(e) {
      console.error(e);
      if(e.message === "Unable to modify style") {
        res.status(500).json({
          data: "Unable to modify style"
        })
        return;
      }
    }
    res.json({
      data: "OK"
    })

  })

  app.post('/edit/childList', async (req: Request, res: Response) => {
    const body: {
      log: AddChildEditLog | RemoveChildEditLog;
      source: ReactFiberSourceDeclaration;
      timestamp: number;
    } = req.body;

    console.log(body);

    if(!body.source) {
      res.json({
        data: "OK"
      })
      return;
    }

    let finalFileData
    if(body.log.action === 'added') {
      finalFileData = await insertChildrenIntoElement(body.source.fileName, body.source.lineNumber, body.source.columnNumber, body.log.html, language)
    } else if(body.log.action === 'removed') {
      finalFileData = await removeElement(body.source.fileName, body.source.lineNumber, body.source.columnNumber, language)
    }
    fs.writeFileSync(body.source.fileName, finalFileData);

    res.json({
      data: "OK"
    })
  })

  app.listen(port, () => {
    console.log(`Underhive Server running at http://localhost:${port}`);
  });

}

export default runServer;