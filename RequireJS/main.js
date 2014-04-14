requirejs.config({
	paths : {
		'jquery' : 'bower_components/jquery/jquery',
	}
});

require(['jquery', 'message'], function($, message) {

	$('body').append(message);

});
