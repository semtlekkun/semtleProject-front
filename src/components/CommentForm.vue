<template>
  <v-container>
    <v-row>
      <v-col :class="`rounded-lg`" class="CommentFormBubble px-4 py-2">
        <v-form class="parent">
          <v-row>
            <v-col>
              <v-textarea
                v-model="contents"
                filled
                color="#50829b"
                label="답변을 입력하세요"
                no-resize
                rows="8"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-col>
              <v-btn @click="inputAnswer" color="#50829b" large dark style="float:right;">등록</v-btn>
            </v-col>
          </v-row>

          <!-- 다이얼로그 -->
          <v-dialog v-model="dialog" persistent max-width="330">
            <v-card>
              <v-card-title class="headline error">
                <p style="color:white !important;">Error</p>
              </v-card-title>
              <v-card-text>
                <br />
                <br />
                <h2>{{this.errorMessage}}</h2>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <!--로그인이 안 됐다면 로그인 버튼 띄울 것-->
                <v-btn v-show="!this.isLogin" color="error" text @click="dialogBtn()">Login</v-btn>
                <v-btn color="error" text @click="dialog = false">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import { mapMutations } from "vuex";

export default {
  created() {
    if (!sessionStorage.getItem("token")) {
        return (this.isLogin = false);
    } else {
      return (this.isLogin = true);
    }
  },
  mounted() {
    this.questionID = this.$route.params.id;
    this.userToken = sessionStorage.getItem("token");
  },

  data() {
    return {
      contents: "",
      userToken: "",
      questionID: "",
      errorMessage: "",
      isLogin: false,
      dialog: false,
    };
  },

  methods: {
    dialogBtn() { // dialog에서 login을 눌렀을 경우
      this.dialog = false;
      location.href = "/login";
    },

    inputAnswer() {
      if (!this.isLogin){ // 로그인이 없는 경우
        this.dialog = true;
        this.errorMessage = "로그인 후 작성해주세요.";
      } else if (this.contents === "") { // 내용이 없는 경우
        this.dialog = true;
        this.errorMessage = "내용이 없습니다.";
      } else { 
        this.axios
          .post(
            `${ipObj.ip}/api/answer`,
            {
              contents: this.contents,
              question: this.questionID,
            },
            {
              headers: { token: this.userToken },
            }
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

<style scoped>
.CommentFile {
  background: #50829b;
}
.CommentFormBubble {
  width: 70em;
  position: relative;
  display: inline-block;
  background: #365164;
}
</style>