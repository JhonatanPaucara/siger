<template>
  <base-form title="Formulario de Recuperación" :error="error">
    <v-form v-model="valid" slot="body">
      <v-text-field
        prepend-icon="mdi-email"
        :rules="ruleEmail"
        v-model="email"
        label="Correo electrónico"
      />
      <v-btn :disabled="!valid" block class="primary" :loading="loadingForm">Recuperar Contraseña</v-btn>
      <div class="my-2">
        <router-link to="/signin">Regresar</router-link>
      </div>
    </v-form>
  </base-form>
</template>

<script>
import BaseForm from "../components/BaseForm";
import { formMixin } from "../mixins";
export default {
  data: () => {
    return {};
  },
  components: { BaseForm },
  mixins: [formMixin],
  methods: {}
};
</script>

<style>
</style>