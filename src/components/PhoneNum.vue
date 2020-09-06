<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on, attrs}">
        <v-card height="200" light="light" class="pa-5">
          <v-card-title primary="primary" class="com-title justify-center">전화번호</v-card-title>
          <v-card-text class="show text-center">{{outputPhonenum}}</v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              color="rgb(80, 130, 155)"
              v-bind="attrs"
              v-on="on"
              dark="dark"
              class="btn btn-dark m-3"
              @click="openDialog"
            >변경</v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <div class="white lighten-1">
        <v-card-title class="headline lighten-2">전화번호 변경</v-card-title>

        <v-divider></v-divider>

        <v-row>
          <v-col offset="1">
            <v-text-field
              placeholder="010"
              v-model="phoneNum1"
              solo="solo"
              maxlength="3"
              @keypress="checkNumber"
              @keyup="checkHan"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              placeholder="1234"
              v-model="phoneNum2"
              solo="solo"
              maxlength="4"
              @keypress="checkNumber"
              @keyup="checkHan"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              placeholder="5678"
              v-model="phoneNum3"
              solo="solo"
              maxlength="4"
              @keypress="checkNumber"
              @keyup="checkHan"
            ></v-text-field>
          </v-col>
          <v-col cols="1"></v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-dark" text="text" @click="submit">확인</v-btn>
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
import { mapMutations } from "vuex";
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
    errMsg: [],

    resultPhoneNum: "",
    phoneNum1: "",
    phoneNum2: "",
    phoneNum3: "",
    outputPhonenum: "",
  }),
  created() {
    this.initNumber();
  },
  methods: {
    initNumber() {
      let config = {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      };

      this.axios.get(`${ipObj.ip}/api/mypage`, config).then((res) => {
        this.outputPhonenum = res.data.student.phoneNum;
      });
    },
    openDialog() {
      this.phoneNum1 = "";
      this.phoneNum2 = "";
      this.phoneNum3 = "";
    },
    submit() {
      this.errMsg = [];
      if (
        this.phoneNum1.length < 3 ||
        this.phoneNum2.length < 4 ||
        this.phoneNum3.length < 4
      ) {
        this.errMsg.push("휴대폰 번호를 정확하게 입력해주세요.");
      }

      if (this.errMsg.length !== 0) {
        // let errString = ""; for (let idx = 0; idx < this.errMsg.length; ++idx) {
        // errString = errString.concat(this.errMsg[idx]);   if (idx ===
        // this.errMsg.length - 1) {     break;   }   errString =
        // errString.concat("\n"); }

        this.dialog2 = true;
      } else {
        // this.resultPhoneNum = this.phoneNum1 + this.phoneNum2 + this.phoneNum3;
        this.resultPhoneNum = `${this.phoneNum1}-${this.phoneNum2}-${this.phoneNum3}`

        let sendObj = {
          phoneNum: this.resultPhoneNum,
        };

        let config = {
          headers: {
            token: sessionStorage.getItem("token"),
          },
        };

        this.axios
          .put(`${ipObj.ip}/api/mypage/phoneNum/update`, sendObj, config)
          .then((res) => {
            if (res.status === 200) {
              this.dialog = false;
              this.$router.go();
            }
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 401) {
                alert("세션이 만료되어 홈 화면으로 이동합니다.");
                this.setLogout();
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

    ...mapMutations(["setLogout"]),
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

#inputPhonNum {
  width: 1px;
}
li {
  list-style: none;
}
.show {
  font-size: 150%;
}
</style>