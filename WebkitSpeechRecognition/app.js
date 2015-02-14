(function() {

	if (!('webkitSpeechRecognition' in window)) {

		alert('Use Chrome');

	} else {

		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;

		// events are listed in order of when they are called

		recognition.onstart = function(event) {
			console.log('onstart');
			// console.log(event);
		};

		recognition.onaudiostart = function(event) {
			console.log('onaudiostart');
			// console.log(event);
		};

		recognition.onsoundstart = function(event) {
			console.log('onsoundstart');
			// console.log(event);
		};

		recognition.onspeechstart = function(event) {
			console.log('onspeechstart');
			// console.log(event);
		};

		recognition.onresult = function(event) {

			console.log('onresult');
			// console.log(event);

			var result = '';

			for (var i = event.resultIndex; i < event.results.length; ++i) {

				if (event.results[i].isFinal) {
					console.log('final')
				}

				result += event.results[i][0].transcript;

			}

			document.querySelector('#output').innerHTML = result;

		};

		recognition.onspeechend = function(event) {
			console.log('onspeechend');
			// console.log(event);
		};
		recognition.onsoundend = function(event) {
			console.log('onsoundend');
			// console.log(event);
		};

		recognition.onaudioend = function(event) {
			console.log('onaudioend');
			// console.log(event);
		};

		recognition.onend = function(event) {
			console.log('onend');
			// console.log(event);
			this.start();
		};

		// these may be called at any time

		recognition.onerror = function(event) {
			console.log('onerror');
			// console.log(event);
		};

		recognition.onnomatch = function(event) {
			console.log('onnomatch');
			// console.log(event);
		};

		recognition.start();

	}

})();