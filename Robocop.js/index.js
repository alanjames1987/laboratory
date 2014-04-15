var robocop = require('robocop.js');

robocop.defineSchema('person', {
	name : {
		given : {
			type : 'string',
			maxLength : 255
		},
		surname : {
			type : 'string',
			maxLength : 255
		}
	},
	age : {
		type : 'number',
		max : 150,
		min : 0
	}
});

var errors = robocop.getSchema('person').validateSync({
	name : {
		given : 'John'
	},
	age : 30
});

console.log(errors);
