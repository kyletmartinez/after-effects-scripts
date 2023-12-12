/**
 * @module dmd
 */

const path = require('path')
const Cache = require('cache-point')
const DmdOptions = require('./lib/dmd-options')
const dmdVersion = require('./package').version

/**
 * Transforms doclet data into markdown documentation.
 * @param {object[]}
 * @param [options] {module:dmd-options} - The render options
 * @return {string}
 * @alias module:dmd
 */
function dmd (templateData, options) {
  options = new DmdOptions(options)
  if (skipCache(options)) {
    return generate(templateData, options)
  } else {
    const cached = dmd.cache.readSync([templateData, options, dmdVersion])
    if (cached) {
      return cached
    } else {
      return generate(templateData, options)
    }
  }
}

dmd.async = function (templateData, options) {
  options = new DmdOptions(options)
  if (skipCache(options)) {
    return Promise.resolve(generate(templateData, options))
  } else {
    return dmd.cache.read([templateData, options, dmdVersion])
      .catch(function () {
        return generate(templateData, options)
      })
  }
}

dmd.cache = new Cache({ dir: path.join(require('os').tmpdir(), 'dmd') })

function generate (templateData, options) {
  const fs = require('fs')
  const path = require('path')
  const arrayify = require('array-back')
  const handlebars = require('handlebars')
  const walkBack = require('walk-back')
  const DmdOptions = require('./lib/dmd-options')
  const FileSet = require('file-set')

  function registerPartials (paths) {
    const fileSet = new FileSet(paths)
    fileSet.files.forEach(function (file) {
      handlebars.registerPartial(
        path.basename(file, '.hbs'),
        fs.readFileSync(file, 'utf8') || ''
      )
    })
  }

  function registerHelpers (helpers) {
    const fileSet = new FileSet(helpers)
    fileSet.files.forEach(function (file) {
      handlebars.registerHelper(require(path.resolve(process.cwd(), file)))
    })
  }

  /* Register handlebars helper modules */
  ;['./helpers/helpers', './helpers/ddata', './helpers/selectors'].forEach(function (modulePath) {
    handlebars.registerHelper(require(modulePath))
  })

  const inputData = templateData.map(function (row) {
    return Object.assign({}, row)
  })
  const inputOptions = Object.assign({}, options)

  templateData = arrayify(templateData)
  options = Object.assign(new DmdOptions(), options)
  options.plugin = arrayify(options.plugin)
  options._depth = 0
  options._indexDepth = 0

  /* state module, for sharing with the helpers */
  const state = require('./lib/state')
  state.templateData = templateData
  state.options = options

  /* register all dmd partials. */
  registerPartials(path.resolve(__dirname, './partials/**/*.hbs'))

  /* if plugins were specified, register the helpers/partials from them too */
  if (options.plugin) {
    for (let i = 0; i < options.plugin.length; i++) {
      const plugin = options.plugin[i]
      let modulePath = ''

      /* user supplied an existing path */
      if (fs.existsSync(path.resolve(plugin))) {
        modulePath = path.resolve(plugin)
      /* else user supplied a module name, search npm installed modules */
      } else {
        modulePath = walkBack(process.cwd(), path.join('node_modules', plugin))
      }

      if (modulePath) {
        /* load the plugin options */
        const pluginOptions = require(modulePath)(options)
        options.partial = options.partial.concat(pluginOptions.partial)
        options.helper = options.helper.concat(pluginOptions.helper)
      } else {
        throw new Error('Cannot find plugin: ' + plugin)
      }
    }
  }

  /* if additional partials/helpers paths were specified, register them too */
  if (options.partial.length) registerPartials(options.partial)
  if (options.helper.length) registerHelpers(options.helper)

  const compiled = handlebars.compile(options.template, {
    preventIndent: true,
    strict: false
  })
  templateData.options = options
  const output = compiled(templateData)
  dmd.cache.writeSync([inputData, inputOptions, dmdVersion], output)
  return output
}

/* always skip the cache when custom plugins, partials or helpers are used */
function skipCache (options) {
  return options.noCache || options.plugin.length || options.partial.length || options.helper.length
}

module.exports = dmd
