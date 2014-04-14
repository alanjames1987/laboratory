var db = {};
db.notes = [];
db.users = [];

// TEMP
for (var i = 0, j = 5; i < j; i++) {
	db.notes.push({
		'id' : i,
		'title' : 'Test' + i
	});
}

var app = Sammy('#main', function() {
	
	this.use(Sammy.EJS);

	this.get('#/', function(context) {
		$('#notes').empty();
	});

	this.get('#/notes', function(context) {

		var self = this;

		$('#notes').empty();

		var i = 0;

		async.eachSeries(db.notes, function(note, next) {

			self.render('/views/test.ejs', {
				'title' : note.title
			}, function(html) {
				
				$(html).appendTo('#notes').delay(i * 100).fadeIn();
				
				i++;
				
				next();
				
			});

		}, function(err) {

		});

	});

});

// start the application
app.run('#/');

