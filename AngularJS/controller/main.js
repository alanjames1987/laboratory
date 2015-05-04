(function(angular) {

	var app = angular.module('myApp');

	app.controller('SomethingController', ['$scope', function($scope) {

		$scope.something = 'Some Name';

		$scope.list = [{
			name: 'Alan James'
		}, {
			name: 'Alan James 2'
		}, {
			name: 'Alan James 3'
		}, {
			name: 'Alan James 4'
		}, {
			name: 'Alan James 5'
		}];

		$scope.changeIt = function() {
			$scope.list.push({
				name: 'Something'
			});
		};

		$scope.readIt = function() {
			console.log($scope.list);
		};

	}]);

})(angular);