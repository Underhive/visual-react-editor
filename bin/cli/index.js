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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const child_process_1 = require("child_process");
const modifyStartScript_1 = require("./modifiers/modifyStartScript");
const addUnderhiveImport_1 = require("./modifiers/addUnderhiveImport");
const fs = __importStar(require("fs"));
const uuid_1 = require("uuid");
const args = process.argv.slice(2);
const command = args[0];
const baseMessage = "Underhive CLI";
const commands = ['server', 'init'];
const help = `
Usage: ucli <command>

Available commands:
  ${commands.join('\n  ')}

Example:
  ${commands.join('\n  ucli')}

For more information, visit:  https://underhive.ai or mail us at: support@underhive.ai
`;
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
const commandRunners = {
    server: {
        run: server_1.default,
        intro: 'Starting code editor server...'
    },
    init: {
        run: () => {
            const projectPath = process.cwd();
            if (!fs.existsSync(`${projectPath}/package.json`)) {
                console.error('package.json not found. Please run this command from the root of your project.');
                return;
            }
            if (fs.existsSync(`${projectPath}/underhive.json`)) {
                console.log('Looks like you have already setup underhive for this project as we found underhive.json.');
                console.error('underhive.json already exists. Please remove it and try again.');
                return;
            }
            const { language, entrypoint } = (0, addUnderhiveImport_1.getEntrypointAndLanguage)(projectPath);
            console.log('Setting up underhive.json');
            mixpanel.track('Project Init', {
                distinct_id: user_id,
                language,
                entrypoint,
            });
            const config = {
                language,
                entrypoint,
            };
            fs.writeFileSync(`${projectPath}/underhive.json`, JSON.stringify(config, null, 2));
            console.log('Installing concurrently[--save-dev]...');
            (0, child_process_1.execSync)('npm install --save-dev concurrently', { stdio: 'inherit' });
            console.log('Changing the start script to the following in your package.json:');
            console.log(`
        "scripts": {
          "start": "concurrently --kill-others "ucli server" "<your existing start script>"
        }
      `);
            (0, modifyStartScript_1.modifyStartScript)(projectPath);
            console.log('Underhive init complete.');
            console.log('\n import { attachEditor, detachEditor } from \'underhive\'; \n');
            console.log('Now please import and call attachEditor in one of your pages to run underhive!');
            console.log('Notice: [If you\'re using Next.js you might need to change the "dev" script yourself.]');
            console.log('Please reach out to us at: support@underhive.ai for any queries.');
        },
        intro: 'Setting up Underhive...'
    }
};
if (commandRunners[command]) {
    console.log(commandRunners[command].intro);
    commandRunners[command].run();
}
else {
    console.log(baseMessage);
    console.log(help);
}
