<template>
  <v-row>
    <v-col cols="12">
      <h1>{{noticeHeader.title}}</h1>
      <hr />
      <span>작성자:{{noticeHeader.writer}}</span>
      <span>|작성일:{{noticeHeader.date}}</span>
      <span>|조회수:{{noticeHeader.views}}</span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    noticeHeader: {
      type: Object,
      required: true
    }
  }
};
</script>