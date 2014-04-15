var db = {};
db.notes = [];
db.users = [];

(function() {

	var app = $.sammy('body');
	app.use(Sammy.EJS);

	app.get('#/', function(context) {
		var self = this;
		$('#notes').empty();
	});

	app.get('#/notes', function(context) {

		// methods
		function renderNotes(notes, callback) {

			$('#notes').empty();

			async.eachSeries(db.notes, function(item, next) {

				context.render('/js/app/view/note.ejs', {
					'title' : item.title
				}, function(html) {
					$(html).appendTo('#notes');
					next();
				});

			}, function() {
				if (!!callback) {
					callback();
				}
			});

		}

		// event listeners
		var bound = _.observeOnce(db.notes, function(newArray, oldArray) {
			renderNotes(newArray, function() {
			});
		});

		if (!bound) {
			renderNotes();
		}

	});

	// start the application
	app.run('#/');

})();
