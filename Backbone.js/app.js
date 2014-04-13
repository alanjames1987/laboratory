// classes

var routes = {};

var AppRouter = Backbone.Router.extend({
	routes : {
		'' : 'main.index',
		'test/:id' : 'test.id'
	}
});

var ToDoModel = Backbone.Model.extend({});

var ToDoView = Backbone.View.extend({
	initialize : function() {
		var html = '<p>' + this.model.get('description') + '</p>';
		$(this.el).html(html);
	}
});

// instances

// Initiate the router
var appRouter = new AppRouter();

appRouter.on('route:main.index', function(actions) {
	alert('actions');
});

appRouter.on('route:test.id', function(actions) {
	alert(actions);
});

var toDoModel = new ToDoModel({
	'id' : 1,
	'description' : 'Something',
	'status' : ''
});

var toDoView = new ToDoView({
	'model' : toDoModel
});

$('body').append(toDoView.el);

Backbone.history.start();
