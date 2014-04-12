var ToDoModel = Backbone.Model.extend({});

var toDoModel = new ToDoModel({
	'id' : 1,
	'description' : 'Something',
	'status' : ''
});

var ToDoView = Backbone.View.extend({
	render : function() {
		var html = '<p>' + this.model.get('description') + '</p>';
		$(this.el).html(html);
	}
});

var toDoView = new ToDoView({
	'model' : toDoModel
});

toDoView.render();

console.log(toDoView.el);
