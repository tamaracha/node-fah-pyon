'use strict'
const { ErrorListener } = require('antlr4/error')
const PyonError = require('./pyon-error')

class ThrowingErrorListener extends ErrorListener {
  /**
   * @param {import("antlr4").Recognizer} recognizer
  * @param {import("antlr4").Token} offendingSymbol
   * @param {number} line
   * @param {number} column
   * @param {string} msg
   * @param {any} e
  */
  syntaxError (recognizer, offendingSymbol, line, column, msg, e) {
    throw PyonError.parsingError(`Line ${line}, column ${column}: ${msg}`)
  };
}

module.exports = ThrowingErrorListener
