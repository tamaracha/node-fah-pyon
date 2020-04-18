'use strict'
const nearley = require('nearley')
const grammar = require('./grammar/pyon')

/**
 * @typedef {object} Message
 * @property {string} type
 * @property {any} payload
*/

/**
 * Parse a PyON string into an object
 * @param {string} input
 * @return {Message}
 * @throws {Error} Input couldn't be parsed
*/
function load (input) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  parser.feed(input)
  return parser.results[0]
}

/**
 * Try to parse a PyON string, and otherwise return a message of type "none" with the unparsed input as payload
 * @param {string} input
 * @return {Message}
*/
function safeLoad (input) {
  try {
    const parsed = load(input.trim())
    if (!parsed) {
      return { type: 'empty', payload: null }
    }
    return parsed
  } catch (e) {
    return { type: 'none', payload: input }
  }
}

module.exports = { grammar, load, safeLoad }
