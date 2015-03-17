## Scope ##
Scope es un tipo de objeto especial que une el controlador con la vista.

```HTML
<script>
      var miModulo = angular.module("miModulo", []);

      miModulo.controller("recetaController", function($scope) {
         $scope.titulo = "Tortilla de patata";
         $scope.ingredientes = "['huevos', 'patatas']";
      });
</script>
```

## Herencia de scopes ##
Los controladores que se encuentren dentro de un controlador padre, heredan (como prototipo) el scope de su padre.

Es muy importante entender la herencia con prototipos para evitar confusiones. 
- Si un controlador no encuentra una variable al acceder a su valor, irá a buscarla al scope padre. 
- Al asignar una variable, siempre se asignará en el scope activo, aunque la cariable no exista.
- Un caso especial es acceder y asignar variables dentro de un objeto, en este caso no se asignará en el scope hijo, ya que buscará el objeto en el padre.

```HTML
<!doctype html>
<head>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>

<div ng-app="miModulo">
  <div ng-controller='padre'>
    Padre: {{ nombre }} {{ apellidos.primero }}<br/>
    <button ng-click="nombre='Javi'"> Cambiar Nombre</button>
      <div ng-controller='hijo'>
      Hijo: {{ nombre }} {{ apellidos.primero }}<br/>
      <button ng-click="nombre='Pedro'"> Cambiar Nombre</button>
      <button ng-click="apellidos.primero='Lopez'"> Cambiar Apellido</button>
      </div>
  </div>
</div>

<script>
var miModulo = angular.module('miModulo', []);
miModulo.controller('padre', function($scope) {
  $scope.nombre = 'Alberto';
  $scope.apellidos = {
    primero: 'Perez'
  }
});

miModulo.controller('hijo', function($scope) {
});

</script>
```
http://plnkr.co/edit/tSw07CwMlTcnQVBOR46M?p=preview

