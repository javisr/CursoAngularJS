```HTML
<html>
<head>
  <title>Formularios</title>
</head>
<body ng-app="formExample">
  <div ng-controller="ExampleController">
  <form novalidate name="form" class="css-form">
    Nombre: <input type="text" ng-model="user.name" required /><br />
    E-mail: <input type="email" ng-model="user.email" required /><br />
    Sexo: <input type="radio" ng-model="user.gender" value="male" />hombre
    <input type="radio" ng-model="user.gender" value="female" />mujer<br />
    <input type="submit" ng-disabled ="form.$invalid" value="Guardar" />
    <input type="submit" ng-click ="reset()" value="Reset" />
  </form>
  <pre>user: {{ user }}</pre>
</div>

<style type="text/css">
  .css-form input.ng-invalid.ng-touched {
    background-color: #FA787E;
  }

  .css-form input.ng-valid.ng-touched {
    background-color: #78FA89;
  }
</style>

<script>
  angular.module('formExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.reset = function() {
        $scope.user = {};
      };
    }]);
</script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.0-beta.5/angular.min.js"></script>
</body>
</html>
```