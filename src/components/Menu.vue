<template>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-avatar size="32">
            <img :src="user.photoUrl" />
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-title>{{user.displayName}}</v-list-item-title>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-action>
          <v-icon>mdi-lock</v-icon>
        </v-list-item-action>
        <v-list-item-title>Opcion 1</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import photoDefault from "../assets/maleIcon.svg";
import bus from "../bus";
export default {
  data: () => {
    return {
      drawer: true
    };
  },
  computed: {
    user() {
      var user = this.$store.getters.getCurrentUser;
      if (!user) {
        return {
          photoUrl: photoDefault,
          displayName: "Jhonatan P."
        };
      } else {
        return user;
      }
    }
  },
  beforeMount() {
    bus.$on("openDrawer", () => {
      this.drawer = !this.drawer;
    });
  }
};
</script>

<style>
</style>