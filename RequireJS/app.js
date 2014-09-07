(function() {

	require.config({
		// 'baseUrl' : '/',
		'paths': {
			'jquery': 'bower_components/jquery/jquery',
			'marilyn': 'bower_components/marilyn/lib/marilyn',
			'rivets': 'bower_components/rivets/dist/rivets',
			'sammy': 'bower_components/sammy/lib/sammy',
			'sammyTemplate': 'bower_components/sammy/lib/plugins/sammy.template',
			'underscore': 'bower_components/underscore/underscore',
		}
	});

	require([

		'rivets',
		'sammy',

		'sammyTemplate',

		'model/user',

		'controller/main',
		'controller/user',

	], function(

		rivets,
		sammy,

		sammyTemplate,

		userModel,

		mainController,
		userController

	) {

		var app = sammy('body');

		app.use(sammyTemplate);

		app.get('#/', mainController.read);

		app.get('#/user', userController.read);

		app.run('#/');

	});

})();