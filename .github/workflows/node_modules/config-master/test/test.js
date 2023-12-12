'use strict'
const TestRunner = require('test-runner')
const loadConfig = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.test('new API', function () {
  const config = loadConfig('test-app', { startFrom: __dirname + '/fixture/new-api/one/two' })
  a.deepStrictEqual(config, {
    one: 1,
    two: 2,
    three: 3,
    four: 'package'
  })
})

runner.test('config file', function () {
  const config = loadConfig('test-app', {
    startFrom: __dirname + '/fixture/config-file/one/two',
    filename: '.custom-file.json'
  })
  a.deepStrictEqual(config, {
    one: 1,
    two: 2,
    three: 3,
    four: 'package'
  })
})
