<template>
  <v-app>
    <v-content>
      <SideBar/>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from "./components/SideBar";

export default {
  name: 'App',

  components: {
    SideBar
  },

  data: () => ({
    //
  })
}
</script>
