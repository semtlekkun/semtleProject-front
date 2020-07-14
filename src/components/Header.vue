<template>
  <v-container>
    <h1>{{notice_header.title}}</h1>
    <hr />
    <span>작성자:{{notice_header.writer}}</span>
    <span>|작성일:{{notice_header.date}}</span>
    <span>|조회수:{{notice_header.views}}</span>
  </v-container>
</template>

<script>
export default {
  computed: {
    notice_header() {
      return this.$store.state.notice_header;
    }
  }
};
</script>