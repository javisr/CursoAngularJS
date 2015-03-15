## Expresiones ##

Las expresiones se utilizan para enlazar los datos de la aplicación con el HTML. Son en expresiones JavaScript contenidas entre dos llaves que se escriben junto al HTML de la siguiente forma:

```
{{expresion}}
```

#### Ejemplos ####

Usando un números

```HTML
<p>Su cuenta es de: {{precio * platos}}€</p>
```

Usando Cadenas

```HTML
<p>¡Hola {{comensal.nombre + " " + comensal.apellidos}}!</p>  
```

Usando Arrays

```HTML
<p>Su postre fue: {{postres[1]}}</p>
```

## Aplicación de Ejemplo ##

```HTML
<html>
<head>
    <meta charset="utf-8">
	<title>Expresiones AngularJS</title>
</head>
<body>
<h1>Ejemplo de Expresiones</h1>
<div ng-app="" ng-init="platos=3;precio=10; comensal={nombre:'Fran',apellidos:'Amian'};postres=['Natilla','Dulde de leche','Platano','Fresas'];">
   <p>¡Hola {{comensal.nombre + " " + comensal.apellidos}}!</p>   
   <p>Su cuenta es de: {{precio * platos}}€</p>
   <p>Su postre fue: {{postres[1]}}</p>
</div>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>
</html>
```

Puedes ver la aplicación funcionando en el siguiente enlace:
[http://plnkr.co/edit/xHvg7sMoBkMVwvNUp0MV?p=preview](http://plnkr.co/edit/xHvg7sMoBkMVwvNUp0MV?p=preview)
