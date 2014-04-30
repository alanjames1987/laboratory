(function() {

	if (!('webkitSpeechRecognition' in window)) {

		alert('Use Chrome');

	} else {

		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;

		recognition.onstart = function() {
			console.log('onstart');
		};

		recognition.onresult = function(event) {

			var interim_transcript = '';

			for (var i = event.resultIndex; i < event.results.length; ++i) {
				
				if (event.results[i].isFinal) {
					console.log('final')
				}

				interim_transcript += event.results[i][0].transcript;

			}

			document.querySelector('#output').innerHTML = interim_transcript;


		};

		recognition.onerror = function(event) {

		};

		recognition.onend = function() {
			console.log('onend');
			this.start();
		};

		recognition.start();

	}


})();