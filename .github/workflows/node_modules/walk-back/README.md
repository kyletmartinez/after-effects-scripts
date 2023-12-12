[![view on npm](https://badgen.net/npm/v/walk-back)](https://www.npmjs.org/package/walk-back)
[![npm module downloads](https://badgen.net/npm/dt/walk-back)](https://www.npmjs.org/package/walk-back)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/75lb/walk-back)](https://github.com/75lb/walk-back/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/75lb/walk-back)](https://github.com/75lb/walk-back/network/dependents?dependent_type=PACKAGE)
[![Build Status](https://travis-ci.org/75lb/walk-back.svg?branch=master)](https://travis-ci.org/75lb/walk-back)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# walk-back

<a name="module_walk-back"></a>

## walk-back
Walk up the directory tree until the specified path is found.

**Example**  
```js
const walkBack = require('walk-back')
```
<a name="exp_module_walk-back--walkBack"></a>

### walkBack(startAt, lookingFor) ⇒ <code>string</code> ⏏
Returns an absolute file path (if found) else `null`.

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| startAt | <code>string</code> | the directory to start in |
| lookingFor | <code>string</code> | the path we're looking for |

**Example**  
```js
> walkBack('/Users/lloyd/Documents/75lb/walk-back', 'package.json')
'/Users/lloyd/Documents/75lb/walk-back/package.json'

> walkBack('/Users/lloyd/Documents/75lb/walk-back', '75lb')
'/Users/lloyd/Documents/75lb'

> walkBack('/Users/lloyd/Documents/75lb/walk-back', '.bash_profile')
'/Users/lloyd/.bash_profile'

> walkBack('.', '.bash_profile')
'/Users/lloyd/.bash_profile'

> walkBack('/Users/lloyd/Documents/75lb/walk-back', 'non-existent.file')
null
```

* * *

&copy; 2015-21 Lloyd Brookes \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
