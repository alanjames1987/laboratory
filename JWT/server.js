ROOT = __dirname;
BACKEND = ROOT;
FRONTEND = ROOT;

var express = require('express');
var jwt = require('express-jwt');

var app = express();

app.use(jwt({
	secret: 'shhhhhhared-secret',
	getToken: function(req) {
		return 'test'
	}
}));


app.get('/test', function(req, res) {
	res.send('g test');
});

app.post('/test', function(req, res) {
	res.send('p test');
});

app.get('/', function(req, res) {

	res.sendfile('/index.html', {
		'root': FRONTEND
	});

});

app.listen(3000);