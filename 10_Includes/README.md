## Includes ##
AngularJS facilita la inclusión de HTML en otras páginas mediante la directiva **ng-include**.

Los fragmentos HTML incluidos pueden acceder a las variables de un controlador declarado en un nivel superior.
```HTML
<div ng-app="" ng-controller="controller">
   <div ng-include="'header.html'"></div>
   <div ng-include="'body.html'"></div>
</div>
````

## Aplicación de Ejemplo ##
#### index.html ####
```HTML
<html>
<head>
<title>Includes AngularJS</title>
</head>
<body>
<h2>Includes AngularJS</h2>
<div ng-app="">
<div ng-app="" ng-controller="controller">
   <div ng-include="'header.htm'"></div>
   <div ng-include="'body.htm'"></div>
</div>
</div>

<script>
function controller($scope) {
   $scope.receta = {
      titulo: "Pasta con champiñones",
      ingredientes:[
         {nombre:'Pasta',cantidad:100},
         {nombre:'Champiñones',cantidad:100},
         {nombre:'Bacon',cantidad:20},
         {nombre:'Aceite',cantidad:10},
      ]
      }
   };
}
</script>

<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
</body>
</html>
```

#### header.html ####
```HTML
<div> {{ receta.titulo }}</div>
```

#### body.html ####
```HTML
<ul>
	<li ng-repeat="ingrediente in receta.ingredientes">
   	{{ ingrediente.cantidad }} gramos de {{ ingrediente.nombre }}
	</li>
</ul>
```
Puedes ver la aplicación funcionando en el siguiente enlace: