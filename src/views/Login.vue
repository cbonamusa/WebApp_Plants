<template>
  <v-container class="parallax">
    <div>
      <h1 class="loginTitle">Log In</h1>
    </div>
    <v-card sx12 class="cardLog elevation-12">
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
          <v-text-field
            prepend-icon="lock"
            name="password"
            label="Password"
            id="password"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-flex xs9>
        <v-btn class="botonLog ml-4" block color="primary">Login</v-btn>
      </v-flex>
      <h6 class="or">or</h6>
      <v-btn class="botongoogle" @click="login">
        <v-avatar class="imgsize">
          <v-img :src="require('@/assets/google.png')"></v-img>
        </v-avatar>LogIN with Google
      </v-btn>
    </v-card>

    <!-- <div id="firebaseui-auth-container"></div> -->
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
    login() {
      var provider = new firebase.auth.GoogleAuthProvider();
      // provider.setCustomParameters({ login_hint: "user@example.com" });
      console.log("entra la funcion Login provider");
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
          console.log("entree");
          //enviamos a store todo el user

          this.$store.commit("setUsers", firebase.auth().currentUser);
          this.$router.push("/");
        })
        .catch(err => alert(err));
    }
  }
  //   mounted() {  THIS IS FIREBASEUI -- USING USUAL FIREBASE TO AVOID PROBLEMS WITH UI
  //     this.$store.state.ui.start("#firebaseui-auth-container ", {
  //       signInSuccessUrl: "/",
  //       signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
  //     });
  //     firebase.auth().onAuthStateChanged(user => {
  //       if (user) {
  //         // let name = firebase.auth().currentUser.displayName;
  //         this.$store.commit("setUsers", user);
  //       } else {
  //         console.log("no estoy loggi");
  //         // No user is signed in.
  //       }
  //     });
  //     setTimeout(this.click, 2000);
  //   }
  // };
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
  margin-top: 50px;
  height: 450px;
  background: none !important;
  background-image: url("../assets/loader_leaf.gif") !important;

  background-size: 200px !important;
  background-repeat: no-repeat !important;
  background-position-x: center !important;
}
.firebaseui-busy-indicator {
  display: none;
}

.cardLog {
  width: 300px;
  height: 330px;
  margin-left: 35px;
  border-radius: 10px;
  background-color: rgba(234, 250, 241, 0.536) !important;
}
.botonLog {
  position: relative;
  align-self: center;
  align-items: center;
  margin-left: 40px !important;
  width: 220px !important;
  margin-bottom: 30px;
  margin-top: 0px;
}

.or {
  font-size: 20px;
  font-weight: 500;
  margin-left: 140px;
  margin-top: -10px;
}

.botongoogle {
  display: flex;
  position: absolute;
  background-position-x: center;
  margin-left: 40px;
  margin-top: 15px;
  height: 43px;
  border-radius: 6px;
}
.imgsize {
  position: relative;
  margin-left: -10px;
  margin-right: 10px;
}
</style>

