<template>
  <v-app>
    <v-content>
      <vue-markdown></vue-markdown>
      <ProjectRead />
    </v-content>
  </v-app>
</template>

<script>
import ProjectRead from "./views/ProjectRead";
import VueMarkdown from "vue-markdown";

export default {
  name: "App",

  components: {
    ProjectRead,
    VueMarkdown
  },

  data: () => ({
    //
  })
};
</script>
