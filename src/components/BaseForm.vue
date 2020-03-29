<template>
  <v-content>
    <v-container fill-height>
      <v-layout align-center justify-center wrap>
        <v-flex xs12 sm6 class="text-center">
          <v-card class="pa-5">
            <v-layout wrap align-center justify-center>
              <v-flex xs3>
                <v-img src="../assets/logo.png" />
              </v-flex>
            </v-layout>
            <v-card-text>
              <h2>{{title}}</h2>
              <slot name="body"></slot>
              <v-alert dark color="red" v-show="Boolean(error)">{{error}}</v-alert>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  props: ["title", "error"]
};
</script>

<style>
</style>