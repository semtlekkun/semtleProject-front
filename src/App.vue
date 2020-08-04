<template>
  <v-app>
    <v-content>
      <MenuBar3 />
    </v-content>
  </v-app>
</template>

<script>
import MenuBar3 from "./components/MenuBar3.vue";

export default {
  name: "App",

  components: {
    MenuBar3,
  },

  data: () => ({
    //
  }),
};
</script>
