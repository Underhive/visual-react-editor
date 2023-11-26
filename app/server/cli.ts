#!/usr/bin/env node

import runServer from './server'
import { execSync } from 'child_process'
import { modifyStartScript } from './modifiers/modifyStartScript'
import { addImportToEntrypoint } from './modifiers/addUnderhiveImport'
import * as fs from 'fs'

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

      const importStatement = `import 'underhive'`;
      const { language, entrypoint } = addImportToEntrypoint(projectPath, importStatement);
      console.log('Setting up underhive.json')
      const config = {
        language,
        entrypoint,
        port: Math.floor(Math.random() * 1000) + 3888,
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
      console.log('Now run your project as you would normally and you should running!')
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
