<template>
  <v-col>
    <img src="BodyInfo.imagePath" alt="예지쨩 사진" />
    <vue-markdown>{{BodyInfo.Contents}}</vue-markdown>
  </v-col>
</template>

<script>
import VueMarkdown from "vue-markdown"; //markdown import
export default {
  components: {
    VueMarkdown
  },
  props: {
    BodyInfo: {
      type: Object,
      required: true
    }
  }
};
</script>