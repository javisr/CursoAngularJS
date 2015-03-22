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
			}).
			otherwise({
				redirectTo: '/recetas'
			});
		}
	]);
})();