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

rivets.formatters.add = function(value, format) {

	value = parseInt(value);
	format = parseInt(format);

	return value + format;

};

var modelObject = {
	'first': 'Alan',
	'last': 'James',
	'whole': function() {
		return this.first + ' ' + this.last;
	}
};

var modelArray = [{
	'first': 'Alan',
	'last': 'James',
	'whole': function() {
		return this.first + ' ' + this.last;
	}
}, {
	'first': 'Alan2',
	'last': 'James2',
	'whole': function() {
		return this.first + ' ' + this.last;
	}
}, {
	'first': 'Alan3',
	'last': 'James3',
	'whole': function() {
		return this.first + ' ' + this.last;
	}
}];

var view = rivets.bind($('body'), {
	'user': modelObject,
	'users': modelArray
});