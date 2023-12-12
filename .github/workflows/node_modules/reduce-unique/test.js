const unique = require('./')
const TestRunner = require('test-runner')
const a = require('assert')

const runner = new TestRunner()

runner.test('unique', function () {
  const arr = [ 1, 3, 8, 3, 1, 2, 1, 9, 3, 3 ]
  a.deepStrictEqual(arr.reduce(unique), [ 1, 3, 8, 2, 9 ])
})

runner.test('unique, default', function () {
  const arr = [ 1, 3, 8, 3, 1, 2, 1, 9, 3, 3 ]
  a.deepStrictEqual(arr.reduce(unique, []), [ 1, 3, 8, 2, 9 ])
})

runner.test('unique, single value', function () {
  const arr = [ 3 ]
  a.deepStrictEqual(arr.reduce(unique), 3)
})

runner.test('unique, single value into an array', function () {
  const arr = [ 3 ]
  a.deepStrictEqual(arr.reduce(unique, []), [ 3 ])
})

runner.test('unique, single value into an array 2', function () {
  const arr = [ 3, 3 ]
  a.deepStrictEqual(arr.reduce(unique, [ 'one', 'two' ]), [ 'one', 'two', 3 ])
})
