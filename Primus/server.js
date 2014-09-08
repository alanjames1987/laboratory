var express = require('express');
var http = require('http');
var Primus = require('primus');

var expressServer = express();
var httpServer = http.createServer(expressServer);
var primusServer = new Primus(httpServer);

expressServer.get('/', function(req, res) {
	res.sendfile('index.html');
});

expressServer.get('/app.js', function(req, res) {
	res.sendfile('app.js');
});

primusServer.on('connection', function connection(spark) {

	console.log('connection');

	spark.on('data', function received(data) {
		console.log(data);
		spark.write(data);
	});

});

httpServer.listen(3000, function() {
	console.log('Express server listening on port 3000 and process ' + process.pid);
});