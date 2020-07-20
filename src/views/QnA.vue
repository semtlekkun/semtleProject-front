<template>
  <v-container>
    <Problem :problemInfo="problemInfo" />
    <hr />
    <CommentList :commentData="commentData" />
    <hr />
    <br />
    <CommentForm />
  </v-container>
</template>

<script>
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import Problem from "../components/Problem.vue";
export default {
  components: {
    CommentList,
    CommentForm,
    Problem
  },
  data() {
    return {
      commentData: {
        writerName: "18 전하영",
        comments: [
          { name: "16 박건웅", comment: "답변 1" },
          { name: "17 김아무개", comment: "답변 2" },
          { name: "18 전하영", comment: "###### 마크다운 적용" },
          { name: "19 이아무개", comment: "답변 3" },
          { name: "20 정아무개", comment: "답변 4" }
        ]
      },

      problemInfo: {
        Header: {
          Title: "제목",
          writerName: "18 전하영",
          writeDate: "2020년 07월 20일",
          countViews: 999
        },
        Body: {
          Contents: "# 마크다운으로 작성된 글",
          Image:
            "https://i.pinimg.com/originals/d7/8f/a2/d78fa2deed379f6668e2995ac38362a2.jpg"
        }
      }
    };
  }
};
</script>