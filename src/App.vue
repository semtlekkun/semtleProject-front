<template>
  <v-app>
    <v-content>
      <vue-markdown>마크 ~~다운~~ **테스트**.</vue-markdown>
      <projectWrite></projectWrite>
    </v-content>
  </v-app>
</template>

<script>
import VueMarkdown from "vue-markdown";
import projectWrite from "./views/ProjectWrite";

export default {
  name: "App",

  components: {
    projectWrite,
    VueMarkdown
  },

  data: () => ({
    //
  })
};
</script>
