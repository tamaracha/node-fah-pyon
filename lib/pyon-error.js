'use strict'

class PyonError extends SyntaxError {
  constructor (subtype, input, message) {
    super(message)
    this.name = 'PyonError'
    this.input = input
    this.subtype = subtype
  }

  static emptyValue () {
    return new PyonError(
      'EmptyValue',
      null,
      'The input value must not be empty or null'
    )
  }

  static noString (input) {
    return new PyonError('NoString', input, 'The input value is not a string')
  }

  static parsingError (reason) {
    return new PyonError(
      'ParsingError',
      null,
      `An error occured during parsing the input string: ${reason}`
    )
  }
}

module.exports = PyonError
