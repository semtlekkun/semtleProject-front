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
          <img :src="writerURL" width="50" alt="profileImg" />
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

    <v-img v-if="Question.image!==''" :src="imageURL" alt="첨부이미지" max-width="960px" class="mt-10" />
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
      QID: "",
      admin: false,
      imageURL: "",
      writerURL: "",
    };
  },

  created() {
    this.initImage();
  },
  mounted() {
    this.QID = this.$route.params.id;
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
    this.initImage();
  },
  components: {
    VueMarkdown,
  },

  methods: {
    initImage() {
      let id = this.$route.params.id;
      this.axios.get(`http://49.50.166.64/api/question/${id}`).then((res) => {
        if (res.status === 200) {
          this.imageURL =
            "http://49.50.166.64/api/question/images/" +
            res.data.question.image;
          this.writerURL =
            "http://49.50.166.64/api/student/images/" +
            res.data.question.writerImage;
          console.log(this.writerURL);
        }
      });
    },
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
            // console.log(res)
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