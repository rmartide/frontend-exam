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
				<ul>
                    <li>{{ beer.name }}</li>
                    <li>{{ beer.tagline }}</li>
                    <li>{{ beer.first_brewed }}</li>
                    <li>{{ beer.abv }}</li>
                    
                </ul>
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
			this.beers = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=20`).then(res =>
				res.json()
			)
		}
	}
}
</script>

<style scoped>
</style>