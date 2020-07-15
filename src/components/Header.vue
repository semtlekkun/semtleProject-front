<template>
  <v-container>
    <h1>{{noticeHeader.title}}</h1>
    <hr />
    <span>작성자:{{noticeHeader.writer}}</span>
    <span>|작성일:{{noticeHeader.date}}</span>
    <span>|조회수:{{noticeHeader.views}}</span>
  </v-container>
</template>

<script>
export default {
  props: {
    noticeHeader: {
      title: "제목제목제목제목제목제목",
      writer: "홍길동",
      date: "2020년 7월 14일",
      views: "999"
    }
  }
};
</script>