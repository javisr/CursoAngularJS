## AJAX ##


**$http** es el servicio AngularJS nos proporciona para manejar las peticiones HTTP y comunicarnos así con el servidor. Los datos que enviemos y recibamos deberan estar en **formato JSON**. 
El servicio $http tiene varios métodos que corresponden a las distintas operaciones del protocolo HTTP. A contunación veremos los más importates:

#### $http.get() ####
La función GET usa para traer leer datos del servidor

```HTML
$http.get('/urlCualquiera').
  success(function(response) {
    // Esta función será llamada de forma asincrona
    // cuando la respuesta esté disponible
  }).
  error(function(data, status, headers, config) {
    // Esta función será llamada de forma asincrona
    // cuando la respuesta sea erronea
  });
```

#### $http.post() ####
La función POST envíar/crear datos al servidor

```HTML
$http.post('/urlCualquiera', {msg:'hola!'}).
  success(function(response) {
    // Esta función será llamada de forma asincrona
    // cuando la respuesta esté disponible
  }).
  error(function(data, status, headers, config) {
    // Esta función será llamada de forma asincrona
    // cuando la respuesta sea erronea
  });
```

Otros metodos que que tiene $http que también son muy importante son los correspondientes a las operaciones PUT y DELETE.

## Aplicación de Ejemplo ##

recetasDisponibles.json

```JSON
[
{
"nombre" : 	"Pollo con patatas",
"precio" : 107
},
{
"nombre" : 	"Cerdo agridulce",
"precio" : 120
},
{
"nombre" : 	"Solomillo",
"precio" : 105
},
{
"nombre" : 	"Gazpacho",
"precio" : 108
}
]
```

ejemplo_ajax.html

```HTML
<html>
<head>
<title>AJAX AngularJS</title>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>
<h2>AJAX AngularJS</h2>
<div ng-app="app" ng-controller="recetaController">

<button type="button" ng-click="cargarRecetasDisponibles()">Cargar</button>

   <p>Lista de recetas:</p>
   <ol>
      <li ng-repeat="receta in recetas">
         {{ receta.nombre + '. precio: ' + receta.precio + ' euros'}} 
      </li>
   </ol>

</div>
<script type="text/javascript">

angular.module('app', [])
.controller('recetaController', ['$scope', '$http', function ($scope, $http){
    $scope.recetas = [];
    $scope.cargarRecetasDisponibles = function(){
      $http.get('/recetasDisponibles.json')
        .success(function(response) {
          $scope.recetas = response;
  
        })
        .error(function(data) {
          console.log();
        });
    };
}]);

</script>
</body>
</html>

```

Puedes ver la aplicación funcionando en el siguiente enlace:
[http://plnkr.co/edit/JWQCucrXn9eUbPucgid4?p=preview](http://plnkr.co/edit/JWQCucrXn9eUbPucgid4?p=preview)
