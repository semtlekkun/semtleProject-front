<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" md="8" lg="8" xl="9">
        <v-row class="text-right">
          <v-col class="my-0 py-0">
            <router-link :to="{name:'projectInput'}" v-show="this.isLogin">
              <v-btn rounded depressed class="customBtn">글쓰기</v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="my-0 py-0">
            <Table :perPage="10" tableName="project" :contents="contents" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import Table from "../components/Table.vue";
import SubTitle from "../components/SubTitle.vue";
export default {
  created() {
    this.checkLogin();
    this.axios
      .get(`${ipObj.ip}/api/pf/list`)
      .then((res) => {
        if (res.status === 200) {
          this.contents = [];
          res.data.portfolioList.forEach((item, index) => {
            let obj = new Object();
            obj.number = index + 1;
            obj.title = item.projectTitle;
            obj.writer = item.writer;
            obj.date = item.date;
            obj._id = item._id;
            this.contents.push(obj);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Table,
    SubTitle,
  },
  data() {
    return {
      contents: [],
      isLogin: "",
      subTitleObj: {
        title: "💻프로젝트 목록",
        contents: "프로젝트 목록이다.",
      },
    };
  },

  methods: {
    //로그인 여부 확인
    checkLogin() {
      //토큰 X = 로그인 X
      if (!sessionStorage.getItem("token")) {
        return (this.isLogin = false);
      } else {
        return (this.isLogin = true);
      }
    },
  },
};
</script>

<style scoped>
</style>