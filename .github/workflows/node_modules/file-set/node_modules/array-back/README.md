[![view on npm](https://badgen.net/npm/v/array-back)](https://www.npmjs.org/package/array-back)
[![npm module downloads](https://badgen.net/npm/dt/array-back)](https://www.npmjs.org/package/array-back)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/array-back)](https://github.com/75lb/array-back/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/array-back)](https://github.com/75lb/array-back/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/75lb/array-back.svg?branch=master)](https://travis-ci.org/75lb/array-back)
[![Coverage Status](https://coveralls.io/repos/github/75lb/array-back/badge.svg)](https://coveralls.io/github/75lb/array-back)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_array-back"></a>

## array-back
Takes any input and guarantees an array back.

- Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
- Converts `undefined` to an empty array.
- Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
- Ignores input which is already an array.

**Example**  
```js
> const arrayify = require('array-back')

> arrayify(undefined)
[]

> arrayify(null)
[ null ]

> arrayify(0)
[ 0 ]

> arrayify([ 1, 2 ])
[ 1, 2 ]

> arrayify(new Set([ 1, 2 ]))
[ 1, 2 ]

> function f(){ return arrayify(arguments); }
> f(1,2,3)
[ 1, 2, 3 ]
```
<a name="exp_module_array-back--arrayify"></a>

### arrayify(input) ⇒ <code>Array</code> ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>\*</code> | The input value to convert to an array |


### Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js:

```js
const arrayify = require('array-back')
```

Within Node.js with ECMAScript Module support enabled:

```js
import arrayify from 'array-back'
```

Within an modern browser ECMAScript Module:

```js
import arrayify from './node_modules/array-back/index.mjs'
```

Old browser (adds `window.arrayBack`):

```html
<script nomodule src="./node_modules/array-back/dist/index.js"></script>
```

* * *

&copy; 2015-20 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown).
