<template>
  <div class="LoginForm">
    <p class="Error">{{error}}</p>
    <v-form @submit="CheckForm" novalidate="true">
      <v-row class="mt-5 center">
        <v-col cols="12"
         sm="2"
          md="2"
           lg="1" class="text-md-right pr-5">
          <p class="text">학번</p>
        </v-col>
        <v-col 
        cols="12"
         sm="10"
          md="5"
           lg="3">
          <input
            type="text"
            v-model="StudentNumber"
            name="StudentNumber"
            class="StudentNumberInput"
          />
        </v-col>
      </v-row>
      <v-row class="mt-5 center">
        <v-col  cols="12"
         sm="2"
          md="2"
           lg="1" class="text-md-right pr-5">
          <p class="text">비밀번호</p>
        </v-col>
        <v-col  cols="12"
         sm="10"
          md="5"
           lg="3">
          <input type="password" class="PasswordInput" v-model="Password" name="Password" />
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col 
        cols="6"
        sm="4"
        md="3" class="center">
          <button type="submit" class="LoginButton">로그인</button>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>
<script>
export default {
  name: "LoginForm",
  data() {
    return {
      error: null,
      StudentNumber: null,
      Password: null,
    };
  },
  methods: {
    CheckForm(e) {
      if (this.Password && this.StudentNumber) {
        return true;
      }
      if (!this.Password || !this.StudentNumber) {
        this.error = "아이디 및 비밀번호 입력을 확인해주세요";
      }
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
.StudentNumberInput,
.PasswordInput {
  border: none;
  background-color: rgb(233, 233, 233);
  border-radius: 60px;
  height: 60px;
  width: 100%;
  padding-left: 1em;
}
.LoginForm {
  margin: 0.3em;
}
.text {
  line-height: 60px;
  font-family: "Microsoft GothicNeo";
  font-size: 20px;
  font-weight: bold;
}
.center {
  margin: 0 auto;
  justify-content: center;
}

.LoginButton {
  border-radius: 60px;
  border: none;
  background-color: #2a404e;
  width: 100%;
  height: 60px;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
.Error {
  text-align: center;
  color: red;
}
</style>