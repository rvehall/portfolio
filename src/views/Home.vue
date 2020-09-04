<template>
  <v-container>
    <Introduction />
    <h1>Portfolio</h1>
    <UXPortfolio />
    <SoftwarePortfolio />
    <h2>Resume</h2>
    <Skills />
    <Work />
    <Education />
    <Volunteer />
    <Awards />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/about/Introduction";
import Awards from "@/components/about/Awards";
import Skills from "@/components/about/Skills";
import UXPortfolio from "@/components/portfolio/UXPortfolio";
import SoftwarePortfolio from "@/components/portfolio/SoftwarePortfolio";
import Education from "@/components/resume/Education";
import Volunteer from "@/components/resume/Volunteer";
import Work from "@/components/resume/Work";

export default {
  name: "Home",
  components: {
    Introduction,
    Awards,
    Skills,
    UXPortfolio,
    SoftwarePortfolio,
    Education,
    Volunteer,
    Work
  },
};
</script>
