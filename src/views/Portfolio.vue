<template>
  <v-container>
    <Introduction portfolio="true"/>
    <h1>Portfolio</h1>
    <h2>UX Design Portfolio</h2>
    <UXPortfolio />

    <h2>Software Engieering Portfolio</h2>
    <SoftwarePortfolio />
  </v-container>
</template>\
<script>
// @ is an alias to /src
import Introduction from "@/components/about/Introduction";
import SoftwarePortfolio from "@/components/portfolio/SoftwarePortfolio";
import UXPortfolio from "@/components/portfolio/UXPortfolio";

export default {
  name: "Portfolio",
  components: {
    Introduction,
    SoftwarePortfolio,
    UXPortfolio,
  },
};
</script>