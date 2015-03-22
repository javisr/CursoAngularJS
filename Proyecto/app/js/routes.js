(function() {
	'use strict';
	angular.module('recetarioApp').config(['$routeProvider',
		function($routeProvider) {
			$routeProvider.
			when('/', {
				redirectTo: '/recetas'
			}).
			when('/recetas', {
				templateUrl: 'partials/pages/listado-recetas.html',
				controller: 'recetasListadoCtrl'
			}).
			when('/recetas/:id', {
				templateUrl: 'partials/pages/receta.html',
				controller: 'recetaCtrl'
			}).
			otherwise({
				redirectTo: '/recetas'
			});
		}
	]);
})();