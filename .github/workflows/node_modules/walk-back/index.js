/**
 * Walk up the directory tree until the specified path is found.
 *
 * @module walk-back
 * @example
 * const walkBack = require('walk-back')
 */

/**
 * Returns an absolute file path (if found) else `null`.
 *
 * @param {string} - the directory to start in
 * @param {string} - the path we're looking for
 * @return {string}
 * @alias module:walk-back
 * @example
 * > walkBack('/Users/lloyd/Documents/75lb/walk-back', 'package.json')
 * '/Users/lloyd/Documents/75lb/walk-back/package.json'
 *
 * > walkBack('/Users/lloyd/Documents/75lb/walk-back', '75lb')
 * '/Users/lloyd/Documents/75lb'
 *
 * > walkBack('/Users/lloyd/Documents/75lb/walk-back', '.bash_profile')
 * '/Users/lloyd/.bash_profile'
 *
 * > walkBack('.', '.bash_profile')
 * '/Users/lloyd/.bash_profile'
 *
 * > walkBack('/Users/lloyd/Documents/75lb/walk-back', 'non-existent.file')
 * null
 */
function walkBack (startAt, lookingFor) {
  const path = require('path')
  const fs = require('fs')
  startAt = path.resolve(startAt)
  if (fs.existsSync(startAt) && fs.statSync(startAt).isDirectory()) {
    const dirs = path.resolve(startAt).split(path.sep)
    for (let i = 0; i < dirs.length; i++) {
      const basedir = i < dirs.length - 1
        ? dirs.slice(0, dirs.length - i).join(path.sep)
        : path.sep

      if (fs.existsSync(path.join(basedir, lookingFor))) {
        return path.join(basedir, lookingFor)
      }
    }
    /* if we reached here, nothing was found */
    return null
  } else {
    throw new Error('startAt path must be an existing directory: ' + startAt)
  }
}

module.exports = walkBack
