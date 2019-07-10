import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import firebaseui from "firebaseui";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ui: "",
    user: null, //null mejor que "" 
    logeado: "", //mandar algo si/no para hacer v-if que esconda login i aparezca singup
    plants: "",
    showbox: true
  },
  mutations: {
    setUsers(state, value) {
      state.user = value
    },
    setPlants(state, value) {
      state.plants = value
    }
  },

  actions: {
    createUI(context) {
      context.state.ui = new firebaseui.auth.AuthUI(firebase.auth());
    },
    getJson(context) {
      axios
        .get("https://api.myjson.com/bins/pkm83")
        .then(response => (context.commit("setPlants", response.data.allplants)))
    },
  },
  getters: {
    todasPlantas(state) {
      return state.plants
    }
  }
});
