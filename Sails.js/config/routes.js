module.exports.routes = {
	'get /' : {
		controller : 'main',
		action : 'index'
	},
	'get /chat' : {
		controller : 'main',
		action : 'chat'
	},
	'post /signup' : {
		controller : 'main',
		action : 'signup'
	},
	'post /signin' : {
		controller : 'main',
		action : 'signin'
	}
};
