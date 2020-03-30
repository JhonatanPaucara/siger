<template>
  <div>
    <Menu />
    <session-tool-bar />
    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script>
import SessionToolBar from "../components/SessionToolBar.vue";
import Menu from "../components/Menu.vue";
export default {
  components: { SessionToolBar, Menu }
};
</script>

<style>
</style>