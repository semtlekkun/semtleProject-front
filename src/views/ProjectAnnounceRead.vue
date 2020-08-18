<template>
  <div id="projectRead">
    <!--<v-container style="margin-top: 4rem; margin-bottom: 4rem;">-->
    <v-container>
      <v-row>
        <v-col cols="12" md="4" lg="4" xl="3">
          <SubTitle :subTitleObj="subTitleObj" />
        </v-col>
        <v-col cols="12" md="8" lg="8" xl="9">
          <v-card>
            <v-alert outlined color="#226db2">
              <v-row class="py-0">
                <v-col cols="10" class="py-0">
                  <v-card-title>{{title}}</v-card-title>
                </v-col>
                <v-col cols="2">
                  <v-btn v-show="admin" color="error" @click="deleteAnnounce">삭제</v-btn>
                </v-col>
              </v-row>
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
import SubTitle from "../components/SubTitle.vue";

export default {
  created() {
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
    this.projectAnnounceID = this.$route.params.id;
    this.axios
      .get(`http://49.50.166.64/api/recruit/${this.projectAnnounceID}`)
      .then((res) => {
        // console.log(res)
        if (res.status === 200) {
          this.title = res.data.recruit.title;
          this.writer = res.data.recruit.writer;
          this.views = res.data.recruit.view;
          this.date = res.data.recruit.date;
          this.deadline = res.data.recruit.endDate;
          this.recruitment = res.data.recruit.recruitment;
          this.content = res.data.recruit.contents;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data: () => ({
    admin: false,
    projectAnnounceID: "",
    title: "",
    writer: "",
    date: "",
    deadline: "",
    views: 0,
    recruitment: 0,

    content: "",
    subTitleObj: {
      title: "프로젝트 공고",
      contents: "프로젝트 공고이다.",
    },
  }),

  components: {
    VueMarkdown,
    SubTitle,
  },
  methods: {
    deleteAnnounce() {
      this.axios
        .delete(`http://49.50.166.64/api/recruit/${this.projectAnnounceID}`, {
          headers: {
            token: sessionStorage.getItem("token"),
          },
        })
        .then((res) => {
          if (res.status === 200) {
            this.$router.push({ name: "projectAnnounceList" });
          }
        });
    },
  },
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