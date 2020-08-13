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
      questionID:""
    }
  },

  methods:{
    inputAnswer(){
      this.axios.post(`http://49.50.166.64/api/answer/${this.questionID}`,
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
      .catch(err=>{
        console.log(err)
      })
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