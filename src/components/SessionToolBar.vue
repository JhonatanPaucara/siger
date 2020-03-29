<template>
  <v-app-bar dense color="primary" dark clipped-left>
    <v-app-bar-nav-icon @click="openDrawer" />
    <v-toolbar-title>Titulo</v-toolbar-title>
    <v-spacer></v-spacer>
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