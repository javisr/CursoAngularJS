## Filtros

Como su nombre indica los filtros son usados para filtrar dato. No obstante en AngularJS también se usan los filtros para modificar datos. Se colocan en expresiones o directivas usando el caracter (|). La siguiente lista muestra los filtros más comunes:

#### Uppercase
Transforma el resumen a mayúsculas

```HTML
Nombre de la receta:<input type="text" ng-model="receta.nombre">
Ingredientes principales: <input type="text" ng-model="receta.ingredientesPrincipales">
Resumen: {{receta.resumen() | uppercase}}
```

#### Lowercase 
Transforma el resumen a minusculas

```HTML
Nombre de la receta: <input type="text" ng-model="receta.nombre">
Ingredientes principales: <input type="text" ng-model="receta.ingredientesPrincipales">
Resumen: {{receta.resumen() | lowercase}}
```

#### Currency 
Formatea el texto en un formato de moneda.

```HTML
Precio de la receta: <input type="text" ng-model="receta.precio">
Precio: {{receta.precio | currency:"€"}}
```

#### OrderBy
Ordena el array basado en criterios proporcionados.

```HTML
Ingredientes:
<ul>
  <li ng-repeat="ingrediente in receta.ingredientes | orderBy:'-cantidad'">
    {{ ingrediente.nombre + ', cantidad:' + ingrediente.cantidad }}
  </li>
</ul>
```

#### Filter
Ordena el array basado en criterios proporcionados.

```HTML
<br>Busca ingrediente: <input type="text" ng-model="receta.buscador"><br>
<ul>
  <li ng-repeat="ingrediente in receta.ingredientes | filter:receta.buscador">
    {{ ingrediente.nombre + ', cantidad:' + ingrediente.cantidad }}
  </li>
</ul>
```

## Aplicación de Ejemplo ##

```HTML
<html>
<head>
<title>Filtros AngularJS</title>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>
<h2>Filtros AngularJS</h2>
<div ng-app="app" ng-controller="recetaController">

Nombre de la receta: <input type="text" ng-model="receta.nombre"><br>
Ingredientes principales: <input type="text" ng-model="receta.ingredientesPrincipales"><br>
<br> Resumen en mayusculas: {{receta.resumen() | uppercase}}

<br> Resumen en minusculas: {{receta.resumen() | lowercase}}

<br> Precio: {{receta.precio | currency:"€"}}

<br>Ingredientes:
<ul>
  <li ng-repeat="ingrediente in receta.ingredientes | orderBy:'-cantidad'">
    {{ ingrediente.nombre + ', cantidad:' + ingrediente.cantidad }}
  </li>
</ul>

<br>Busca ingrediente: <input type="text" ng-model="receta.buscador"><br>
<ul>
  <li ng-repeat="ingrediente in receta.ingredientes | filter:receta.buscador">
    {{ ingrediente.nombre + ', cantidad:' + ingrediente.cantidad }}
  </li>
</ul>

Ordena el array basado en criterios proporcionados.

<br>Busca ingrediente: <input type="text" ng-model="receta.buscador"><br>
<ul>
  <li ng-repeat="ingrediente in receta.ingredientes | filter:receta.buscador">
    {{ ingrediente.nombre + ', cantidad:' + ingrediente.cantidad }}
  </li>
</ul>


## Aplicación de Ejemplo ##

```HTML
<html>
<head>
<title>Filtros AngularJS</title>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<body>
<h2>Filtros AngularJS</h2>
<div ng-app="app" ng-controller="recetaController">

Nombre de la receta: <input type="text" ng-model="receta.nombre"><br>
Ingredientes principales: <input type="text" ng-model="receta.ingredientesPrincipales"><br>
<br> Resumen en mayusculas: {{receta.resumen() | uppercase}}

<br> Resumen en minusculas: {{receta.resumen() | lowercase}}

<br> Precio: {{receta.precio | currency:"€"}}

<br>Ingredientes:
<ul>
  <li ng-repeat="ingrediente in receta.ingredientes | orderBy:'-cantidad'">
    {{ ingrediente.nombre + ', cantidad:' + ingrediente.cantidad }}
  </li>
</ul>

<br>Busca ingrediente: <input type="text" ng-model="receta.buscador"><br>
<ul>
  <li ng-repeat="ingrediente in receta.ingredientes | filter:receta.buscador">
    {{ ingrediente.nombre + ', cantidad:' + ingrediente.cantidad }}
  </li>
</ul>


</div>
<script type="text/javascript">

angular.module('app', [])
.controller('recetaController', ['$scope', function ($scope){
   $scope.receta = {
      nombre: "Pasta con champinones",
      precio: 1000,
      ingredientesPrincipales: 'pasta,champinones...',
      ingredientes:[
         {nombre:'Pasta',cantidad:100},
         {nombre:'Champinones',cantidad:100},
         {nombre:'Aceite',cantidad:10},
         {nombre:'Bacon',cantidad:20}
      ],
      resumen: function() {
         var recetaObj;
         recetaObj = $scope.receta;
         return " La receta " + recetaObj.nombre + " se hace con:" + recetaObj.ingredientesPrincipales;
      }
    };
}]);

</script>
</body>
</html>
```

Puedes ver la aplicación funcionando en el siguiente enlace:
http://plnkr.co/edit/9YFa4Pyku7FHZUyRgnxw?p=preview