# ivoox-frontend-exam

## Instrucciones

1. Descarga el código fuente del examen desde este repositorio público https://github.com/Malavandero/Frontend-exam.git
2. Desarrolla la solución en tu entorno local.
3. Publica tu código en algún sistema de gestión de versiones y haznos llegar la url. (También podemos descargarnos el código o recibirlo por correo)
4. Puedes utilizar el código HTML proporcionado en `/static` y modificarlo como prefieras, **pero los cambios estéticos no se valorarán** aunque si tendremos en cuenta aquellos que mejoren la estructura del código, el SEO o cualquier otro aspecto técnico.

## ¿En qué consiste?
Para la resolución de éste test técnico de Front End, desarrollaremos una aplicación que nos permita, consultar el catálogo de BrewDog, la información de cada cerveza y marcar si la hemos probado.

Para ello empezaremos creando un formulario para introducir la información del perfil del usuario.

### Perfil de usuario
El formulario estará en `/profile` y se accederá desde el botón "perfil" del header azul de la página
Le solicitaremos su nombre, email y teléfono y enviaremos la información al end point https://jsonplaceholder.typicode.com/users
> Documentación de la API: https://jsonplaceholder.typicode.com/

* __name__: Sólo caracteres alfabéticos, y el único signo de puntuación permitido es el guión medio (-)
* __email__: Tiene que tener estructura de email válido
* __phone__: Numérico, sólo permitido espacios.


Tras validar el formulario y enviar los datos al servidor, se almacenará en el LocalStorage del navegador, el contenido del formulario y el identificador proporcionado por el End Point. Si ha ido mal se mostrará un error genérico.

### Catálogo de cervezas
El catálogo estará en `/beers y se accederá desde el botón "Cervezas" en el header azul de la página

Obtendremos la información de la https://api.punkapi.com/v2/beers. Cada elemento del listado debe contener la siguiente información:

> Documentación de la API https://punkapi.com/documentation/v2

* Imagen (image_url)
* Nombre (name)
* Sub Nombre (tagline)
* Elaboración (first_brewed)
* Graduación (abv)
* Indicador de degustación ( Background-color, icono, a criterio del candidato)
* Dicho indicador marcará la cerveza como degustada

El listado estará paginado mostrando 20 resultados por página y se indicará el número de página en la que estás y el número de páginas disponibles. (Actualmente hay 325 resultados)

El nombre y la imagen de cada una de las cervezas del listado llevarán a su ficha de información.

### Página de información
La página de información estará en `/beers/{id}`

En esta página se mostrará la información de la cerveza solicitada en el listado y mostraremos:

* Referencia (id)
* Nombre (name)
* Sub Nombre (tagline)
* Fecha de elaboración (first_brewed)
* Descripción (description)
* Imagen (image_url)
* Indicador de degustación
