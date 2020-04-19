# FAH-PyON
This is a small parser for PyON, a data serialization format. PyON is used by the Folding@Home project in their [third party client interface].
As described on that wiki page, the format has some similarities with JSON, but they are not fully compatible. If someone wants to create a frontend for FAH, PyON parsing is a precondition for reading most of the interface messages.
The parser is written using [nearley] and [moo].

## Installation
This is not yet published on npm, but installable package archives are attached to github releases.

```bash
npm i https://github.com/tamaracha/node-fah-pyon/releases/download/v1.4.2/fah-pyon-1.4.2.tgz
```

## Usage
The module exports two functions: `load` and `safeLoad`.
Both take a string and try to parse it as PyON.
On success, they return an object of type Message with a type and a payload property.
The type is the identifyer in the PyON header, whereas the payload is the parsed PyON content.

The two functions differ in their error handling.
The load function is more strict about the assumptions it makes about the given string and can throw if parsing fails.
If it didn't fail, but received a partial PyON string, it returns undefined.
The safeLoad function tries to parse and trims whitespace around the input string, but doesn't throw.
On failure, it returns a Message object with type = 'none' and the given input argument as payload.
It doesn't return undefined, but a Message with type = 'empty' and payload = null.

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

```bash
# Clone and enter directory
git clone https://github.com/tamaracha/node-fah-pyon
cd node-fah-pyon
# install (dev) dependencies
npm i
# Check style with standardjs
npm run lint
# Run unit tests
npm test
# Regenerate parser from nearley grammar
npm run build
```

[release]: https://github.com/tamaracha/node-fah-pyon/releases/download/v1.4.2/fah-pyon-1.4.2.tgz
[nearley]: https://nearley.js.org
[moo]: https://github.com/no-context/moo
[third party client interface]: https://github.com/FoldingAtHome/fah-control/wiki/3rd-party-FAHClient-API
