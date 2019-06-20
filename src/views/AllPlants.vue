<template>
  <v-container>
    <div>
      <h1>Gardening for good</h1>
    </div>

    <cards></cards>
    <cards></cards>
  </v-container>
</template>


 <script>
import cards from "../components/cards.vue";
export default {
  components: {
    cards
  }
};
</script>
 