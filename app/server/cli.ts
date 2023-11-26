#!/usr/bin/env node

import runServer from './server'

const args = process.argv.slice(2)

const command = args[0]

const baseMessage = "Underhive CLI"

const commands = ['server']

const help = `
Usage: ucli <command>

Available commands:
  ${commands.join('\n  ')}

Example:
  ${commands.join('\n  ucli')}

For more information, visit:  https://underhive.ai or mail us at: support@underhive.ai
`

if (command === 'server') {
  console.log(baseMessage)
  console.log('Starting code editor server...')
  runServer()
} else {
  console.log(baseMessage)
  console.log(help)
}