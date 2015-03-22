angular.module('recetarioApp')
	.controller('recetaCtrl', ['$scope', '$http', '$routeParams',
		function($scope, $http, $routeParams) {
			$scope.receta = [];
			$http.get('http://javisr.net:3000/recetas/' + $routeParams.id)
				.success(function(response) {
					$scope.receta = response;
				})
				.error(function(data, status, headers, config) {
					console.log('Algo fue mal pidiendo la receta ' + $routeParams.id);
				});
		}
	]);