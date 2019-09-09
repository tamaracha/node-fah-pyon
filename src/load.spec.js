'use strict'
const { describe, Try } = require('riteway')
const PyonError = require('./pyon-error')
const { load } = require('./load')

describe('load()', async assert => {
  let should = 'throw a PyonError'
  assert({
    given: 'no arguments',
    should,
    actual: Try(load),
    expected: PyonError.emptyValue()
  })
  assert({
    given: 'null',
    should,
    actual: Try(load, null),
    expected: PyonError.emptyValue()
  })
  assert({
    given: 'an integer',
    should,
    actual: Try(load, 42),
    expected: PyonError.noString(42)
  })
  assert({
    given: 'a number',
    should,
    actual: Try(load, 3.14),
    expected: PyonError.noString(3.14)
  })
  assert({
    given: 'an object',
    should,
    actual: Try(load, {}),
    expected: PyonError.noString({})
  })
  assert({
    given: 'an array',
    should,
    actual: Try(load, []),
    expected: PyonError.noString([])
  })
  assert({
    given: 'improper PyON string',
    should: 'throw',
    actual: Try(load, 'xyz'),
    expected: PyonError.parsingError()
  })
  should = 'load the PyON input and return the value'
  assert({
    given: 'PyON without surrounding whitespace',
    should,
    actual: load('PyON 1 Test\n42\n---'),
    expected: { name: 'Test', body: 42 }
  })
  assert({
    given: 'PyON with surrounding whitespace',
    should,
    actual: load('\nPyON 1 Test\n42\n---\n'),
    expected: { name: 'Test', body: 42 }
  })
  assert({
    given: 'PyON with a null value',
    should,
    actual: load('PyON 1 null\nNone\n---').body,
    expected: null
  })
  assert({
    given: 'PyON with a truthy bool value',
    should,
    actual: load('PyON 1 truebool\nTrue\n---').body,
    expected: true
  })
  assert({
    given: 'PyON with a falsy bool value',
    should,
    actual: load('PyON 1 truebool\nFalse\n---').body,
    expected: false
  })
  assert({
    given: 'PyON with a positive integer value',
    should,
    actual: load('PyON 1 null\n42\n---').body,
    expected: 42
  })
  assert({
    given: 'PyON with a negative integer value',
    should,
    actual: load('PyON 1 null\n-42\n---').body,
    expected: -42
  })
  assert({
    given: 'PyON with a positive float value',
    should,
    actual: load('PyON 1 null\n6.023\n---').body,
    expected: 6.023
  })
  assert({
    given: 'PyON with a negative float value',
    should,
    actual: load('PyON 1 null\n-3.14\n---').body,
    expected: -3.14
  })
  assert({
    given: 'PyON with an empty string value',
    should,
    actual: load('PyON 1 null\n""\n---').body,
    expected: ''
  })
  assert({
    given: 'PyON with a string value',
    should,
    actual: load('PyON 1 null\n"xyz"\n---').body,
    expected: 'xyz'
  })
  assert({
    given: 'PyON with an empty array',
    should,
    actual: load('PyON 1 string\n[]\n---').body,
    expected: []
  })
  assert({
    given: 'PyON with an array without whitespace',
    should,
    actual: load('PyON 1 array\n[1,2,3]\n---').body,
    expected: [1, 2, 3]
  })
  assert({
    given: 'PyON with an array with spaces',
    should,
    actual: load('PyON 1 array\n[ 1, 2, 3 ]\n---').body,
    expected: [1, 2, 3]
  })
  assert({
    given: 'PyON with an array with newlines',
    should,
    actual: load('PyON 1 array\n[\n  1,\n  2,\n  3\n]\n---').body,
    expected: [1, 2, 3]
  })
  assert({
    given: 'PyON with an empty object',
    should,
    actual: load('PyON 1 string\n{}\n---').body,
    expected: {}
  })
  assert({
    given: 'PyON with an object without whitespace',
    should,
    actual: load('PyON 1 string\n{"x":1,"y":True}\n---').body,
    expected: { x: 1, y: true }
  })
  assert({
    given: 'PyON with an object with null property',
    should,
    actual: load('PyON 1 string\n{"x":"None"}\n---').body,
    expected: { x: null }
  })
  assert({
    given: 'PyON with an object with spaces',
    should,
    actual: load('PyON 1 string\n{ "x": 1, "y": True }\n---').body,
    expected: { x: 1, y: true }
  })
  assert({
    given: 'PyON with an object with newlines',
    should,
    actual: load('PyON 1 string\n{\n  "x": 1,\n  "y": True\n}\n---').body,
    expected: { x: 1, y: true }
  })
  assert({
    given: 'pyon array with objects',
    should,
    actual: load('PyON 1 objectarray\n[{"a": "xyz"}]\n---').body,
    expected: [{ a: 'xyz' }]
  })
  assert({
    given: 'pyon array with objects and newlines',
    should,
    actual: load('PyON 1 objectarray\n[\n{"a": "xyz" }\n]\n---').body,
    expected: [{ a: 'xyz' }]
  })
})
