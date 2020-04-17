@{%
const moo = require('moo')
const lexer = moo.compile({
  number: { match: /[\-]?[0-9]+[\\.][0-9]+/, value: s => Number(s) },
  integer: { match: /0|[\-]?[1-9][0-9]*/, value: s => parseInt(s) },
  string: { match: /"(?:\\["\\]|[^\n"\\])*"/, value: s => s.slice(1, -1) },
  start: /^PyON/,
  name: {
    match: /[a-zA-Z]+/,
    type: moo.keywords({
      bool: ['True', 'False'],
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
header -> %start %space %integer %space %name %NL {% data => data[4].value %}
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
  %integer {% ([item]) => item.value %}
  | %number {% ([item]) => item.value %}
  | %string {% ([item]) => item.value === 'None' ? null : item.value %}
  | %bool {%
    ([item]) => {switch (item.value) {
      case 'True': return true
      case 'False': return false
    }}
  %}
  | %none {% () => null %}
