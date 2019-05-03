'use strict'
const { InputStream, CommonTokenStream } = require('antlr4')
const { PyONLexer, PyONParser } = require('./grammar')
const PyonError = require('./pyon-error')
const ThrowingErrorListener = require('./throwing-error-listener')
const PyONLoader = require('./pyon-loader')

const loader = new PyONLoader()
const errorListener = new ThrowingErrorListener()

function load (input) {
  if (!input) { throw PyonError.emptyValue() }
  if (typeof input !== 'string') { throw PyonError.noString(input) }
  const chars = new InputStream(input)
  const lexer = new PyONLexer(chars)
  lexer.removeErrorListeners()
  lexer.addErrorListener(errorListener)
  const tokens = new CommonTokenStream(lexer)
  const parser = new PyONParser(tokens)
  parser.removeErrorListeners()
  parser.addErrorListener(errorListener)
  const tree = parser.pyon()
  return loader.visitPyon(tree)
}

module.exports = load
