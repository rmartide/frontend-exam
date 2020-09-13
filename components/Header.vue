<template>
	<nav class="navbar fixed-top navbar-dark bg-primary">
		<nuxt-link class="navbar-brand" to="/">
			🍺
			<span class="navbar-brand mb-0 h1">BrewDog Beer Catalog</span>
		</nuxt-link>
		<form class="form-inline">
			<nuxt-link to="/beers" class="btn btn-outline-light float-right mr-1">CERVEZAS</nuxt-link>
			<nuxt-link to="/profile" class="btn btn-outline-light float-right">PERFIL</nuxt-link>
		</form>
	</nav>
</template>