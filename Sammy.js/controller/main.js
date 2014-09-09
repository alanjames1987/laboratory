(function() {

	var app = Sammy.apps.body;

	app.get('#/', function(context) {

		console.log("You're in the Main route");

		context.render('/view/main.template', {
			'myVariable': 'Some value'
		}, function(output) {
			$('#container').html(output);
		});

	});

})();