[![view on npm](https://badgen.net/npm/v/jsdoc-api)](https://www.npmjs.org/package/jsdoc-api)
[![npm module downloads](https://badgen.net/npm/dt/jsdoc-api)](https://www.npmjs.org/package/jsdoc-api)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/jsdoc2md/jsdoc-api)](https://github.com/jsdoc2md/jsdoc-api/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/jsdoc2md/jsdoc-api)](https://github.com/jsdoc2md/jsdoc-api/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/jsdoc2md/jsdoc-api/actions/workflows/node.js.yml/badge.svg)](https://github.com/jsdoc2md/jsdoc-api/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

***Upgraders, please check the [release notes](https://github.com/jsdoc2md/jsdoc-api/releases).***

# jsdoc-api

A programmatic interface for [jsdoc3](https://github.com/jsdoc3/jsdoc) with a few features:

- Asynchronous 'explain' and 'render documentation' methods (the two main jsdoc operations).
- Input (source code) can supplied as a string or set of file names and/or globs.
- Optional caching, dramatically speeding up future invocations with the same input.

## Synopsis

To output an array of json objects, each representing a doclet, use [.explain()](https://github.com/jsdoc2md/jsdoc-api/blob/master/docs/api.md#module_jsdoc-api--jsdoc.explain). Pass in an array of file names and/or glob expressions. Use the `cache: true` flag for a faster, more efficient invocation (cached output from a prior invocation will be returned if the input has not changed).

```js
import jsdoc from 'jsdoc-api'

const data = await jsdoc.explain({ files: ['index.js', 'lib/*.js'], cache: true })
console.log(data)
```

Typical output (truncated):

```js
[
    {
        comment: '/**\n' +
          '  * The [cache-point](https://github.com/75lb/cache-point) instance used when `cache: true` is specified on `.explain()`.\n' +
          '  * @type {external:cache-point}\n' +
          '  */',
        meta: {
          range: [ 491, 554 ],
          filename: 'index.js',
          lineno: 21,
          columnno: 6,
          path: '/Users/lloyd/Documents/jsdoc2md/jsdoc-api',
          code: { id: 'astnode100000027', name: 'cache', type: 'NewExpression', value: '' }
        },
        description: 'The [cache-point](https://github.com/75lb/cache-point) instance used when `cache: true` is specified on `.explain()`.',
        type: { names: [ 'external:cache-point' ] },
        name: 'cache',
        longname: 'module:jsdoc-api~cache',
        kind: 'constant',
        scope: 'inner',
        memberof: 'module:jsdoc-api',
        params: []
    },
    // etc
    // etc
]
```

As an alternative to passing in file names/globs (above), you can pass in one or more source code strings.

```js
import jsdoc from 'jsdoc-api'

const data = await jsdoc.explain({ source: '/** example doclet */ \n var example = true' })
console.log(data)
```

Output:

```js
[
  {
    comment: '/** example doclet */',
    meta: {
      range: [ 28, 42 ],
      filename: '934b1fbe2810.js',
      lineno: 2,
      columnno: 5,
      path: '/var/folders/bt/jgn73jf50vsb5gj92dk00v3r0000gn/T/jsdoc-api-W854dk',
      code: { id: 'astnode100000003', name: 'example', type: 'Literal', value: true }
    },
    description: 'example doclet',
    name: 'example',
    longname: 'example',
    kind: 'member',
    scope: 'global',
    params: []
  },
  { kind: 'package', longname: 'package:undefined', files: [ '/var/folders/bt/jgn73jf50vsb5gj92dk00v3r0000gn/T/jsdoc-api-W854dk/934b1fbe2810.js' ] }
]
```

Finally, use the `render()` method to invocate jsdoc directly, generating your documentation.

```js
import jsdoc from 'jsdoc-api'

await jsdoc.render({ files: ['index.js', 'lib/something.js'], destination: 'jsdoc-output' })
```

If you need to use a specific `jsdoc` version or fork, specify its path via `JSDOC_PATH` and jsdoc-api will use it instead of the default.

```sh
$ export JSDOC_PATH=./node_modules/.bin/jsdoc # An alternative jsdoc version you installed
$ node my-jsdoc-api-script.js                 # Run your jsdoc-api app as usual
```

See the [API documentation](https://github.com/jsdoc2md/jsdoc-api/blob/master/docs/api.md) for further details. See the [example folder](https://github.com/jsdoc2md/jsdoc-api/tree/master/example) for code examples.

* * *

&copy; 2015-24 [Lloyd Brookes](https://github.com/75lb) \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
