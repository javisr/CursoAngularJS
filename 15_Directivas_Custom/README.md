## Directivas Customizadas ##
(no acabado)

Las directivas sirven para externder las funcionalidades de HTML.

Cuando AngularJS detecta una directiva customizada altera el HTML y le asocia unos comportamientos.

#### Definición de una Directiva en AngularJS

Las direcitvas custominizadas se definen utilizanfo la función 'directive'.

```JAVASCRIPT
angular.module('app', [])
    .directive('directivaA', function (){
        return {
            restrict: 'A', // A TRAVÉS DE UN ATRIBUTO
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdiv directivaA>&lt/div&gt</p>'
        }
    })

    .directive('directivaC', function (){
        return {
            restrict: 'C', //A TRAVÉS DE UNA CLASE
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdiv class="directivaC"&gt&lt/div&gt</p>'
        }
    })

    .directive('directivaE', function (){
        return {
            restrict: 'E', //A TRAVÉS DE UN ELEMENTO
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdirectivaE&gt&lt/directivaE&gt </p>'
        }
    })

    .directive('directivaAEC', function (){
        return {
            restrict: 'AEC', //A TRAVÉS DE UN ELEMENTO, CLASE O ATRIBUTO
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdirectivaAEC>&lt/directivaAEC&gt, &ltdiv directivaAEC&gt&lt/div&gt o &ltdiv class="directivaAEC"&gt&lt/div&gt</p>'
        }
    })
```
#### Uso una directiva

Según el atributo restrict que se haya especificado en la definición de la directiva podremos usarla de una forma u otra en nuestro HTML:

* A: A través de un atributo. 

```HTML
<div directiva-a></div>
```
* E: A través de un elemento
```HTML
<directiva-e></directiva-e>
```
* C: A través de una clase
```HTML
<div class="directivaC"></div>
```

Nótese como las direcitivas atributo y elemento se utilizan haciendo una separación por guiones aunque se hayan definido con la notación camelCase.

#### Asociando funcionalidad

* **Link**  En general salvo funcionalidades que puedan ser usadas por otras directivas hay que usar esta función. También todas las modificaciones de DOM y los listeners también se deben incluir aquí.

* **controlador** - Debe ser usado cuando otra directiva necesite intectatuar con esta misma. Como si de una API para otra directivas se tratase.

[Ejemplo de la documentación de Angular](http://plnkr.co/edit/h5qfscTUOatJZldHXnjG?p=preview)

## Aplicación de Ejemplo ##


**index.html**

```HTML
<html>
<head>
    <meta charset="utf-8">
    <title>Directivas AngularJS</title>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
</head>
<body>
<h2>Directivas AngularJS</h2>

<div ng-app="app">

<directiva-e></directiva-e>

<div directiva-a></div> 

<div class="directivaC"></div>

<contador1></contador1>
<br>
<contador2></contador2>

</div>
<script src="app.js"></script>
</body>
</html>
```

**contador_X.html**
<span ng-click="suma()">ContadorX: {{contador}}</span>


**app.js**

```JAVASCRIPT
angular.module('app', [])
    .directive('directivaA', function () {
        return {
            restrict: 'A', // A TRAVÉS DE UN ATRIBUTO
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdiv directivaA>&lt/div&gt</p>',
        }
    })

    .directive('directivaC', function () {
        return {
            restrict: 'C', //A TRAVÉS DE UNA CLASE
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdiv class="directivaC"&gt&lt/div&gt</p>',
        }
    })

    .directive('directivaE', function () {
        return {
            restrict: 'E', //A TRAVÉS DE UN ELEMENTO
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdirectivaE&gt&lt/directivaE&gt </p>',
        }
    })

    .directive('directivaAEC', function () {
        return {
            restrict: 'AEC', //A TRAVÉS DE UN ELEMENTO, CLASE O ATRIBUTO
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdirectivaAEC>&lt/directivaAEC&gt, &ltdiv directivaAEC&gt&lt/div&gt o &ltdiv class="directivaAEC"&gt&lt/div&gt</p>',
        }
    })
    .directive('contador1', function () {
        return {
            restrict: 'AEC', //A TRAVÉS DE UN ELEMENTO, CLASE O ATRIBUTO
            templateUrl: 'contador_1.html',
            controller: 'DirectivaCrtl',
            scope: {},
            link: function (scope, element) {
                scope.contador = 0;
                scope.suma = function () {
                    scope.contador = scope.contador + 1;
                    console.log(scope.contador);
                }
            }
        }
    })
    .directive('contador2', function () {
        return {
            restrict: 'E',
            templateUrl: 'contador_2.html',
            controller: 'DirectivaCrtl',
            scope: {},
            link: function (scope, element) {
                element.css({color: 'red'});

                element.bind('mouseover', function () {
                    element.css({color: 'blue'});
                });

                element.bind('mouseleave', function () {
                    element.css({color: 'red'});
                });
            }
        }
    })

    .controller('DirectivaCrtl', ['$scope', function ($scope) {

        $scope.contador = 100;

        $scope.suma = function () {
            $scope.contador = $scope.contador + 1;
            console.log($scope.contador);
        }

    }]);
```
Puedes ver la aplicación funcionando en el siguiente enlace:
[http://plnkr.co/edit/zk3nFWIPAnE3SuPwsKPu?p=preview](http://plnkr.co/edit/zk3nFWIPAnE3SuPwsKPu?p=preview)
