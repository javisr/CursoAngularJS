angular.module('app', [])
   .factory('MatematicasFactory', function() {     
         var factory = {};  
         factory.multiplicador = function(a, b) {
            return a * b 
         };
         factory.elevador = function(a){
            return a * a;
         };
         return factory;
      })
   .controller('MatematicasController', ['$scope', 'MatematicasFactory' ,function($scope, MatematicasFactory) {
      $scope.cuadrado = function() {
            $scope.resultado = MatematicasFactory.elevador($scope.numero);
      }
   }]);
