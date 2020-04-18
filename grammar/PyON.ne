@{%
const moo = require('moo')
const lexer = moo.states({
  main: {
  space: ' ',
    number: /[1-9][0-9]*/,
    name: { match: /[a-zA-Z]+/, type: moo.keywords({
      pyon: 'PyON'
    })},
  NL: { match: /\n/, lineBreaks: true, push: 'pyon' }
  },
  pyon: {
    number: /-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/,
    truestring: '"True"',
    falseString: '"False"',
    noneString: '"None"',
    string: { match: /"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/, value: s => s.slice(1, -1) },
    'true': 'True',
    'false': 'False',
    none: 'None',
  end: { match: '\n---', pop: 1 },
  '[': '[',
  ']': ']',
  '{': '{',
  '}': '}',
  ':': ':',
  ',': ',',
  ws: { match: /[\s]+/, lineBreaks: true }
  }
})
%}
@lexer lexer
pyon -> header value %end {% ([type, payload]) => ({ type, payload }) %}
header -> "PyON" " " %number " " %name %NL {% data => data[4].value %}
value ->
  object {% id %}
  | array {% id %}
  | primitive {% id %}
object -> "{" _ (pair ("," _ pair {% data => data[2] %}):*):? _ "}" {%
  data => {
    const entries = data[2]
    if (!entries) { return {} }
    return Object.fromEntries([ entries[0], ...entries[1]])
  }
%}
pair -> %string ":" _ value {% data => [data[0], data[3]] %}
array -> "[" _ (value ("," _ value {% data => data[2] %}):*):? _ "]" {%
  data => {
    const items = data[2]
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
_ -> %ws:?
__ -> %ws
