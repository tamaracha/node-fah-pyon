'use strict'
const { ErrorListener } = require('antlr4/error')
const PyonError = require('./pyon-error')

class ThrowingErrorListener extends ErrorListener {
  syntaxError (recognizer, offendingSymbol, line, column, msg, e) {
    throw PyonError.parsingError(`Line ${line}, column ${column}: ${msg}`)
  };
}

module.exports = ThrowingErrorListener
