'use strict'
const arrayify = require('array-back')
const ansi = require('ansi-escape-sequences')

/**
 * Some conventional operations used in command-line tools.
 *
 * @module command-line-tool
 * @typicalname tool
 * @example
 * const tool = require('command-line-tool')
 */
 exports.stop = stop
 exports.printError = printError
 exports.printOutput = printOutput
 exports.halt = halt
 exports.getCli = getCli

/**
 * Print the supplied messages then stop the process (no exit code).
 *
 * @param [message] {string|string[]} - One or more messages to be written to stderr before exiting. May contain `ansi.format` markup.
 * @static
 */
function stop (message) {
  printOutput(message)
  process.exit(0)
}

/**
 * Prints one or more strings in red to stderr.
 *
 * @param {string | string[]} - input message(s)
 * @static
 */
function printError (message) {
  arrayify(message).forEach(function (msg) {
    console.error(ansi.format(msg, 'red'))
  })
}

/**
 * Prints one or more strings to stdout. Catches unwanted EPIPE error.
 *
 * @param {string | string[]} - input message(s)
 * @static
 */
function printOutput (message) {
  process.stdout.on('error', err => {
    if (err.code === 'EPIPE') {
      /* no big deal */
    }
  })
  arrayify(message).forEach(function (msg) {
    console.log(ansi.format(msg))
  })
}

/**
 * Stop the process with an error message.
 *
 * @param [err] {Error} - the error instance
 * @param [options] {object}
 * @param [options.exitCode] {number} - defaults to 1
 * @param [options.stack] {boolean} - defaults to false
 * @static
 */
function halt (err, options) {
  options = Object.assign({ exitCode: 1 }, options)
  if (err) {
    if (err.code === 'EPIPE') {
      process.exit(0) /* no big deal */
    } else {
      const t = require('typical')
      printError(t.isString(err) ? err : options.stack ? err.stack : err.message, options)
    }
  }
  process.exit(options.exitCode)
}

/**
 * Parse the command-line options.
 * @param definitions {OptionDefinitions[]} - to be passed to command-line-args
 * @param [usageSections] {section[]} - to be passed to command-line-usage
 * @param [argv] {string[]} - If supplied, this `argv` array is parsed instead of `process.argv`.
 * @returns {object}
 * @static
 */
function getCli (definitions, usageSections, argv) {
  const commandLineArgs = require('command-line-args')
  const commandLineUsage = require('command-line-usage')
  const usage = usageSections ? commandLineUsage(usageSections) : ''
  const options = commandLineArgs(definitions, argv)
  return { options, usage }
}
