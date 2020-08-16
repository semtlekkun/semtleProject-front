<template>
  <v-row>
    <v-col cols="12">
      <v-row>
        <v-col cols="10">
          <h1>{{noticeHeader.title}}</h1>
        </v-col>
        <v-col class="text-right">
          <v-btn v-show="admin" color="error" @click="deleteNotice">삭제</v-btn>
        </v-col>
      </v-row>
      <hr />
      <table>
        <tr>
          <td style="vertical-align:top;">작성자:{{noticeHeader.writerName}}</td>
        </tr>
        <tr style="vertical-align:bottom;">
          <td>작성일:{{noticeHeader.date}}</td>
          <td>|조회수:{{noticeHeader.views}}</td>
        </tr>
      </table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted(){
    this.noticeID = this.$route.params.id
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
  },
  props: {
    noticeHeader: {
      type: Object,
      required: true,
    },
  },

  data(){
    return{
      noticeID:"",
      admin:false,
    }
  },
  methods:{
    deleteNotice(){
      console.log("delete")
      this.axios.delete(`http://49.50.166.64/api/notice/${this.noticeID}`,{
        headers:{
          'token': sessionStorage.getItem('token')
        }
      },{})
      .then(res=>{
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
};
</script>

<style scoped>
hr {
  background-color: #fff;
  border-top: 2px dashed #8c8b8b;
}
</style>