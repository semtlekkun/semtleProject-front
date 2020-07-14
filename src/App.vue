<template>
  <v-app>
    <v-content>
      <Notice />
    </v-content>
  </v-app>
</template>

<script>
import Notice from "./views/Notice.vue";

export default {
  name: "App",

  components: {
    Notice
  },

  data: () => ({
    //
  })
};
</script>
