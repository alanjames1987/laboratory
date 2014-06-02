var model = Marilyn.model('something');

var viewModel = model._collection;

rivets.configure({
	handler: function(target, event, binding) {
		console.log('test');
		this.call(target, event, binding.view.models)
	}
});

rivets.bind($('#things'), {
	'list': viewModel
});