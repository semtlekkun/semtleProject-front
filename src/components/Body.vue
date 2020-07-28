<template>
  <v-row>
    <v-col cols="12">
      <VueMarkDown>{{noticeBody.mdText}}</VueMarkDown>
      <img :src="noticeBody.imagePath" alt="Lena" width="300px" />
    </v-col>
  </v-row>
</template>

<script>
import VueMarkDown from "vue-markdown";
export default {
  props: {
    noticeBody: {
      type: Object,
      required: true,
    },
  },
  components: {
    VueMarkDown,
  },
};
</script>