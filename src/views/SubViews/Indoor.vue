<template>
  <v-container class="mt-4">
    <v-flex>
      <h1 class="ml-2 error--text titleIndoor">We're Indoor</h1>
    </v-flex>
    <v-flex>
      <v-img class="fotoIndoor" :src="require('@/assets/indoorPlant.jpg')"></v-img>
    </v-flex>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
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

.fotoIndoor {
  width: 95%;
  margin-top: 50px;
  margin-left: 60px;
}
</style>
