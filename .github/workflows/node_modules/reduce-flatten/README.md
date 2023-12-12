[![view on npm](http://img.shields.io/npm/v/reduce-flatten.svg)](https://www.npmjs.org/package/reduce-flatten)
[![npm module downloads](http://img.shields.io/npm/dt/reduce-flatten.svg)](https://www.npmjs.org/package/reduce-flatten)
[![Build Status](https://travis-ci.org/75lb/reduce-flatten.svg?branch=master)](https://travis-ci.org/75lb/reduce-flatten)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

***DEPRECATED: Please use the [Array.prototype.flat()]() method built into ES2019 and above.***

## reduce-flatten
Isomorphic map-reduce function to flatten an array into the supplied array.

**Example**  
```js
const flatten = require('reduce-flatten')
```
<a name="exp_module_reduce-flatten--flatten"></a>

### flatten() ⏏
**Kind**: Exported function  
**Example**  
```js
> numbers = [ 1, 2, [ 3, 4 ], 5 ]
> numbers.reduce(flatten, [])
[ 1, 2, 3, 4, 5 ]
```

### Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js:

```js
const arrayify = require('reduce-flatten')
```

Within Node.js with ECMAScript Module support enabled:

```js
import arrayify from 'reduce-flatten'
```

Within an modern browser ECMAScript Module:

```js
import arrayify from './node_modules/reduce-flatten/index.mjs'
```

Old browser (adds `window.flatten`):

```html
<script nomodule src="./node_modules/reduce-flatten/dist/index.js"></script>
```

* * *

&copy; 2016-19 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
