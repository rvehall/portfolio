<template>
  <v-row class="ma-2">
    <v-col cols="12" v-show="quick">
      <h2>UX Portfolio at a Glance</h2>
    </v-col>
    <v-col cols="12" md="4" class="pa-3 d-flex flex-column" v-for="item in items" :key="item.title">
      <v-card class="elevation-5 flex d-flex flex-column">
        <v-img :src="require(`../../assets/${item.src}.png`)" height="200px"></v-img>

        <v-card-title primary-title v-text="item.title"></v-card-title>
        <v-card-subtitle v-text="item.type"></v-card-subtitle>
        <v-card-text class="flex" v-text="item.text"></v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            :aria-label="`Visit ${item.title}`"
            text
            color="deep-blue"
            outlined
            @click="open(item)"
          >Visit site</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "UX",

  data: () => ({
    items: [
      {
        title: "Protoduction",
        src: "blog",
        type: "Personal Blog",
        text:
          "This blog is a work in progress. It's the first site that I've built either in VueJS or with Firebase and has made it to production.",
        url: "http://blog.rvehall.io/",
      },
      {
        title: "iSorry",
        src: "isorry",
        type: "Mobile App - Android",
        text:
          "This was created as a joke for a friend. She wanted her significant other to apololize for something he'd done and he wouldn't.",
        url:
          "https://play.google.com/store/apps/details?id=io.cordova.isorry",
      },
      {
        title: "The Web Jar, LLC",
        src: "twj",
        type: "Business website",
        text:
          "The Web Jar, as a business, was built to help other small businesses grow and succeed in Upstate South Carolina.",
        url: "http://www.thewebjar.net/",
      },
    ],
  }),
  methods: {
    open: function (link) {
      window.open(link.url, "_blank");
    },
  },
  props: {
    quick: false
  },
};
</script>