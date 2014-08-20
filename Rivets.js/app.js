var model = Marilyn.model('something', function() {
	this.after('create', function() {

	});
});

// rivets.configure({
// 	handler: function(target, event, binding) {
// 		console.log('test');
// 		this.call(target, event, binding.view.models)
// 	}
// });

var modelTest = {
	first : 'Alan',
	last : 'James',
	whole : function() {
		return this.first + this.last
	}
};

var view = rivets.bind($('#user'), {
	'user' : modelTest
});
