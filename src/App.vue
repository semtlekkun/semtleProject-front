<template>
  <v-app>
    <v-content>
      <ProjectRead />
    </v-content>
  </v-app>
</template>

<script>
import ProjectRead from "./views/ProjectRead";

export default {
  name: "App",

  components: {
    ProjectRead
  },

  data: () => ({
    //
  })
};
</script>
