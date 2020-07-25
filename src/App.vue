<template>
  <v-app>
    <v-main>
      <Admin/>
    </v-main>
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
