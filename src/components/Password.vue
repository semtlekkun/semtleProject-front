<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on, attrs}">
        <v-card height="200" light="light" class="pa-5">
          <v-card-title primary="primary" class="com-title justify-center">비밀번호</v-card-title>

          <v-card-actions class="justify-center">
            <v-btn
              color="rgb(80, 130, 155)"
              v-bind="attrs"
              v-on="on"
              dark="dark"
              class="btn btn-dark m-3 mt-1"
              @click="openDialog"
            >변경</v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <div class="white lighten-1">
        <v-card-title class="headline lighten-2">비밀번호 변경</v-card-title>

        <v-divider></v-divider>

        <v-col>
          <v-text-field type="password" v-model="before" placeholder="이전 비밀번호" solo="solo"></v-text-field>

          <v-text-field type="password" v-model="after" placeholder="새 비밀번호" solo="solo"></v-text-field>

          <v-text-field type="password" v-model="checkafter" placeholder="비밀번호 확인" solo="solo"></v-text-field>
        </v-col>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-dark" text="text" @click="submit()">확인</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
    <v-dialog v-model="dialog2" persistent="persistent" max-width="400">
      <v-card>
        <v-card-title class="headline error">
          <p style="color:white !important;">Error</p>
        </v-card-title>
        <ul class="mt-5">
          <li v-for="(error,i) in errMsg" :key="i">{{error}}</li>
        </ul>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text="text" @click="dialog2 = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ipObj from "../key";
export default {
  data: () => ({
    dialog: false,
    dialog2: false,

    before: "",
    after: "",
    checkafter: "",

    errMsg: [],
  }),

  methods: {
    openDialog() {
      (this.before = ""), (this.after = ""), (this.checkafter = "");
    },
    submit() {
      this.errMsg = [];
      // 데이터베이스에서 불러온 비밀번호와 이전 비밀번호가 다를 경우 에러 추가
      if (this.after != this.checkafter) {
        this.errMsg.push("비밀번호가 다릅니다.");
        this.after = "";
        this.before = "";
        this.checkafter = "";
      }

      if (this.errMsg.length !== 0) {
        // let errString = ""; for (let idx = 0; idx < this.errMsg.length; ++idx) {
        // errString = errString.concat(this.errMsg[idx]);   if (idx ===
        // this.errMsg.length - 1) {     break;   }   errString =
        // errString.concat("\n"); } alert(errString);
        this.dialog2 = true;
      } else {
        let sendObj = {
          currentPW: this.before,
          changePW: this.after,
        };

        let config = {
          headers: {
            token: sessionStorage.getItem("token"),
          },
        };

        this.axios
          .put(`${ipObj.ip}/api/mypage/pw/update`, sendObj, config)
          .then((res) => {
            if (res.status === 200) {
              this.dialog = false;
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              this.errMsg.push("비밀번호가 틀립니다!");
              this.dialog2 = true;
            }
          });
      }
    },
  },
};
</script>
<style scoped="scoped">
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.com-title {
  font-family: "NEXON Lv1 Gothic OTF";
}
li {
  list-style: none;
}
</style>