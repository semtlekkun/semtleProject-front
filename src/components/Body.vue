<template>
  <v-container>
    <div>{{notice_body.md_text}}</div>
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