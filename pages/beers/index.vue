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
			<div v-for="beer in beers" :key="beer.id" class="col-3 text-center align-self-start mt-4 mb-4">
				<img :src="beer.image_url" width="30%" height="30%" />
				<div>{{ beer.name }}</div>
				<div>{{ beer.tagline }}</div>
				<div>{{ beer.first_brewed }}</div>
				<div>{{ beer.abv }}</div>
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
			beers: [],
			currentPage: 1,
			rows: 325,
			perPage: 20,
			limit: 10
		}
	},
	async fetch() {
		this.fetchPage(1);
	},
	methods: {

		// VER SI LA PÁGINA ESTÁ EN LA STORE Y SI NO SE CARGA

		async fetchPage(currentPage) {
			this.beers = await this.$api.getBeers(currentPage).then(res =>
				res.json()
			)
		}
	}
}
</script>

<style scoped>
</style>