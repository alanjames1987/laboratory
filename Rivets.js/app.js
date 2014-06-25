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

var modelTest = [{
	name: '1',
}, {
	name: '2',
}, {
	name: '3',
}];

var view = rivets.bind($('#things'), {
	'list': modelTest
});

$('#things').sortable({
	update: function(event, ui) {
		view.publish();
		for (var i = 0, j = modelTest.length; i < j; i++) {
			console.log(modelTest[i].name);
		}
	}
});