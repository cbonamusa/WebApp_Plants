<template>
  <v-flex>
    <v-text-field v-model="search" append-icon="search" label="Search" single-line></v-text-field>
    <v-layout row wrap>
      <v-flex class="mb-2" v-for="(plant, index) in searched" :key="index" xs12 sm4>
        <!-- in searched, esta es la funcion de filtros -->
        <v-card>
          <v-img height="90px" :src="plant.image" width="100%"></v-img>
          <v-card-title class="pl-3 pt-2 pb-1" primary-title>
            <div>
              <div class="titulo pt-0 mt-0 headline font-weight-black">{{plant.name}}</div>
              <div class="cientifico caption font-italic">{{plant.scientific}}</div>
              <span class="info--text font-weight-light">Cares your burn</span>
            </div>
          </v-card-title>

          <v-card-actions class="pt-0 mt-0">
            <v-btn flat icon small color="info" v-show="plant.category == 'Shrubs'">
              <v-icon>local_florist</v-icon>
            </v-btn>

            <v-btn flat icon small color="info" v-show="plant.category == 'Container Plants'">
              <v-icon>nature</v-icon>
            </v-btn>

            <v-btn flat icon small color="info" v-show="plant.category == 'Herbaceous Perennials'">
              <v-img :src="require('../assets/sprout.png')"></v-img>
            </v-btn>

            <v-btn flat icon small color="info" v-show="plant.category == 'Cacti & Succulents'">
              <v-img :src="require('../assets/cactus.png')"></v-img>
            </v-btn>

            <v-btn flat icon color="error">
              <v-icon>room</v-icon>
            </v-btn>

            <v-flex v-if="$store.state.user == null" color="gray">
              <v-icon>favorite</v-icon>
            </v-flex>
            <v-btn
              flat
              icon
              color="primary"
              v-if="$store.state.user "
              active-class="default-class"
              @click="corazon(plant)"
            >
              <v-icon>{{plant.fav != true ? 'favorite_border' : 'favorite'}}</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="showText(index)">
              <v-icon>{{show != index ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-transition>
            <v-card-text v-show="show == index">{{plant.instructions}}</v-card-text>
          </v-slide-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  props: ["plants"],

  data() {
    return {
      show: -1,
      search: "",
      on: -1
    };
  },

  computed: {
    searched() {
      return this.plants.filter(
        plant =>
          plant.name.toLowerCase().includes(this.search.toLowerCase()) ||
          plant.category.toLowerCase().includes(this.search.toLowerCase())
      ); // si quito el .name no me muetra ninguna card
    }
  },

  methods: {
    showText: function(index) {
      if (this.show == index) {
        this.show = -1;
      } else {
        this.show = index;
      }
    },
    corazon: function(card) {
      if (!card.fav) {
        //creamos una propiedad "fav"  que se modifica a true or false en onclic
        card.fav = true;
      } else {
        card.fav = false;
      }
      this.$forceUpdate(); //hace que se recarge la para modificar automaticamente la prop
    }
  }
};

// methods: {
//   myfetch() {
//     fetch("https://api.myjson.com/bins/96svt")
//       .then(function(result) {
//         return result.json;
//       })
//       .then(function(data) {
//         this.myplants = data;
//       })
//       .catch(Error);
//   }
// },
// created() {
//   this.myfetch();
//   console.log(this.myplants);
// }
</script>


<style>
.titulo {
  line-height: 25px !important;
  font-size: 19px !important;
  padding-left: 0px !important;
}
</style>
