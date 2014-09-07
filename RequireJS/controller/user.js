(function() {

	define([
		'jquery',
		'marilyn',
	], function(
		$,
		marilyn
	) {

		var controller = {
			'read': function(context) {

				$('#content').html('User Read');

				var userModel = marilyn.model('user');

				userModel.someMethod();

			}
		};

		return controller;

	});

})();