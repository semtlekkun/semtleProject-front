<template>
  <v-container>
    <div>{{notice_body.md_text}}</div>
    <img :src="notice_body.image_path" alt="예지쨩 사진" width="300px" />
  </v-container>
</template>

<script>
export default {
  computed: {
    notice_body() {
      return this.$store.state.notice_body;
    }
  }
};
</script>