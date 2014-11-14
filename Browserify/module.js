function Something() {

	this.someProerty = 'test';

	this.someMethod = function() {

		var self = this;

		console.log(self.someProerty);

	};

}

module.exports = Something;