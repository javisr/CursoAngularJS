## Vistas ##

En AngularJS las vistas son una parte muy importe ya que nos permiten modularizar nuestro HTML en varios archivos. Para ellos AngularJS proporciona las directivas ng-view y ng-template así como el servicio $routeProvider.

#### $routeProvider
El servicio $routeProvider es quien nos permite crear las rutas. Depende del módulo ngRounte por lo que éste debe de estar instalado y pasado al módulo. 

```HTML
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular-route.js"></script>
```

* Para definir una ruta usamos el método when()
* En caso de que ninguna de las rutas definidas con when() coincidan con la URL, $routeProvider ejecutará la función otherwise()

## Aplicación de Ejemplo ##


ejemplo_vistas.html

```HTML
```

Puedes ver la aplicación funcionando en el siguiente enlace:
[--](#)
