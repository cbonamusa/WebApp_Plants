<template>
  <v-container class="mt-4">
    <v-flex>
      <h1 class="ml-2 primary--text titleOut">We're Outdoor</h1>
    </v-flex>
    <v-flex>
      <v-img class="fotoOut" :src="require('@/assets/outdoor3.jpg')"></v-img>
    </v-flex>
    <v-flex>
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
    <cards :plants="outdoorplants"></cards>
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
    outdoorplants() {
      return this.myplants.filter(plant => {
        return plant.type.includes("outdoor");
      });
    }
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/k5vcf")
      .then(response => (this.myplants = response.data));
  }
};
</script>

<style>
.titleOut {
  font-family: "Permanent Marker", cursive !important;
  font-weight: 100 !important;
  font-size: 80px;
  margin-top: 10px;
  line-height: 70px;
  z-index: 1;
  margin-left: -3px;
  position: absolute;
}

.fotoOut {
  width: 90%;
  margin-top: 50px;
  margin-left: 40px;
}
</style>