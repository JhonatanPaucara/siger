<template>
  <base-form title="Formulario de Ingreso" :error="error">
    <v-form v-model="valid" slot="body">
      <v-text-field
        prepend-icon="mdi-email"
        :rules="ruleEmail"
        v-model="email"
        label="Correo electrónico"
      />
      <v-text-field
        :rules="rulePassword"
        prepend-icon="mdi-lock"
        v-model="password"
        label="Contraseña"
        type="password"
      />
      <div class="text-right">
        <router-link to="/resetpassword">¿Olvidó su contraseña?</router-link>
      </div>
      <v-btn
        @click="loginWithEmail"
        :disabled="!valid"
        block
        class="primary"
        :loading="loadingForm"
      >Ingresar</v-btn>
      <div class="mt-2">
        <span>
          ¿No tiene una cuenta?
          <router-link to="/signup">Regístrese</router-link>
        </span>
      </div>
      <v-divider />
      <div class="my-2">
        <span>O ingrese mediante alguno de los siguientes medios:</span>
      </div>
      <v-btn fab icon small :loading="loadingForm">
        <img width="20" src="../assets/facebook.png" />
      </v-btn>
      <v-btn fab icon small :loading="loadingForm">
        <img width="20" src="../assets/google.png" />
      </v-btn>
    </v-form>
  </base-form>
</template>

<script>
import BaseForm from "../components/BaseForm";
import { formMixin } from "../mixins";
export default {
  data: () => {
    return {
      user: {}
    };
  },
  components: { BaseForm },
  mixins: [formMixin],
  methods: {
    loginWithEmail() {
      (this.loadingForm = true),
        this.$store
          .dispatch("loginWithEmail", {
            email: this.email,
            password: this.password
          })
          .then(user => {
            this.user = user;
            this.loadingForm = false;
          })
          .catch(error => {
            (this.error = error), (this.loadingForm = false);
          });
    },
    loginWithFacebook() {
      (this.loadingForm = true),
        this.$store
          .dispatch("loginWithFacebook")
          .then(user => {
            this.user = user;
            this.loadingForm = false;
          })
          .catch(error => {
            (this.error = error), (this.loadingForm = false);
          });
    },
    loginWithGoogle() {
      (this.loadingForm = true),
        this.$store
          .dispatch("loginWithGoogle")
          .then(user => {
            this.user = user;
            this.loadingForm = false;
          })
          .catch(error => {
            (this.error = error), (this.loadingForm = false);
          });
    }
  }
};
</script>

<style>
</style>