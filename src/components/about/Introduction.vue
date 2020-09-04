<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-avatar size="250px">
        <v-img src="../../assets/logo.jpg" alt="Violet Hall"></v-img>
      </v-avatar>
    </v-col>
    <v-col
      cols="12"
       v-show="!portfolio"
    >Hi! I am Violet Hall and I work as UX and Front End Developer. My passion is creating a user centered user experience.</v-col>
    <v-col cols="12" v-show="!resume">
      “User experience encompasses all aspects of the end-user’s interaction with the company, its services, and its products.”
      <br />– Don Norman, Cognitive Scientist & User Experience Architect
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "Introduction",
  props: {
    resume: false,
    portfolio: false,
  },
};
</script>