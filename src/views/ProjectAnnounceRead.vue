<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" lg="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" lg="9">
        <div id="projectRead">
          <v-container class="px-0">
            <v-row>
              <v-col cols="12">
                <v-card>
                  <v-alert outlined color="#365164">
                    <v-row class="py-0">
                      <v-col cols="12" class="py-0">
                        <v-card-title class="font-weight-black">{{
                          title
                        }}</v-card-title>
                      </v-col>
                      <v-col class="text-right" cols="12" v-show="admin">
                        <v-btn color="error" @click="deleteAnnounce"
                          >삭제</v-btn
                        >
                      </v-col>
                    </v-row>
                    <v-divider class="mb-2"></v-divider>
                    <ul class="announceInfo">
                      <li>
                        <b>작성자</b>
                        {{ writer }}
                      </li>
                      <li>
                        <b>작성일</b>
                        {{ date }}
                      </li>
                      <li>
                        <v-icon small>mdi-eye</v-icon>
                        {{ views }}
                      </li>
                    </ul>
                    <v-card-text style="color: #000;">
                      <v-row class="my-2 mx-1">
                        <v-col
                          cols="4"
                          xs="4"
                          sm="3"
                          md="2"
                          class="rounded-xl blue-grey lighten-3 font-weight-black text-center"
                          >마감일</v-col
                        >
                        <v-col
                          cols="8"
                          xs="8"
                          sm="9"
                          md="10"
                          class="text-left"
                          >{{ deadline }}</v-col
                        >
                      </v-row>

                      <v-row class="my-2 mx-1">
                        <v-col
                          cols="4"
                          xs="4"
                          sm="3"
                          md="2"
                          class="rounded-xl blue-grey lighten-3 font-weight-bold text-center"
                          >모집인원</v-col
                        >
                        <v-col
                          cols="8"
                          xs="8"
                          sm="9"
                          md="10"
                          class="text-left"
                          >{{ recruitment }}</v-col
                        >
                      </v-row>
                      <VueMarkdown
                        :source="content"
                        class="mt-10 ml-2"
                      ></VueMarkdown>
                    </v-card-text>
                  </v-alert>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitle from "../components/SubTitle.vue";
import VueMarkdown from "vue-markdown";
import { initRecruitApi, deleteAnnounceApi } from "../api/api.js";

export default {
  created() {
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
    this.projectAnnounceID = this.$route.params.id;
    initRecruitApi(this.projectAnnounceID)
      .then(res => {
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
      .catch(err => {
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
      title: "📝프로젝트 공고",
      contents: "프로젝트 인원을 모집하는 공간입니다."
    }
  }),

  components: {
    SubTitle,
    VueMarkdown
  },
  methods: {
    deleteAnnounce() {
      let result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        deleteAnnounceApi(this.projectAnnounceID).then(res => {
          if (res.status === 200) {
            this.$router.push({ name: "projectAnnounceList" });
          }
        });
      }
    }
  }
};
</script>

<style>
#projectRead hr {
  border-top: 1px solid #365164;
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
.v-alert__content {
  max-width: 100% !important;
}
pre,
code {
  white-space: pre-wrap !important;
}
</style>
