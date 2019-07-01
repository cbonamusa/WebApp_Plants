import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Categories from "./views/Categories"
import Signin from "./views/Signin.vue";
import AllPlants from "./views/AllPlants.vue";
import Indoor from "./views/SubViews/Indoor.vue";
import Outdoor from "./views/SubViews/Outdoor.vue";
import Eatable from "./views/SubViews/Eatable.vue";
import Medicinal from "./views/SubViews/Medicinal.vue";
import Care from "./views/Care.vue";




Vue.use(Router);

export default new Router({


  routes: [
    {
      path: "/care",
      name: "care",
      component: Care
    },
    {
      path: "/medicinal",
      name: "medicinal",
      component: Medicinal
    },
    {
      path: "/eatable",
      name: "eatabe",
      component: Eatable
    },
    {
      path: "/outdoor",
      name: "outdoor",
      component: Outdoor
    },
    {
      path: "/indoor",
      name: "indoor",
      component: Indoor
    },
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
      path: "/",
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
