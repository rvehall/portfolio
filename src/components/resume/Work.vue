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
        what: "UX Developer | Front End Engineer",
        when: "02/2019 - Present",
        where: "Attainia",
        how:
          "I work with users, the business, and engineering to design and develop a web application intended to help those in the medical capital equipment planning industry to plan their projects. (B2B)",
        url: "http://attainia.com/",
      },
      {
        what: "Software Engineer",
        when: "08/2016-1/2019",
        where: "OpenTech Labs | OpenTech Alliance, Inc",
        how:
          "I worked with the business and other engineers to develop web applications for the self-storage industry. (B2B, B2C, internal)",
        url: "https://opentechalliance.com/",
      },
      {
        what: "Applications Analyst (.NET Developer)",
        when: "09/2015-06/2016",
        where: "South Carolina Department of Employment and Workforce",
        how:
          "I worked with the business and other developers to maintain applications designed to provide stated and federally funded benefits. (G2C and G2B)",
        url: "https://dss.sc.gov/",
      },
      {
        what: "Applications Analyst (.NET Developer)",
        when: "South Carolina Department of Social Services",
        where: "Attainia",
        how:
          "I worked with the business and other developers to maintain applications built around providing state funded benefits. (G2C and internal)",
        url: "https://dew.sc.gov/",
      },
      {
        what: "Software Engineer | UX Engineer",
        when: "03/2012-08/2016",
        where: "The Web Jar, LLC",
        how:
          "I worked with the business to design, build, and maintain web applications for small businesses. (B2B)",
        url: "http://thewebjar.net/",
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