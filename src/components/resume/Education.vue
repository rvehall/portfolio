<template>
  <v-row class="ma-2">
    <v-col cols="12">
      <h2>Education</h2>
    </v-col>
    <v-col cols="12" md="6" class="pa-3 d-flex flex-column" flat v-for="item in items" :key="item.title">
      <v-card class="elevation-5 flex d-flex flex-column">

        <v-card-title primary-title v-text="item.what"></v-card-title>
         <v-card-subtitle> {{item.where}}| {{item.when}}</v-card-subtitle>
        <v-card-text class="flex" v-text="item.how"></v-card-text>
        <v-card-actions><v-spacer/>
        <v-btn @click="open(item)" text outlined :aria-label="`link for ${item.what}`">Go to website</v-btn>
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
        what: "General Studies",
        when: "09/2017 - 05/2019",
        where: "Glendale Communit College",
        how:
          "I graduatied with an A.A. in General Studies to supplement my HCI degree.",
        url: "https://www.gccaz.edu/",
      },
      {
        what: "Psychology | Human-Computer Interaction",
        when: "09/2009 - 05/2013",
        where: "Converse College",
        how:
          "I graduatied Cum Laude with a B.A. in Psychology and Human-Computer Interaction.",
        url: "https://www.converse.edu",
      },
    ],
  }),
  methods: {
    open: function (link) {
      window.open(link.url, "_blank");
    },
  },
};
</script>