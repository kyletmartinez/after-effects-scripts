[![view on npm](https://badgen.net/npm/v/find-replace)](https://www.npmjs.org/package/find-replace)
[![npm module downloads](https://badgen.net/npm/dt/find-replace)](https://www.npmjs.org/package/find-replace)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/find-replace)](https://github.com/75lb/find-replace/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/find-replace)](https://github.com/75lb/find-replace/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/75lb/find-replace/actions/workflows/node.js.yml/badge.svg)](https://github.com/75lb/find-replace/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# find-replace

Replace or remove multiple items in an array.

Similar to [array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) with the following differences:

* `splice` only operates on one item at a time requiring you to know its index. `find-replace` will operate on every item satisfying the find function.
* If a function is passed as a `replaceWith` argument, `find-replace` will invoke it to compute the replacement value.

## Synopsis

```js
import findReplace from 'find-replace'

const colours = ['red', 'white', 'blue', 'white']

const result = findReplace(
  colours,
  colour => colour === 'white',
  'gold'
)

console.log(result)
// [ 'red', 'gold', 'blue', 'gold' ]
```

If the `replaceWith` value is a function, it will be invoked with the found item and its result used as the replace value. For example:


```js
const colours = ['red', 'white', 'blue', 'white']

const result = findReplace(
  colours,
  colour => colour === 'red',
  colour => colour.split('')
)

console.log(result)
// [ 'r', 'e', 'd', 'white', 'blue', 'white' ]
```

## Real world examples

### Replace with an array of strings

This example explodes combined (`-vrf`) into individual flags (`-v -r -f`).

```js
import findReplace from 'find-replace'

const argv = ['-vrf', 'file1.js', 'file2.js']
const combinedShortOptionRe = /^-[^\d-]{2,}$/

const result = findReplace(
  argv,
  arg => combinedShortOptionRe.test(arg),
  arg => {
    return arg
      .slice(1) /* remove initial hypen */
      .split('')
      .map(letter => '-' + letter)
  }
)

console.log(result)
```

Output:

```
$ node example/argv.mjs
[ '-v', '-r', '-f', 'file1.js', 'file2.js' ]
```

### Delete found items

If you omit the third `replaceWith` argument, all found items will be deleted.

```js
import findReplace from 'find-replace'

const fruits = ['apple', 'pear', 'nectarine', 'pineapple', 'peach']
const bad = ['pear', 'pineapple']

const result = findReplace(
  fruits,
  fruit => bad.includes(fruit)
)

console.log(result)
```

Output:

```
$ node example/delete.mjs
[ 'apple', 'nectarine', 'peach' ]
```

# API Reference

<a name="module_find-replace"></a>

## find-replace
<a name="exp_module_find-replace--findReplace"></a>

### findReplace(array, findFn, [...replaceWith]) ⇒ <code>array</code> ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | The input array |
| findFn | <code>function</code> | A predicate function which, if returns `true` causes the current item to be operated on. |
| [...replaceWith] | <code>any</code> | If not specified, each found value will be removed. If specified, each found value will be replaced with this value. If the `replaceWith` value is a function, it will be invoked with the found value and its result used as the replace value. If the `replaceWith` function returns an array, the found value will be replaced with each item in the array (not replaced with the array itself). |


# Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js (CommonJS):

```js
const findReplace = require('find-replace')
```

Node.js (ECMAScript Module):

```js
import findReplace from 'find-replace'
```

Modern browser (ECMAScript Module):

```js
import findReplace from './node_modules/find-replace/dist/index.mjs'
```

Old browser (adds `window.findReplace`):

```html
<script nomodule src="./node_modules/find-replace/dist/index.js"></script>
```

* * *

&copy; 2015-25 Lloyd Brookes \<75pound@gmail.com\>.

Test suite by [test-runner](https://github.com/test-runner-js/test-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
