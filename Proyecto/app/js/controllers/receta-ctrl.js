angular.module('recetarioApp')
	.controller('recetaCtrl', ['$scope', '$http', '$routeParams', '$window',

		function($scope, $http, $routeParams, $window) {
			$scope.receta = [];
			$http.get('http://javisr.net:3000/recetas/' + $routeParams.id)
				.success(function(response, status) {
					$scope.receta = response;
				})
				.error(function(data, status, headers, config) {
					console.log('Algo fue mal pidiendo la receta ' + $routeParams.id);
				});
			$scope.borrarReceta = function() {
				$http.delete('http://javisr.net:3000/recetas/' + $routeParams.id)
					.success(function(response, status) {
						$window.location.href = '/'
					})
					.error(function(data, status, headers, config) {
						console.log('Algo fue mal borrando la receta ' + $routeParams.id);
					});
			};
		}
	]);