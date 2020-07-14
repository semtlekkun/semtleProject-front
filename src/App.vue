<template>
  <v-app>
    <v-content>
      <Test />
    </v-content>
  </v-app>
</template>

<script>
import Test from "./views/Test.vue";

export default {
  name: "App",

  components: {
    Test
  },

  data: () => ({
    //
  })
};
</script>
