var fs = require('fs');

var callback = function(data){
	console.log(data);
};

var returnedValue = fs.readFile('./fileToRead.txt', 'utf8', function(err, data) {
	console.log('data: ' + data);
	callback('something')
});

