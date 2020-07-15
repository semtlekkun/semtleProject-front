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
  props: {
    notice_header: {
      title: "제목제목제목제목제목제목",
      writer: "홍길동",
      date: "2020년 7월 14일",
      views: "999"
    }
  }
};
</script>