<template>
  <v-layout>
    <v-flex xs12 sm6>
      <v-carousel>
        <v-carousel-item v-for="flower in flowers" :src="flower.image" :key="flower.id">
          <div class="title">{{flower.name}}</div>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      flowers: [
        {
          image:
            "https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",
          name: "Chill",
          id: "a"
        },
        {
          image:
            "https://images.pexels.com/photos/1301981/pexels-photo-1301981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          name: "Enjoy",
          id: "b"
        },
        {
          image:
            "https://images.pexels.com/photos/1192327/pexels-photo-1192327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          name: "Peace",
          id: "c"
        },
        {
          image:
            "https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",
          name: "Live",
          id: "d"
        }
      ]
    };
  }
};
</script>

<style scoped>
div.title {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 50px !important;
  font-weight: 200;
  color: rgb(230, 255, 229);
  position: absolute;
  bottom: 50px;
  left: 200px;
}
</style>
