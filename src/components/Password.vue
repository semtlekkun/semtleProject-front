<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on, attrs}">
        <v-card height="200" light="light" class="pa-5">
          <v-card-title primary="primary" class="title">PASSWORD</v-card-title>
          <v-card-text></v-card-text>

          <v-card-actions>
            <v-btn v-bind="attrs" v-on="on" dark="dark" class="btn btn-dark m-3">변경</v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <div class="white lighten-1">
        <v-card-title class="headline lighten-2">비밀번호 변경</v-card-title>

        <v-divider></v-divider>

        <v-col>
          <v-text-field type="password" v-model="before" :counter="12" label="이전 비밀번호" required></v-text-field>

          <v-text-field type="password" v-model="after" :counter="12" label="새 비밀번호" required></v-text-field>

          <v-text-field type="password" v-model="checkafter" :counter="12" label="비밀번호 확인" required></v-text-field>
        </v-col>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-dark" text="text" @click="submit()">확인</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,

    before: "",
    after: "",
    checkafter: "",

    errMsg: [],
  }),
  methods: {
    submit() {
      // 데이터베이스에서 불러온 비밀번호와 이전 비밀번호가 다를 경우 에러 추가
      if (this.after != this.checkafter)
        this.errMsg.push("비밀번호가 다릅니다.");

      if (this.errMsg.length !== 0) {
        let errString = "";
        for (let idx = 0; idx < this.errMsg.length; ++idx) {
          errString = errString.concat(this.errMsg[idx]);

          if (idx === this.errMsg.length - 1) {
            break;
          }
          errString = errString.concat("\n");
        }

        alert(errString);
      } else {
        let sendObj = {
          currentPW: this.before,
          changePW: this.after,
        };

        let config = {
          headers: { token: sessionStorage.getItem("token") },
        };

        this.axios
          .put("http://49.50.166.64/api/mypage/pw/update", sendObj, config)
          .then((res) => {
            if (res.status === 200) {
              alert("수정 성공!");
              this.dialog = false;
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