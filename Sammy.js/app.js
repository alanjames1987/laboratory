var underscoreDB = {};
underscoreDB.notes = [];
underscoreDB.users = {};

for (var i = 0, j = 5; i < j; i++) {
	underscoreDB.notes.push({
		title : 'Test' + i
	});
}

var app = Sammy('#main', function() {

	this.use(Sammy.EJS);

	this.get('#/', function(context) {
		console.log('1');
	});

	this.get('#/test', function(context) {

		var self = this;

		async.eachSeries(underscoreDB.notes, function(item, next) {

			self.render('/views/test.ejs', {
				title : item.title
			}, function(html) {
				$('#main').append(html);
				next();
			});

		}, function(err) {

		});

	});

});

// start the application
app.run('#/');

