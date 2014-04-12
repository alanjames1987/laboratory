var gcm = require('node-gcm');

var sender = new gcm.Sender('AIzaSyDiJu7dahonfwkceWNlmsTNWsbyeZ1o-_M');

var message = new gcm.Message({
	'data' : {
		'spoken' : process.argv[2]
	}
});

sender.send(message, ['APA91bFyCpTtBhP_kZ68e9HG6vjlUWfmFbmMfsE5BuFUL9-hC-5TQCJ6rkDagRZpVJj1snj3PO9j-7NLgDJDCf9vwdXWenq1PBJ5vqBzvZGqzsIZaDqHFKfytcb1I8dP210hw07t5gs_bvEUvIgZ22G3w1nMnXYDB0EIubRHTDFMkik_RoDd3as'], 4, function(err, result) {
	console.log(result);
});
