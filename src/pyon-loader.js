'use strict'
const { PyONVisitor } = require('./grammar')

class PyONLoader extends PyONVisitor {
  visitPyon (ctx) {
    return {
      name: this.visitHeader(ctx.header()),
      body: this.visitValue(ctx.value())
    }
  }

  visitHeader (ctx) {
    return ctx.name.text
  }

  visitValue (ctx) {
    const primitive = ctx.primitive()
    if (primitive) {
      return this.visit(primitive)
    }
    const arr = ctx.arr()
    if (arr) {
      return this.visit(arr)
    }
    const obj = ctx.obj()
    if (obj) {
      return this.visit(obj)
    }
  }

  visitNone (ctx) {
    return null
  }

  visitBool (ctx) {
    return ctx.getText() === 'True'
  }

  visitNumber (ctx) {
    return Number(ctx.getText())
  }

  visitString (ctx) {
    const text = ctx.getText()
    if (text.length === 2) {
      return ''
    }
    const sliced = text.slice(1, -1)
    switch (sliced) {
      case 'true':
        return true
      case 'false':
        return false
      case 'None':
        return null
      default:
        return sliced
    }
  }

  visitEmptyArray (ctx) {
    return []
  }

  visitArray (ctx) {
    return ctx.value().map(x => {
      return this.visitValue(x)
    })
  }

  visitEmptyObject (ctx) {
    return {}
  }

  visitObject (ctx) {
    return ctx
      .pair()
      .map(x => {
        return this.visitPair(x)
      })
      .reduce((obj, pair) => {
        obj[pair.key] = pair.value
        return obj
      }, {})
  }

  visitPair (ctx) {
    return {
      key: ctx.key.text.slice(1, -1),
      value: this.visitValue(ctx.value())
    }
  }
}

module.exports = PyONLoader
