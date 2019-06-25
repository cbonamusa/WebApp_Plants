<template>
  <v-flex class="pb-2 px-1" xs6 sm4>
    <v-card v-for="plant in myplants" :key="plant.category">
      <v-img height="90px" :src="plant.image" width="100%"></v-img>
      <v-card-title primary-title>
        <div>
          <div class="pt-0 mt-0 headline font-weight-black">{{plant.name}}</div>
          <div class="caption font-italic">Aloe vera</div>
          <span class="info--text font-weight-light">Cares your burn</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <!-- <v-btn flat icon color="info">
            <v-icon>nature</v-icon>
        </v-btn>  SEGUN LA PLANTA SERA ESTE O EL DE ABAJO-->
        <v-btn flat icon small color="info" v-show="plant.category == 'Shrubs'">
          <v-icon>local_florist</v-icon>
        </v-btn>
        <v-btn flat icon small color="info" v-show="plant.category == 'Container Plants'">
          <v-icon>nature</v-icon>
        </v-btn>

        <v-btn flat icon small color="info" v-show="plant.category == 'Herbaceous Perennials'">
          <v-icon>leave</v-icon>
        </v-btn>

        <v-btn flat icon small color="info" v-show="plant.category == 'Cacti & Succulents'">
          <v-icon>cactus</v-icon>
        </v-btn>

        <v-btn flat icon color="error">
          <v-icon>room</v-icon>
        </v-btn>
        <v-btn flat icon color="primary">
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{show ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">{{plant.instructions}}</v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      show: false,
      myplants: []
    };
  },

  mounted() {
    axios
      .get("https://api.myjson.com/bins/96svt")
      .then(response => (this.myplants = response.data));
  }

  // methods: {
  //   myfetch() {
  //     fetch("https://api.myjson.com/bins/96svt")
  //       .then(function(result) {
  //         return result.json;
  //       })
  //       .then(function(data) {
  //         this.myplants = data;
  //       })
  //       .catch(Error);
  //   }
  // },
  // created() {
  //   this.myfetch();
  //   console.log(this.myplants);
  // }
};
</script>


<style>
</style>
