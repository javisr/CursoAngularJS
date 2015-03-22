angular.module('recetarioApp')
	.controller('recetasListadoCtrl', ['$scope', '$http',
		function($scope, $http) {
			$http.get('http://javisr.net:3000/recetas')
				.success(function(response) {
					console.log(response);
				})
				.error(function(data, status, headers, config) {
					console.log('Algo fue mal pidiendo las recetas');
				});
		}
	]);