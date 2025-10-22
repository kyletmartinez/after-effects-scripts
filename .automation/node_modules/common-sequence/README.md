[![view on npm](https://badgen.net/npm/v/common-sequence)](https://www.npmjs.org/package/common-sequence)
[![npm module downloads](https://badgen.net/npm/dt/common-sequence)](https://www.npmjs.org/package/common-sequence)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/common-sequence)](https://github.com/75lb/common-sequence/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/common-sequence)](https://github.com/75lb/common-sequence/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/75lb/common-sequence/actions/workflows/node.js.yml/badge.svg)](https://github.com/75lb/common-sequence/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_common-sequence"></a>

## common-sequence
Returns an array containing the initial elements which both input arrays have in common.

A common use-case for this is discovering common ancestors between two file paths.

```js
> commonSequence = require('common-sequence');

> pathA = '/Users/lloyd/Documents/75lb/dmd'.split('/');
> pathB = '/Users/lloyd/Documents/75lb/array-tools'.split('/');

> commonSequence(pathA, pathB).join('/');
'/Users/lloyd/Documents/75lb'
```

or a more trivial example:
```js
> a.commonSequence([ 1, 2, 3 ], [ 1, 2, 4 ])
[ 1, 2 ]
```

<a name="exp_module_common-sequence--commonSequence"></a>

### commonSequence(a, b) ⇒ <code>Array</code> ⏏
Returns the initial elements which both input arrays have in common

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| a | <code>Array</code> | first array to compare |
| b | <code>Array</code> | second array to compare |


### Load anywhere

This library is compatible with Node.js and the Web. It can be loaded anywhere, natively without transpilation.

Node.js CommonJS:

```js
const commonSequence = require('common-sequence')
```

Node.js ECMAScript Module:

```js
import commonSequence from 'common-sequence'
```

Within an modern browser ECMAScript Module:

```js
import commonSequence from './node_modules/common-sequence/index.js'
```

* * *

&copy; 2015-25 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
