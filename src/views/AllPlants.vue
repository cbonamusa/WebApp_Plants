<template>
  <v-container>
    <div>
      <h1>Gardening for good</h1>
    </div>
    <v-container fluid class="pa-0">
      <v-layout row wrap>
        <cards></cards>
        <cards></cards>
        <cards></cards>
        <cards></cards>
        <cards></cards>
        <cards></cards>
      </v-layout>
    </v-container>
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
 