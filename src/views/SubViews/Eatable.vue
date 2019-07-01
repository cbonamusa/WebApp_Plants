<template>
  <v-container class="mt-4">
    <v-flex>
      <h1 class="ml-2 info--text titleEat">Cook with us!</h1>
    </v-flex>
    <v-flex>
      <v-img class="fotoEat" :src="require('@/assets/cook.jpg')"></v-img>
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
    <cards :plants="cookplants"></cards>
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
    cookplants() {
      return this.myplants.filter(plant => {
        console.log(plant);
        return plant.type.includes("food");
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
.titleEat {
  font-family: "Permanent Marker", cursive !important;
  font-weight: 100 !important;
  font-size: 80px;
  margin-top: 10px;
  line-height: 70px;
  z-index: 1;
  margin-left: -3px;
  position: absolute;
}

.fotoEat {
  width: 75%;
  margin-top: 65px;
  margin-left: 90px;
}
</style>