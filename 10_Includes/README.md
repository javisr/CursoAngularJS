## Includes ##
AngularJS facilita la inclusión de HTML en otras páginas mediante la directiva **ng-include**.

```HTML
<div ng-app="" ng-controller="controller">
   <div ng-include="'template1.html'"></div>
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
    <button ng-click="template='/template1.html'">Template 1</button>
    <button ng-click="template='/template2.html'">Template 2</button>
    <div ng-include="template"></div>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</body>

</html>
```

#### template1.html ####
```HTML
<div>
    <span>Contenido del template 1</span>
</div>
```

#### template2.html ####
```HTML
<div>
    <span>Contenido del template 2</span>
</div>
```
Puedes ver la aplicación funcionando en el siguiente enlace:
http://plnkr.co/edit/H1ungSFB90UIuIxUaMH4?p=preview
