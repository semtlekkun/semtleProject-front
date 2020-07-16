<template>
  <v-app>
    <v-content>
      <Admin/>
    </v-content>
  </v-app>
</template>

<script>
import Admin from "./views/AdminNotice.vue";

export default {
  name: 'App',

  components: {
    Admin
  },

  data: () => ({
    //
  })
}
</script>
