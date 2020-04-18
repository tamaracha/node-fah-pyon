@{%
const moo = require('moo')
const lexer = moo.compile({
    number: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
    truestring: '"True"',
    falseString: '"False"',
    noneString: '"None"',
    string: { match: /"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/, value: s => s.slice(1, -1) },
  start: /^PyON/,
  name: {
    match: /[a-zA-Z]+/,
    type: moo.keywords({
      'true': 'True',
      'false': 'False',
      none: 'None'
    })
  },
  end: /\n---$/,
  lbrack: /[\[]\s*/,
  rbrack: /\s*[\]]/,
  lbrace: /[{]\s*/,
  rbrace: /\s*[}]/,
  colon: /[:]\s*/,
  comma: /[,]\s*/,
  space: /[ \t]+/,
  NL: { match: /\n/, lineBreaks: true }
})
%}
@lexer lexer
pyon -> header value %end {% ([type, payload]) => ({ type, payload }) %}
header -> %start %space %number %space %name %NL {% data => data[4].value %}
value ->
  object {% id %}
  | array {% id %}
  | primitive {% id %}
object -> %lbrace (pair (%comma pair {% data => data[1] %}):*):? %rbrace {%
  ([lb, entries, rb]) => {
    if (!entries) { return {} }
    return Object.fromEntries([ entries[0], ...entries[1]])
  }
%}
pair -> %string %colon value {% ([key, _, value]) => [key, value] %}
array -> %lbrack (value (%comma value {% data => data[1] %}):*):? %rbrack {%
  ([lb, items, rb]) => {
    if (!items) { return [] }
    return [ items[0], ...items[1]]
  }
%}
primitive ->
  %number {% ([item]) => Number(item.value) %}
  | %string {% ([item]) => item.value %}
  | (%true | %trueString) {% () => true %}
  | (%false | %falseString) {% () => false %}
  | (%none | %noneString) {% () => null %}
