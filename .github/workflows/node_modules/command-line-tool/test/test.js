'use strict'
const TestRunner = require('test-runner')
const tool = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.test('.getCli', function(t){
  const definitions = [
    { name: 'yeah', type: String }
  ]
  const sections = [
    { header: 'Yeah', content: 'Test' }
  ]
  const argv = [ '--yeah', 'test' ]
  const cli = tool.getCli(definitions, sections, { argv })
  a.deepEqual(cli.options, { yeah: 'test' })
  a.ok(/Test/.test(cli.usage))
})
