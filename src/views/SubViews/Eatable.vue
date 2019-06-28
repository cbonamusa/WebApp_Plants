<template>
  <v-container>
    <v-flex>
      <h1 class="ml-2 info--text titleEat">Cook with us!</h1>
    </v-flex>
    <v-flex>
      <v-img class="fotoEat" :src="require('@/assets/cook.jpg')"></v-img>
    </v-flex>
  </v-container>
</template>

<script>
export default {};
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