<template>
  <v-app-bar app dense color="primary" dark clipped-left>
    <v-app-bar-nav-icon @click="openDrawer" />
    <v-toolbar-title>Sistema de Gestión de Energía Renovable</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import bus from "../bus";
export default {
  methods: {
    openDrawer() {
      bus.$emit("openDrawer");
    }
  }
};
</script>

<style>
</style>