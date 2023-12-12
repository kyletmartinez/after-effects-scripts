(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.sortArray = factory());
}(this, (function () { 'use strict';

  /**
   * Takes any input and guarantees an array back.
   *
   * - Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
   * - Converts `undefined` to an empty array.
   * - Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
   * - Ignores input which is already an array.
   *
   * @module array-back
   * @example
   * > const arrayify = require('array-back')
   *
   * > arrayify(undefined)
   * []
   *
   * > arrayify(null)
   * [ null ]
   *
   * > arrayify(0)
   * [ 0 ]
   *
   * > arrayify([ 1, 2 ])
   * [ 1, 2 ]
   *
   * > arrayify(new Set([ 1, 2 ]))
   * [ 1, 2 ]
   *
   * > function f(){ return arrayify(arguments); }
   * > f(1,2,3)
   * [ 1, 2, 3 ]
   */

  function isObject$1 (input) {
    return typeof input === 'object' && input !== null
  }

  function isArrayLike$1 (input) {
    return isObject$1(input) && typeof input.length === 'number'
  }

  /**
   * @param {*} - The input value to convert to an array
   * @returns {Array}
   * @alias module:array-back
   */
  function arrayify (input) {
    if (Array.isArray(input)) {
      return input
    } else if (input === undefined) {
      return []
    } else if (isArrayLike$1(input) || input instanceof Set) {
      return Array.from(input)
    } else {
      return [input]
    }
  }

  /**
   * Isomorphic, functional type-checking for Javascript.
   * @module typical
   * @typicalname t
   * @example
   * const t = require('typical')
   * const allDefined = array.every(t.isDefined)
   */

  /**
   * Returns true if input is a number. It is a more reasonable alternative to `typeof n` which returns `number` for `NaN` and `Infinity`.
   *
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isNumber(0)
   * true
   * > t.isNumber(1)
   * true
   * > t.isNumber(1.1)
   * true
   * > t.isNumber(0xff)
   * true
   * > t.isNumber(0644)
   * true
   * > t.isNumber(6.2e5)
   * true
   * > t.isNumber(NaN)
   * false
   * > t.isNumber(Infinity)
   * false
   */
  function isNumber (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  /**
   * A plain object is a simple object literal, it is not an instance of a class. Returns true if the input `typeof` is `object` and directly decends from `Object`.
   *
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isPlainObject({ something: 'one' })
   * true
   * > t.isPlainObject(new Date())
   * false
   * > t.isPlainObject([ 0, 1 ])
   * false
   * > t.isPlainObject(/test/)
   * false
   * > t.isPlainObject(1)
   * false
   * > t.isPlainObject('one')
   * false
   * > t.isPlainObject(null)
   * false
   * > t.isPlainObject((function * () {})())
   * false
   * > t.isPlainObject(function * () {})
   * false
   */
  function isPlainObject (input) {
    return input !== null && typeof input === 'object' && input.constructor === Object
  }

  /**
   * An array-like value has all the properties of an array yet is not an array instance. An example is the `arguments` object. Returns `true`` if the input value is an object, not `null`` and has a `length` property set with a numeric value.
   *
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * function sum(x, y){
   *   console.log(t.isArrayLike(arguments))
   *   // prints `true`
   * }
   */
  function isArrayLike (input) {
    return isObject(input) && typeof input.length === 'number'
  }

  /**
   * Returns true if the typeof input is `'object'` but not null.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isObject (input) {
    return typeof input === 'object' && input !== null
  }

  /**
   * Returns true if the input value is defined.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isDefined (input) {
    return typeof input !== 'undefined'
  }

  /**
   * Returns true if the input value is undefined.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isUndefined (input) {
    return !isDefined(input)
  }

  /**
   * Returns true if the input value is null.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isNull (input) {
   return input === null
  }

  /**
   * Returns true if the input value is not one of `undefined`, `null`, or `NaN`.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isDefinedValue (input) {
   return isDefined(input) && !isNull(input) && !Number.isNaN(input)
  }

  /**
   * Returns true if the input value is an ES2015 `class`.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isClass (input) {
    if (typeof input === 'function') {
      return /^class /.test(Function.prototype.toString.call(input))
    } else {
      return false
    }
  }

  /**
   * Returns true if the input is a string, number, symbol, boolean, null or undefined value.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isPrimitive (input) {
    if (input === null) return true
    switch (typeof input) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'undefined':
      case 'boolean':
        return true
      default:
        return false
    }
  }

  /**
   * Returns true if the input is a Promise.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isPromise (input) {
    if (input) {
      const isPromise = isDefined(Promise) && input instanceof Promise;
      const isThenable = input.then && typeof input.then === 'function';
      return !!(isPromise || isThenable)
    } else {
      return false
    }
  }

  /**
   * Returns true if the input is an iterable (`Map`, `Set`, `Array`, Generator etc.).
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isIterable('string')
   * true
   * > t.isIterable(new Map())
   * true
   * > t.isIterable([])
   * true
   * > t.isIterable((function * () {})())
   * true
   * > t.isIterable(Promise.resolve())
   * false
   * > t.isIterable(Promise)
   * false
   * > t.isIterable(true)
   * false
   * > t.isIterable({})
   * false
   * > t.isIterable(0)
   * false
   * > t.isIterable(1.1)
   * false
   * > t.isIterable(NaN)
   * false
   * > t.isIterable(Infinity)
   * false
   * > t.isIterable(function () {})
   * false
   * > t.isIterable(Date)
   * false
   * > t.isIterable()
   * false
   * > t.isIterable({ then: function () {} })
   * false
   */
  function isIterable (input) {
    if (input === null || !isDefined(input)) {
      return false
    } else {
      return (
        typeof input[Symbol.iterator] === 'function' ||
        typeof input[Symbol.asyncIterator] === 'function'
      )
    }
  }

  /**
   * Returns true if the input value is a string. The equivalent of `typeof input === 'string'` for use in funcitonal contexts.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isString (input) {
    return typeof input === 'string'
  }

  /**
   * Returns true if the input value is a function. The equivalent of `typeof input === 'function'` for use in funcitonal contexts.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isFunction (input) {
    return typeof input === 'function'
  }

  var t = {
    isNumber,
    isPlainObject,
    isArrayLike,
    isObject,
    isDefined,
    isUndefined,
    isNull,
    isDefinedValue,
    isClass,
    isPrimitive,
    isPromise,
    isIterable,
    isString,
    isFunction
  };

  /**
   * Isomorphic, load-anywhere function to sort an array by scalar, deep or computed values in any standard or custom order.
   *
   * @module sort-array
   * @typicalname sortArray
   * @example
   * const sortArray = require('sort-array')
   */

  /**
   * @param {Array} array - The input array to sort. It is sorted in place.
   * @param {object} [options] - Sort options.
   * @param {string[]} [options.by] - One or more property names or computed fields to sort by. Specifying property names is only relevant when sorting an array of objects.
   * @param {string[]} [options.order] - One or more sort orders. Specify `'asc'`, `'desc'` or a property name from the `options.customOrders` object.
   * @param {object} [options.customOrders] - A dictionary object containing one or more custom orders. Each custom order value must be an array defining the order expected values must be sorted in.
   * @param {object} [options.computed] - A dictionary object containing one or more computed field functions. The function will be invoked once per item in the array. Each invocation will receive the array item as input and must return a primitive value by which the array can be sorted.
   * @param {number} [options.nullRank] - Configures whether `null` values will be sorted before or after defined values. Set to `-1` for before, `1` for after. Defaults to `1`.
   * @param {number} [options.undefinedRank] - Configures whether `undefined` values will be sorted before or after defined values. Set to `-1` for before, `1` for after. Defaults to `1`.
   * @returns {Array} Returns the array that was passed in.
   * @alias module:sort-array
   */
  function sortArray (arr, options = {}) {
    options = Object.assign(
      {
        computed: {},
        customOrders: {},
        nullRank: 1,
        undefinedRank: 1
      },
      options
    );
    arr.sort(getCompareFunc(options));
    return arr
  }

  function getCompareFunc (options = {}) {
    const by = arrayify(options.by);
    const order = arrayify(options.order);
    const { customOrders, computed } = options;
    return function compareFunc (xIn, yIn, byIndex = 0) {
      const currOrder = order[byIndex] || 'asc';
      if (!(currOrder === 'asc' || currOrder === 'desc' || customOrders[currOrder])) {
        return 0
      }

      let result, x, y;
      if (by.length) {
        x = t.isDefined(xIn[by[byIndex]])
          ? xIn[by[byIndex]]
          : computed[by[byIndex]] && computed[by[byIndex]](xIn);
        y = t.isDefined(yIn[by[byIndex]])
          ? yIn[by[byIndex]]
          : computed[by[byIndex]] && computed[by[byIndex]](yIn);
      } else {
        x = xIn;
        y = yIn;
      }

      if (customOrders && customOrders[currOrder]) {
        result = customOrders[currOrder].indexOf(x) - customOrders[currOrder].indexOf(y);
      } else if (x === y) {
        result = 0;
      } else if (t.isNull(x) && t.isUndefined(y)) {
        result = currOrder === 'asc'
          ? 1
          : currOrder === 'desc'
            ? -1
            : 0;
      } else if (t.isUndefined(x) && t.isNull(y)) {
        result = currOrder === 'asc'
          ? -1
          : currOrder === 'desc'
            ? 1
            : 0;
      } else if (t.isNull(x) && t.isDefinedValue(y)) {
        result = options.nullRank;
      } else if (t.isUndefined(x) && t.isDefinedValue(y)) {
        result = options.undefinedRank;
      } else if (t.isNull(y) && t.isDefinedValue(x)) {
        result = -options.nullRank;
      } else if (t.isUndefined(y) && t.isDefinedValue(x)) {
        result = -options.undefinedRank;
      } else {
        result = x < y ? -1 : x > y ? 1 : 0;
        if (currOrder === 'desc') {
          result = result * -1;
        }
      }
      if (result === 0 && t.isDefined(by[byIndex + 1])) {
        result = compareFunc(xIn, yIn, byIndex + 1);
      }
      return result
    }
  }

  return sortArray;

})));
