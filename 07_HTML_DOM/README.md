## HTML DOM ##
Vamos a ver ejemplos de algunas directivas que se utilizan para enlazar variables con atributos de elementos HTML.

#### ng-disabled ####
Habilita o deshabilita un elemento HTML en función del valor de la variable indicada.
```HTML
<input type="checkbox" ng-model="deshabilitaBoton"> Deshabilitar Boton
<button ng-disabled="deshabilitaBoton">Click</button>
````

#### ng-show ####
Muestra un elemento HTML si el valor de la variable indicada es *true*.
```HTML
<input type="checkbox" ng-model="muestraBoton"> Mostrar Boton
<button ng-show="muestraBoton">Click</button>
```

#### ng-hide ####
Oculta un elemento HTML si el valor de la variable indicada es *true*.
```HTML
<input type="checkbox" ng-model="ocultaBoton"> Ocultar Boton
<button ng-show="ocultaBoton">Click</button>
```

#### ng-click ####
Ejecuta una acción al hacer click sobre el elemento HTML.
```HTML
<p>Número de clicks: {{ contador }}</p>
<button ng-click="contador = contador + 1">Click</button>
```

## Aplicación de Ejemplo ##
```HTML
<html>
<body>
<h2>HTML DOM AngularJS</h2>
<div ng-app="">
   <input type="checkbox" ng-model="deshabilitaBoton">Deshabilitar Botón
   <button ng-disabled="deshabilitaBoton">Click</button>
   <br/>
   <input type="checkbox" ng-model="muestraBoton">Mostrar Botón
   <button ng-show="muestraBoton">Click</button>
   <br/>
   <input type="checkbox" ng-model="ocultaBoton">Ocultar Botón
   <button ng-hide="ocultaBoton">Click</button>
   <br/>
   <p>Número de clicks: {{ contador }}</p>
   <button ng-click="contador = contador + 1">Click</button>
</div>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```
Puedes ver la aplicación funcionando en el siguiente enlace:
http://jsfiddle.net/Albertobeiz/jkoh2zxh/
