<template>
  <v-container>
    <Question :Question="QuestionData" />
    <br />
    <hr />
    <br />
    <CommentList :commentData="commentData" />
    <br />
    <hr />
    <br />
    <br />
    <CommentForm />
  </v-container>
</template>

<script>
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import Question from "../components/Question";
export default {
  components: {
    CommentList,
    CommentForm,
    Question,
  },
  data() {
    return {
      QuestionData: {
        title: "첫번째 질문입니다 첫번째 질문입니다 !!",
        question: "#이게뭘까요 ㅜㅜㅜㅜㅜ",
        writerName: "18 전하영",
        time: "2020-07-21 01:01:33",
        views: 365,
      },
      commentData: {
        writerName: "18 전하영",

        comments: [
          {
            name: "16 김남주",
            comment:
              "답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1답변 1",
            time: "2020-07-21 01:01:33",
          },
          {
            name: "17 김아무개",
            comment: "답변 2",
            time: "2020-07-21 01:01:33",
          },
          {
            name: "18 전하영",
            comment: "마크다운 적용",
            time: "2020-07-21 01:01:33",
          },
          {
            name: "19 이아무개",
            comment: "답변 3",
            time: "2020-07-21 01:01:33",
          },
          {
            name: "20 정아무개",
            comment: "답변 4",
            time: "2020-07-21 01:01:33",
          },
          {
            name: "18 썽씨연",
            comment: "제이름은 썽씨연이 아닙니다",
            time: "2020-07-21 01:01:33",
          },
          {
            name: "18 강등아",
            comment: "너는나의 다음타음베이비야 ",
            time: "2020-07-21 01:01:33",
          },
          { name: "18 전하영", comment: "ㅎㅎ", time: "2020-07-21 01:01:33" },
        ],
      },
    };
  },
};
</script>