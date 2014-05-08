var audioContect;
var recorder;
var input;

function startRecording() {
	if (recorder) {
		recorder.record();
	}
}

function stopRecording() {

	if (recorder) {

		recorder.stop();

		recorder.exportWAV(function(blob) {

			var url = URL.createObjectURL(blob);

			var au = document.createElement('audio');
			au.controls = true;
			au.src = url;

			var li = document.createElement('li');
			li.appendChild(au);

			document.querySelector('#recordings').appendChild(li);

		});

		recorder.clear();

	}

}

window.onload = function init() {

	try {
		// webkit shim
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		window.URL = window.URL || window.webkitURL;

		audioContect = new AudioContext;
	} catch (e) {
		alert('No web audio support in this browser!');
	}

	navigator.getUserMedia({
		audio : true
	}, function(stream) {

		input = audioContect.createMediaStreamSource(stream);
		input.connect(audioContect.destination);

		recorder = new Recorder(input, {
			workerPath : 'bower_components/RecorderJS/recorderWorker.js'
		});

	}, function(e) {
		console.log(e);
	});

};
