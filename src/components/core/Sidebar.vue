<template>
  <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app width="300px">
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="../../assets/logo.jpg" alt="Violet Hall"></v-img>
      </v-list-item-avatar>
        <v-list-item-title class="title">Violet Hall</v-list-item-title>
      <v-btn icon @click.stop="mini = !mini" aria-label="collapse">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="`/${item.route}`"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  data: () => ({
    drawer: true,
    mini: true,
    items: [
      {
        title: "Home",
        icon: "mdi-home",
        route: "",
      },
      {
        title: "Portfolio",
        icon: "mdi-image",
        route: "portfolio",
      },
      { title: "Resume", icon: "mdi-file-outline", route: "resume" },
    ],
  }),
};
</script>