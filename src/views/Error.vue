<template>
<v-container>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <div>Error 404</div>
      <p class="display-1 text--primary">
        page•not•found
      </p>
      <p>http response</p>
      <div class="text--primary">
        "The HTTP 404, 404 Not Found, 404, 404 Error, Page Not Found, File Not Found, or Server Not Found error message is a Hypertext Transfer Protocol (HTTP) standard response code, in computer network communications, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested. The error may also be used when a server does not wish to disclose whether it has the requested information." 
        <v-btn @click="open" text outlined>[1]</v-btn>
      </div>
      <div class="text--primary">
        Please try a different route.
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        to="/"
        outlined
      >
      <v-icon>mdi-home</v-icon>
        Go Home
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>
<script>
export default {
  name: "Error",
  methods: {
    open: function (link) {
      window.open("https://en.wikipedia.org/wiki/HTTP_404", "_blank");
    },
  },
};
</script>