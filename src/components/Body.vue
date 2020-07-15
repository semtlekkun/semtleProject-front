<template>
  <v-container>
    <VueMarkDown>{{notice_body.md_text}}</VueMarkDown>
    <img :src="notice_body.image_path" alt="예지쨩 사진" width="300px" />
  </v-container>
</template>

<script>
import VueMarkDown from "vue-markdown";
export default {
  components: {
    VueMarkDown
  },
  computed: {
    notice_body() {
      return this.$store.state.notice_body;
    }
  }
};
</script>