<template>
  <v-container class="containercartas">
    <div></div>
    <h3 class="extratext">All we need is sun</h3>
    <div class="mb-4">
      <h5 class="basictext mb-4">
        If you're itching to exercise your green thumb, looking for fresh landscaping ideas,
        or just get a kick out of browsing beautiful pictures of flowers (understandable),
        then you've come to the right place.
        Consider this your complete guide on the best blooms to plant in your backyard,
        from peonies to orchids and everything in between.
        While the majority of these pretty plants fully blossom come spring or summer,
        you can still browse plenty of low-maintenance petals that bloom year round.
      </h5>
      <v-icon>fab fa-pagelines</v-icon>
      <h1 class="bigtext">Flower &Plants</h1>
    </div>

    <v-container grid-list-md class="pa-0">
      <!-- props generate space between cards -->
      <cards :plants="myplants"></cards>
    </v-container>
  </v-container>
</template>


 <script>
import cards from "../components/cards.vue";
import axios from "axios";
export default {
  components: {
    cards
  },
  data() {
    return {
      myplants: []
    };
  },
  mounted() {
    axios
      .get("https://api.myjson.com/bins/pkm83")
      .then(response => (this.myplants = response.data.allplants));
  }
};
</script>

<style>
/* .containercartas {
  background-image: 
  background-attachment: fixed;
} */
.bigtext {
  font-family: "Permanent Marker", cursive !important;
  font-size: 80px;
  line-height: 70px;
}

.basictext {
  margin-top: 15px;
  font-family: monospace;
  font-weight: 300;
  font-size: 15px;
  line-height: 1.5em;
}

.extratext {
  margin-top: 5px;
  font-family: "Nothing You Could Do", cursive;
  /* font-family: "Tangerine", cursive; */
  font-weight: 100;
  font-size: 30px;
  text-align: center;
  line-height: 1.5em;
}
</style>

 