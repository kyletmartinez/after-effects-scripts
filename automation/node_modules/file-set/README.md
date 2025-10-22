[![view on npm](https://badgen.net/npm/v/file-set)](https://www.npmjs.org/package/file-set)
[![npm module downloads](https://badgen.net/npm/dt/file-set)](https://www.npmjs.org/package/file-set)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/file-set)](https://github.com/75lb/file-set/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/file-set)](https://github.com/75lb/file-set/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/75lb/file-set/actions/workflows/node.js.yml/badge.svg)](https://github.com/75lb/file-set/actions/workflows/node.js.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# file-set

Cross-platform glob expansions simplified. Input: file paths and glob expressions. Output: resolved file paths organised by type (file, directory and not-found). It handles all the cross-platform issues associated with file paths.


Particularly useful for handling user input, for example a CLI utility which accepts a list of file paths and globs.

```
$ example-utility index.js * not/existing/*
```

The example-utility above could pass its user input into `FileSet`. Call `await .add(<string[]>)` as many times as necessary, adding more path/glob expressions each time.

```js
import FileSet from 'file-set'
const fileSet = new FileSet()
await fileSet.add([ 'index.js', '*', 'not/existing/*' ])
console.log(fileSet)
```

The output has been organised into sets. Any duplicates caused by overlapping glob expressions are removed.

```
FileSet {
  files: [ 'index.js', 'LICENSE', 'package.json', 'README.md' ],
  dirs: [ 'jsdoc2md/', 'lib/', 'node_modules/', 'test/' ],
  notExisting: [ 'not/existing/*' ]
}
```

* * *

&copy; 2014-24 Lloyd Brookes \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner).
