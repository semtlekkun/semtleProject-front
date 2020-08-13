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
import QuestionSpeechBubble from "./QuestionSpeechBubble";
import AnswerSpeechBubble from "./AnswerSpeechBubble";

export default {
  mounted(){
    this.admin = JSON.parse(sessionStorage.getItem('admin'));
    this.token = sessionStorage.getItem('token');
    // console.log(this.admin)
  },
  components: {
    QuestionSpeechBubble,
    AnswerSpeechBubble
  },
  props: {
    commentData: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      admin:false,
      token:'',
    }
  },

  methods:{
    deleteAnswer(id){
      // console.log(id)
      this.axios.delete(`http://49.50.166.64/api/answer/${id}`,
      {
        headers:{
          'token' : this.token
        }
      },{})
      .then(res=>{
        // console.log(res)
        if(res.status === 200){
          this.$router.go()
        }
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>