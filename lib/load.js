'use strict'
const nearley = require('nearley')
const grammar = require('./grammar/pyon')

/**
 * @typedef {object} Message
 * @property {string} type
 * @property {any} payload
*/

/**
 * @param {string} input
 * @return {Message}
*/
function load (str) {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  parser.feed(str)
  return parser.results[0]
}
module.exports = { grammar, load }
