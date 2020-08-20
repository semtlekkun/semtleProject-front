<template>
  <v-container>
    <Question :Question="QuestionData" style="margin-top:20px;" />
    <br />
    <hr />
    <br />
    <CommentList :commentData="commentData" />
    <br />
    <hr />
    <br />
    <CommentForm />
  </v-container>
</template>

<script>
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import Question from "../components/Question";
export default {
  mounted() {
    let id = this.$route.params.id;
    this.axios
      .get(`http://49.50.166.64/api/question/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.QuestionData = {
            title: res.data.question.title,
            question: res.data.question.contents,
            writerName: res.data.question.writer,
            time: res.data.question.date,
            id: res.data.question._id,
            image: res.data.question.image,
            views: res.data.question.view,
          };
          this.commentData.writerName = res.data.question.writer;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    this.axios
      .get(`http://49.50.166.64/api/answer/${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          res.data.answers.forEach((el) => {
            let obj = {
              name: el.writer,
              comment: el.contents,
              time: el.date,
              id: el._id,
              image:el.writerImage
            };
            this.commentData.comments.push(obj);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    CommentList,
    CommentForm,
    Question,
  },
  data() {
    return {
      QuestionData: {
        title: "",
        question: "",
        writerName: "",
        time: "",
        views: 365,
        image: "",
      },
      commentData: {
        writerName: "",
        comments: [],
      },
    };
  },
  methods: {},
};
</script>
<style>
.parent .v-input textarea, .parent .v-label {
    color: white !important;
}
.parent .v-text-field__details {
  display: none;
}
p {
  margin-bottom: 0 !important;
}
</style>