// Generated from grammar/PyON.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by PyONParser.

function PyONVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

PyONVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
PyONVisitor.prototype.constructor = PyONVisitor;

// Visit a parse tree produced by PyONParser#pyon.
PyONVisitor.prototype.visitPyon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#header.
PyONVisitor.prototype.visitHeader = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#Object.
PyONVisitor.prototype.visitObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#EmptyObject.
PyONVisitor.prototype.visitEmptyObject = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#pair.
PyONVisitor.prototype.visitPair = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#Array.
PyONVisitor.prototype.visitArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#EmptyArray.
PyONVisitor.prototype.visitEmptyArray = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#value.
PyONVisitor.prototype.visitValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#String.
PyONVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#Number.
PyONVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#Bool.
PyONVisitor.prototype.visitBool = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#None.
PyONVisitor.prototype.visitNone = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by PyONParser#ws.
PyONVisitor.prototype.visitWs = function(ctx) {
  return this.visitChildren(ctx);
};



exports.PyONVisitor = PyONVisitor;