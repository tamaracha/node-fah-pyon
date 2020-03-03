// Generated from grammar/PyON.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PyONVisitor = require('./PyONVisitor').PyONVisitor;

var grammarFileName = "PyON.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011\\\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004%\n\u0004\f\u0004\u000e\u0004(\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "/\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u00054\n\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006?\n\u0006\f\u0006\u000e\u0006",
    "B\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006I\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007N\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bT\n\b\u0003\t",
    "\u0007\tW\n\t\f\t\u000e\tZ\u000b\t\u0003\t\u0002\u0002\n\u0002\u0004",
    "\u0006\b\n\f\u000e\u0010\u0002\u0003\u0003\u0002\u0010\u0011\u0002^",
    "\u0002\u0012\u0003\u0002\u0002\u0002\u0004\u0016\u0003\u0002\u0002\u0002",
    "\u0006.\u0003\u0002\u0002\u0002\b0\u0003\u0002\u0002\u0002\nH\u0003",
    "\u0002\u0002\u0002\fM\u0003\u0002\u0002\u0002\u000eS\u0003\u0002\u0002",
    "\u0002\u0010X\u0003\u0002\u0002\u0002\u0012\u0013\u0005\u0004\u0003",
    "\u0002\u0013\u0014\u0005\f\u0007\u0002\u0014\u0015\u0007\n\u0002\u0002",
    "\u0015\u0003\u0003\u0002\u0002\u0002\u0016\u0017\u0007\t\u0002\u0002",
    "\u0017\u0018\u0007\u0010\u0002\u0002\u0018\u0019\u0007\u000e\u0002\u0002",
    "\u0019\u001a\u0007\u0010\u0002\u0002\u001a\u001b\u0007\r\u0002\u0002",
    "\u001b\u001c\u0007\u0011\u0002\u0002\u001c\u0005\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0007\u0003\u0002\u0002\u001e\u001f\u0005\u0010\t\u0002",
    "\u001f&\u0005\b\u0005\u0002 !\u0007\u0004\u0002\u0002!\"\u0005\u0010",
    "\t\u0002\"#\u0005\b\u0005\u0002#%\u0003\u0002\u0002\u0002$ \u0003\u0002",
    "\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002&\'",
    "\u0003\u0002\u0002\u0002\')\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002",
    "\u0002)*\u0005\u0010\t\u0002*+\u0007\u0005\u0002\u0002+/\u0003\u0002",
    "\u0002\u0002,-\u0007\u0003\u0002\u0002-/\u0007\u0005\u0002\u0002.\u001d",
    "\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/\u0007\u0003\u0002",
    "\u0002\u000201\u0007\u000f\u0002\u000213\u0007\u0006\u0002\u000224\u0007",
    "\u0010\u0002\u000232\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u0002",
    "45\u0003\u0002\u0002\u000256\u0005\f\u0007\u00026\t\u0003\u0002\u0002",
    "\u000278\u0007\u0007\u0002\u000289\u0005\u0010\t\u00029@\u0005\f\u0007",
    "\u0002:;\u0007\u0004\u0002\u0002;<\u0005\u0010\t\u0002<=\u0005\f\u0007",
    "\u0002=?\u0003\u0002\u0002\u0002>:\u0003\u0002\u0002\u0002?B\u0003\u0002",
    "\u0002\u0002@>\u0003\u0002\u0002\u0002@A\u0003\u0002\u0002\u0002AC\u0003",
    "\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002CD\u0005\u0010\t\u0002D",
    "E\u0007\b\u0002\u0002EI\u0003\u0002\u0002\u0002FG\u0007\u0007\u0002",
    "\u0002GI\u0007\b\u0002\u0002H7\u0003\u0002\u0002\u0002HF\u0003\u0002",
    "\u0002\u0002I\u000b\u0003\u0002\u0002\u0002JN\u0005\u000e\b\u0002KN",
    "\u0005\u0006\u0004\u0002LN\u0005\n\u0006\u0002MJ\u0003\u0002\u0002\u0002",
    "MK\u0003\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002N\r\u0003\u0002",
    "\u0002\u0002OT\u0007\u000f\u0002\u0002PT\u0007\u000e\u0002\u0002QT\u0007",
    "\u000b\u0002\u0002RT\u0007\f\u0002\u0002SO\u0003\u0002\u0002\u0002S",
    "P\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002SR\u0003\u0002\u0002",
    "\u0002T\u000f\u0003\u0002\u0002\u0002UW\t\u0002\u0002\u0002VU\u0003",
    "\u0002\u0002\u0002WZ\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002",
    "XY\u0003\u0002\u0002\u0002Y\u0011\u0003\u0002\u0002\u0002ZX\u0003\u0002",
    "\u0002\u0002\n&.3@HMSX"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "','", "'}'", "':'", "'['", "']'", null, 
                     null, null, "'None'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "START", 
                      "END", "BOOL", "NONE", "NAME", "NUMBER", "STRING", 
                      "SPACE", "NEWLINE" ];

var ruleNames =  [ "pyon", "header", "obj", "pair", "arr", "value", "primitive", 
                   "ws" ];

function PyONParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PyONParser.prototype = Object.create(antlr4.Parser.prototype);
PyONParser.prototype.constructor = PyONParser;

Object.defineProperty(PyONParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PyONParser.EOF = antlr4.Token.EOF;
PyONParser.T__0 = 1;
PyONParser.T__1 = 2;
PyONParser.T__2 = 3;
PyONParser.T__3 = 4;
PyONParser.T__4 = 5;
PyONParser.T__5 = 6;
PyONParser.START = 7;
PyONParser.END = 8;
PyONParser.BOOL = 9;
PyONParser.NONE = 10;
PyONParser.NAME = 11;
PyONParser.NUMBER = 12;
PyONParser.STRING = 13;
PyONParser.SPACE = 14;
PyONParser.NEWLINE = 15;

PyONParser.RULE_pyon = 0;
PyONParser.RULE_header = 1;
PyONParser.RULE_obj = 2;
PyONParser.RULE_pair = 3;
PyONParser.RULE_arr = 4;
PyONParser.RULE_value = 5;
PyONParser.RULE_primitive = 6;
PyONParser.RULE_ws = 7;


function PyonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PyONParser.RULE_pyon;
    return this;
}

PyonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PyonContext.prototype.constructor = PyonContext;

PyonContext.prototype.header = function() {
    return this.getTypedRuleContext(HeaderContext,0);
};

PyonContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PyonContext.prototype.END = function() {
    return this.getToken(PyONParser.END, 0);
};

PyonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitPyon(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PyONParser.PyonContext = PyonContext;

PyONParser.prototype.pyon = function() {

    var localctx = new PyonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PyONParser.RULE_pyon);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.header();
        this.state = 17;
        this.value();
        this.state = 18;
        this.match(PyONParser.END);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function HeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PyONParser.RULE_header;
    this.name = null; // Token
    return this;
}

HeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeaderContext.prototype.constructor = HeaderContext;

HeaderContext.prototype.START = function() {
    return this.getToken(PyONParser.START, 0);
};

HeaderContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PyONParser.SPACE);
    } else {
        return this.getToken(PyONParser.SPACE, i);
    }
};


HeaderContext.prototype.NUMBER = function() {
    return this.getToken(PyONParser.NUMBER, 0);
};

HeaderContext.prototype.NEWLINE = function() {
    return this.getToken(PyONParser.NEWLINE, 0);
};

HeaderContext.prototype.NAME = function() {
    return this.getToken(PyONParser.NAME, 0);
};

HeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PyONParser.HeaderContext = HeaderContext;

PyONParser.prototype.header = function() {

    var localctx = new HeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PyONParser.RULE_header);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(PyONParser.START);
        this.state = 21;
        this.match(PyONParser.SPACE);
        this.state = 22;
        this.match(PyONParser.NUMBER);
        this.state = 23;
        this.match(PyONParser.SPACE);
        this.state = 24;
        localctx.name = this.match(PyONParser.NAME);
        this.state = 25;
        this.match(PyONParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ObjContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PyONParser.RULE_obj;
    return this;
}

ObjContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjContext.prototype.constructor = ObjContext;


 
ObjContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function EmptyObjectContext(parser, ctx) {
	ObjContext.call(this, parser);
    ObjContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyObjectContext.prototype = Object.create(ObjContext.prototype);
EmptyObjectContext.prototype.constructor = EmptyObjectContext;

PyONParser.EmptyObjectContext = EmptyObjectContext;

EmptyObjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitEmptyObject(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ObjectContext(parser, ctx) {
	ObjContext.call(this, parser);
    ObjContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObjectContext.prototype = Object.create(ObjContext.prototype);
ObjectContext.prototype.constructor = ObjectContext;

PyONParser.ObjectContext = ObjectContext;

ObjectContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

ObjectContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};
ObjectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitObject(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PyONParser.ObjContext = ObjContext;

PyONParser.prototype.obj = function() {

    var localctx = new ObjContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PyONParser.RULE_obj);
    var _la = 0; // Token type
    try {
        this.state = 44;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ObjectContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 27;
            this.match(PyONParser.T__0);
            this.state = 28;
            this.ws();
            this.state = 29;
            this.pair();
            this.state = 36;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PyONParser.T__1) {
                this.state = 30;
                this.match(PyONParser.T__1);
                this.state = 31;
                this.ws();
                this.state = 32;
                this.pair();
                this.state = 38;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 39;
            this.ws();
            this.state = 40;
            this.match(PyONParser.T__2);
            break;

        case 2:
            localctx = new EmptyObjectContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.match(PyONParser.T__0);
            this.state = 43;
            this.match(PyONParser.T__2);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PyONParser.RULE_pair;
    this.key = null; // Token
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

PairContext.prototype.STRING = function() {
    return this.getToken(PyONParser.STRING, 0);
};

PairContext.prototype.SPACE = function() {
    return this.getToken(PyONParser.SPACE, 0);
};

PairContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitPair(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PyONParser.PairContext = PairContext;

PyONParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PyONParser.RULE_pair);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        localctx.key = this.match(PyONParser.STRING);
        this.state = 47;
        this.match(PyONParser.T__3);
        this.state = 49;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PyONParser.SPACE) {
            this.state = 48;
            this.match(PyONParser.SPACE);
        }

        this.state = 51;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PyONParser.RULE_arr;
    return this;
}

ArrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrContext.prototype.constructor = ArrContext;


 
ArrContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ArrayContext(parser, ctx) {
	ArrContext.call(this, parser);
    ArrContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArrayContext.prototype = Object.create(ArrContext.prototype);
ArrayContext.prototype.constructor = ArrayContext;

PyONParser.ArrayContext = ArrayContext;

ArrayContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

ArrayContext.prototype.value = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValueContext);
    } else {
        return this.getTypedRuleContext(ValueContext,i);
    }
};
ArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EmptyArrayContext(parser, ctx) {
	ArrContext.call(this, parser);
    ArrContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EmptyArrayContext.prototype = Object.create(ArrContext.prototype);
EmptyArrayContext.prototype.constructor = EmptyArrayContext;

PyONParser.EmptyArrayContext = EmptyArrayContext;

EmptyArrayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitEmptyArray(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PyONParser.ArrContext = ArrContext;

PyONParser.prototype.arr = function() {

    var localctx = new ArrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PyONParser.RULE_arr);
    var _la = 0; // Token type
    try {
        this.state = 70;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            localctx = new ArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 53;
            this.match(PyONParser.T__4);
            this.state = 54;
            this.ws();
            this.state = 55;
            this.value();
            this.state = 62;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PyONParser.T__1) {
                this.state = 56;
                this.match(PyONParser.T__1);
                this.state = 57;
                this.ws();
                this.state = 58;
                this.value();
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 65;
            this.ws();
            this.state = 66;
            this.match(PyONParser.T__5);
            break;

        case 2:
            localctx = new EmptyArrayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.match(PyONParser.T__4);
            this.state = 69;
            this.match(PyONParser.T__5);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PyONParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ValueContext.prototype.obj = function() {
    return this.getTypedRuleContext(ObjContext,0);
};

ValueContext.prototype.arr = function() {
    return this.getTypedRuleContext(ArrContext,0);
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PyONParser.ValueContext = ValueContext;

PyONParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PyONParser.RULE_value);
    try {
        this.state = 75;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PyONParser.BOOL:
        case PyONParser.NONE:
        case PyONParser.NUMBER:
        case PyONParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 72;
            this.primitive();
            break;
        case PyONParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 73;
            this.obj();
            break;
        case PyONParser.T__4:
            this.enterOuterAlt(localctx, 3);
            this.state = 74;
            this.arr();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PyONParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;


 
PrimitiveContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumberContext(parser, ctx) {
	PrimitiveContext.call(this, parser);
    PrimitiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberContext.prototype = Object.create(PrimitiveContext.prototype);
NumberContext.prototype.constructor = NumberContext;

PyONParser.NumberContext = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(PyONParser.NUMBER, 0);
};
NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolContext(parser, ctx) {
	PrimitiveContext.call(this, parser);
    PrimitiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolContext.prototype = Object.create(PrimitiveContext.prototype);
BoolContext.prototype.constructor = BoolContext;

PyONParser.BoolContext = BoolContext;

BoolContext.prototype.BOOL = function() {
    return this.getToken(PyONParser.BOOL, 0);
};
BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringContext(parser, ctx) {
	PrimitiveContext.call(this, parser);
    PrimitiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringContext.prototype = Object.create(PrimitiveContext.prototype);
StringContext.prototype.constructor = StringContext;

PyONParser.StringContext = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(PyONParser.STRING, 0);
};
StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NoneContext(parser, ctx) {
	PrimitiveContext.call(this, parser);
    PrimitiveContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NoneContext.prototype = Object.create(PrimitiveContext.prototype);
NoneContext.prototype.constructor = NoneContext;

PyONParser.NoneContext = NoneContext;

NoneContext.prototype.NONE = function() {
    return this.getToken(PyONParser.NONE, 0);
};
NoneContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitNone(this);
    } else {
        return visitor.visitChildren(this);
    }
};



PyONParser.PrimitiveContext = PrimitiveContext;

PyONParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, PyONParser.RULE_primitive);
    try {
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PyONParser.STRING:
            localctx = new StringContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 77;
            this.match(PyONParser.STRING);
            break;
        case PyONParser.NUMBER:
            localctx = new NumberContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 78;
            this.match(PyONParser.NUMBER);
            break;
        case PyONParser.BOOL:
            localctx = new BoolContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 79;
            this.match(PyONParser.BOOL);
            break;
        case PyONParser.NONE:
            localctx = new NoneContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 80;
            this.match(PyONParser.NONE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PyONParser.RULE_ws;
    return this;
}

WsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WsContext.prototype.constructor = WsContext;

WsContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PyONParser.SPACE);
    } else {
        return this.getToken(PyONParser.SPACE, i);
    }
};


WsContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PyONParser.NEWLINE);
    } else {
        return this.getToken(PyONParser.NEWLINE, i);
    }
};


WsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof PyONVisitor ) {
        return visitor.visitWs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




PyONParser.WsContext = WsContext;

PyONParser.prototype.ws = function() {

    var localctx = new WsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PyONParser.RULE_ws);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PyONParser.SPACE || _la===PyONParser.NEWLINE) {
            this.state = 83;
            _la = this._input.LA(1);
            if(!(_la===PyONParser.SPACE || _la===PyONParser.NEWLINE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 88;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.PyONParser = PyONParser;
