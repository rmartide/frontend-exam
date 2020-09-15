<template>
	<div v-if="beer !== undefined" class="details-container">
		<ul class="info">
			<li>
				<span>Referencia:</span>
				{{ beer.id }}
			</li>
			<li>
				<span>Nombre:</span>
				{{ beer.name }}
			</li>
			<li>
				<span>Sub Nombre:</span>
				{{ beer.tagline }}
			</li>
			<li>
				<span>Fecha de elaboración:</span>
				{{ beer.first_brewed }}
			</li>
			<li>
				<span>Descripción:</span>
				{{ beer.description }}
			</li>
			<li>
				<span>Indicador de degustación:</span>
				{{ tasted }}
			</li>
		</ul>
		<img :src="beer.image_url" class="image" />
	</div>
</template>

<script>
export default {
	fetch({ store, params }) {
		store.dispatch('fetchBeer', params.id);
	},
	computed: {
		beer() {
			return this.$store.getters.getBeer;
		},
		tasted() {
			return this.beer.tasted ? 'Degustada' : 'No degustada';
		}
	}
}
</script>
<style scoped>
.details-container {
	display: grid;
	grid-template-areas: "info image";
}
.info {
	grid-area: info;
}
.info span {
	font-weight: bold;
}
.image {
	grid-area: image;
	width: 50%;
}
</style>