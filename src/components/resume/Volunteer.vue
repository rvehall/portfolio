<template>
  <v-row class="ma-2">
    <v-col cols="12">
      <h2>Volunteer</h2>
    </v-col>
    <v-col cols="12" class="pa-3 d-flex flex-column" flat v-for="item in items" :key="item.title">
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
        what: "Instructor | Planner | Developer | Designer | Assistant",
        when: "01/202020 - Present",
        where: "Woment Who Code",
        how:
          "I work with the Women Who Code - Phoenix Director to develop and plan MeetUps for the group. This can include leading a class, setting up a project for the group to work on, and/or supporting the Director or another Software Engineer during a class.",
        url: "https://www.womenwhocode.com/",
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