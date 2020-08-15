<template>
  <div id="members">
    <v-container class="text-center">
      <h1 class="text-left">{{season}}</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="number">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mt-16"></v-divider>
      <h1 class="mt-5 text-left">{{season}}</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mt-16"></v-divider>
      <h1 class="mt-5 text-left">{{season}}</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
            <p class="studentCode">{{studentCode}}</p>
            <p class="name">{{name}}</p>
            <p class="contents">{{contents}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <img v-bind:src="image" />
            <p class="role">{{managementList}}</p>
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
      season: "2021년 1학기",
      managementList: "회장",
      studentCode: "20210000",
      name: "김이름",
      contents: `내용내용내용내용내용내용내용내용`,
      image:
        "https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg",
    };
  },

  mounted() {
    console.log("111");
    axios
      .get("http://49.50.166.64/api/management/list")
      .then((res) => {
        console.log("222");
        console.log(res);
        this.season = res.season;
        this.studentCode = res.studentCode;
        this.name = res.name;
        this.image = res.image;
        this.contents = res.contents;
        this.managementList = res.managementList;
      })
      .catch((error) => {
        console.log("333");
        console.log(error);
      });
  },
};
</script>

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