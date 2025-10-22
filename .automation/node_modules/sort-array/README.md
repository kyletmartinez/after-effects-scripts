[![view on npm](https://badgen.net/npm/v/sort-array)](https://www.npmjs.org/package/sort-array)
[![npm module downloads](https://badgen.net/npm/dt/sort-array)](https://www.npmjs.org/package/sort-array)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/sort-array)](https://github.com/75lb/sort-array/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/sort-array)](https://github.com/75lb/sort-array/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/75lb/sort-array/actions/workflows/node.js.yml/badge.svg)](https://github.com/75lb/sort-array/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# sort-array

Isomorphic, load-anywhere function to sort an array by scalar, deep or computed values in any standard or custom order.

```js
const sortArray = require('sort-array')
```

## Synopsis

Some trivial examples to demonstrate typical usage.

### Sorting an array of primitives

#### Ascending order

Sort an array of strings in ascending order (the default).

```js
> const partsOfTheDay = ['twilight', 'afternoon', 'morning', 'evening']

> sortArray(partsOfTheDay)
[ 'afternoon', 'evening', 'morning', 'twilight' ]
```

#### Descending order

Sort an array of strings in descending order.

```js
> sortArray(partsOfTheDay, { order: 'desc' })
[ 'twilight', 'morning', 'evening', 'afternoon' ]
```

#### Custom sort order

The default value for `options.order` is `'asc'`. You can also specify `'desc'` or the name of a property from the `customOrders` object. For example, sort parts of the day by the order in which they occur.

```js
> sortArray(partsOfTheDay, {
  order: 'time',
  customOrders: {
    time: ['morning', 'afternoon', 'evening', 'twilight']
  }
})
[ 'morning', 'afternoon', 'evening', 'twilight' ]
```

### Sorting an array of objects

#### Sort by object property

Pass one or more property names to `options.by` to sort an array of objects by those properties.

```js
> const repositories = [
  { name: '75lb/sort-array', openIssues: 0, closedIssues: 4 },
  { name: 'lwsjs/local-web-server', openIssues: 4, closedIssues: 80 },
  { name: 'jsdoc2md/jsdoc-api', openIssues: 3, closedIssues: 47 }
]

> sortArray(repositories, {
  by: 'openIssues',
  order: 'desc'
})
[
  { name: 'lwsjs/local-web-server', openIssues: 4, closedIssues: 80 },
  { name: 'jsdoc2md/jsdoc-api', openIssues: 3, closedIssues: 47 },
  { name: '75lb/sort-array', openIssues: 0, closedIssues: 4 }
]
```

#### Sort by computed field

Sort by a computed field, i.e. a computed value that doesn't exist in the input dataset. Define your computed fields in the `options.computed` object, each value being a function which takes an array member as input and returns the primitive value to be sorted by. In this example we sort by `total` (the name of the computed field supplied in `options.computed`).

```js
> const repositories = [
  { name: '75lb/sort-array', openIssues: 0, closedIssues: 4 },
  { name: 'lwsjs/local-web-server', openIssues: 4, closedIssues: 80 },
  { name: 'jsdoc2md/jsdoc-api', openIssues: 3, closedIssues: 47 }
]

> sortArray(repositories, {
  by: 'total',
  order: 'desc',
  computed: {
    total: repository => repository.openIssues + repository.closedIssues
  }
})
[
  { name: 'lwsjs/local-web-server', openIssues: 4, closedIssues: 80 },
  { name: 'jsdoc2md/jsdoc-api', openIssues: 3, closedIssues: 47 },
  { name: '75lb/sort-array', openIssues: 0, closedIssues: 4 }
]
```

#### Sort by deep object values

You can use computed fields to sort by values deep in an object structure.

```js
> const data = [
  { inner: { number: 2 } },
  { inner: { number: 3 } },
  { inner: { number: 1 } }
]

> sortArray(data, {
  by: 'number',
  computed: {
    number: row => row.inner.number
  }
})
[
  { inner: { number: 1 } },
  { inner: { number: 2 } },
  { inner: { number: 3 } }
]
```

#### Sort by multiple fields

Sort by multiple columns using multiple custom orders.

```js
> const attributes = [
  { skill: 'accuracy', confidence: 'medium' },
  { skill: 'power', confidence: 'high' },
  { skill: 'speed', confidence: 'low' },
  { skill: 'power', confidence: 'low' },
  { skill: 'speed', confidence: 'high' },
  { skill: 'accuracy', confidence: 'low' },
  { skill: 'speed', confidence: 'medium' },
  { skill: 'accuracy', confidence: 'high' },
  { skill: 'power', confidence: 'medium' }
]

> sortArray(attributes, {
  by: ['skill', 'confidence'],
  order: ['skill', 'confidence'],
  customOrders: {
    skill: ['accuracy', 'speed', 'power'],
    confidence: ['low', 'medium', 'high'],
  }
})
[
  { skill: 'accuracy', confidence: 'low' },
  { skill: 'accuracy', confidence: 'medium' },
  { skill: 'accuracy', confidence: 'high' },
  { skill: 'speed', confidence: 'low' },
  { skill: 'speed', confidence: 'medium' },
  { skill: 'speed', confidence: 'high' },
  { skill: 'power', confidence: 'low' },
  { skill: 'power', confidence: 'medium' },
  { skill: 'power', confidence: 'high' }
]
```

Please visit [the sort-array wiki](https://github.com/75lb/sort-array/wiki) for more examples.

## API Reference

<a name="module_sort-array"></a>

### sort-array
Isomorphic, load-anywhere function to sort an array by scalar, deep or computed values in any standard or custom order.

**Example**  
```js
const sortArray = require('sort-array')
```
<a name="exp_module_sort-array--sortArray"></a>

#### sortArray(array, [options]) ⇒ <code>Array</code> ⏏
**Kind**: Exported function  
**Returns**: <code>Array</code> - Returns the array that was passed in.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> | The input array to sort. It is sorted in place. |
| [options] | <code>object</code> | Sort options. |
| [options.by] | <code>Array.&lt;string&gt;</code> | One or more property names or computed fields to sort by. Specifying property names is only relevant when sorting an array of objects. |
| [options.order] | <code>Array.&lt;string&gt;</code> | One or more sort orders. Specify `'asc'`, `'desc'` or a property name from the `options.customOrders` object. |
| [options.customOrders] | <code>object</code> | A dictionary object containing one or more custom orders. Each custom order value must be an array defining the order expected values must be sorted in. |
| [options.computed] | <code>object</code> | A dictionary object containing one or more computed field functions. The function will be invoked once per item in the array. Each invocation will receive the array item as input and must return a primitive value by which the array can be sorted. |
| [options.nullRank] | <code>number</code> | Configures whether `null` values will be sorted before or after defined values. Set to `-1` for before, `1` for after. Defaults to `1`. |
| [options.undefinedRank] | <code>number</code> | Configures whether `undefined` values will be sorted before or after defined values. Set to `-1` for before, `1` for after. Defaults to `1`. |


## Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js:

```js
const sortArray = require('sort-array')
```

Within Node.js with ECMAScript Module support enabled:

```js
import sortArray from 'sort-array'
```

Within an modern browser ECMAScript Module:

```js
import sortArray from './node_modules/sort-array/dist/index.mjs'
```

Old browser (adds `window.sortArray`):

```html
<script nomodule src="./node_modules/sort-array/dist/index.js"></script>
```

* * *

&copy; 2015-24 Lloyd Brookes \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
