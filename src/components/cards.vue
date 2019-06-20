<template>
  <v-flex class="pb-2 px-1" xs6 sm4>
    <v-card>
      <v-img
        height="90px"
        src="https://ecocosas.com/wp-content/uploads/2018/12/cultivar-aloe-vera.jpg"
        width="100%"
      ></v-img>
      <v-card-title primary-title>
        <div>
          <div class="pt-0 mt-0 headline font-weight-black">Aloe Vera</div>
          <div class="caption font-italic">Aloe vera</div>
          <span class="info--text font-weight-light">Cares your burn</span>
        </div>
      </v-card-title>
      <v-card-actions>
        <!-- <v-btn flat icon color="info">
            <v-icon>nature</v-icon>
        </v-btn>  SEGUN LA PLANTA SERA ESTE O EL DE ABAJO-->
        <v-btn flat icon small color="info">
          <v-icon>local_florist</v-icon>
        </v-btn>

        <v-btn flat icon color="error">
          <v-icon>room</v-icon>
        </v-btn>
        <v-btn flat icon color="primary">
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{show ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-slide-y-transition>
        <v-card-text v-show="show">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum, qui repellat doloribus tempore rem nemo officia quae
          aperiam quisquam esse placeat amet beatae sequi quasi fugit
          neque nihil. Distinctio, ab.
        </v-card-text>
      </v-slide-y-transition>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    show: false
  })
};
</script>


<style>
</style>
