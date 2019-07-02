<template>
  <v-container class="mt-4">
    <v-flex>
      <h1 class="ml-2 error--text titleIndoor">We're Indoor</h1>
    </v-flex>
    <div class="fotodiv">
      <!-- <v-img class="fotoIndoor" :src="require('@/assets/indoorPlant.jpg')"></v-img> -->
    </div>
    <v-flex class="textflex">
      <h3 class="extraMed">
        In your garden, in your patio, and even in your kitchen there are plants
        that yield unexpected benefits.
      </h3>

      <p class="basicMed">
        Health is closer than one might think. In fact, you may find it in your very,
        perhaps in that lush rosemary that grows on your backyard, or in the basil you keep
        in your kitchen. Here are 10 common plants that have healing properties you may not
        have known about:
      </p>
    </v-flex>

    <cards :plants="indoorplants"></cards>
  </v-container>
</template>

<script>
import cards from "../../components/cards.vue";
import axios from "axios";
export default {
  data() {
    return {
      myplants: []
    };
  },
  components: {
    cards
  },
  computed: {
    indoorplants() {
      return this.myplants.filter(plant => {
        console.log(plant);
        return plant.type.includes("indoor");
      });
    }
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/kw28v")
      .then(response => (this.myplants = response.data));
  }
};
</script>

<style>
.fotodiv {
  width: 300px;
  height: 425px;
  background-image: url("../../assets/indoorPlant.jpg");
  background-size: 100%;
  margin-left: 60px;
}
.titleIndoor {
  font-family: "Permanent Marker", cursive !important;
  font-weight: 100 !important;
  font-size: 80px;
  margin-top: 50px;
  line-height: 70px;
  z-index: 1;
  margin-left: -3px;
  position: absolute;
}

/* .fotoIndoor {
  width: 95%;
  margin-top: 50px;
  margin-left: 60px;
} */
</style>
