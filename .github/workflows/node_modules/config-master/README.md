[![view on npm](http://img.shields.io/npm/v/config-master.svg)](https://www.npmjs.org/package/config-master)
[![npm module downloads](http://img.shields.io/npm/dt/config-master.svg)](https://www.npmjs.org/package/config-master)
[![Build Status](https://travis-ci.org/75lb/config-master.svg?branch=master)](https://travis-ci.org/75lb/config-master)
[![Dependency Status](https://david-dm.org/75lb/config-master.svg)](https://david-dm.org/75lb/config-master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_config-master"></a>

## config-master
A convention for storing and retrieving application config. You supply a string (e.g. `'example-app'`), the libary will walk up the directory tree merging config stored for this app. The following locations are searched, with the latter taking precedence:

- Any package.json, beneath the `example-app` property.
- Any `.example-app.json` files (or a custom filename you specify).

<a name="exp_module_config-master--loadConfig"></a>

### loadConfig(configName, [options]) ⇒ <code>Object</code> ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| configName | <code>string</code> | config name |
| [options] | <code>object</code> | options |
| [options.startFrom] | <code>string</code> | directory to begin looking for config |
| [options.filename] | <code>string</code> | config filename (defaults to `.${configName}.json`) |


* * *

&copy; 2014-17 Lloyd Brookes <75pound@gmail.com>. Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown).
