## Servicios ##

Los servicios son funciones de JavaScript, que se encargan de realizar tareas específicas. Esto los convierte en entidades individuales que son fácilmente mantenible y testeables. Pueden ser utilizado en controladores, filtros y otros servicios. 

AngularJS ofrece muchos servicios incorporados como por ejemplo $http visto en el capítulo sobre AJAX.

#### Factorías

##### Creando la factoría

```JAVASCRIPT
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
      });
```

##### Usando la factoría

```JAVASCRIPT
   .controller('MatematicasController', ['$scope', 'MatematicasFactory' ,function($scope, MatematicasFactory) {
      $scope.cuadrado = function() {
            $scope.resultado = MatematicasFactory.elevador($scope.numero);
      }
   }])
```



## Aplicación de Ejemplo ##


**index.html**

```HTML
<html>
<head>
<meta charset="utf-8"> 
<title>Servicios AngularJS</title>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
<h2>Sevicios AngularJS</h2>
<div ng-app="app" ng-controller="MatematicasController">
      <p>Introduzca un número: <input type="numero" ng-model="numero" />
      <button ng-click="cuadrado()">X<sup>2</sup></button>
      <p>Resultado: {{resultado}}</p>
</div>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.js"></script>
<script src="app.js"></script>
</body>
</html>
```

**principal.html** - **concineros.html** - **recetas.html**

```HTML
{{mensaje}}
```

**app.js**

```JAVASCRIPT
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

```
Puedes ver la aplicación funcionando en el siguiente enlace:
[]()
