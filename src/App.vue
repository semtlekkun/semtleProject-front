<template>
  <v-app>
    <v-content>
      <MainMenuBar />
    </v-content>
  </v-app>
</template>

<script>
import MainMenuBar from "./components/MainMenuBar.vue";

export default {
  name: "App",

  components: {
    MainMenuBar,
  },

  data: () => ({
    //
  }),
};
</script>
