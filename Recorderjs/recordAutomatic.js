// (function() {

var recorder;
var recording = false;

var audioVolumes = [];
var audioContext;
var audioAnalyser;
var audioSource;

function startRecording() {

	console.log('start');

	if (recorder) {
		recording = true;
		recorder.record();
	}
}

function stopRecording() {

	console.log('stop');

	if (recorder) {

		recording = false;

		recorder.stop();

		recorder.exportWAV(function(blob) {

			var url = URL.createObjectURL(blob);

			var au = document.createElement('audio');
			au.controls = true;
			au.src = url;

			var li = document.createElement('li');
			li.appendChild(au);

			document.querySelector('#recordings').innerHTML = '';
			document.querySelector('#recordings').appendChild(li);

		});

		recorder.clear();

	}

}

function analyze() {

	requestAnimationFrame(analyze);

	var total = 0;

	var freqByteData = new Uint8Array(audioAnalyser.frequencyBinCount);
	audioAnalyser.getByteFrequencyData(freqByteData);

	for (var i = 0; i < freqByteData.length; i++) {
		total += freqByteData[i];
	}

	// remove the old volumes
	while (audioVolumes.length > 100) {
		audioVolumes.shift();
	}

	audioVolumes.push(total);

	// calculate average volume

	var averageTotal = 0;
	for (var i = 0, j = audioVolumes.length; i < j; i++) {
		averageTotal += audioVolumes[i];
	}
	var averageVolumes = averageTotal / audioVolumes.length;
	
	console.log(averageTotal);

	// calculate if a recording should be stopped or not
	if (total > 15000) {
		if (!recording) {
			startRecording();
		}
	} else {
		if (recording) {
			stopRecording();
		}
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

		analyze();

	}, function(e) {
		console.log(e);
	});

});

// })();
