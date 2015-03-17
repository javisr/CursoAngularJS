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