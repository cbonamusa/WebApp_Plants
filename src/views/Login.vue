<template>
  <v-container class="parallax">
    <div>
      <h1 class="loginTitle">Log In</h1>
    </div>
    <v-layout row>
      <v-flex>
        <!-- <v-text-field name="name" v-model="name" requiered></v-text-field> -->
      </v-flex>
    </v-layout>

    <div id="firebaseui-auth-container"></div>
  </v-container>
</template>

<script>
import firebaseui from "firebaseui";
import firebase from "firebase";

export default {
  data() {
    return {};
  },
  methods: {
    // login() {
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     provider.setCustomParameters({ login_hint: "user@example.com" });
    //     firebase.auth().signInWithPopup(provider)
    //   }
  },
  mounted() {
    this.$store.state.ui.start("#firebaseui-auth-container ", {
      signInSuccessUrl: "/profile",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]

      // name = firebase.auth().currentUser.displayName;
    });
  }
};
</script>

<style>
.loginTitle {
  font-family: "Permanent Marker", cursive !important;
  color: rgb(59, 152, 5);
  margin-bottom: 70px;
  font-weight: 100 !important;
  font-size: 70px;
  margin-top: -150px !important;
  margin-left: 50px;
}

.firebaseui-id-page-callback {
  margin-top: 20px;
  height: 500px;
  background: none !important;
  background-image: url("../assets/loader_leaf.gif") !important;
  background-size: 200px !important;
  background-repeat: no-repeat !important;
  background-position-x: center !important;
}
.firebaseui-busy-indicator {
  display: none;
}
</style>

