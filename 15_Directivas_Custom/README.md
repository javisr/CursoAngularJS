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

#### Asociando el comportamiento




## Aplicación de Ejemplo ##


**index.html**

```HTML

```

**app.js**

```JAVASCRIPT

```
Puedes ver la aplicación funcionando en el siguiente enlace:
[]()
