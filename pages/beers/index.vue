<template>
	<div>
		<h1>Beers</h1>
		<b-pagination
			v-model="currentPage"
			:total-rows="rows"
			:per-page="perPage"
			:limit="limit"
			first-number
			last-number
			aria-controls="my-table"
			@change="fetchPage"
			align="center"
		></b-pagination>
		<div class="d-flex flex-wrap">
			<div v-for="beer in beers" :key="beer.id" class="col-3 text-center align-self-start mt-4 mb-4 beer p-4" :class="{tasted: beer.tasted}">
				<nuxt-link :to="'/beers/' + beer.id">
					<img :src="beer.image_url" width="30%" height="30%" />
				</nuxt-link>
				<div>
					<nuxt-link :to="'/beers/' + beer.id">{{ beer.name }}</nuxt-link>
				</div>
				<div>{{ beer.tagline }}</div>
				<div>{{ beer.first_brewed }}</div>
				<div>{{ beer.abv }}</div>
				<b-button size="sm" :variant="beer.tasted ? 'outline-secondary' : 'outline-success'" @click="changeTasted(beer.id)">{{ getTastedText(beer.tasted) }}</b-button>
			</div>
		</div>
		<b-pagination
			v-model="currentPage"
			:total-rows="rows"
			:per-page="perPage"
			:limit="limit"
			aria-controls="my-table"
			@change="fetchPage"
			first-number
			last-number
			align="center"
			class="mt-4"
		></b-pagination>
	</div>
</template>

<script>
export default {
	data() {
		return {
			currentPage: 1,
			rows: 325,
			perPage: 20,
			limit: 10
		}
	},
	fetch() {
		this.fetchPage(1);
	},
	methods: {
		fetchPage(currentPage) {
			this.$store.dispatch('fetchBeers', currentPage);
		},
		changeTasted(id) {
			this.$store.commit('changeTasted', id);
		},
		getTastedText(isTasted) {
			return isTasted ? 'Mark as not tasted' : 'Mark as tasted';
		}
	},
	computed: {
		beers() {
			return this.$store.getters.getBeers;
		}
	}
}
</script>

<style scoped>
.tasted {
	background-color: lemonchiffon;
}
</style>