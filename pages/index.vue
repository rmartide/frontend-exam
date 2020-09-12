<template>
    <div>
        <nav class="navbar fixed-top navbar-dark bg-primary">
            <a class="navbar-brand" href="#">
                🍺 <span class="navbar-brand mb-0 h1">BrewDog Beer Catalog</span>
            </a>
            <form class="form-inline">
                <a href="" class="btn btn-outline-light float-right mr-1">
                    CERVEZAS
                </a>
                <a href="" class="btn btn-outline-light float-right">
                    PERFIL
                </a>
            </form>
        </nav>

        <div class="container-md" style="margin-top:100px;">
            <div style="margin-bottom: 130px;">
                <h1 class="mb-3">Bienvenido</h1>

                <h3>Instrucciones</h3>
                <div class="p-3">

                    <ol>
                        <li>
                           Descarga el código fuente del examen desde este repositorio público
                           <a href="https://github.com/Malavandero/Frontend-exam.git">https://github.com/Malavandero/Frontend-exam.git</a>
                        </li>
                        <li>
                           Crea una nueva branch con tu nombre <span class="text-muted">ej. MiguelLM</span>
                        </li>
                        <li>
                           Desarrolla la solución en tu entorno local.
                        </li>
                        <li>
                           Haz tantos commits cómo quieras, <strong>pero solo revisaremos el código del commit con nombre
                           "Commit Final"</strong>
                        </li>
                        <li>
                           Publica tus rama en Origin, dejando <code>master</code> intacto.
                        </li>
                        <li>
                           Puedes utilizar el código HTML proporcionado en <code>/static</code> y modificarlo como prefieras,
                           <strong>pero los cambios estéticos no se valorarán</strong> aunque si tendremos en cuenta aquellos
                           que mejoren la estructura del código, el SEO o cualquier otro aspecto técnico.
                        </li>
                    </ol>
                </div>

                <h3 class="mt-3">¿En qué consiste?</h3>
                <div class="p-3">
                    <p>
                        Para la resolución de éste test técnico de Front End, desarrollaremos una aplicación que nos permita,
                        consultar el catálogo de BrewDog, la información de cada cerveza y marcar si la hemos probado.
                    </p>
                    <p>
                        Para ello empezaremos creando un formulario para introducir la información del perfil del usuario.
                    </p>

                    <h5>
                        👤 Perfil de usuario
                        <small class="text-muted float-right">👨‍💻 https://jsonplaceholder.typicode.com/</small>
                    </h5>
                    <p>El formulario estará en <code>/profile</code> y se accederá desde el botón "perfil" del header azul de la página</p>
                    <p>
                        Le solicitaremos su nombre, email y teléfono y enviaremos la información al end point
                        <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a>
                    </p>
                    <dl>
                        <dt>name</dt>
                        <dd>Sólo caracteres alfabéticos, y el único signo de puntuación permitido es el guión medio (-)</dd>
                        <dt>email</dt>
                        <dd>Tiene que tener estructura de email válido</dd>
                        <dt>phone</dt>
                        <dd>Numérico, sólo permitido espacios.</dd>
                    </dl>
                    <p>
                        Tras validar el formulario y enviar los datos al servidor, se almacenará en el LocalStorage del navegador,
                        el contenido del formulario y el identificador proporcionado por el End Point.
                        Si ha ido mal se mostrará un error genérico.
                    </p>

                    <h5>🍻 Catálogo de cervezas <small class="text-muted float-right">👨‍💻https://punkapi.com/documentation/v2</small></h5>
                    <p>El catálogo estará en <code>/beers</code> y se accederá desde el botón "Cervezas" en el header azul de la página</p>
                    <p>
                        Obtendremos la información de la <a href="https://api.punkapi.com/v2/beers">https://api.punkapi.com/v2/beers</a>.
                        Cada elemento del listado debe contener la siguiente información:
                    </p>
                    <ul>
                        <li>Imagen (image_url)</li>
                        <li>Nombre (name)</li>
                        <li>Sub Nombre (tagline)</li>
                        <li>Elaboración (first_brewed)</li>
                        <li>Graduación (abv)</li>
                        <li>Indicador de degustación ( Background-color, icono, a criterio del candidato)</li>
                    </ul>

                    <p>Dicho indicador marcará la cerveza como degustada</p>

                    <p>
                        El listado estará paginado mostrando 20 resultados por página y se indicará el número de página en la que
                        estás y el número de páginas disponibles. (Actualmente hay 325 resultados)
                    </p>

                    <p>
                        El nombre y la imagen de cada una de las cervezas del listado llevarán a su ficha de información.
                    </p>

                    <h5>ℹ️ Página de información</h5>

                    <p>La página de información estará en <code>/beers/{id}</code></p>

                    <p>En esta página se mostrará la información de la cerveza solicitada en el listado y mostraremos:</p>
                    <ul>
                        <li>Referencia (id)</li>
                        <li>Nombre (name)</li>
                        <li>Sub Nombre (tagline)</li>
                        <li>Fecha de elaboración (first_brewed)</li>
                        <li>Descripción (description)</li>
                        <li>Imagen (image_url)</li>
                        <li>Indicador de degustación</li>
                    </ul>

                </div>
            </div>
            <nav class="navbar fixed-bottom navbar-light bg-light text-right">
                <p>
                    ¿Tienes alguna duda? Escríbeme a <a href="mailto:malavandero@ivoox.com">malavandero@ivoox.com</a>
                </p>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family:
                'Quicksand',
                'Source Sans Pro',
                -apple-system,
                BlinkMacSystemFont,
                'Segoe UI',
                Roboto,
                'Helvetica Neue',
                Arial,
                sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
