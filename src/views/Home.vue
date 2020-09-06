<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="12" sm="8">
            <h1>📌 공지사항</h1>
          </v-col>
          <v-col class="text-right my-auto">
            <router-link to="/notice/list">
              <v-btn rounded depressed class="customBtn">더보기</v-btn>
            </router-link>
          </v-col>
        </v-row>
        <Table :perPage="5" tableName="notice" :contents="noticeContents" />

        <v-row class="mt-15">
          <v-col cols="12" sm="8">
            <h1>📝 프로젝트 공고</h1>
          </v-col>
          <v-col class="text-right my-auto">
            <router-link to="/project/announce/list">
              <v-btn rounded depressed class="customBtn">더보기</v-btn>
            </router-link>
          </v-col>
        </v-row>
        <Table :perPage="5" tableName="projectAnnounce" :contents="projectAnnounceContents" />
      </v-col>

      <v-col>
        <v-row>
          <v-col cols="12" sm="8">
            <h1>💻 최근 프로젝트</h1>
          </v-col>
          <v-col class="text-right my-auto">
            <router-link to="/project/list">
              <v-btn rounded depressed class="customBtn">더보기</v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row id="projectView">
          <v-col xs="12" md="12" lg="6" xl="4" v-for="item in cardViewList" :key="item._id">
            <CardView :contentsObj="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import CardView from "../components/CardView.vue";
import Table from "../components/Table.vue";

export default {
  created() {
    this.axios
      .get(`${ipObj.ip}/api/notice/list`)
      .then((res) => {
        if (res.status === 200) {
          this.noticeContents = [];
          res.data.noticeList.forEach((item, index) => {
            let obj = new Object();
            obj.number = index + 1;
            obj.title = item.title;
            obj.writer = item.writer;
            obj.date = item.date;
            obj._id = item._id;
            this.noticeContents.push(obj);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    this.axios
      .get(`${ipObj.ip}/api/recruit/list`)
      .then((res) => {
        if (res.status === 200) {
          this.projectAnnounceContents = [];
          res.data.recruitList.forEach((item, index) => {
            let obj = new Object();
            obj.number = index + 1;
            obj.title = item.title;
            obj.writer = item.writer;
            obj.date = item.date;
            obj._id = item._id;
            this.projectAnnounceContents.push(obj);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    this.axios.get(`${ipObj.ip}/api/pf/list/1`).then((res) => {
      // console.log(res)
      if (res.status === 200) {
        this.cardViewList = [];
        res.data.projectList.forEach((item, index) => {
          let obj = new Object();
          obj.number = index + 1;
          obj.title = item.projectTitle;
          obj.teamName = item.projectTeamName;
          obj.date = item.date;
          obj._id = item._id;
          obj.imgSrc = `${ipObj.ip}/api/pf/images/` + item.projectImages[0];
          obj.contents = item.contents;
          this.cardViewList.push(obj);
        });
      }
    });
  },
  components: {
    CardView,
    Table,
  },
  data() {
    return {
      noticeContents: [],
      projectAnnounceContents: [],
      cardViewList: [],
    };
  },
};
</script>

<style scoped>
#projectView {
  max-height: 785px;
  overflow: auto;
}
</style>