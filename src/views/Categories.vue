<template>
  <v-container class="parallaxCategories pa-0">
    <!-- <v-parallax height="200" class="p-a-0" :src="require('@/assets/cactusPattern.jpg')"></v-parallax> -->

    <v-container grid-list-md text-xs-center>
      <v-flex xs12 class="p-a-0 mt-3 mb-3">
        <h1 class="titleCat mt-8 mb-2 primary--text" flat>WHAT FOR</h1>
      </v-flex>
      <v-flex class="whitebox">
        <v-layout align-center justify-center row fill-height>
          <v-flex xs6>
            <v-btn left color="error" fab large router to="/indoor">
              <v-icon>home</v-icon>
            </v-btn>
            <h3 class="pl-4">INDOOR</h3>
          </v-flex>
          <v-flex xs6>
            <v-btn right color="primary" fab large router to="/outdoor">
              <v-icon>park</v-icon>
            </v-btn>
            <h3 class="pr-4">OUTDOOR</h3>
          </v-flex>
        </v-layout>

        <v-layout class="mt-3" align-center justify-center row wrap fill-height>
          <v-flex xs6>
            <v-btn left color="info" fab large router to="/eatable">
              <v-icon>restaurant</v-icon>
            </v-btn>
            <h3 class="pl-4">COOK WITH</h3>
          </v-flex>
          <v-flex xs6>
            <v-btn right color="#cfedce" fab large to="/medicinal">
              <v-icon large color="white">local_hospital</v-icon>
            </v-btn>
            <h3 class="pr-4">MEDICINAL</h3>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-container>
  </v-container>
</template>


<script>
export default {};
</script>

<style>
.parallaxCategories {
  background-image: url("../assets/cactusPattern.jpg");
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
}
.whitebox {
  background-color: rgba(230, 252, 218, 0.762);
  margin-top: 100px;
  border-radius: 20px;
  width: 350px;
}
.titleCat {
  font-family: "Permanent Marker", cursive !important;
  font-weight: 100 !important;
  font-size: 50px;
}
</style>
