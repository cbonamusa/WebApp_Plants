<template>
  <v-container class="pa-0">
    <v-parallax height="200" class="p-a-0" :src="require('@/assets/02_plantCollect.jpg')"></v-parallax>

    <v-container grid-list-md text-xs-center>
      <v-flex xs12 class="p-a-0 mt-1">
        <h1 class="mb-4 primary--text" flat>WHAT FOR</h1>
      </v-flex>

      <v-layout align-center justify-center row fill-height>
        <v-flex xs6>
          <v-btn left color="error" fab large router to="/">
            <v-icon>home</v-icon>
          </v-btn>
          <h3 class="pl-4">INDOOR</h3>
        </v-flex>
        <v-flex xs6>
          <v-btn right color="primary" fab large router to="/">
            <v-icon>park</v-icon>
          </v-btn>
          <h3 class="pr-4">OUTDOOR</h3>
        </v-flex>
      </v-layout>

      <v-layout class="mt-3" align-center justify-center row wrap fill-height>
        <v-flex xs6>
          <v-btn left color="info" fab large router to="/">
            <v-icon>restaurant</v-icon>
          </v-btn>
          <h3 class="pl-4">COOK WITH</h3>
        </v-flex>
        <v-flex xs6>
          <v-btn right color="#cfedce" fab large router to="/">
            <v-icon large color="white">local_hospital</v-icon>
          </v-btn>
          <h3 class="pr-4">MEDICINAL</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>


<script>
export default {};
</script>

<style>
</style>
