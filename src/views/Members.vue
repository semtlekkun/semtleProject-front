<template>
  <div id="members">
    <v-container class="text-center">
      <h1 class="text-left">{{activeYear}} {{season}}</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="number">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mt-16"></v-divider>
      <h1 class="mt-5 text-left">{{activeYear}} {{season}}</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mt-16"></v-divider>
      <h1 class="mt-5 text-left">{{activeYear}} {{season}}</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="position">{{language}}{{position}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      activeYear: null,
      season: null,
      managementList: null,
      studentCode: null,
      name: null,
      contents: null,
      language: null,
      position: null,
      image: null,
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      axios.get("http://49.50.166.64/api/management/list")
      .then((res) => {
        console.log("콘솔로그 시작");
        console.log(res);
        console.log(res.status);
        console.log(res.management);
        console.log(res.management.activeYear);
        console.log(res.management.Info.name);
        console.log("콘솔로그 끝");
        this.activeYear = res.management.activeYear;
        this.season = res.management.season;
        this.language = res.management.language;
        this.position = res.management.position;
        this.studentCode = res.management.studentCode;
        this.name = res.management.name;
        this.image = res.management.image;
        this.contents = res.management.contents;
        this.managementList = res.management.managementList;
      })
      .catch((error) => {
        console.log(error);
      });
    },
  }
}
</script>

<!--
{"status":"success",
"management":[
  {"_id":"5f361dd5573edf62414b6389",
  "activeYear":"2020",
  "season":"1학기 (여름학기)",
  "position":"멘토",
  "language":"C++",
  "studentCode":"20160450",
  "contents":"박건웅이다.",
  "Info":[{"name":"박건웅","image":"default.jpg"}]},
  
  {"_id":"5f362c9d573edf62414b638b",
  "activeYear":"2016",
  "season":"2학기 (겨울학기)",
  "position":"회장",
  "language":"",
  "studentCode":"20160001",
  "contents":"이정철이다",
  "Info":[{"name":"이정철","image":"default.jpg"}]},
  
  {"_id":"5f362e1c573edf62414b638f",
  "activeYear":"2018",
  "season":"1학기 (여름학기)",
  "position":"멘토",
  "language":"Linux",
  "studentCode":"20181061",
  "contents":"전하영이다.",
  "Info":[{"name":"전하영","image":"default.jpg"}]},
  
  {"_id":"5f3634362c290901c807335c",
  "activeYear":"2020",
  "season":"2학기 (겨울학기)",
  "position":"멘토",
  "language":"Python",
  "studentCode":"20161313",
  "contents":"병신새끼이다.",
  "Info":[{"name":"황윤성","image":"2020-08-16_15-00-56-435_akali.jpg"}]},
  
  {"_id":"5f36396d2c290901c807338a",
  "activeYear":"2016",
  "season":"1학기 (여름학기)",
  "position":"멘토","language":"Java",
  "studentCode":"20160140","contents":"김도현이다.",
  "Info":[{"name":"김도현","image":"default.jpg"}]},
  
  {"_id":"5f36399b2c290901c807338b",
  "activeYear":"2018",
  "season":"2학기 (겨울학기)",
  "position":"멘토","language":"Python",
  "studentCode":"20180982",
  "contents":"이효진이다.",
  "Info":[{"name":"이효진","image":"default.jpg"}]},
  
  {"_id":"5f3674cc0fc63e33c6897134",
  "activeYear":"2012",
  "season":"2학기 (겨울학기)",
  "position":"멘토",
  "language":"C++",
  "studentCode":"20150000",
  "contents":"김태성 수정",
  "Info":[{"name":"김태성","image":"default.jpg"}]}
]}
-->

<style>
img {
  border-radius: 5px;
  width: 100%;
}
.v-application p {
  margin-bottom: 0;
}
.role,
.number,
.contents {
  font-size: 0.9em;
}
.role {
  color: #727272 !important;
  margin-top: 20px;
}
.name {
  font-size: 1.1em;
  font-weight: 500;
}
.contents {
  color: #727272 !important;
}
</style>