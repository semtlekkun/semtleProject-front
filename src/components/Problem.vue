<template>
  <div>
    <v-row>
      <Header :HeaderInfo="problemInfo.Header" />
    </v-row>
    <v-row>
      <Body :BodyInfo="problemInfo.Body" />
    </v-row>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Body from "./Body.vue";
export default {
  components: {
    Header,
    Body
  },
  props: {
    problemInfo: {
      type: Object,
      required: true
    }
  }
};
</script>