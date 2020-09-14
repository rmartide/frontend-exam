<template>
	<form id="app" @submit="checkForm" novalidate="true">
		<h1>Perfil</h1>

		<div class="form-group">
			<label for="name">Nombre</label>
			<input id="name" class="form-control" v-model="name" type="text" name="name" />
			<small class="form-text text-danger">{{this.nameError}}</small>
		</div>

		<div class="form-group">
			<label for="email">Email</label>
			<input id="email" v-model="email" class="form-control" type="email" name="email" />
			<small class="form-text text-danger">{{this.emailError}}</small>
		</div>

		<div class="form-group">
			<label for="phone">Teléfono</label>
			<input id="phone" class="form-control" v-model="phone" />
			<small class="form-text text-danger">{{this.phoneError}}</small>
		</div>

		<div>
			<input type="submit" class="btn btn-info" value="Enviar" />
		</div>

		<div class="alert alert-danger mt-1" v-show="fetchError">
			<small class="text-danger">Se ha producido un error al enviar el formulario, inténtelo más tarde.</small>
		</div>
	</form>
</template>

<script>
export default {
	data() {
		return {
			name: null,
			email: null,
			phone: null,
			nameError: null,
			emailError: null,
			phoneError: null,
			fetchError: null
		}
	},
	methods: {
		checkForm(e) {

			this.resetErrors();

			if (!this.email) {
				this.emailError = 'El email es obligatorio.';
			} else if (!this.validEmail(this.email)) {
				this.emailError = 'El email ha de ser válido.';
			}

			if (!this.phone) {
				this.phoneError = 'El teléfono es obligatorio.';
			} else if (!this.validPhone(this.phone)) {
				this.phoneError = 'El teléfono solo puede contener números y espacios';
			}

			if (!this.name) {
				this.nameError = 'El nombre es obligatorio.';
			}

			if (this.isValidForm()) {
				this.$api.postProfile({
					name: this.name,
					email: this.email,
					phone: this.phone
				})
					.then(response => response.json())
					.catch(() => this.fetchError = true)
					.then(json => console.log(json));
			}

			e.preventDefault();
		},
		validEmail(email) {
			// RFC822 email validation
			return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email);
		},
		validPhone(phone) {
			return /^[0-9\s]*$/.test(phone);
		},
		resetErrors() {
			this.nameError = null;
			this.emailError = null;
			this.phoneError = null;
			this.fetchError = null;
		},
		isValidForm() {
			return this.nameError === null && this.emailError === null && this.phoneError === null;
		}
	}
}
</script>

<style>
</style>