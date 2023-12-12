[![view on npm](http://img.shields.io/npm/v/cache-point.svg)](https://www.npmjs.org/package/cache-point)
[![npm module downloads](http://img.shields.io/npm/dt/cache-point.svg)](https://www.npmjs.org/package/cache-point)
[![Build Status](https://travis-ci.org/75lb/cache-point.svg?branch=master)](https://travis-ci.org/75lb/cache-point)
[![Dependency Status](https://badgen.net/david/dep/75lb/cache-point)](https://david-dm.org/75lb/cache-point)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# cache-point

Simple, filesystem-backed memoisation cache. Use to cache the output of expensive operations speeding up future invocations with the same input.

## Synopsis

```js
const Cache = require('cache-point')

/* a mock function to simulate a slow remote request */
async function fetchUser (id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: 'Layla' })
    }, 1000)
  })
}

class Users {
  constructor () {
    this.cache = new Cache({ dir: 'tmp/example' })
  }

  async getUser (id) {
    let user
    try {
      /* cache.read() will resolve on hit, reject on miss */
      user = await this.cache.read(id)
    } catch (err) {
      if (err.code === 'ENOENT') {
        /* cache miss, fetch remote user */
        user = await fetchUser(id)
        this.cache.write(id, user)
      }
    }
    return user
  }
}

async function start () {
  console.time('getUser')
  const users = new Users()
  const user = await users.getUser(1)
  console.timeEnd('getUser')
  console.log(user)
}

start().catch(console.error)
```

The first invocation will take 1 second while the remote user is fetched.

```
$ node example/simple.js
getUser: 1.025s
{ id: 10, name: 'Layla' }
```

Since the cache is now warm, future invocations will be fast.

```
$ node example/simple.js
getUser: 17.07ms
{ id: 10, name: 'Layla' }
```

## API Reference

<a name="module_cache-point"></a>

## cache-point

* [cache-point](#module_cache-point)
    * [Cache](#exp_module_cache-point--Cache) ⏏
        * [new Cache([options])](#new_module_cache-point--Cache_new)
        * [.dir](#module_cache-point--Cache+dir) : <code>string</code>
        * [.read(keys)](#module_cache-point--Cache+read) ⇒ <code>Promise</code>
        * [.readSync(keys)](#module_cache-point--Cache+readSync) ⇒ <code>string</code>
        * [.write(keys, content)](#module_cache-point--Cache+write) ⇒ <code>Promise</code>
        * [.writeSync(keys, content)](#module_cache-point--Cache+writeSync)
        * [.getChecksum(keys)](#module_cache-point--Cache+getChecksum) ⇒ <code>string</code>
        * [.clear()](#module_cache-point--Cache+clear) ⇒ <code>Promise</code>
        * [.remove()](#module_cache-point--Cache+remove) ⇒ <code>Promise</code>

<a name="exp_module_cache-point--Cache"></a>

### Cache ⏏
**Kind**: Exported class  
<a name="new_module_cache-point--Cache_new"></a>

#### new Cache([options])

| Param | Type |
| --- | --- |
| [options] | <code>object</code> | 
| [options.dir] | <code>string</code> | 

<a name="module_cache-point--Cache+dir"></a>

#### cache.dir : <code>string</code>
Current cache directory. Can be changed at any time.

**Kind**: instance property of [<code>Cache</code>](#exp_module_cache-point--Cache)  
<a name="module_cache-point--Cache+read"></a>

#### cache.read(keys) ⇒ <code>Promise</code>
A cache hit resolves with the stored value, a miss rejects with an `ENOENT` error code.

**Kind**: instance method of [<code>Cache</code>](#exp_module_cache-point--Cache)  
**Throws**:

- ENOENT


| Param | Type | Description |
| --- | --- | --- |
| keys | <code>\*</code> | One or more values to uniquely identify the data. Can be any value, or an array of values of any type. |

<a name="module_cache-point--Cache+readSync"></a>

#### cache.readSync(keys) ⇒ <code>string</code>
A cache hit returns the stored value, a miss returns `null`.

**Kind**: instance method of [<code>Cache</code>](#exp_module_cache-point--Cache)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>\*</code> | One or more values to uniquely identify the data. Can be any value, or an array of values of any type. |

<a name="module_cache-point--Cache+write"></a>

#### cache.write(keys, content) ⇒ <code>Promise</code>
Write some data to the cache. Returns a promise which resolves when the write is complete.

**Kind**: instance method of [<code>Cache</code>](#exp_module_cache-point--Cache)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>\*</code> | One or more values to index the data, e.g. a request object or set of function args. |
| content | <code>\*</code> | the data to store |

<a name="module_cache-point--Cache+writeSync"></a>

#### cache.writeSync(keys, content)
Write some data to the cache with a key.

**Kind**: instance method of [<code>Cache</code>](#exp_module_cache-point--Cache)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>\*</code> | One or more values to index the data, e.g. a request object or set of function args. |
| content | <code>\*</code> | the data to store |

<a name="module_cache-point--Cache+getChecksum"></a>

#### cache.getChecksum(keys) ⇒ <code>string</code>
Used internally to convert a key value into a hex checksum. Override if for some reason you need a different hashing strategy.

**Kind**: instance method of [<code>Cache</code>](#exp_module_cache-point--Cache)  

| Param | Type | Description |
| --- | --- | --- |
| keys | <code>\*</code> | One or more values to index the data, e.g. a request object or set of function args. |

<a name="module_cache-point--Cache+clear"></a>

#### cache.clear() ⇒ <code>Promise</code>
Clears the cache. Returns a promise which resolves once the cache is clear.

**Kind**: instance method of [<code>Cache</code>](#exp_module_cache-point--Cache)  
<a name="module_cache-point--Cache+remove"></a>

#### cache.remove() ⇒ <code>Promise</code>
Clears and removes the cache directory. Returns a promise which resolves once the remove is complete.

**Kind**: instance method of [<code>Cache</code>](#exp_module_cache-point--Cache)  

* * *

&copy; 2016-20 Lloyd Brookes \<75pound@gmail.com\>.

Tested by [test-runner](https://github.com/test-runner-js/test-runner). Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
