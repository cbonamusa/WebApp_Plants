<template>
  <v-container>
    <v-flex>
      <h1 class="titleMed ml-2 info--text">Care Tips</h1>
    </v-flex>
    <div class="imageDiv"></div>
    <v-flex>
      <h2 class="extratextCare">
        There are plenty of ways to care for your plant. With the help of our plant experts,
        we’ve weeded out the Top Ten Tips for healthy, happy plants.
      </h2>
    </v-flex>
    <v-flex>
      <h3 class="large info--text">1.</h3>
      <h4 class="extratext">Choose Plants Based on Light in your Space</h4>
      <p class="basicTxt">
        Are the plants you love the ones you can have? The​ available light in your
        space will help you decide. Check the direction your windows are facing;
        south-facing windows give bright light, east/west-facing windows give moderate
        light and north-facing windows give low light. Most houseplants prefer bright,
        indirect sunlight. If the sun is intense through your windows, add a lovely
        sheer curtain to diffuse the light. Cacti and some succulents like aloe can of
        course handle brighter, direct sunlight. You don’t want to overexpose or
        underexpose any plant. They need the right amount of light to live.
      </p>
    </v-flex>

    <v-flex>
      <h3 class="large info--text">2.</h3>
      <h4 class="extratext">Figure Out Your Plant Compatibility</h4>
      <p class="basicTxt">
        New to plant parenthood? A busy ​work schedule, social​ ​life and general forgetfulness
        can lead to unintentional plant neglect. It’s okay. Some plants can handle that kind
        of lifestyle. A jetsetter like yourself will enjoy the resilience of low-maintenance
        succulents, ZZ plants or snake plants, all pretty low key, as long as they have enough
        light (bright and low light respectively). These should keep looking their best when you
        return from your next trip.
        If you’ve got more time, you can try a few attention-loving air plants, orchids or ferns.
        Like a mist for the face, an extra spritz of filtered water daily between waterings keeps
        humidity levels nice and balanced for these delicate plants.
      </p>
    </v-flex>

    <v-flex>
      <h3 class="large info--text">3.</h3>
      <h4 class="extratext">​ ​Let it Flow</h4>
      <p class="basicTxt">
        When you move your plant to a new, larger planter, whether it’s terra cotta, ceramic,
        or fiber glass, make sure it has drainage, a fancy word for “hole at the bottom”.
        This will prevent overwatering as any excess water will have a place to flow. Get a
        saucer or tray and place it underneath to avoid a wet floor or window sill.
        You can get DIY and make your own drainage by lining the bottom of your planter with
        rocks to create crevices for the water to drain into. Here at The Sill, we use lava
        rocks because they’re porous.
      </p>
    </v-flex>

    <v-flex>
      <h3 class="large info--text">4.</h3>
      <h4 class="extratext">​ ​Less (Water) Is More</h4>
      <p class="basicTxt">
        It’s better to under water your plants than to overwater. Too much water can lead
        to root rot. Ditch your water schedule and water your plant only when it needs it.
        Check the soil first to make sure it’s dry at least 2 inches deep below the surface.
        If your soil looks dark in color, feels moist, and sticks to your finger, your plant
        has enough water to do it’s thing for now.
        How often you water will also change throughout the year. Plants need less water in the winter,
        when they’re growing slower, the days are shorter and sunlight is less intense. If the heat is
        on and the soil is drying quicker, they may need a bit more water. Wilting leaves or soil that
        looks pulled away from the sides of the planter are signs of a thirsty plant.
      </p>
    </v-flex>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.basicTxt {
  margin-left: 10px;
  margin-right: 5px;
  margin-top: 5px;
}
.imageDiv {
  margin-top: 70px;
  height: 200px;
  background-size: 100%;
  background-image: url("https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
}
.large {
  font-size: 30px;
  font-family: "Permanent Marker", cursive !important;
}
.extratext {
  line-height: 30px;
  font-weight: 700;
}
.extratextCare {
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
  font-family: "Nothing You Could Do", cursive;
  background-color: rgba(234, 237, 234, 0.925);
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  line-height: 25 px;
  z-index: 1;
}
</style>
