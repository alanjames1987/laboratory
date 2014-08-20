(function(angular) {

	var app = angular.module('myApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute'
	]);

	app.config(['$routeProvider',

		function($routeProvider) {

			$routeProvider.when('/', {
				templateUrl: '/view/main.html',
				controller: 'SomethingController'
			});

			$routeProvider.otherwise({
				redirectTo: '/things'
			});

		}

	]);

})(angular);