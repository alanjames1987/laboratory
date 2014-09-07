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
				$('#content').html('Main Read');
			}
		};

		return controller;

	});

})();