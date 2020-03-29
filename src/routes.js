import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import SignUpForm from "./views/SignUpForm.vue";
import SignInForm from "./views/SignInForm.vue";
import ResetForm from "./views/ResetForm.vue";
import Home from "./views/Home.vue";
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/signup",
    component: SignUpForm
  },
  {
    path: "/signin",
    component: SignInForm
  },
  {
    path: "/resetpassword",
    component: ResetForm
  }
];

export default new VueRouter({
  routes: routes
});
