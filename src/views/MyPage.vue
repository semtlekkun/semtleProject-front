<!--
pflist 없을 경우 null로 감 처리해야함

res.data.student.pfList -> 순회해서 출력
-->

<template>
  <v-container class="px-0">
    <v-row cols="12">
      <h1 class="mt-3 ml-2">😶프로필 수정</h1>
    </v-row>
    <v-row>
      <!-- 사진 -->
      <v-col cols="12" md="6">
        <UserImg />
        <br />
        <MyPageNickName />
      </v-col>
      <v-col cols="12" md="6">
        <PhoneNum />
        <br />
        <Pw />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1 class="mt-3">💻나의 프로젝트</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="projects"
          :items-per-page="5"
          @click:row="clickRow"
        >
          <template v-slot:header.name="{ header }">{{ header.text.toUpperCase() }}</template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import Pw from "../components/Password.vue";
import UserImg from "../components/UserImg.vue";
import PhoneNum from "../components/PhoneNum.vue";
import MyPageNickName from "../components/MyPageNickName.vue";

export default {
  data: () => ({
    dialog: false,
    headers: [
      {
        text: "프로젝트 이름",
        align: "start",
        value: "projectName",
      },
      { text: "팀명", value: "teamName" },
      { text: "프로젝트 기간", value: "term" },
      { text: "참여인원", value: "memberNum" },
    ],
    projects: [],
  }),
  components: {
    Pw,
    PhoneNum,
    UserImg,
    MyPageNickName,
  },
  created() {
    this.initPortfolio();
  },
  methods: {
    clickRow(row) {
      this.$router.push({
        name: "project",
        params: {
          id: row.projectLink,
        },
      });
    },
    initPortfolio() {
      let config = {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      };

      this.axios
        .get(`${ipObj.ip}/api/mypage`, config)
        .then((res) => {
          console.log(res);
          for (let idx = 0; idx < res.data.student.pfList.length; ++idx) {
            var tempObj = {
              projectName: "",
              teamName: "",
              term: "",
              memberNum: "",
              projectLink: "",
            };
            tempObj.projectName = res.data.student.pfList[idx].projectTitle;
            tempObj.teamName = res.data.student.pfList[idx].projectTeamName;
            tempObj.term =
              res.data.student.pfList[idx].projectStartDate +
              "~" +
              res.data.student.pfList[idx].projectEndDate;
            tempObj.memberNum = res.data.student.pfList[idx].students.length;
            tempObj.projectLink = res.data.student.pfList[idx]._id;

            this.projects.unshift(tempObj);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>