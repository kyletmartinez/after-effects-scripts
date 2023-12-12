const transform = require('./lib/transform')

/**
 * @module jsdoc-parse
 * @example
 * const jsdocParse = require('jsdoc-parse')
 */

/**
 * @param {object[]} - jsdoc output
 * @returns {object[]}
 * @alias module:jsdoc-parse
 */
function jsdocParse (jsdocData) {
  const data = transform(jsdocData)
  return sort(data)
}

function sort (array) {
  const sortBy = require('sort-array')
  return sortBy(array, {
    by: ['scope', 'category', 'kind', 'order'],
    order: ['scope', 'asc', 'kind', 'asc'],
    customOrders: {
      kind: ['class', 'constructor', 'mixin', 'member', 'namespace', 'enum', 'constant', 'function', 'event', 'typedef', 'external'],
      scope: ['global', 'instance', 'static', 'inner']
    },
    nullRank: -1,
    undefinedRank: -1
  })
}

module.exports = jsdocParse
