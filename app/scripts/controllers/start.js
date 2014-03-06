'use strict';

var URL = 'https://instagram.com/oauth/authorize/?client_id=ffd1d6cdcbc749b7a8a8490aa6e5a5b7&redirect_uri=https%3a%2f%2fgithub%2ecom%2fmiyaryj%2fmoments&response_type=token';

angular.module('momentsApp')
	.controller('StartCtrl', function($scope, $http) {
		console.log('I am StartCtrl');

		$scope.auth = function() {
			window.location.href = URL;
		}
	});