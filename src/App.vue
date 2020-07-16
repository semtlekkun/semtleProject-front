<template>
  <v-app>
    <v-content>
      <projectWrite></projectWrite>
    </v-content>
  </v-app>
</template>

<script>
import projectWrite from "./views/ProjectWrite";

export default {
  name: "App",

  components: {
    projectWrite
  },

  data: () => ({
    //
  })
};
</script>
