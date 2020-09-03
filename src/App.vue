<template>
  <v-app>
    <Sidebar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon dark>mdi-arrow-up-bold-outline</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Sidebar from "@/components/core/Sidebar";
import Footer from "@/components/core/Footer";

export default {
  name: "App",

  components: {
    Sidebar,
    Footer,
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 1000;
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>



