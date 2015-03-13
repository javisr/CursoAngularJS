## Vistas ##

En AngularJS las vistas son una parte muy importe ya que nos permiten modularizar nuestro HTML en varios archivos. Para ellos AngularJS proporciona la directiva ng-view así como el servicio $routeProvider.

#### $routeProvider
El servicio $routeProvider es quien nos permite crear las rutas. Depende del módulo ngRounte por lo que éste debe de estar instalado y pasado al módulo. 

```HTML
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.js"></script>
```

* Para definir una ruta usamos el método when()
* En caso de que ninguna de las rutas definidas con when() coincidan con la URL, $routeProvider ejecutará la función otherwise()

En el siguiente ejemplo definimos 3 rutas. A cada una de ellas le asociamos un controlador y una vista HTML propia. Por defecto cualquier petición que no coincida con las rutas establecidas mostrará la página principal.

```JAVASCRIPT
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
```
#### ngView

La directiva ngView indica el lugar donde se va a injectar el html de las vistas que definimos en las rutas anteriores.

```HTML
 <div ng-view></div>
```

#### Plantillas en Directivas

Al igual que cuando se definen las rutas, las directivas custom también tienen un atributo donde podemos indicarles una plantilla HTML

## Aplicación de Ejemplo ##


**index.html**

```HTML
<html>
<head>
<meta charset="utf-8"> 
<title>Vistas AngularJS</title>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
<h2>Vistas AngularJS</h2>
<div ng-app="app">
  <ul> 
    <li><a href="#/">Inicio</a></li>
    <li><a href="#/recetas">Recetas</a></li>
    <li><a href="#/cocineros">Cocineros</a></li>      
  </ul> 
 <div ng-view></div>
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
```
Puedes ver la aplicación funcionando en el siguiente enlace:
[http://plnkr.co/edit/PhNM6MTH76fooibCGWAT?p=preview](http://plnkr.co/edit/PhNM6MTH76fooibCGWAT?p=preview)
