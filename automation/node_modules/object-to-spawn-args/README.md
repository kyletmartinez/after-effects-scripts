[![view on npm](https://badgen.net/npm/v/object-to-spawn-args)](https://www.npmjs.org/package/object-to-spawn-args)
[![npm module downloads](https://badgen.net/npm/dt/object-to-spawn-args)](https://www.npmjs.org/package/object-to-spawn-args)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/object-to-spawn-args)](https://github.com/75lb/object-to-spawn-args/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/object-to-spawn-args)](https://github.com/75lb/object-to-spawn-args/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/75lb/object-to-spawn-args.svg?branch=master)](https://travis-ci.org/75lb/object-to-spawn-args)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# object-to-spawn-args

Converts an options object to an array suitable for passing to `child_process.spawn()`.

Single letter object properties (e.g. `c: 'red'`) convert to short-option args (e.g. `-c red`). Longer object properties (e.g. `colour: 'red'`) convert to long-option args (e.g. `--colour red`). Object property values equalling `true` convert to flags (e.g. `-l`).

## Synopsis

Simple usage:

```js
> const objectToSpawnArgs = require('object-to-spawn-args')

> const spawnArgs = objectToSpawnArgs({
  l: true,
  c: 'red',
  name: 'pete',
  tramp: true
})

> console.log(spawnArgs)
[ '-l', '-c', 'red', '--name', 'pete', '--tramp' ]
```

Alternatively, convert to `--object=value` notation.

```js
> const options = {
  l: true,
  c: 'red',
  name: 'pete',
  tramp: true
}
> const spawnArgs = objectToSpawnArgs(options, { optionEqualsValue: true })

> console.log(spawnArgs)
[ '-l', '-c=red', '--name=pete', '--tramp' ]
```

Typical real-life example.

```js
const objectToSpawnArgs = require('object-to-spawn-args')
const spawn = require('child_process').spawn

const options = {
  l: true,
  a: true
}

spawn('ls', objectToSpawnArgs(options), { stdio: 'inherit' })
```

## Installation

```sh
$ npm install object-to-spawn-args
```

* * *

&copy; 2014-21 Lloyd Brookes \<75pound@gmail.com\>.
