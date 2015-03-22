angular.module('recetarioApp')
	.controller('nuevaRecetaCtrl', ['$scope', '$http', '$window',

		function($scope, $http, $window) {
			$scope.receta = {};
			$scope.receta.ingredientes = [];
			$scope.ingrediente = {
				nombre: '',
				cantidad: ''
			};
			$scope.ingredientesInsertados = [];
			$scope.insertarReceta = function() {
				if ($scope.receta && $scope.receta.ingredientes.length > 0 && $scope.receta.nombre && $scope.receta.descripcion && $scope.receta.precio) {
					$http.post('http://javisr.net:3000/recetas', $scope.receta)
						.success(function(response) {
							$window.location.href = '#/recetas/' + response.id;
						})
						.error(function(data, status, headers, config) {
							console.log('No se insetaron los datos');
						});
				} else {
					console.log('faltan datos');
				}
			};
			$scope.insertarIngrediente = function() {
				if ($scope.ingrediente.nombre && $scope.ingrediente.cantidad) {
					var ingredienteTemporal = angular.copy($scope.ingrediente);
					if ($scope.ingredientesInsertados.indexOf(ingredienteTemporal.nombre) < 0) {
						$scope.ingredientesInsertados.push(ingredienteTemporal.nombre);
						$scope.receta.ingredientes.push(ingredienteTemporal);
					}
				}
			};
			$scope.borrarIngrediente = function() {
				console.log('borrarIngrediente');
			};
		}
	]);