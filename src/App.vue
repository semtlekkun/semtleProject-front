<template>
  <v-app>
    <v-content>
      <QnA/>
    </v-content>
  </v-app>
</template>

<script>
import QnA from "./views/QnA";

export default {
  name: 'App',

  components: {
    QnA
  },

  data: () => ({
    //
  })
}
</script>
