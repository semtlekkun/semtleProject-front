<template>
  <v-container>{{notice_body.md_text}}</v-container>
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