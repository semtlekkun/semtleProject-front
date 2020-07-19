<template>
  <v-container>
    <CommentList :commentData="commentData" />
    <hr />
    <br />
    <CommentForm />
  </v-container>
</template>

<script>
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
export default {
  components: {
    CommentList,
    CommentForm
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
      }
    };
  }
};
</script>