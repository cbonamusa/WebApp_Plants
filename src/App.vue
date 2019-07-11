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

        <v-list-tile
          v-if="$store.state.user == null"
          v-for="item in notlogged"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-if="$store.state.user"
          v-for="item in loggedItems"
          :key="item.title"
          router
          :to="item.link"
          @click="item.click=logout"
        >
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>

        <v-list-tile
          v-if="$store.state.user"
          v-for="item in logOut"
          :key="item.title"
          router
          :to="item.link"
          @click="logout"
        >
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
/* eslint-disable */
import firebase from "firebase";
export default {
  name: "App",
  components: {},
  data() {
    return {
      SideNav: false,
      menuItems: [
        { icon: "home", title: "Home", link: "/", click: "" },
        {
          icon: "all_inclusive",
          title: "All Plants",
          link: "/allplants",
          click: ""
        },
        {
          icon: "local_florist",
          title: "Categories",
          link: "/categories",
          click: ""
        },
        { icon: "spa", title: "Care", link: "/care", click: "" }
      ],

      notlogged: [
        {
          icon: "lock_open",
          title: "Log in",
          link: "/login",
          click: ""
        }
      ],

      loggedItems: [
        { icon: "chat", title: "Chat", link: "", click: "" },
        { icon: "person", title: "Profile", link: "", click: "" }
      ],
      logOut: [
        {
          icon: "lock",
          title: "Log out",
          link: "/",
          click: "logout"
        }
      ]
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("loooogout");
          this.$store.state.user = null;
        })
        .catch(function(error) {
          // An error happened.
        });
    }
  }
};
</script>
