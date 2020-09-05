<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" lg="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" lg="9">
        <div id="projectRead">
          <!--<v-container style="margin-top: 4rem; margin-bottom: 4rem;">-->
          <v-container class="px-0">
            <v-row>
              <v-col cols="12">
                <v-card>
                  <v-alert outlined color="#365164">
                    <v-row class="py-0">
                      <v-col cols="12" class="py-0">
                        <v-card-title class="font-weight-black">{{title}}</v-card-title>
                      </v-col>
                      <v-col class="text-right" cols="12" v-show="admin">
                        <v-btn color="error" @click="deleteProject">삭제</v-btn>
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
                        <v-icon small>mdi-eye</v-icon>
                        {{view}}
                      </li>
                    </ul>

                    <!-- 팀원 카드 -->

                    <v-card-text style="color: #000;" width="100%">
                      <v-card
                        class="mr-5 my-5 elevation-1"
                        max-width="150"
                        v-for="member in members"
                        :key="member.index"
                        style="display:inline-block"
                      >
                        <v-img
                          class="white--text align-end"
                          height="150px"
                          :src="studentImageURL+member.image"
                        ></v-img>
                        <v-card-subtitle class="pb-0" v-if="member.nick === leaderNick">
                          <strong>팀장</strong>
                        </v-card-subtitle>
                        <v-card-subtitle class="pb-0" v-if="member.nick !== leaderNick">팀원</v-card-subtitle>
                        <v-card-text class="text--primary">
                          <div>{{member.nick}}</div>
                        </v-card-text>
                      </v-card>

                      <!-- 팀원 카드 -->
                      <v-row class="my-2 mx-1">
                        <v-col
                          cols="4"
                          xs="4"
                          sm="3"
                          md="2"
                          class="rounded-xl blue-grey lighten-3 font-weight-black text-center"
                        >팀명</v-col>
                        <v-col cols="8" xs="8" sm="9" md="10" class="text-left">{{TeamName}}</v-col>
                      </v-row>

                      <v-row class="my-2 mx-1">
                        <v-col
                          cols="4"
                          xs="4"
                          sm="3"
                          md="2"
                          class="rounded-xl blue-grey lighten-3 font-weight-bold text-center"
                        >기간</v-col>
                        <v-col
                          cols="12"
                          xs="8"
                          sm="9"
                          md="10"
                          class="text-left"
                        >{{startDate}} ~ {{endDate}}</v-col>
                      </v-row>

                      <v-row v-if="git !=''" class="my-2 mx-1">
                        <v-col
                          cols="4"
                          xs="4"
                          sm="3"
                          md="2"
                          class="rounded-xl blue-grey lighten-3 font-weight-bold text-center"
                        >Github</v-col>
                        <v-col cols="8" xs="8" sm="9" md="10" class="text-left">
                          <a :href="git" style="color:#50829b">링크 바로가기</a>
                        </v-col>
                      </v-row>

                      <v-row v-if="link !=''" class="my-2 mx-1">
                        <v-col
                          cols="4"
                          xs="4"
                          sm="3"
                          md="2"
                          class="rounded-xl blue-grey lighten-3 font-weight-bold text-center"
                        >Link</v-col>
                        <v-col cols="8" xs="8" sm="9" md="10" class="text-left">
                          <a :href="link" style="color:#50829b">링크 바로가기</a>
                        </v-col>
                      </v-row>

                      <VueMarkdown :source="contents" class="mt-10 ml-2"></VueMarkdown>
                    </v-card-text>
                    <!-- 

                        카로셀 작업중
                        <v-carousel height="700px" hide-delimiters style="text-align:-webkit-center;">
                      <v-carousel-item
                        v-for="(image,i) in images"
                        :key="i"
                        :src="imageURL+image"
                        width="100%"
                      ></v-carousel-item>
                    </v-carousel>-->

                    <v-card-text>
                      <!-- 패딩이 그림부분이랑 위랑 달라서 v-card-text로 감쌈 -->
                      <div v-for="(image,i) in images" :key="i">
                        <img :src="imageURL+image" width="70%" max-width="960px" />
                      </div>
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
import ipObj from "../key";
import VueMarkdown from "vue-markdown";
import SubTitle from "../components/SubTitle.vue";

export default {
  created() {
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
    this.projectID = this.$route.params.id;
    this.axios
      .get(`${ipObj.ip}/api/pf/${this.projectID}`)
      .then((res) => {
        this.title = res.data.project.projectTitle;
        this.startDate = res.data.project.projectStartDate;
        this.endDate = res.data.project.projectEndDate;
        this.contents = res.data.project.contents;
        this.leaderNick = res.data.project.leaderNick;
        this.writer = res.data.project.writer;
        this.TeamName = res.data.project.projectTeamName;
        this.view = res.data.project.view;
        this.date = res.data.project.date;
        this.link = res.data.project.link;
        this.git = res.data.project.git;
        res.data.studentInfo.forEach((student) => {
          this.members.push(student);
        });
        this.images = res.data.project.projectImages;
      })

      .catch((err) => {
        // handle error
        console.log(err);
      });
  },
  components: {
    VueMarkdown,
    SubTitle,
  },
  data() {
    return {
      imageURL: `${ipObj.ip}/api/pf/images/`,
      studentImageURL: `${ipObj.ip}/api/student/images/`,
      projectID: "",
      admin: false,
      title: "",
      startDate: "",
      endDate: "",
      contents: "",
      leaderNick: "",
      writer: "",
      TeamName: "",
      view: "",
      date: "",
      members: [],
      link: "",
      subTitleObj: {
        title: "💻프로젝트",
        contents: "프로젝트이다.",
      },
      git: "",
      images: [],
    };
  },
  methods: {

    deleteProject() {
      let result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        this.axios
          .delete(
            `${ipObj.ip}/api/pf/${this.projectID}`,
            {
              headers: {
                token: sessionStorage.getItem("token"),
              },
            },
            {}
          )
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({
                name: "projectList",
              });
            }
          });
      }
    },
  },
};
</script>

<style scoped>
/*.customTable {
  background: rgb(56, 82, 103);
  color: white;
} >>> customTable class는 주석처리된 부분에서만 사용됨. */
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
}

.announceInfo li {
  list-style: none;
  display: inline;
  margin-right: 10px;
}
</style>
