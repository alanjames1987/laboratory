'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {

	console.log(event)

	callback(null, {
		statusCode: 200,
		body: event.httpMethod,
	});

};