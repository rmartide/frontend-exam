<template>
	<form id="app" @submit="checkForm" action="https://vuejs.org/" method="post" novalidate="true">
		<h1>Profile</h1>
		<p v-if="errors.length">
			<b>Por favor, corrija el(los) siguiente(s) error(es):</b>
			<!-- <ul>
      <li v-for="error in errors">{{ error }}</li>
			</ul>-->
		</p>

		<p>
			<label for="name">Nombre</label>
			<input id="name" v-model="name" type="text" name="name" />
		</p>

		<p>
			<label for="email">Correo electrónico</label>
			<input id="email" v-model="email" type="email" name="email" />
		</p>

		<p>
			<label for="movie">Película favorita</label>
			<select id="movie" v-model="movie" name="movie">
				<option>Star Wars</option>
				<option>Vanilla Sky</option>
				<option>Atomic Blonde</option>
			</select>
		</p>

		<p>
			<input type="submit" value="Enviar" />
		</p>
	</form>
</template>

<script>
export default {

}
</script>

<style>
</style>