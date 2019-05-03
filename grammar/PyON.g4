grammar PyON;

pyon  : header value END;
header  :  START SPACE NUMBER SPACE name=NAME NEWLINE;
obj
   : '{' ws pair (',' ws pair)* ws '}' # Object
   | '{' '}' #  EmptyObject
   ;
   pair: key=STRING ':' SPACE? value;
   arr
   : '[' ws value (',' ws value)* ws ']' # Array
   | '[' ']' # EmptyArray
   ;
value
: primitive
   | obj
   | arr
;
primitive
: STRING # String
| NUMBER # Number
| BOOL # Bool
| NONE # None
;
ws: (SPACE|NEWLINE)*;

START  : (SPACE|NEWLINE)* 'PyON';
END  : LINEBREAK+ '---' (SPACE|NEWLINE)* EOF;
fragment LINEBREAK : '\r'? '\n';
BOOL  : 'True' | 'False';
NONE  : 'None';

NAME  : [A-Za-z\-]+;

NUMBER
  : '-'? INT ('.' [0-9] +)? EXP?
;

fragment INT
  : '0' | [1-9] [0-9]*
;
// no leading zeros

fragment EXP
  : [Ee] [+\-]? INT
;
// \- since - means "range" inside [...]

STRING : '"' (ESC | SAFECODEPOINT)* '"';
fragment ESC
  : '\\' (["\\/bfnrt] | UNICODE)
;
fragment UNICODE
  : 'u' HEX HEX HEX HEX
;
fragment HEX
  : [0-9a-fA-F]
;
fragment SAFECODEPOINT
  : ~ ["\\\u0000-\u001F]
;
SPACE: [ ]+;
NEWLINE   : [\t\n\r]+;
