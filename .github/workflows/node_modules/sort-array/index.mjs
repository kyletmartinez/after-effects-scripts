import arrayify from 'array-back/index.mjs'
import t from 'typical/index.mjs'

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
  )
  arr.sort(getCompareFunc(options))
  return arr
}

function getCompareFunc (options = {}) {
  const by = arrayify(options.by)
  const order = arrayify(options.order)
  const { customOrders, computed } = options
  return function compareFunc (xIn, yIn, byIndex = 0) {
    const currOrder = order[byIndex] || 'asc'
    if (!(currOrder === 'asc' || currOrder === 'desc' || customOrders[currOrder])) {
      return 0
    }

    let result, x, y
    if (by.length) {
      x = t.isDefined(xIn[by[byIndex]])
        ? xIn[by[byIndex]]
        : computed[by[byIndex]] && computed[by[byIndex]](xIn)
      y = t.isDefined(yIn[by[byIndex]])
        ? yIn[by[byIndex]]
        : computed[by[byIndex]] && computed[by[byIndex]](yIn)
    } else {
      x = xIn
      y = yIn
    }

    if (customOrders && customOrders[currOrder]) {
      result = customOrders[currOrder].indexOf(x) - customOrders[currOrder].indexOf(y)
    } else if (x === y) {
      result = 0
    } else if (t.isNull(x) && t.isUndefined(y)) {
      result = currOrder === 'asc'
        ? 1
        : currOrder === 'desc'
          ? -1
          : 0
    } else if (t.isUndefined(x) && t.isNull(y)) {
      result = currOrder === 'asc'
        ? -1
        : currOrder === 'desc'
          ? 1
          : 0
    } else if (t.isNull(x) && t.isDefinedValue(y)) {
      result = options.nullRank
    } else if (t.isUndefined(x) && t.isDefinedValue(y)) {
      result = options.undefinedRank
    } else if (t.isNull(y) && t.isDefinedValue(x)) {
      result = -options.nullRank
    } else if (t.isUndefined(y) && t.isDefinedValue(x)) {
      result = -options.undefinedRank
    } else {
      result = x < y ? -1 : x > y ? 1 : 0
      if (currOrder === 'desc') {
        result = result * -1
      }
    }
    if (result === 0 && t.isDefined(by[byIndex + 1])) {
      result = compareFunc(xIn, yIn, byIndex + 1)
    }
    return result
  }
}

export default sortArray
