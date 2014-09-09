(function() {

	define([
		'jquery',
		'marilyn',
		'rivets',
	], function(
		$,
		marilyn,
		rivets
	) {

		var controller = {
			'read': function(context) {

				context.render('/view/main.template', {
					'myVariable': 'Main Page'
				}, function(output) {

					$('#content').html(output);

				});

			}
		};

		return controller;

	});

})();