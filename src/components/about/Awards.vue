<template>
  <v-container>
      <h2>Awards</h2>
    <v-row dense>
      <v-col cols="12" v-for="(item, i) in items" :key="i">
        <v-card color="grey darken-3" dark>
          <div class="d-flex flex-no-wrap justify-space-between" align="center" justify="center">
            <div >
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.text"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="100" tile>
              <v-icon size="100">mdi-trophy</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        src:
          "https://upload.wikimedia.org/wikipedia/en/0/0f/Time_youcover01.jpg",
        title: "Time Magazine Person of the Year, 2006 (shared)",
        text:
          "In 2006, at the age of 15, was honored with being named Person of the Year along with several other people.",
      },
    ],
  }),
};
</script>