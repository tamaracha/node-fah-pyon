# FAH-PyON
This is a small parser for PyON, a data serialization format. PyON is used by the Folding At Home project in their [third party client interface](https://github.com/FoldingAtHome/fah-control/wiki/3rd-party-FAHClient-API).
As described on that wiki page, the format has some similarities with JSON, but they are not fully compatible. If someone wants to create a frontend for FAH, PyON parsing is a precondition for reading some interface messages.

## Installation
```bash
npm i tamaracha/node-fah-pyon
```

## Usage example
The module exports a function named `load` which takes a string and tries to parse it. If successful, it returns the parsed data. If it fails, it can throw an error.

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
const data = load(input)
console.log(data)
```

## Development
To run the build npm script and regenerate the parser, you should install Java and [Antlr4](https://www.antlr.org) on your local development machine.

```bash
# Clone and enter directory
git clone https://github.com/tamaracha/node-fah-pyon
cd node-fah-pyon
# install (dev) dependencies
npm i
# Check style with eslint
npm run lint
# Run unit tests
npm test
# Regenerate parser from antlr grammar
npm run build
```
