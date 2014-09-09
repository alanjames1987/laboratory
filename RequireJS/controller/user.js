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

		var userModel = marilyn.model('user');

		var controller = {
			'read': function(context) {

				var users = [];

				userModel.read({
					'__id': 1
				}, function(err, results) {
					users = results;
				});

				context.render('/view/user.template', {
					'myVariable': 'User Page'
				}, function(output) {

					$('#content').html(output);

					$('#create').click(function() {

						userModel.create({
							'name': 'Alan James' + users.length
						});

					});

					rivets.bind($('body'), {
						'users': users,
					});

				});

			}
		};

		return controller;

	});

})();