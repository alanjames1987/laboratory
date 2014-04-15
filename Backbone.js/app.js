// classes

var AppRouter = Backbone.Router.extend({
	routes : {
		'' : 'main.index',
		'test/:id' : 'test.id'
	}
});

var ToDoModel = Backbone.Model.extend({});

var ToDoView = Backbone.View.extend({
	tagName : 'p',
	template : _.template('<%= description %>'),
	initialize : function(data) {
		var html = this.template(data.toJSON());
		$(this.el).html(html);
	}
});

// instances

// Initiate the router
var appRouter = new AppRouter();

appRouter.on('route:main.index', function(actions) {
	console.log('actions');
});

appRouter.on('route:test.id', function(actions) {
	console.log(actions);
});

var toDoModel = new ToDoModel({
	'id' : 1,
	'description' : 'Something',
	'status' : ''
});

var toDoView = new ToDoView(toDoModel);

$('body').append(toDoView.el);

Backbone.history.start();
