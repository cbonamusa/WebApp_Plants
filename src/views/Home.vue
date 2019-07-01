<template >
  <v-container class="parallax pa-0">
    <v-parallax class="p-a-0" height="200"></v-parallax>

    <v-flex>
      <h1 class="titleHome pl-2 teal darken-4 white--text font-weight-medium display-3">GARDENING</h1>
    </v-flex>
    <v-flex>
      <p class="basictextHome pa-3">
        To such an extent does nature delight and abound in variety that among her trees
        there is not one plant to be found which is exactly like another; and not only among
        the plants, but among the boughs, the leaves and the fruits, you will not find
        one which is exactly similar to another.
      </p>
    </v-flex>
    <h2 class="extratextHome">Get us arround!</h2>
    <v-flex class="foto" align-end>
      <v-img :src="require('@/assets/01_interior.jpg')"></v-img>
    </v-flex>

    <v-flex>
      <p class="basictextHome pa-3">
        Of all the plants that cover the earth and lie like a fringe of hair upon the body
        of our grandmother, try to obtain knowledge that you may be strengthened in life.
      </p>
    </v-flex>

    <!-- <carrousel></carrousel> -->
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

<style>
.foto {
  width: 70%;
  margin-left: 90px;
  margin-top: 40px;
  box-shadow: 10px 10px 30px #082b04af;
  z-index: -1;
}
.extratextHome {
  position: absolute;
  margin-top: 60px;
  margin-left: 30px;
  font-family: "Nothing You Could Do", cursive;
  background-color: rgba(234, 237, 234, 0.925);
  font-weight: 900;
  font-size: 30px;
  text-align: center;
  line-height: 1.5em;
  z-index: 1;
}
.parallax {
  background-image: url("https://i.pinimg.com/564x/e3/b5/44/e3b54488966e2aed98677a3765aceaba.jpg");
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  overflow: scroll;
}

.titleHome {
  font-family: "Permanent Marker", cursive !important;
  font-weight: 100 !important;
  font-size: 50px;
  margin-top: -80px !important;
}

.basictextHome {
  font-family: monospace;
  font-weight: 1000;
  background-color: rgba(240, 255, 249, 0.838);
  margin-top: 40px;
}
</style> 

