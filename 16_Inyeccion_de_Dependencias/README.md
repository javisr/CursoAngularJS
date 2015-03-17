## Inyección de dependencias ##

La Inyección de dependencias es un patrón de diseño en el que lo componentes 
reciben sus dependencias como parámetros en lugar de tenerlas declaradas en su propio código.

Los siguientes componentes pueden ser inyectados en cualquier otro componente (controladores, directivas, factorias, filtros, etc):

- value
- factory
- service
- provider
- constant

Para inyectar dependencias pasamos un array con la lista de depencias y la función como último elemento. Es importante mantener sincronizados
el array y los parámetros de la función

## Aplicación de ejemplo ##

```HTML
var miApp = angular.module("miApp", []);
      
  miApp.controller('squareController',['$scope','MathService','defaultInput', 
  function($scope, MathService, defaultInput) {
        $scope.number = defaultInput;
        $scope.result = MathService.square($scope.number);
        
        $scope.square = function(number) {
          $scope.result = MathService.square($scope.number);
        }
  }]);
  
  miApp.value("defaultInput", 5);

  miApp.factory('MathService', function() {     
    var factory = {
        square: function(a) {
            return a * a; 
        }  
    };
     return factory;
  });
```

Puedes ver la aplicación funcionando en el siguiente enlace: http://plnkr.co/edit/sFinW4heRo6vHgJQIsOL?p=preview