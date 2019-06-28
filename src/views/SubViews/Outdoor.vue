<template>
  <v-container>
    <v-flex>
      <h1 class="ml-2 primary--text titleOut">We're Outdoor</h1>
    </v-flex>
    <v-flex>
      <v-img class="fotoOut" :src="require('@/assets/outdoor3.jpg')"></v-img>
    </v-flex>
  </v-container>
</template>

<script>
export default {};
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