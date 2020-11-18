'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {

	callback(null, {
		statusCode: 200,
		body: JSON.stringify({
			method: event.httpMethod,
			path: event.path,
		}),
	});

};