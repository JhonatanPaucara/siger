import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

import SignUpForm from "./views/SignUpForm.vue";
import SignInForm from "./views/SignInForm.vue";
import ResetForm from "./views/ResetForm.vue";
import Home from "./views/Home.vue";
import VarList from "./components/VarList";
const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "",
        component: VarList
      }
    ]
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
