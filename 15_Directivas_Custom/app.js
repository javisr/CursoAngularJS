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
            restrict: 'AEC', //A TRAVÉS DE UN ELEMENTO
            template: '<p>Esta es una directiva que se ha activado al encontrar &ltdirectivaAEC>&lt/directivaAEC&gt, &ltdiv directivaAEC&gt&lt/div&gt o &ltdiv class="directivaAEC"&gt&lt/div&gt</p>'
        }
    })