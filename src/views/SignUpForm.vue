<template>
  <base-form title="Formulario de Registro" :error="error">
    <v-form v-model="valid" slot="body">
      <v-text-field :rules="ruleName" v-model="name" label="Nombre" />
      <v-text-field :rules="ruleName" v-model="lastName" label="Apellidos" />
      <v-text-field :rules="ruleEmail" v-model="email" label="Correo electrónico" />
      <v-text-field :rules="rulePassword" v-model="password" label="Contraseña" type="password" />
      <v-text-field
        :rules="rulePassword2"
        v-model="password2"
        label="Repetir Contraseña"
        type="password"
      />
      <v-checkbox v-model="accepted" label="Acepta los términos y condiciones" />
      <v-btn
        :disabled="!valid||!accepted"
        block
        class="primary"
        :loading="loadingForm"
        @click="createUser"
      >Registrarse</v-btn>
      <div class="my-2">
        <span>
          ¿Ya tiene una cuenta?
          <router-link to="/signin">Ingrese</router-link>
        </span>
      </div>
    </v-form>
  </base-form>
</template>

<script>
import BaseForm from "../components/BaseForm";
import { formMixin } from "../mixins";
export default {
  data: () => {
    return {
      user: {},
      name: "",
      lastName: "",
      password2: "",
      accepted: ""
    };
  },
  components: { BaseForm },
  mixins: [formMixin],
  methods: {
    createUser() {
      var newUser = {};
      this.loadingForm = true;
      newUser.name = this.name;
      newUser.lastName = this.lastName;
      newUser.email = this.email;
      newUser.password = this.password;
      this.$store
        .dispatch("createUser", newUser)
        .then(user => {
          this.user = user;
          this.loadingForm = false;
        })
        .catch(error => {
          this.loadingForm = false;
          this.error = error;
        });
    }
  }
};
</script>

<style>
</style>