## Controladores 
AngularJS se basa principalmente en los controladores para controlar el flujo de datos en la aplicación. Un controlador se asocia al HTML utilizando la directiva ng-controlador o bien mediante código JavaScript como veremos más adelante.

Lo normal es que los controladores estén definidos en los módulos. Sin embargo para no ir muy deprisa por ahora lo estudiaremos con un pequeño ejemplo

#### Asignación de un controlador al HTML

Para asociar un elemento HTML a un controlador de angular tenemos que usar la directiva ng-controller.

```HTML
<div ng-app="" ng-controller="cocheController">
...
</div>
```

#### Defición de un controlador
```HTML
<script>
function cocheController($scope) {
   $scope.coche = {
      marca: "Renault",
      modelo: "Megane GT",
      matricula: "1234-QWE"
      tuCocheEs: function() {
         var cocheObj;
         studentObject = $scope.coche;
         return cocheObj.marca + " " + cocheObj.modelo + " con matrícula" + cocheObj.matricula;
      }
   };
}
</script>
```

La función cocheController se define como un objeto JavaScript que recibe $scope como parámetro.

$scope es el objeto JavaScript de la vista. Angular crea uno para cada controlardor.

Dentro de $scope hemos definido una propiedad coche

A su vez, coche contiene otras tres propiedades a las que les pasaremos datos desde el HTML y un método que devolverá una cadena con los valores de los tres metodos.

#### Representando los datos

Ahora podemos usar las propiedades de coche así como de cualquier otra propiedad que hubiese sido definida en el $scope. En este caso:

```HTML
<div ng-app="" ng-controller="cocheController">

¿Qué marca de tu coche?: <input type="text" ng-model="coche.marca"><br>
¿y el modelo?: <input type="text" ng-model="coche.modelo"><br>
¿y la matrícula?: <input type="text" ng-model="coche.matricula"><br>
<br>
Tu coche es: {{coche.tuCocheEs()}}
</div>
```

## Aplicación de Ejemplo ##

```HTML
<html>
<head>
<title>Controlador AngularJS</title>
</head>
<body>
<h2>Controlador AngularJS</h2>
<div ng-app="" ng-controller="cocheController">

¿Qué marca de tu coche?: <input type="text" ng-model="coche.marca"><br>
¿y el modelo?: <input type="text" ng-model="coche.modelo"><br>
¿y la matrícula?: <input type="text" ng-model="coche.matricula"><br>
<br>
Tu coche es: {{coche.tuCocheEs()}}

</div>

<script>
function cocheController($scope) {
   $scope.coche = {
      marca: "Renault",
      modelo: "Megane GT",
      matricula: "1234-QWE"
      tuCocheEs: function() {
         var cocheObj;
         studentObject = $scope.coche;
         return cocheObj.marca + " " + cocheObj.modelo + " con matrícula" + cocheObj.matricula;
      }
   };
}
</script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
</body>
</html>
```