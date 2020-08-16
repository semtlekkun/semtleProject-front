<template>
  <div id="members">
    <v-container class="text-center">
      <h1 class="text-left">{{activeYear}} {{season}}</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="position">{{language}}{{position}}</p>
            <p class="number">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="position">{{language}}{{position}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
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
            <p class="position">{{language}}{{position}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="position">{{language}}{{position}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="position">{{language}}{{position}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="position">{{language}}{{position}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
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
            <p class="position">{{language}}{{position}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="position">{{language}}{{position}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="position">{{language}}{{position}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
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
        // console.log(res);
        // console.log(res.status);
        // console.log(res.data);
        // console.log(res.data.management);
        // console.log(res.data.management[0]);
        console.log(res.data.management[0].Info);
        // console.log(res.data.management[0].activeYear);
        // console.log(res.data.management[0].image);
        console.log("콘솔로그 끝");

        this.activeYear = `${res.data.management[0].activeYear}년`;
        this.season = res.data.management[0].season;
        this.language = res.data.management[0].language;
        this.position = res.data.management[0].position;
        this.studentCode = res.data.management[0].studentCode;
        this.name = res.data.management[0].Info[0].name;
        this.image = `http://49.50.166.64/${res.data.management[0].Info[0].image}`;
        this.contents = res.data.management[0].contents;
        this.managementList = res.data.management[0].managementList;
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
v-card img {
  border-radius: 5px;
  width: 100%;
}
.v-application p {
  margin-bottom: 0;
}
.position,
.number,
.contents {
  font-size: 0.9em;
}
.position {
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