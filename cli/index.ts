#!/usr/bin/env node

import runServer from './server'
import { execSync } from 'child_process'
import { modifyStartScript } from './modifiers/modifyStartScript'
import { getEntrypointAndLanguage } from './modifiers/addUnderhiveImport'
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid';

const args = process.argv.slice(2)

const command = args[0]

const baseMessage = "Underhive CLI"

const commands = ['server', 'init']

const help = `
Usage: ucli <command>

Available commands:
  ${commands.join('\n  ')}

Example:
  ${commands.join('\n  ucli')}

For more information, visit:  https://underhive.ai or mail us at: support@underhive.ai
`
var Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init('1e96a8909b2f68bc0b56b93e15914b6e');

// save a user id in the os's config file 
let user_id = '';
const os = require('os');
const path = require('path');
const configPath = path.join(os.homedir(), '.underhive');
if (fs.existsSync(configPath)) {
  const profileJson = fs.readFileSync(configPath, 'utf8');
  user_id = JSON.parse(profileJson).user_id;
} else {
  user_id = uuidv4();
  const profile = {
    user_id,
  }
  fs.writeFileSync(configPath, JSON.stringify(profile));
}

const commandRunners = {
  server: {
    run: runServer,
    intro: 'Starting code editor server...'
  },
  init: {
    run: () => {
      const projectPath = process.cwd();

      if(!fs.existsSync(`${projectPath}/package.json`)) {
        console.error('package.json not found. Please run this command from the root of your project.')
        return;
      }

      if(fs.existsSync(`${projectPath}/underhive.json`)) {
        console.log('Looks like you have already setup underhive for this project as we found underhive.json.')
        console.error('underhive.json already exists. Please remove it and try again.')
        return;
      }

      const { language, entrypoint } = getEntrypointAndLanguage(projectPath);
      console.log('Setting up underhive.json')
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

      console.log('Installing concurrently[--save-dev]...')
      execSync('npm install --save-dev concurrently', { stdio: 'inherit' });

      console.log('Changing the start script to the following in your package.json:')
      console.log(`
        "scripts": {
          "start": "concurrently --kill-others "ucli server" "<your existing start script>"
        }
      `)

      modifyStartScript(projectPath);
      
      console.log('Underhive init complete.')

      console.log('\n import { attachEditor, detachEditor } from \'underhive\'; \n')
      console.log('Now please import and call attachEditor in one of your pages to run underhive!')
      console.log('Notice: [If you\'re using Next.js you might need to change the "dev" script yourself.]')
      console.log('Please reach out to us at: support@underhive.ai for any queries.')
    },
    intro: 'Setting up Underhive...'
  }
}

if(commandRunners[command]) {
  console.log(commandRunners[command].intro)
  commandRunners[command].run()
} else {
  console.log(baseMessage)
  console.log(help)
}
