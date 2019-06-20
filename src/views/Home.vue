<template>
  <v-container class="pa-0">
    <v-parallax class="p-a-0" height="300" :src="require('@/assets/02_hojas.jpg')"></v-parallax>

    <v-flex>
      <h1 class="pl-2 teal darken-4 white--text font-weight-medium display-3">GARDENING</h1>
    </v-flex>
    <v-flex>
      <p class="pa-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est libero odio voluptatem fugit.
        Deserunt impedit labore assumenda quo magnam, dicta voluptate fugit?
        Quaerat dolores saepe sed accusamus, a aliquam! Necessitatibus.
      </p>
    </v-flex>
    <carrousel></carrousel>
  </v-container>
</template>

 <script>
import carrousel from "../components/carrousel";
export default {
  components: {
    carrousel
  }
};
</script>

<style lang="scss">
</style> 

