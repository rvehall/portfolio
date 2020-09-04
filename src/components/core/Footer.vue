<template>
  <v-footer color="grey darken-3" padless>
    <v-row justify="center" no-gutters>
      <v-btn v-for="item in items" :key="item.text" color="white" text rounded class="my-2" dark @click="open(item)">
        <v-icon>{{ item.icon }}</v-icon>
        {{ item.text }}
      </v-btn>
      <v-col class="grey darken-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Violet Hall</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Home",
        icon: "mdi-home",
        url: "/",
        external: false,
      },
      {
        text: "Portfolio",
        icon: "mdi-image",
        url: "/portfolio",
        external: false,
      },
      {
        text: "Resume",
        icon: "mdi-file-outline",
        url: "/resume",
        external: false,
      },
      {
        text: "GitHub",
        icon: "mdi-github",
        url: "http://www.github.com/rvehall",
        external: true,
      },
      {
        text: "Linkedin",
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/rvehall/",
        external: true,
      },
    ],
  }),
  methods: {
    open: function (item) {
      if (item.external) {
        window.open(item.url, "_blank");
      } else {
        this.$vuetify.goTo(0).then(() => this.$router.push(item.url));
        // this.$router.push(item.url);
      }
    },
  },
};
</script>