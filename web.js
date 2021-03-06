var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var infile = 'index.html';
var buffer = fs.readFileSync(infile);
var newbuf = buffer.toString('utf-8');
app.get('/', function(request, response) {
  response.send(newbuf);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
