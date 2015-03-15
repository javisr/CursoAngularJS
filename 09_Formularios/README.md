##Formularios##

AngularJS proporciona un conjunto de utilidades para facilitar el trabajo con formularios. Utilizando estas utilidades y directivas ya conocidas, podemos validar formularios de una forma sencilla y potente.

Lo primero es indicar que no vamos a utilizar las validaciones que proporciona HTML, y darle un nombre a nuestro formulario
```HTML
<form novalidate name="form" class="css-form">
```

### Validaciones ###
Las siguientes variables nos ayudan a saber el estado en el que se encuentra un campo del formulario. Además aplican clases a los controles según su estado para ayudar al estilado.
- **$pristine** - booleano que indica si el usuario aun no ha interactuado con el campo
```HTML
 Nombre: <input type="text" ng-model="user.name" name="name" required />
<span ng-show="form.name.$pristine">Escribre tu nombre</span>
```
 
- **$dirty** - booleano que indica si el valor ha sido cambiado.
```HTML
 Nombre: <input type="text" ng-model="user.name" name="nombre" required />
<span ng-hide="form.email.$dirty">Escribe tu nombre</span>
```

- **$invalid** - booleano que indica si el valor no es correcto.
```HTML
<input type="submit" ng-disabled ="form.$invalid" value="Guardar" />
```

- ** $error ** - hash que proporciona el motivo exacto del error.
 ```HTML
 E-mail: <input type="email" ng-model="user.email" name="email" required />
<span ng-show="form.email.$error.email">Email no válido</span>
<span ng-show="form.email.$error.required">Email obligatorio</span>
```

## Aplicación de ejemplo ##

```HTML
<html>
<head>
  <title>Formularios</title>
  <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>

</head>
<body ng-app="formExample">
  <div ng-controller="ExampleController">
  <form novalidate name="form" class="css-form">
    Nombre: <input type="text" ng-model="user.name" name="name" required /><br />
      <span ng-show="form.name.$error.required">Nombre obligatorio</span><br/>
      
    E-mail: <input type="email" ng-model="user.email" name="email" required /><br />
      
      <span ng-show="form.email.$error.email">Email no válido</span><br/>
      
      <span ng-show="form.email.$error.required">Email obligatorio</span><br/>
      
    Sexo: <input type="radio" ng-model="user.gender" value="male" />hombre
    <input type="radio" ng-model="user.gender" value="female" />mujer<br />
    <input type="submit" ng-disabled ="form.$invalid" value="Guardar" />
    <input type="submit" ng-click ="reset()" value="Reset" />
    <div ng-show="form.$submitted"> Formulario enviado</div>
  </form>
  <pre>user: {{ user }}</pre>
</div>

<script>
  angular.module('formExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.reset = function() {
        $scope.user = {};
      };
    }]);
</script>
</body>

</html>
```

Puedes ver la aplicación funcionando en el siguiente enlace: http://plnkr.co/edit/QCGqvDfO8tzv1pJ4I3To?p=preview
