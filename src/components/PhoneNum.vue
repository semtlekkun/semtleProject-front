<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on, attrs}">
        <v-card height="200" light="light" class="pa-5">
          <v-card-title primary="primary" class="title">Phone Number</v-card-title>

          <v-card-actions>
            <v-btn v-bind="attrs" v-on="on" dark="dark" class="btn btn-dark m-3">변경</v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <div class="white lighten-1">
        <v-card-title class="headline lighten-2">전화번호 변경</v-card-title>

        <v-divider></v-divider>

        <v-col>
          <v-text-field
            v-model="phoneNum"
            solo
            maxlength="11"
            @keypress="checkNumber"
            @keyup="checkHan"
          ></v-text-field>
        </v-col>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-dark" text="text" @click="submit">확인</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    errMsg: [],

    phoneNum: "",
  }),
  methods: {
    submit() {
      this.errMsg = [];
      if (this.phoneNum.length < 11) {
        this.errMsg.push("휴대폰 번호를 정확하게 입력해주세요.");
      }

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
          phoneNum: this.phoneNum,
        };

        let config = {
          headers: {
            token: sessionStorage.getItem("token"),
          },
        };

        this.axios
          .put(
            "http://49.50.166.64/api/mypage/phoneNum/update",
            sendObj,
            config
          )
          .then((res) => {
            if (res.status === 200) {
              alert("변경 성공!");
              this.dialog = false;
            }
          });
      }
    },

    checkNumber(e) {
      if (e.keyCode < 48 || e.keyCode > 57) {
        e.returnValue = false;
      }
    },

    checkHan(e) {
      e = e || window.e;
      var keyID = e.which ? e.which : e.keyCode;
      if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) return;
      else e.target.value = e.target.value.replace(/[^0-9]/g, "");
    },
  },
};
</script>