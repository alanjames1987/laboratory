var schema = require('js-schema');

var Duck = schema({
	swim : Function,
	quack : Function,
	age : Number.min(0).max(5),
	color : ['yellow', 'brown']
});

var myDuck = {
	swim : function() {
	},
	quack : function() {
	},
	age : 2,
	color : 'yellow'
};

var myCat = {
	walk : function() {
	},
	purr : function() {
	},
	age : 3,
	color : 'black'
};

console.log(Duck(myDuck));
console.log(Duck(myCat));
