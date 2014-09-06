define(function() {

	require([
		'marilyn'
	], function(
		marilyn
	) {

		marilyn.model('user', function(){

			this.someMethod = function(){
				var sum = 2 + 2;
				console.log('test');
			};

		});

	});

});