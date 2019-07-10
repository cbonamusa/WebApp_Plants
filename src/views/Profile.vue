<template>
  <v-container>
    <h1>TESTING PROFILE</h1>
    <h2>{{$store.state.user}}</h2>
    <v-btn @click="holaMaricarmen"></v-btn>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  mounted() {
    console.log(firebase.auth().currentUser); //ESTE SALE EN BASE PROFILE
    this.$store.dispatch("getData");
  },
  methods: {
    holaMaricarmen() {
      console.log(firebase.auth().currentUser); //ESTE SALE EN BASE STORE
    }
  }
};
</script>

<style>
</style>
