// (function() {

var recorder;

var audioContext;
var audioAnalyser;
var audioSource;

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


$(document).ready(function() {

	try {

		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		window.URL = window.URL || window.webkitURL;

	} catch (e) {
		alert('No web audio support in this browser!');
	}

	navigator.getUserMedia({
		audio : true
	}, function(stream) {

		audioContext = new AudioContext();

		audioAnalyser = audioContext.createAnalyser();

		source = audioContext.createMediaStreamSource(stream);

		source.connect(audioAnalyser);

		recorder = new Recorder(source, {
			workerPath : 'bower_components/RecorderJS/recorderWorker.js'
		});

	}, function(e) {
		console.log(e);
	});

});

// })();
