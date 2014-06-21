(function() {

	var ToDoView = Backbone.View.extend({

		'tagName': 'p',
		'className': 'something',

		'template': _.template('<%= description %>'),

		'initialize': function() {

			var context = this;

			_.bindAll(this, 'render');

			context.model.bind('change', context.render);

			context.render();

		},

		'render': function() {
			var html = this.template(this.model.toJSON());
			$(this.el).val(html);
		}

	});

	window.ToDoView = ToDoView;

})();