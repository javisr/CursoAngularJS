## Filtros

Como su nombre indica los filtros son usados para filtrar dato. No obstante en AngularJS también se usan los filtros para modificar datos. Se colocan en expresiones o directivas usando el caracter (|). La siguiente lista muestra los filtros más comunes:

* **uppercase**: transforma las cadenas en mayúsculas.
* **lowercase**: transforma las cadenas en minúsculas.
* **currency**: formatea el texto en un formato de moneda.
* **filter**: dado un array devuelve un subconjunto en base a unos criterios.
* **orderBy**:  ordena el array basado en criterios proporcionados.


#### Uppercase

Transforma el resumen a mayúsculas

Nombre de la receta:<input type="text" ng-model="receta.nombre">
Ingredientes principales: <input type="text" ng-model="receta.ingredientesPrincipales">
Resumen: {{receta.resumen() | uppercase}}

#### Lowercase 

Transforma el resumen a minusculas

Nombre de la receta: <input type="text" ng-model="receta.nombre">
Ingredientes principales: <input type="text" ng-model="receta.ingredientesPrincipales">
Resumen: {{receta.resumen() | lowercase}}


#### Currency 

Formatea el texto en un formato de moneda.

Precio de la receta: <input type="text" ng-model="receta.precio">
Precio: {{receta.precio | currency:"€"}}

#### OrderBy

Ordena el array basado en criterios proporcionados.

Ingredientes:
<ul>
  <li ng-repeat="ingrediente in receta.ingredientes | orderBy:'cantidad'">
    {{ ingrediente.nombre + ', cantidad:' + ingrediente.cantidad }}
  </li>
</ul>

#### Filter


