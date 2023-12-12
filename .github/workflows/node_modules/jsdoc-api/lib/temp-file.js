const fs = require('fs')
const getTempPath = require('temp-path')

class TempFile {
  constructor (source) {
    this.path = getTempPath() + '.js'
    fs.writeFileSync(this.path, source)
  }
  delete () {
    try {
      fs.unlinkSync(this.path)
    } catch (err) {
      // already deleted
    }
  }
}

module.exports = TempFile
