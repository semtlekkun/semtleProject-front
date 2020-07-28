<template>
  <v-app>
    <v-content>
      <AdminMember/>
    </v-content>
  </v-app>
</template>

<script>
import AdminMember from "./views/AdminMember.vue";

export default {
  name: 'App',

  components: {
    AdminMember
  },

  data: () => ({
    //
  })
}
</script>
