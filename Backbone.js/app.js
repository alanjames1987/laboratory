(function() {

	var AppRouter = Backbone.Router.extend({

		'routes': {
			'': 'main.index',
			'test/:id': 'test.id'
		}

	});

	// Initiate the router
	var appRouter = new AppRouter();

	appRouter.on('route:main.index', function(actions) {
		console.log('actions');
	});

	appRouter.on('route:test.id', function(actions) {
		console.log(actions);
	});

	var toDoModel = new ToDoModel({
		'id': 1,
		'description': 'Something',
		'status': ''
	});

	var toDoView = new ToDoView({
		model: toDoModel
	});

	$('body').append(toDoView.el);

	Backbone.history.start();



})();