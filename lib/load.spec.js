'use strict'
const test = require('ava')
const { load } = require('./load')

test('no input', t => {
  t.throws(() => load())
})

test('null input', t => {
  t.throws(() => load(null))
})

test('integer input', t => {
  t.throws(() => load(42))
})

test('number input', t => {
  t.throws(() => load(3.14))
})

test('object input', t => {
  t.throws(() => load({}))
})

test('array input', t => {
  t.throws(() => load([]))
})

test('improper PyON input', t => {
  t.throws(() => load('xyz'))
})

test('PyON without surrounding whitespace', t => {
  const input = 'PyON 1 Test\n42\n---'
  const expected = { type: 'Test', payload: 42 }
  t.deepEqual(load(input), expected)
})

test('PyON with surrounding whitespace', t => {
  const input = '\nPyON 1 Test\n42\n---\n'
  const expected = { type: 'Test', payload: 42 }
  t.deepEqual(load(input), expected)
})

test('PyON with a null value', t => {
  const input = 'PyON 1 null\nNone\n---'
  t.is(load(input).payload, null)
})

test('PyON with a truthy bool value', t => {
  const input = 'PyON 1 bool\nTrue\n---'
  t.is(load(input).payload, true)
})

test('PyON with a falsy bool value', t => {
  const input = 'PyON 1 bool\nFalse\n---'
  t.is(load(input).payload, false)
})

test('PyON with a positive integer value', t => {
  const input = 'PyON 1 int\n42\n---'
  t.is(load(input).payload, 42)
})

test('PyON with a negative integer value', t => {
  const input = 'PyON 1 int\n-42\n---'
  t.is(load(input).payload, -42)
})

test('PyON with a positive float value', t => {
  const input = 'PyON 1 float\n6.023\n---'
  t.is(load(input).payload, 6.023)
})

test('PyON with a negative float value', t => {
  const input = 'PyON 1 float\n-3.14\n---'
  t.is(load(input).payload, -3.14)
})

test('PyON with an empty string value', t => {
  const input = 'PyON 1 null\n""\n---'
  t.is(load(input).payload, '')
})

test('PyON with a string value', t => {
  const input = 'PyON 1 null\n"xyz"\n---'
  t.is(load(input).payload, 'xyz')
})

test('PyON with an empty array value', t => {
  const input = 'PyON 1 null\n[]\n---'
  t.deepEqual(load(input).payload, [])
})

test('PyON with an array without whitespace', t => {
  const input = 'PyON 1 null\n[1,2,3]\n---'
  t.deepEqual(load(input).payload, [1, 2, 3])
})

test('PyON with an array with spaces', t => {
  const input = 'PyON 1 null\n[ 1, 2, 3 ]\n---'
  t.deepEqual(load(input).payload, [1, 2, 3])
})

test('PyON with an array with newlines', t => {
  const input = 'PyON 1 null\n[\n  1,\n  2,\n  3\n]\n---'
  t.deepEqual(load(input).payload, [1, 2, 3])
})

test('PyON with an empty object value', t => {
  const input = 'PyON 1 null\n{}\n---'
  t.deepEqual(load(input).payload, {})
})

test('PyON with an object without whitespace', t => {
  const input = 'PyON 1 null\n{"x":1,"y":True}\n---'
  t.deepEqual(load(input).payload, { x: 1, y: true })
})

test('PyON with an object with null-value', t => {
  const input = 'PyON 1 null\n{"x":"None"}\n---'
  t.deepEqual(load(input).payload, { x: null })
})

test('PyON with an object with spaces', t => {
  const input = 'PyON 1 null\n{ "x": 1, "y": True }\n---'
  t.deepEqual(load(input).payload, { x: 1, y: true })
})

test('PyON with an object with newlines', t => {
  const input = 'PyON 1 string\n{\n  "x": 1,\n  "y": True\n}\n---'
  t.deepEqual(load(input).payload, { x: 1, y: true })
})

test('pyon array with objects', t => {
  const input = 'PyON 1 objectarray\n[{"a": "xyz"}]\n---'
  t.deepEqual(load(input).payload, [{ a: 'xyz' }])
})

test('pyon array with objects and newlines', t => {
  const input = 'PyON 1 objectarray\n[\n{"a": "xyz" }\n]\n---'
  t.deepEqual(load(input).payload, [{ a: 'xyz' }])
})
