## Expresiones ##

Las expresiones se utilizan para enlazar los datos de la aplicación con el HTML. Son en expresiones JavaScript contenidas entre dos llaves que se escriben junto al HTML de la siguiente forma:

```
{{expresion}}
```

#### Ejemplos ####

Usando un números

```HTML
<p>Gastado en libros : {{precio * cantidad}}€</p>
```

Usando Cadenas

```HTML
<p>Hola {{alumno.nombre + " " + alumno.apellidos}}!</p>
```

Usando Arrays

```HTML
<p>Nota en Literatura: {{notas[3]}}</p>
```

## Aplicación de Ejemplo ##

```HTML
<html>
<title>Expresiones AngularJS</title>
<body>
<h1>Ejemplo de Expresiones</h1>
<div ng-app="" ng-init="cantidad=3;precio=30; alumno={nombre:'Sandra',apellidos:'Fernandez'};notas=[7,9,5,6]">
   <p>¡Hola {{alumno.nombre + " " + alumno.apellidos}}!</p>   
   <p>Gastado en libros : {{precio * cantidad}}€</p>
   <p>Nota en Literatura: {{notas[3]}}</p>
</div>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.15/angular.min.js"></script>
</body>
</html>
```
