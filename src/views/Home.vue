<template>
  <v-container>
    <Introduction />
    <h1>Home</h1>
    <UXPortfolio quick="true"/>
    <Skills />
    <Awards />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Introduction from "@/components/about/Introduction";
import Awards from "@/components/about/Awards";
import Skills from "@/components/about/Skills";
import UXPortfolio from "@/components/portfolio/UXPortfolio";

export default {
  name: "Home",
  components: {
    Introduction,
    Awards,
    Skills,
    UXPortfolio
  },
};
</script>
