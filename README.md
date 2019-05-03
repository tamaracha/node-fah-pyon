# FAH-PyON
This is a small parser for PyON, a data serialization format. PyON is used by the Folding At Home project in their [third party client interface](https://github.com/FoldingAtHome/fah-control/wiki/3rd-party-FAHClient-API).
As described on that wiki page, the format has some similarities with JSON, but they are not compatible. If someone wants to create a frontend for FAH, PyON parsing is a precondition for reading some interface messages.

## Installation
```bash
npm i tamaracha/node-fah-pyon
```

## Usage example
```node
'use strict'
/// Import the load function from the module
const { load } = require('fah-pyon')
/// Some example data
const input = `
PyON 1 example
{
  "foo": 1,
  "bar": None,
  "baz": True
}
---
`
/// Parse the data from the string
const data = loadPyon(input)
console.log(data)
```
