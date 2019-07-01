<template>
  <v-app>
    <!-- despregable en Small -->
    <v-navigation-drawer app temporary width="190" v-model="SideNav" right>
      <v-icon @click="SideNav = !SideNav">closed</v-icon>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- NAVBAR -->
    <v-toolbar app dense fixed flat color="rgb(230 ,255, 229)">
      <v-btn icon>
        <v-icon @click="$router.go(-1)">arrow_back</v-icon>
      </v-btn>

      <v-btn icon href="/categories">
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <!-- Titulo visible en BIG -->
      <v-toolbar-title class="headline hidden-xs-only">
        <span>GARDENING</span>
        <span class="font-weight-light">•the new lifestyle</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Icons y links visibles en BIG -->
      <v-toolbar-items class="hidden-sm-and-down" v-for="item in menuItems" :key="item.tittle">
        <v-btn flat class="px-0" router :to="item.link">
          <v-icon small>{{item.icon}}</v-icon>
          <span class="pl-1">{{item.title}}</span>
        </v-btn>
      </v-toolbar-items>
      <!-- hamburgesa -->
      <v-toolbar-side-icon @click="SideNav = !SideNav" class="hidden-md-and-up">
        <v-icon>more_vert</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      SideNav: false,
      menuItems: [
        { icon: "home", title: "Home", link: "/" },
        { icon: "all_inclusive", title: "All Plants", link: "/allplants" },
        { icon: "local_florist", title: "Categories", link: "/categories" },
        { icon: "spa", title: "Care", link: "/care" },
        { icon: "chat", title: "Chat", link: "" },
        { icon: "person", title: "Profile", link: "" },
        { icon: "lock_open", title: "Log in", link: "/signin", hola: "try" }
      ]
    };
  }
};
</script>
