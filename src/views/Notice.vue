<template>
  <v-app>
    <v-container>
      <Header />

      <Body />
    </v-container>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";

export default {
  components: {
    Header,
    Body
  }
};
</script>