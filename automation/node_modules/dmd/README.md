[![view on npm](https://badgen.net/npm/v/dmd)](https://www.npmjs.org/package/dmd)
[![npm module downloads](https://badgen.net/npm/dt/dmd)](https://www.npmjs.org/package/dmd)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/jsdoc2md/dmd)](https://github.com/jsdoc2md/dmd/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/jsdoc2md/dmd)](https://github.com/jsdoc2md/dmd/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/jsdoc2md/dmd/actions/workflows/node.js.yml/badge.svg)](https://github.com/jsdoc2md/dmd/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# dmd

dmd (document with markdown) is the default output template for [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). It contains [handlebars](http://handlebarsjs.com) partials and helpers intended to transform [jsdoc-parse](https://github.com/jsdoc2md/jsdoc-parse) output into markdown API documentation.

For more documentation see the [jsdoc2md wiki](https://github.com/jsdoc2md/jsdoc-to-markdown/wiki).

## Synopsis

To give the most basic example, this input data:

```js
const templateData = [
  {
    id: "fatUse",
    name: "fatUse",
    kind: "member",
    description: "I am a global variable",
    scope: "global"
  }
]
```

run through this command:

```js
const dmd = require('dmd')
dmd(templateData)
```

produces this markdown output:

```
<a name="fatUse"></a>
## fatUse
I am a global variable

**Kind**: global variable
```

* * *

&copy; 2014-24 Lloyd Brookes \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
