<template>
  <v-container class="parallax">
    <div>
      <h1 class="loginTitle">Log In</h1>
    </div>

    <b-btn>Log in</b-btn>
  </v-container>
</template>

<script>
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

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

export default {};
</script>

<style>
.loginTitle {
  font-family: "Permanent Marker", cursive !important;
  color: rgb(13, 28, 4);
  font-weight: 100 !important;
  font-size: 80px;
  margin-top: -150px !important;
  margin-left: 50px;
}
</style>

