## Expresiones ##

Las expresiones se utilizan para enlazar los datos de la aplicación con el HTML. Son en expresiones JavaScript contenidas entre dos llaves que se escriben junto al HTML de la siguiente forma:

```
{{expresion}}
```

#### Ejemplos ####

Usando un números

```HTML
<p>Gastado en libros : {{precio * cantidad}} Euros</p>
```

Usando Cadenas

```HTML
<p>Hola {{alumno.nombre + " " + alumno.apellidos}}!</p>
```

Usando Arrays

```HTML
<p>Nota en Literatura: {{notas[3]}}</p>
```
