var modelObject = {
	'first': 'Alan',
	'last': 'James',
	'whole': function() {
		return this.first + ' ' + this.last;
	}
};

var modelArray = [{
	'id': 1,
	'first': 'Alan',
	'last': 'James',
	'whole': function() {
		return this.first + ' ' + this.last;
	}
}, {
	'id': 2,
	'first': 'Alan2',
	'last': 'James2',
	'whole': function() {
		return this.first + ' ' + this.last;
	}
}, {
	'id': 3,
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

var id = modelArray.length;

$('#click').click(function() {

	id++;

	modelArray.push({
		'id': id,
		'first': 'Alan' + id,
		'last': 'James' + id,
		'whole': function() {
			return this.first + ' ' + this.last;
		}
	});

});

$('#sort').sortable({

	update: function() {

		var sortedIds = $('#sort').sortable('toArray');

		var newArr = sortedIds.map(function(id) {
			return _.find(modelArray, function(item) {
				return item.id == id;
			});
		});

		while (modelArray.length > 0) {
			modelArray.pop();
		}

		for (var i = 0, j = newArr.length; i < j; i++) {
			modelArray.push(newArr[i]);
		}

	}

});