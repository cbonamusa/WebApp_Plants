import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Categories from "./views/Categories"
import Signin from "./views/Signin.vue";
import AllPlants from "./views/AllPlants.vue";




Vue.use(Router);

export default new Router({


  routes: [
    {
      path: "/allplants",
      name: "allplants",
      component: AllPlants
    },
    {
      path: "/categories",
      name: "Categories",
      component: Categories

    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin

    },


  ],
  mode: "history"
});
