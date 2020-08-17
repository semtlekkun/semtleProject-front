<template>
  <v-row>
    <v-col :class="`rounded-lg`" class="CommentFormBubble px-4 py-2">
      <v-form>
        <v-row>
          <v-col>
            <v-textarea
            v-model="contents" 
            filled color="blue lighten-1" 
            label="답변을 입력하세요" 
            no-resize rows="8"></v-textarea>
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
              <v-card-text><br/><br/><h2>{{this.errorMessage}}</h2></v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-show="this.isLogin" color="error" text @click="dialogBtn()">Login</v-btn>
                <v-btn color="error" text @click="dialog = false">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted(){
    this.questionID = this.$route.params.id;
    this.userToken = sessionStorage.getItem("token");
  },

  data(){
    return{
      contents:"",
      userToken:"",
      questionID:"",
      errorMessage:"",
      isLogin:false,
      dialog:false
    }
  },

  methods:{
    dialogBtn() {
      this.dialog = false;
      location.href = "/login";
    },

    inputAnswer(){
      if(this.contents === "") {
        this.dialog = true;
        this.isLogin = false;
        console.log(this.dialog);
        this.errorMessage = "내용이 없습니다.";
      }
      else {
        this.axios.post(`http://49.50.166.64/api/answer`,
        {
          contents: this.contents,
          question: this.questionID
        },
        {
          headers:{'token': this.userToken}
        },)
        .then(res=>{
          if(res.status === 200){
            this.$router.go()
          }
        })
        .catch((err)=>{
          if(err.response.status===401) {
            console.log("상태 코드" + err.response.status)
            //로그인 안되어 있으면 다이얼로그 제어 변수 true, 에러 메시지 설정.
            this.dialog = true;
            this.isLogin = true;
            this.errorMessage = "로그인후 이용 가능 합니다.";
          }
          console.log(err)
          console.log("[에러] 비로그인 접근")
        })
      }
    }
  }
}
</script>

<style scoped>
.CommentFile{
  background: #50829b;
}
.CommentFormBubble {
  width: 70em;
  position: relative;
  display: inline-block;
  background: rgb(215,206,207);
}
.CommentFormBubble:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 11px 0 11px 14px;
  border-color: transparent rgb(215,206,207);
  display: block;
  width: 0;
  z-index: 1;
  right: -14px;
  top: 17px;
}
</style>