'use strict'

var test = require('tape')
var keyDifference = require('./')

test(function (t) {
  t.deepEqual(keyDifference({a: 1}, {a: 1}), [])
  t.deepEqual(keyDifference({a: 1, b: 2}, {a: 1}), ['b'])
  t.deepEqual(keyDifference({a: 1, b: 2, c: 3}, {a: 1}, {b: 2}), ['c'])
  t.end()
})
