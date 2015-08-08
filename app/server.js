#!/usr/local/bin/node
var serveStatic = require('serve-static');
var finalHandler = require('finalhandler');
var http = require('http');
var serve = serveStatic('.', {'index': ['index.html']});

var port = process.env.PORT || 9000;

var server = http.createServer(function(req, res){
  var done = finalHandler(req,res);
  serve(req, res, done);
})

server.listen(port);
