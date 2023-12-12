/**
 * Isomorphic map-reduce function to flatten an array into the supplied array.
 *
 * @module reduce-flatten
 * @example
 * const flatten = require('reduce-flatten')
 */

/**
 * @alias module:reduce-flatten
 * @example
 * > numbers = [ 1, 2, [ 3, 4 ], 5 ]
 * > numbers.reduce(flatten, [])
 * [ 1, 2, 3, 4, 5 ]
 */
function flatten (arr, curr) {
  if (Array.isArray(curr)) {
    arr.push(...curr)
  } else {
    arr.push(curr)
  }
  return arr
}

export default flatten
