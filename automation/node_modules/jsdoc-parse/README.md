[![view on npm](https://badgen.net/npm/v/jsdoc-parse)](https://www.npmjs.org/package/jsdoc-parse)
[![npm module downloads](https://badgen.net/npm/dt/jsdoc-parse)](https://www.npmjs.org/package/jsdoc-parse)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/jsdoc2md/jsdoc-parse)](https://github.com/jsdoc2md/jsdoc-parse/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/jsdoc2md/jsdoc-parse)](https://github.com/jsdoc2md/jsdoc-parse/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/jsdoc2md/jsdoc-parse/actions/workflows/node.js.yml/badge.svg)](https://github.com/jsdoc2md/jsdoc-parse/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# jsdoc-parse

Transforms [jsdoc](https://github.com/jsdoc3/jsdoc) data into something more suitable for use as template input. Also adds a few tags to the default set:

* Support for new tags in the input javascript
  * `@category <string>`: Useful for grouping identifiers by category.
  * `@done`: Used to mark `@todo` items as complete.
  * `@typicalname`: If set on a class, namespace or module, child members will documented using this typical name as the parent name. Real-world typical name examples are `$` (the typical name for `jQuery` instances), `_` (underscore) etc.
  * `@chainable`: Set to mark a method as chainable (has a return value of `this`).

## Command-line usage

This module is built into [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown/), you can see the output using this command:

```
$ jsdoc2md --json <files>
```

* * *

&copy; 2014-24 Lloyd Brookes \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
