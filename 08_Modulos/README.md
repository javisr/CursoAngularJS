## Módulos ##

Un módulo es un **contenedor** de diferentes partes de una aplicación - controladores, servicios, filtros, directivas, etc...
Lo ideal es tener un módulo por **cada componente** de nuestra aplicación. 

Algunas ventajas usar módulos al programar nuestra aplicación:
- El código es más reutilizable.
- Está más ordenado.
- Y se entiende mejor.
- Facilita el testeo de la aplicación.

La directiva **ng-app** recibe un módulo que será el encargado de inicializar y configurar nuestra aplicación.

## Aplicación de ejemplo ##

```HTML
<div ng-app="miModulo">
  <div ng-controller='controlador'>
    {{ nombre | saludo }}
  </div>
</div>
```

```HTML
var miModulo = angular.module('miModulo', []);

miModulo.controller('controlador',['$scope', function($scope) {
  $scope.nombre = 'Alberto'
}]);

miModulo.filter('saludo', function() {
 return function(nombre) {
    return 'Hola, ' + nombre + '!';
  };
});
```
Puedes ver la aplicación funcionando en el siguiente link: http://plnkr.co/edit/15LYToUL93R01xI4ZjzP?p=preview

El **segundo parámetro** indica la lista de dependencias de un módulo

## Aplicación de ejemplo ##

```HTML
var miModulo = angular.module('miModulo', ['moduloDependencia']);

var moduloDependencia = angular.module('moduloDependencia', []);
moduloDependencia.controller('controlador', function($scope) {
  $scope.nombre = 'Alberto'
});

moduloDependencia.filter('saludo', function() {
 return function(nombre) {
    return 'Hola, ' + nombre + '!';
  };
});
```
Puedes ver la aplicación funcionando en el siguiente link: http://plnkr.co/edit/Rtl8b4MhUmr2K9g4rIql?p=preview
