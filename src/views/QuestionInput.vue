<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" lg="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>

      <v-col cols="12" lg="9">
        <v-container class="px-0">
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-alert outlined color="#365164">
                  <v-row>
                    <v-col>
                      <v-text-field label="질문 제목" v-model="title" />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                        v-model="contents"
                        outlined
                        no-resize
                        height="300"
                        name="content-input"
                        label="질문할 내용을 입력하세요"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-file-input
                        v-model="files"
                        :roles="rules"
                        accept="image/*"
                        color="deep-purple accent-4"
                        counter
                        label="사진 추가"
                        placeholder="사진을 추가하려면 여기를 클릭하세요"
                        prepend-icon="mdi-camera"
                        outlined
                        :show-size="1000"
                      />
                    </v-col>
                  </v-row>

                  <v-row class="justify-end">
                    <v-col cols="12" md="3" class="text-right">
                      <v-btn @click="writeConents" color="#50829b" class="white--text" block>작성 완료</v-btn>
                    </v-col>
                  </v-row>
                </v-alert>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import SubTitle from "../components/SubTitle.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    // VueMarkdown
    SubTitle,
  },
  data() {
    return {
      title: "",
      errorMsg: [],
      files: [],
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
      contents: "",
      subTitleObj: {
        title: "❓질문 작성",
        contents: "질문 작성이다.",
      },
    };
  },
  methods: {
    addMember() {
      this.members.push(this.memberNum);
      this.memberNum = "";
    },
    delMember(member) {
      this.members = this.members.filter((el) => el !== member);
    },
    writeConents() {
      this.errorMsg = [];
      if (this.title === "") this.errorMsg.push("제목을 입력해 주세요");
      if (this.contents === "") this.errorMsg.push("내용을 입력해 주세요");

      //입력 에러가 있는 경우
      if (this.errorMsg.length != 0) {
        var message = "";
        for (var idx = 0; idx < this.errorMsg.length; idx++) {
          message = message + this.errorMsg[idx] + "\n";
        }

        alert(message);
      }

      //에러가 없는 경우
      else {
        let form = new FormData();
        form.append("title", this.title);
        form.append("contents", this.contents);
        form.append("image", this.files);
        this.axios
          .post(`${ipObj.ip}/api/question`, form, {
            headers: {
              token: sessionStorage.getItem("token"),
            },
          })
          .then(() => {
            alert("작성 완료");
            this.$router.push({ name: "QnAList" });
          })
          .catch((err) => {
            if (err.response.status === 401) {
              alert("세션이 만료되어 홈 화면으로 이동합니다.");
              this.setLogout();
            }
            console.log(err);
          });
      }
    },
    ...mapMutations(["setLogout"]),
  },
};
</script>

<style scoped>
.projectTitle {
  border-bottom: 1px solid black;
}
</style>