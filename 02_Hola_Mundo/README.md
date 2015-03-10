Vamos a crear una aplicación sencilla utilizando **AngularJS**. Para comprender la filosofía de trabajo de este framework, utilizaremos tres *directivas*, extensiones del HTML, básicas.

- **ng-app** : Esta directiva indica el inicio de una aplicación AngularJS.
- **ng-model** : Esta directiva enlaza el valor de un *input* a una *variable*.
- **ng-bind** : Esta directiva enlaza el valor de una variable a una etiqueta HTML.

#### Creando la aplicación ####
1. Añadimos el framework a la página, utilizamos una etiqueta script como con cualquier archivo javascript.
```HTML
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js">
</script>
```

2. Indicamos el comienzo de una aplicación con la directiva *ng-app*.
```
<div ng-app="HolaMundo">
</div>
```

3. Enlazamos el valor de un *input* HTML a una variable *nombre*.
```HTML
<p>Escribe tu nombre: <input type="text" ng-model="nombre"></p>
```

4. Enlazamos el valor de nuestra variable *nombre* a una etiqueta *span*.
```HTML
<p>Hola <span ng-bind="nombre"></span>!</p>
```

#### Ejecutando la aplicación ####
Para ver en funcionamiento nuestra apliación juntamos los cuatro pasos en un archivo HTML:
```HTML
<html>
<title>AngularJS First Application</title>
<body>
	<h1>Sample Application</h1>
	<div ng-app="">
  	 <p>Enter your Name: <input type="text" ng-model="name"></p>
  	 <p>Hello <span ng-bind="name"></span>!</p>
	</div>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
</body>
</html>
```

Puedes ver el programa funcionando en el siguiente enlace:
