###Guión de Actividades
*Commit de partida: e60d9aa388151c54b5922b62abbd41438aea676b
* Mostrar el sistema de carpetas
* Mostrar el template de lo que queremos hacer. HTML sin funcionalidad.
* Añadir Angular y ngApp
386981c2ca32a981cdf49e8bfb395af255669eea (5 min)
* División de código
* ngView
* Importar el módulo ngRoute
* Definir la ruta /recetas (asociarla a la principal)
		3703344575aceb29bff72f1b0ff2d95366bc56b8 (10 min)
* Añadir el controlador de la ruta y cargar los datos de las recetas con $http
		8dc2da7594bcffcac0a13eb30bec03d9edc445d7 (5 min)
* Actualizar la vista de /recetas para que sea dinámica
* Actualizar el scope de /recetas 
		eea4d87af00b49f56d00b836a67ff93ef4726a7a (10 min)
* Añadir clickonreceta -> go to receta
* Añadir la ruta recetas/id
* Crear la vista de cada receta
* Crear su controlador y cargar los datos con $http 
		6f98fd512ea0cea39dbd8afd7858a5b3d53b2e08 (20 min)
* Crear el método para borrar la receta. (redirigir a /recetas) (5 min)
		79e9eeea484cd52fba8e3fc1e1faea6fa2751aea
* Definir la ruta /nuevareceta
* Crear su vista (formulario)
* Crear su controlador
		f2ef95d6321f8ea227fc8c7619d0e8547fef624a
* Asocia los campos del formulario al scope (ng-model)
* Validaciones
* Crear la directiva para cada receta en /recetas
* scopes
* Mostrar/ocultar la descripción de la receta en /recetas (jqLite)   https://docs.angularjs.org/api/ng/function/angular.element
* filtrar por ingredientes
