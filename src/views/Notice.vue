<template>
  <v-container>
    <Header :noticeHeader="noticeHeader" />

    <Body :noticeBody="noticeBody" />
  </v-container>
</template>

<script>
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";

export default {
  components: {
    Header,
    Body,
  },
  data() {
    return {
      noticeHeader: {
        title: "제목",
        writerName: "홍길동",
        date: "2020년 7월 14일",
        views: "999",
        writerImage:
          "https://previews.123rf.com/images/pedrolieb/pedrolieb1205/pedrolieb120500010/13528955-%EC%9D%B5%EB%AA%85-%EA%B7%B8%EB%A6%BC.jpg",
      },
      noticeBody: {
        mdText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        imagePath: "https://upload.wikimedia.org/wikipedia/ko/2/24/Lenna.png",
      },
    };
  },
};
</script>