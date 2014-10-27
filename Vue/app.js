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

var view = new Vue({
	'el': 'body',
	'data': {
		'user': modelObject,
		'users': modelArray
	}
});

$('#click').click(function() {

	modelArray.push({
		'first': 'Alan4',
		'last': 'James4',
		'whole': function() {
			return this.first + ' ' + this.last;
		}
	});

});

$('#sort').sortable({
	update: function() {
		console.log(view);
	}
});