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
        <v-text-field
          prepend-icon="mdi-toy-brick-search-outline"
          v-model="search"
          label="Buscar ubicación"
          clearable
          clear-icon="mdi-close-circle-outline"
        ></v-text-field>
      </v-list-item>
      <v-list-item>
        <v-treeview
          v-model="tree"
          :search="search"
          :open="open"
          :items="items"
          activatable
          item-key="name"
          open-on-click
        >
          <template v-slot:prepend="{ item}">
            <v-icon>{{ item.level=="country" ? country : (item.level=="company" ? company : location)}}</v-icon>
          </template>
        </v-treeview>
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
      drawer: true,
      search: null,
      open: ["Perú"], //array of keys for opened items
      country: "mdi-earth",
      company: "mdi-domain",
      location: "mdi-car-battery",
      tree: [],
      items: [
        {
          level: "country",
          name: "Ecuador"
        },
        {
          level: "country",
          name: "Brasil"
        },
        {
          level: "country",
          name: "Perú",
          children: [
            {
              level: "company",
              name: "REP",
              children: [
                {
                  level: "location",
                  name: "SE San Juan"
                }
              ]
            },
            {
              level: "company",
              name: "DIACSA",
              children: [
                {
                  level: "location",
                  name: "Oficina"
                }
              ]
            }
          ]
        }
      ]
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