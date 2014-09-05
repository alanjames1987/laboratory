requirejs.config({
	paths : {
		'jquery' : 'bower_components/jquery/jquery',
		'marilyn' : 'bower_components/marilyn/lib/marilyn',
	}
});

require(['jquery', 'marilyn', 'message'], function($, marilyn, message) {

	$('body').append(message);

	console.log(marilyn);

});
