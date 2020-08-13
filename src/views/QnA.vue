<template>
  <v-container>
    <Question :Question="QuestionData" style="margin-top:20px;" />
    <br />
    <hr />
    <br />
    <CommentList :commentData="commentData" />
    <br />
    <hr />
    <br />
    <CommentForm />
  </v-container>
</template>

<script>
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";
import Question from "../components/Question";
export default {
  mounted(){
    let id = this.$route.params.id;
    this.axios.get(`http://49.50.166.64/api/question/${id}`)
    .then(res=>{
      // console.log(res)
      if(res.status === 200){
        this.QuestionData = {
          title: res.data.title,
          question: res.data.contents,
          writerName: res.data.writer,
          time: res.data.date,
          views: 365,
          image: res.data.image
        }

        this.commentData.writerName = res.data.writer
      }
    })
    .catch(err=>{
      console.log(err)
    })


    this.axios.get(`http://49.50.166.64/api/answer/${id}`)
    .then(res=>{
      console.log(res)
      res.data.forEach(el=>{
        let obj = {
          name: el.writer,
          comment: el.contents,
          time: el.date,
          id: el._id
        }
        this.commentData.comments.push(obj)
      })
    })
    .catch(err=>{
      console.log(err)
    })
  },
  components: {
    CommentList,
    CommentForm,
    Question,
  },
  data() {
    return {
      QuestionData: {
        title: "",
        question: "",
        writerName: "",
        time: "",
        views: 365,
        image: ""
      },
      commentData: {
        writerName: "",

        comments: [],
      },
    }
  },
  methods:{

  }
};
</script>
<style>
p {
  margin-bottom: 0 !important;
}
</style>