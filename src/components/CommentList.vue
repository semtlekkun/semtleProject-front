<template>
  <div>
    <div v-for="(comment, i) in commentData.comments" :key="i">
      <v-row justify="start" v-show="comment.name == commentData.writerName">
        <v-btn v-show="admin" color="error" @click="deleteAnswer(comment.id)">삭제</v-btn>
        <QuestionSpeechBubble :comments="comment"></QuestionSpeechBubble>
      </v-row>
      <v-row justify="end" v-show="comment.name != commentData.writerName">
        <AnswerSpeechBubble :comments="comment"></AnswerSpeechBubble>
        <v-btn v-if="admin" color="error" @click="deleteAnswer(comment.id)">삭제</v-btn>
      </v-row>
    </div>
  </div>
</template> 


<script>
import ipObj from "../key";
import QuestionSpeechBubble from "./QuestionSpeechBubble";
import AnswerSpeechBubble from "./AnswerSpeechBubble";
import { mapMutations } from "vuex";

export default {
  mounted() {
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
    this.token = sessionStorage.getItem("token");
  },
  components: {
    QuestionSpeechBubble,
    AnswerSpeechBubble,
  },
  props: {
    commentData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      admin: false,
      token: "",
    };
  },

  methods: {
    deleteAnswer(id) {
      let result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        this.axios
          .delete(
            `${ipObj.ip}/api/answer/${id}`,
            {
              headers: {
                token: this.token,
              },
            },
            {}
          )
          .then((res) => {
            if (res.status === 200) {
              this.$router.go();
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              alert("세션이 만료되어 홈 화면으로 이동합니다.");
              this.setLogout();
            }
          });
      }
    },
    ...mapMutations(["setLogout"]),
  },
};
</script>