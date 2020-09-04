<template>
  <v-row class="ma-2">
    <v-col cols="12">
      <h2>Skills</h2>
    </v-col>
    <v-col cols="12" md="4" class="pa-3 d-flex flex-column" v-for="item in items" :key="item.title">
      <v-card class="elevation-5 flex d-flex flex-column">
        <v-avatar color="grey darken-3" tile>
          <v-icon dark>{{item.icon}}</v-icon>
        </v-avatar>
        <v-card-title primary-title v-text="item.title"></v-card-title>
        <v-card-subtitle v-text="item.type"></v-card-subtitle>
        <v-card-text class="flex" v-text="item.text"></v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Skills",

  data: () => ({
    items: [
      {
        title: "User Experience Design",
        icon: "mdi-image",
        type: "Design",
        text:
          "I earned my B.A. in Psychology and Human-Computer Interaction, and have worked with clients to design interfaces and workflows to make their lives/jobs easier."
      },
      {
        title: "Software Engineering",
        icon: "mdi-xml",
        type: "Development",
        text:
          "With users in mind, I have worked as a Software Engineer since 2012  to develop web and mobile applications."
      },
      {
        title: "Student",
        icon: "mdi-book-open-variant",
        type: "Continuing Education",
        text:
          "As technology ever evolves, it is important to actively learn and grow as a person and as an engineer. "
      },
    ],
  }),
};
</script>