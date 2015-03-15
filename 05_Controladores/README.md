## Controladores 
AngularJS se basa principalmente en los controladores para controlar el flujo de datos en la aplicación. Un controlador se asocia al HTML utilizando la directiva ng-controlador o bien mediante código JavaScript como veremos más adelante.

#### Asignación de un controlador al HTML

Para asociar un elemento HTML a un controlador de angular tenemos que usar la directiva ng-controller.

```HTML
<div ng-app="" ng-controller="recetaController">
...
</div>
```

#### Defición de un controlador
```HTML
<script>
angular.module('app', [])
.controller('recetaController', ['$scope', function ($scope){
   $scope.receta = {
      nombre: "Pasta con champinones",
      ingredientesPrincipales: 'pasta,champinones...',
      resumen: function() {
         var recetaObj;
         recetaObj = $scope.receta;
         return " La receta " + recetaObj.nombre + " se hace con: " + recetaObj.ingredientesPrincipales;
      }
    };
}]);
</script>
```
El controlador recetaController se define a través de la función controller del módulo app y recibe $scope como parámetro.

$scope es el objeto JavaScript de la vista.

Dentro de $scope hemos definido una propiedad receta

A su vez, receta contiene otras dos propiedades a las que les pasaremos datos desde el HTML y un método que devolverá una cadena con los valores de los dos.

#### Representando los datos

Ahora podemos usar las propiedades de receta así como de cualquier otra propiedad que hubiese sido definida en el $scope. En este caso:

```HTML
<div ng-app="" ng-controller="recetaController">

Nombre de la receta: <input type="text" ng-model="receta.nombre"><br>
Ingredientes principales: <input type="text" ng-model="receta.ingredientesPrincipales"><br>
<br>
{{receta.resumen()}}
</div>
```

## Aplicación de Ejemplo ##

```HTML
<html>
<head>
    <meta charset="utf-8">
   <title>Controlador AngularJS</title>
   <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
   <h2>Controlador AngularJS</h2>
   <div ng-app="app" ng-controller="recetaController">

      Nombre de la receta: <input type="text" ng-model="receta.nombre"><br>
      Ingredientes principales: <input type="text" ng-model="receta.ingredientesPrincipales"><br>
      
      <br>{{receta.resumen()}}

   </div>

<script>
angular.module('app', [])
.controller('recetaController', ['$scope', function ($scope){
   $scope.receta = {
      nombre: "Pasta con champinones",
      ingredientesPrincipales: 'pasta,champinones...',
      resumen: function() {
         var recetaObj;
         recetaObj = $scope.receta;
         return " La receta " + recetaObj.nombre + " se hace con: " + recetaObj.ingredientesPrincipales;
      }
    };
}]);
</script>
</body>
</html>
```

Puedes ver la aplicación funcionando en el siguiente enlace:
[http://plnkr.co/edit/gAXLTiSYDU1XmEDq5Xgy?p=preview](http://plnkr.co/edit/gAXLTiSYDU1XmEDq5Xgy?p=preview)