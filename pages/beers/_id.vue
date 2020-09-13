<template>
	<div>
		<ul>
            <li>Referencia: {{ beer.id }}</li>
            <li>Nombre : {{ beer.name }}</li>
            <li>Sub Nombre: {{ beer.tagline }}</li>
            <li>Fecha de elaboración: {{ beer.first_brewed }}</li>
            <li>Descripción: {{ beer.description }}</li>
            <li>Imagen: <img :src="beer.image_url"></li>
            <li>Indicador de degustación: COMPLETAR</li>
        </ul>

	</div>
</template>

<script>
export default {
    //PILLAR DE LA STORE
}
</script>