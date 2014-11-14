(function() {

	var ToDoModel = Backbone.Model.extend({

		'initialize': function() {

			this.on('change', function() {
				console.log(this.get('id') + ' has changed');
			});

		},

	});

	window.ToDoModel = ToDoModel;


})()