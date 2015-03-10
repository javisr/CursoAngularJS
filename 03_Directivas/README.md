## Directivas ##
Las **directivas** de AngularJS son etiquetas especiales que **extienden** el lenguaje HTML. 

AngularJS utiliza un "Compilador HTML" que se encarga de recorrer el documento y localizar las directivas, para ejecutar aquellos comportamientos asociados a esas directivas.

AngularJS viene con una serie de directivas "de fábrica" con funcionalidades básicas pero muy potentes. Además, AngularJS permite crear **directivas propias** para dotar a tu aplicación de la funcionalidad que necesites.

Las directivas "de fábrica" comienzan siempre por **ng-**, también es posible utilizar **data-ng-** para tener HTML *válido*.

Vamos a ver el funcionamiento de algunas directivas:

#### ng-app ####
Como vimos en el capitulo anterior, *ng-app* marca el inicio de una aplicación AngularJS.
```HTML
<div ng-app="">
...
</div>
```

#### ng-init ####
La directiva *ng-init* se utiliza para asignar valores iniciales a variables de la aplicación.
```HTML
<div ng-app="" ng-init="departamentos=['Aplicaciones', 'GIS', 'Distribuciones']">
...
</div>
```

#### ng-model ####
Como ya hemos visto, *ng-model* enlaza el valor de un *input* con una variable.
```HTML
<p>Escribe tu nombre: <input type="text" ng-model="nombre"></p>
```

#### ng-repeat ####
Esta directiva repite el elemento HTML al que está asociado tantas veces como elementos tenga la colección que se le indica.
Podemos por ejemplo crear un elemento en una lista por cada uno de los departamentos definidos.
```HTML
<p>Lista de departamentos:</p>
   <ol>
      <li ng-repeat="departamento in departamentos">
         {{ departamento }}
      </li>
   </ol>
```

## Aplicación de Ejemplo ##
```HTML
<html>
<title>Directivas AngularJS</title>
<body>
<h1>Directivas AngularJS</h1>
<div ng-app="" ng-init="departamentos=['Aplicaciones', 'GIS', 'Distribuciones']">
   <p>Escribe tu nombre: <input type="text" ng-model="nombre"></p>
   <p>¡Hola <span ng-bind="nombre"></span>! </p>
   <p>Lista de departamentos:</p>
   <ol>
      <li ng-repeat="departamento in departamentos">
         {{ departamento }}
      </li>
   </ol>
</div>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
</body>
</html>
```

Puedes ver la aplicación funcionando en el siguiente enlace:

