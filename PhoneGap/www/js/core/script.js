// this must be a global function
function onNotificationGCM(e) {

	console.log(e.regid);
	console.log(e.event);

	if (e.hasOwnProperty('payload') && e.payload.hasOwnProperty('spoken')) {
		texttospeech.speak(e.payload.spoken);
	}

}

(function() {

	document.addEventListener('deviceready', function() {

		texttospeech.speak('device is ready');

		var pushNotification = window.plugins.pushNotification;

		if (device.platform == 'android' || device.platform == 'Android') {
			pushNotification.register(function(result) {
				$('#ready').html('success ' + result);
			}, function(error) {
				$('#ready').html('error ' + error);
			}, {
				'senderID' : '859696270174',
				'ecb' : 'onNotificationGCM'
			});
		}

		$('.ui.sidebar').sidebar({
			'overlay' : true
		});

		$('.hide').click(function() {
			$('.sidebar').sidebar('hide');
		});

		$('.show').click(function() {
			$('.sidebar').sidebar('show');
		});

		$(document).hammer({}).on('swipeleft', function(ev) {
			$('.sidebar').sidebar('hide');
		});

		$(document).hammer({}).on('swiperight', function(ev) {
			$('.sidebar').sidebar('show');
		});

	}, true);

})();
