<template>
  <v-app>
    <TopNav/>
    <v-main>
      <router-view />
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="gred darken-2"
        @click="toTop"
        aria-label="To Top"
      >
        <v-icon dark>mdi-arrow-up-bold-outline</v-icon>
      </v-btn>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import TopNav from "@/components/core/TopNav";
import Footer from "@/components/core/Footer";

export default {
  name: "App",

  components: {
    Footer,
    TopNav,
  },
  data() {
    return {
      scrolled: false,
      fab: false,
    };
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



