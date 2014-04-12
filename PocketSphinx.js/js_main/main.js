var recognition;

var recognizer;
var recorder;
var callbackManager;
var audioContext;

// Only when both recorder and recognizer are ready do we have a ready application
// I'm keeping these so I can use them with other applications
var recorderReady = false;
var recognizerReady = false;

var keywordIndicator = document.getElementById('recording_indicator');

// TEMP
var outputContainer;

// the phones we want to detect
var wordList = [['CASSADEE', 'AH S AH D IY'], ['CASSADEE(2)', 'AH S AH D'], ['CASSADEE(3)', 'AH S'], ['CASSADEE(4)', 'AE S AH D IY'], ['CASSADEE(5)', 'AE S AH D'], ['CASSADEE(6)', 'AE S'], ['NULL', 'AA'], ['NULL(2)', 'AE'], ['NULL(3)', 'AH'], ['NULL(4)', 'AO'], ['NULL(5)', 'AW'], ['NULL(6)', 'AY'], ['NULL(7)', 'B'], ['NULL(8))', 'CH'], ['NULL(9)', 'D'], ['NULL(10)', 'DH'], ['NULL(11)', 'EH'], ['NULL(12)', 'ER'], ['NULL(13)', 'EY'], ['NULL(14)', 'F'], ['NULL(15)', 'G'], ['NULL(16)', 'HH'], ['NULL(17)', 'IH'], ['NULL(18)', 'IY'], ['NULL(19)', 'JH'], ['NULL(20)', 'K'], ['NULL(21)', 'L'], ['NULL(22)', 'M'], ['NULL(23)', 'N'], ['NULL(24)', 'NG'], ['NULL(25)', 'OW'], ['NULL(26)', 'OY'], ['NULL(27)', 'P'], ['NULL(28)', 'R'], ['NULL(29)', 'S'], ['NULL(30)', 'SH'], ['NULL(31)', 'T'], ['NULL(32)', 'TH'], ['NULL(33)', 'UH'], ['NULL(34)', 'UW'], ['NULL(35)', 'V'], ['NULL(36)', 'W'], ['NULL(37)', 'Y'], ['NULL(38)', 'Z'], ['NULL(39)', 'ZH']];

var grammars = [{
	g : {
		numStates : 1,
		start : 0,
		end : 0,
		transitions : [{
			from : 0,
			to : 0,
			word : 'CASSADEE'
		}, {
			from : 0,
			to : 0,
			word : 'NULL'
		}]
	}
}];

// When the page is loaded we spawn a new recognizer worker and call getUserMedia to request access to the microphone
window.onload = function() {

	recognition = new webkitSpeechRecognition();
	recognition.lang = "en";

	recognizer = new Worker('js/recognizer.js');

	callbackManager = new CallbackManager();

	// TEMP
	outputContainer = document.getElementById("output");
	// document.getElementById('start_button').onclick = startRecording;

	// initialize Web Audio variables
	try {

		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
		window.URL = window.URL || window.webkitURL;

		audioContext = new AudioContext();

	} catch (e) {
		// report incompatible browser
	}

	if (navigator.getUserMedia) {

		navigator.getUserMedia({
			audio : true
		}, function(stream) {

			var input = audioContext.createMediaStreamSource(stream);

			var audioRecorderConfig = {
				errorCallback : function(x) {
				}
			};

			recorder = new AudioRecorder(input, audioRecorderConfig);

			// If a recognizer is ready we pass it to the recorder
			if (recognizer) {
				recorder.consumers = [recognizer];
			}

			recorderReady = true;

		}, function(e) {

		});

	}

	recognition.onstart = function(e) {
		console.log("recognition started");
	};

	recognition.onresult = function(event) {

		// stop the full sentece detector
		recognition.stop();

		// start the keywork detector
		recorder.start(0);

		for (var i = event.resultIndex; i < event.results.length; ++i) {
			console.log(event.results[i][0].transcript);
		}

	};

	recognition.onend = function(e) {
		console.log("recognition ended");
	};

	recognizer.onmessage = function() {

		// I need this nested event listener because the first time a message is triggered we need to trigger other things that we never need to trigger again
		recognizer.onmessage = function(e) {

			// if an id to be used with the callback manager
			// this is needed to start the listening
			if (e.data.hasOwnProperty('id')) {

				var data = {};

				if (e.data.hasOwnProperty('data')) {
					data = e.data.data;
				}

				var callback = callbackManager.get(e.data['id']);

				if (callback) {
					callback(data);
				}

			}

			// if a new hypothesis has been created
			if (e.data.hasOwnProperty('hyp')) {

				// Keyword detector
				if (e.data.hyp.slice(-4) == 'ADEE') {

					console.log('detected');

					try {
						// stop the keywork detector
						recorder.stop();

						// start the full sentece detector
						recognition.start();
					} catch(e) {

					}

				}

				var hypothesis = e.data.hyp;

				if (outputContainer) {
					outputContainer.innerHTML = hypothesis;
				}

			}

			// if an error occured
			if (e.data.hasOwnProperty('status') && (e.data.status == "error")) {

			}

		};

		// Once the worker is fully loaded, we can call the initialize function
		// You can pass parameters to the recognizer, such as : {command: 'initialize', data: [["-hmm", "my_model"], ["-fwdflat", "no"]]}
		postRecognizerJob({
			command : 'initialize'
		}, function() {

			if (recorder) {
				recorder.consumers = [recognizer];
			}

			postRecognizerJob({
				command : 'addWords',
				data : wordList
			}, function() {
				feedGrammar(grammars, 0);

				startRecording();

			});

		});

	};
	recognizer.postMessage('');

};

function postRecognizerJob(message, callback) {

	var msg = message || {};

	if (callbackManager) {
		msg.callbackId = callbackManager.add(callback);
	}

	if (recognizer) {
		recognizer.postMessage(msg);
	}

}

function feedGrammar(g, index, id) {

	if (index < g.length) {

		postRecognizerJob({
			command : 'addGrammar',
			data : g[index].g
		}, function(id) {
			feedGrammar(grammars, index + 1, {
				id : id
			});
		});

	} else {
		recognizerReady = true;
	}

}

// This starts recording. We first need to get the id of the grammar to use
function startRecording() {
	if (recorder && recorder.start(0)) {
		keywordIndicator.style.display = 'block';
	}
}

