'use strict';

console.log('Loading function');

const sendResponse = (statusCode, message, callback) => {

	const response = {
		statusCode: statusCode,
		body: JSON.stringify(message),
	};

	callback(null, response);

};

exports.handler = (event, context, callback) => {

	switch (event.httpMethod) {
		case 'DELETE':
			sendResponse(200, 'DELETE', callback);
			break;
		case 'GET':
			sendResponse(200, new Date(), callback);
			break;
		case 'POST':
			sendResponse(200, 'POST', callback);
			break;
		case 'PUT':
			sendResponse(200, 'PUT', callback);
			break;
		default:
			sendResponse(500, 'not supported', callback);
	}

};