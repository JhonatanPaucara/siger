import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import moduleUser from "./user";

export default new Vuex.Store({
  modules: [moduleUser]
});
