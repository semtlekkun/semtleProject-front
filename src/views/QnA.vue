<template>
  <v-container class="px-0">
    <v-row class="pb-1">
      <v-col cols="12" lg="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" lg="9">
        <div id="qna">
          <v-container class="px-0">
            <v-row>
              <v-col cols="12">
                <v-card>
                  <v-alert outlined color="#365164">
                    <Question :Question="QuestionData" />
                    <br />
                    <v-divider class="my-6"></v-divider>
                    <br />
                    <CommentList :commentData="commentData" />
                    <br />
                    <v-divider class="my-6"></v-divider>
                    <br />
                    <CommentForm />
                  </v-alert>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";

import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import Question from "../components/Question";
import SubTitle from "../components/SubTitle.vue";
export default {
  created() {
    let id = this.$route.params.id;
    this.axios
      .get(`${ipObj.ip}/api/question/${id}`)
      .then((res) => {
        if (res.status === 200) {
          this.QuestionData = {
            title: res.data.question.title,
            question: res.data.question.contents,
            writerName: res.data.question.writer,
            time: res.data.question.date,
            views: res.data.question.view,
            imageURL:
              `${ipObj.ip}/api/question/images/` + res.data.question.image,
            writerURL:
              `${ipObj.ip}/api/student/images/` + res.data.question.writerImage,
          };
          this.commentData.writerName = res.data.question.writer;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    this.axios
      .get(`${ipObj.ip}/api/answer/${id}`)
      .then((res) => {
        if (res.status === 200) {
          res.data.answers.forEach((el) => {
            let obj = {
              name: el.writer,
              comment: el.contents,
              time: el.date,
              id: el._id,
              image: el.writerImage,
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
    SubTitle,
  },
  data() {
    return {
      QuestionData: {
        title: "",
        question: "",
        writerName: "",
        time: "",
        views: 365,
        imageURL: "",
        writerURL: "",
      },
      commentData: {
        writerName: "",
        comments: [],
      },
      subTitleObj: {
        title: "❓Q&A",
        contents: "질문과 답변을 올리는 공간입니다.",
      },
    };
  },
  methods: {},
};
</script>

<style>
.parent .v-input textarea,
.parent .v-label {
  color: white !important;
}

.parent .v-text-field__details {
  display: none;
}

p {
  margin-bottom: 0 !important;
}

.v-alert__content {
  width: 100%;
}
</style>
