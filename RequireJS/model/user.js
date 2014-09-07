(function() {

	define([
		'marilyn',
	], function(
		marilyn
	) {

		marilyn.model('user', function() {

			this.someMethod = function() {
				var sum = 2 + 2;
				return sum;
			};

		});

	});

})();