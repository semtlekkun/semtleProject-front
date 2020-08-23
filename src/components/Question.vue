<template>
  <div>

    <v-row>
      <v-col cols="12">
        <h2>{{Question.title}}</h2>
      </v-col>
      <v-col class="text-right" cols="12" v-show="admin">
        <v-btn color="error" @click="deleteQuestion">삭제</v-btn>
      </v-col>
    </v-row>
    <table class="table">
      <tr>
        <td rowspan="2">
          <img :src="Question.writerURL" width="50" alt="profileImg" />
        </td>
        <td>
          <p style="font-weight:bold; margin-left:0.3em;">{{Question.writerName}}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="margin-left:0.3em;">{{Question.time}} 조회 {{Question.views}}</p>
        </td>
      </tr>
    </table>
    <hr />
    <br />
    <VueMarkdown :source="Question.question"></VueMarkdown>

    <v-img v-if="Question.imageURL!=='http://49.50.166.64/api/question/images/null'" :src="Question.imageURL" alt="첨부이미지" max-width="960px" class="mt-10" />
  </div>
</template> 


<script>
import VueMarkdown from "vue-markdown";

export default {
  props: {
    Question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      admin: false,
      QuestionData: Object,
     };
  },

  mounted() {
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
  },
  components: {
    VueMarkdown,
  },

  methods: {
    deleteQuestion() {
      let result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        this.axios
          .delete(
            `http://49.50.166.64/api/question/${this.QID}`,
            {
              headers: {
                token: sessionStorage.getItem("token"),
              },
            },
            {}
          )
          .then((res) => {
            if (res.status === 200) {
              this.$router.push("/qna/list");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
img {
  margin-top: 10px;
}
</style>