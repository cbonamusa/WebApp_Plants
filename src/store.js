import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import firebaseui from "firebaseui";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ui: ""
  },
  mutations: {},

  actions: {
    createUI() {
      this.state.ui = new firebaseui.auth.AuthUI(firebase.auth());
    }

  }
});
