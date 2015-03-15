## Introducción

AngularJS es un framework JavaScript de aplicaciones web usado principalmente en aplicaciones de una sola página y mantenido por Google.

#### Características generales
Las principales características de AngularJS son las siguientes:

* AngularJS es un framework muy eficiente que permite crear Rich Internet Applications (RIA) o lo que es lo mismo **aplicaciones con un fuerte compenente de frontend**.

* AngularJS proporciona a los desarrolladores una manera sencilla de escribir aplicaciones front siguiendo el patron MVC (**Modelo-Vista-Controlador**).

* Las aplicaciones escritas en AngularJS son **cross-browser**. AngunlarJS se encarga de hacerlas funcionar en cada navegador abstrayendo de esa tarea a los desarrolladores.

* AngularJS es **software libre**, gratis y usado por miles de desarrolladores en el mundo.

En resumen, AngularJS es un framework para construir aplicaciones facilmente escalables, mantenibles y con un alto rendimiento.

### Características del Core
Las características del core de AngularJS son las siguientes:

* **Data-binding**: Es la *sincronización automática de los datos entre los modelos y las vistas*.

* **Scope/ámbito**: El scope sirve para comunicarse entre componentes - particularmente el javascript y el HTML. Los scope es el *nexo entre el código y lo que muestra el navegador*.

* **Controladores**: Los controladores son los trozos de código JavaScript que *definen la funcionalidad* de una parte de la página.

* **Servicios**: AngularJS proporciona varios servicios de serie. Un ejemplo muy util es el servcio $http para manejar las distinas peticiones HTTP. 

* **Filtros**: Los filtros seleccionan un subconjuntos de elementos de un array y devuelven un nuevo array con ellos.
 
* **Directivas**: Las directivas permiten extender HTML con nuevos atributos y etiquetas.

* **Plantillas**: Las plantillas son las porciones de código en HTML que se utilizan para renderizar los nuevos elementos con la información del Scope.

* **Enrutamiento**: El enrutamiento permite crear diferentes URLs para los diferentes contenidos de la aplicación.

* **MVVC**: AngularJS no implementa el MVC tradicional. En su lugar utiliza el patrón *Modelo-Vista-Vista-Controlador*.

* **Inyección de dependencias**: AngularJS tiene un sistema de inyección de dependencias integrado que ayuda a los desarrolladores para crear, entender y probar las aplicaciones con facilidad.


##Arquitectura MVVC
Como ya hemos comentado antes, AngularJS no sigue el MVC tradicional. En su lugar implementa una arquitectura Modelo-Vista-Vista-Controlador:

#### El Modelo
El modelo es el reponsable de mantener los datos de la aplicación

#### La Vista-Vista
En AngularJS la vista se divide en dos partes:

* La vista HTML que representa la vista traducional y que es lo que el usuario final ve.
* El $scope es la representación en JavaScript de la vista HTML. Cualquier cambio que sufra un valor en el $scope reflejara automáticamente en el HTML y viceversa.

#### El Controlador
Es la parte que controla interacciones entre el modelo y la vista. **Define la funcionalidades**


##Conceptos
El siguiente diagrama representa algunas partes importantes de AngularJS las cuales vamos a ver mas en detalle en los siguientes capítulos.

![Screenshot](http://javisr.net/angularjs_concepts.jpg)

##Advantages of AngularJS
Las ventajas de AngularJS a groso modo son:

* Permite crear 'Single Page Application' de forma muy mantenible.

* Proporciona un data-binding bidireccional.

* El código de AngularJS es fácimente testeable.

* AngularJS utiliza la inyección de dependencia.

* AngularJS permite reutilizar muchos componentes.

* Con AngularJS, los desarrolladores pueden lograr mucha funcionalidad con poco código.

* En AngularJS, las vistas son en HTML puro, y los controladores escritos en JS se encargan de toda la lógica

* Las aplicaciones en AngularJS funcionan en la mayoría de los navegadores modernos incluyendo smartphones and tablets.

##Desventajas AngularJS
Aunque AngularJS tiene muchas ventajas también tiene algunos puntos negativos a tener en cuenta:

* No es seguro: Al ser un framework JS de lado del cliente se necestiará un backend que se encargue de la seguridad como puede ser la autenticación.

* Necesita Javascript Activo: Si el usuario desactiva Javascript de su navegador nada funcionará.
