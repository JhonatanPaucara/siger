<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex pa-2 xs12 sm6 md4 v-for="(variable,i) in variables" :key="i">
        <v-card>
          <v-card-title>{{variable}}</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      variables: [0, 1, 2, 3, 4, 5]
    };
  }
};
</script>

<style>
</style>