<template>
  <v-row class="ma-2">
    <v-col cols="12" md="4" class="pa-3 d-flex flex-column" v-for="item in items" :key="item.title">
      <v-card class="elevation-5 flex d-flex flex-column">
        <v-card-title primary-title v-text="item.title"></v-card-title>
        <v-card-subtitle v-text="item.type"></v-card-subtitle>
        <v-card-text class="flex" v-text="item.text"></v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            v-for="link in item.links"
            :key="link.name"
            :aria-label="link.title"
            text
            color="deep-blue"
            outlined
            @click="open(link)"
            target="_blank"
          >{{link.title}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Software",

  data: () => ({
    items: [
      {
        title: "iSorry",
        type: "jQuery | Cordova",
        text:
          "If you or someone you know needs to say 'I'm sorry' but won't, use this.",
        links: [
          {
            title: "Github",
            url: "https://github.com/rvehall/iSorry",
          },
          {
            title: "Play Store",
            url: "https://play.google.com/store/apps/details?id=io.cordova.isorry",
          },
        ],
      },
      {
        title: "Advice and Dad Jokes",
        type: "React Native",
        text: "A React Native app that will give you dad jokes or advice.",
        links: [
          {
            title: "Github",
            url: "https://github.com/rvehall/advice-jokes",
          },
          {
            title: "Expo",
            url: "https://expo.io/@rvehall/mediation",
          },
        ],
      },
      {
        title: "Countdown",
        type: "Vue",
        text:
          "An NPM package for Vue for a Countdown timer. ",
        links: [
          {
            title: "Github",
            url: "https://github.com/rvehall/countdown-vue",
          },
          {
            title: "npm",
            url: "https://www.npmjs.com/package/countdown-vue",
          },
        ],
      },
      {
        title: "Advice and Dad JokesMoocher - API (WIP)",
        type: ".NET Core | Mongo",
        text: "This is an eCommerce API paired with the Moocher - Front End.",
        links: [
          {
            title: "Github",
            url: "https://github.com/rvehall/moocher",
          },
        ],
      },
      {
        title: "Moocher - Front End (WIP)",
        type: "Vue",
        text:
          "This is an eCommerce Vue app to be paired with the Moocher - API.",
        links: [
          {
            title: "Github",
            url: "https://github.com/rvehall/moocher-vue",
          },
        ],
      },
      {
        title: "Life At Home",
        type: "Vue | Firebase - Contributer",
        text: "This is to provide resources for being quarantined during COVID-19.",
        links: [
          {
            title: "Github",
            url: "https://github.com/Women-Who-Code-Phoenix/lahr",
          },
        ],
      },
    ],
  }),
  methods: {
    open: function (link) {
      window.open(link.url, "_blank");
    },
  },
  props: {
    quick: false,
  },
};
</script>