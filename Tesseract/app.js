var Tesseract = require('tesseract.js');

Tesseract
	.recognize('./one.jpg')
	.progress(function(p) {

		// initializing api
		// recognizing text

		// console.log('progress', p);

	})
	.then(function(result) {

		console.log(result.text)

		// result.words.forEach(function(word) {

		// 	if (word.confidence > 75) {
		// 		console.log(word.text);
		// 	}

		// });

	});