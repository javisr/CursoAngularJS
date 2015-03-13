angular.module('app', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
      when('/', {
        templateUrl: 'principal.html',
        controller: 'controlladorPrincipal'
      }).
      when('/recetas', {
        templateUrl: 'recetas.html',
        controller: 'controlladorRecetas'
      }).
      when('/cocineros', {
        templateUrl: 'cocineros.html',
        controller: 'controlladorCocineros'
      }).
      otherwise({
        redirectTo: '/principal'
      });
    }
  ])
  .controller('controlladorPrincipal', ['$scope', function($scope) {
    $scope.mensaje = 'Estas en la página principal';
  }])
  .controller('controlladorRecetas', ['$scope', function($scope) {
    $scope.mensaje = 'Estas en la sección de recetas';
  }])
  .controller('controlladorCocineros', ['$scope', function($scope) {
    $scope.mensaje = 'Estas en la sección de cocineros';
  }]);