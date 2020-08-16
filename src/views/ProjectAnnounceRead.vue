<template>
  <div id="projectRead">
      <v-container style="margin-top: 4rem; margin-bottom: 4rem;">
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-alert outlined color="#226db2">
                <v-card-title>{{title}}</v-card-title>
                <v-divider class="mb-2"></v-divider>
                <ul class="announceInfo">
                  <li>
                    <b>작성자</b>
                    {{writer}}
                  </li>
                  <li>
                    <b>작성일</b>
                    {{date}}
                  </li>
                  <li>
                    <b>마감일</b>
                    {{deadline}}
                  </li>
                  <li>
                    <b>모집인원</b>
                    {{recruitment}}
                  </li>
                  <li>
                    <v-icon small>mdi-eye</v-icon>
                    {{views}}
                  </li>
                </ul>
                <v-card-text style="color: #000;">
                  <vue-markdown :source="content"></vue-markdown>
                </v-card-text>
              </v-alert>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  created(){
    const projectAnnounceID = this.$route.params.id
    this.axios.get(`http://49.50.166.64/api/recruit/${projectAnnounceID}`)
    .then(res=>{
      // console.log(res)
      if(res.status === 200){
        this.title = res.data.recruit.title;
        this.writer = res.data.recruit.writer;
        this.views = res.data.recruit.view;
        this.date = res.data.recruit.date;
        this.deadline = res.data.recruit.endDate;
        this.recruitment = res.data.recruit.recruitment;
        this.content = res.data.recruit.contents;
      }
    })
    .catch(err=>{
      console.log(err)
    })
  },
  data: () => ({
    title: "",
    writer: "",
    date: "",
    deadline: "",
    views: 0,
    recruitment: 0,
    content: ''
  }),

  components: {
    VueMarkdown
  }
};
</script>

<style>
#projectRead hr {
  border-top: 1px solid #226db2;
}
#projectRead b {
  margin-right: 3px;
}
#projectRead ul {
  padding-left: 15px;
  font-size: 12px;
}
.announceInfo {
  color: gray;
  margin-bottom: 30px;
}
.announceInfo li {
  list-style: none;
  display: inline;
  margin-right: 10px;
}
</style>