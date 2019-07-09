import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";



Vue.config.productionTip = false;


new Vue({

  router,
  store,

  render: h => h(App),
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyDwfSP_ZPtjcn9SkJDlM3LOvaFJRq1HxDE",
      authDomain: "plantuari.firebaseapp.com",
      databaseURL: "https://plantuari.firebaseio.com",
      projectId: "plantuari",
      storageBucket: "",
      messagingSenderId: "766333628570",
      appId: "1:766333628570:web:0b18f0cca22825f7"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //call firebaseUi from store
    this.$store.dispatch("createUI");

    //trial
    firebase
      .database()
      .ref("chat")
      .on("value", data => {
        console.log(data.val());

        document.getElementById("mensajes").innerHTML = "";

        for (let key in data.val()) {
          let element = data.val()[key];

          let p = document.createElement("p");
          p.append(element.text);
          document.getElementById("mensajes").append(p);
        }
      });

    console.log('get');
  }
}
)
  .$mount("#app");
