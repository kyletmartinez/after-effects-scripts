[![view on npm](http://img.shields.io/npm/v/command-line-tool.svg)](https://www.npmjs.org/package/command-line-tool)
[![npm module downloads](http://img.shields.io/npm/dt/command-line-tool.svg)](https://www.npmjs.org/package/command-line-tool)
[![Build Status](https://travis-ci.org/75lb/command-line-tool.svg?branch=master)](https://travis-ci.org/75lb/command-line-tool)
[![Dependency Status](https://david-dm.org/75lb/command-line-tool.svg)](https://david-dm.org/75lb/command-line-tool)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_command-line-tool"></a>

## command-line-tool
Some conventional operations used in command-line tools.

**Example**  
```js
const tool = require('command-line-tool')
```

* [command-line-tool](#module_command-line-tool)
    * [.stop([message])](#module_command-line-tool.stop)
    * [.printError(message)](#module_command-line-tool.printError)
    * [.printOutput(message)](#module_command-line-tool.printOutput)
    * [.halt([err], [options])](#module_command-line-tool.halt)
    * [.getCli(definitions, [usageSections], [argv])](#module_command-line-tool.getCli) ⇒ <code>object</code>

<a name="module_command-line-tool.stop"></a>

### tool.stop([message])
Print the supplied messages then stop the process (no exit code).

**Kind**: static method of <code>[command-line-tool](#module_command-line-tool)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [message] | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | One or more messages to be written to stderr before exiting. May contain `ansi.format` markup. |

<a name="module_command-line-tool.printError"></a>

### tool.printError(message)
Prints one or more strings in red to stderr.

**Kind**: static method of <code>[command-line-tool](#module_command-line-tool)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input message(s) |

<a name="module_command-line-tool.printOutput"></a>

### tool.printOutput(message)
Prints one or more strings to stdout. Catches unwanted EPIPE error.

**Kind**: static method of <code>[command-line-tool](#module_command-line-tool)</code>  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string</code> &#124; <code>Array.&lt;string&gt;</code> | input message(s) |

<a name="module_command-line-tool.halt"></a>

### tool.halt([err], [options])
Stop the process with an error message.

**Kind**: static method of <code>[command-line-tool](#module_command-line-tool)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [err] | <code>Error</code> | the error instance |
| [options] | <code>object</code> |  |
| [options.exitCode] | <code>number</code> | defaults to 1 |
| [options.stack] | <code>boolean</code> | defaults to false |

<a name="module_command-line-tool.getCli"></a>

### tool.getCli(definitions, [usageSections], [argv]) ⇒ <code>object</code>
Parse the command-line options.

**Kind**: static method of <code>[command-line-tool](#module_command-line-tool)</code>  

| Param | Type | Description |
| --- | --- | --- |
| definitions | <code>Array.&lt;OptionDefinitions&gt;</code> | to be passed to command-line-args |
| [usageSections] | <code>Array.&lt;section&gt;</code> | to be passed to command-line-usage |
| [argv] | <code>Array.&lt;string&gt;</code> | If supplied, this `argv` array is parsed instead of `process.argv`. |


* * *

&copy; 2015-18 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
