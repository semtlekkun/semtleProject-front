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
        title: "제목제목제목제목제목제목",
        writer: "홍길동",
        date: "2020년 7월 14일",
        views: "999",
      },
      noticeBody: {
        mdText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        imagePath:
          "https://upload.wikimedia.org/wikipedia/commons/b/bb/Hwang_Ye-ji_going_to_a_Music_Bank_recording_on_August_8%2C_2019.png",
      },
    };
  },
};
</script>