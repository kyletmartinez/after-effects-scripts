[![view on npm](http://img.shields.io/npm/v/mkdirp2.svg)](https://www.npmjs.org/package/mkdirp2)
[![npm module downloads](http://img.shields.io/npm/dt/mkdirp2.svg)](https://www.npmjs.org/package/mkdirp2)
[![Build Status](https://travis-ci.org/75lb/mkdirp2.svg?branch=master)](https://travis-ci.org/75lb/mkdirp2)
[![Dependency Status](https://david-dm.org/75lb/mkdirp2.svg)](https://david-dm.org/75lb/mkdirp2)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

***DEPRECATED: Use Node.js [fs.mkdir](https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fs_fspromises_mkdir_path_options)***

# mkdirp2

A maintained fork of the stagnant [mkdirp](https://github.com/substack/node-mkdirp).

## Differences

1. Command-line executable and its dependencies removed, this fork is for Nodejs use only.
2. Extended with a promise method:

    ```js
    mkdirp.promise('tmp/tmp2/file')
      .then(() => console.log('Created'))
      .catch(err => console.error(`Failed: ${err.message}`))
    ```
