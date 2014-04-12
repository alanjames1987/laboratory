// classes

var ToDoModel = Backbone.Model.extend({});

var ToDoView = Backbone.View.extend({
	render : function() {
		var html = '<p>' + this.model.get('description') + '</p>';
		$(this.el).html(html);
		return this;
	}
});

// instances

var toDoModel = new ToDoModel({
	'id' : 1,
	'description' : 'Something',
	'status' : ''
});

var toDoView = new ToDoView({
	'model' : toDoModel
}).render();

$('body').append(toDoView.el);
