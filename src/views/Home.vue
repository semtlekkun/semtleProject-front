<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
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
        <Table
          :perPage="5"
          tableName="projectAnnounce"
          :contents="projectAnnounceContents"
        />
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
          <v-col
            xs="12"
            md="12"
            lg="6"
            xl="4"
            v-for="item in cardViewList"
            :key="item._id"
          >
            <CardView :contentsObj="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h1>📸 활동 사진</h1>
      </v-col>
      <v-col class="text-right my-auto">
        <router-link to="/photo/list">
          <v-btn rounded depressed class="customBtn">더보기</v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row class="photoContainer mb-7">
      <v-col
        cols="4"
        lg="2"
        md="2"
        sm="4"
        xs="4"
        v-for="item in photoContents"
        :key="item._id"
      >
        <PhotoCard :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import CardView from "../components/CardView.vue";
import Table from "../components/Table.vue";
import PhotoCard from "../components/PhotoCard.vue";

export default {
  created() {
    // 공지사항
    this.axios
      .get(`${ipObj.ip}/api/notice/list`)
      .then((res) => {
        if (res.status === 200) {
          this.noticeContents = [];
          res.data.noticeList.forEach((item) => {
            let obj = new Object();
            obj.number = res.data.count--;
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

    // 프로젝트 공고
    this.axios
      .get(`${ipObj.ip}/api/recruit/list`)
      .then((res) => {
        if (res.status === 200) {
          this.projectAnnounceContents = [];
          res.data.recruitList.forEach((item) => {
            let obj = new Object();
            obj.number = res.data.count--;
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

    // 최근 프로젝트
    this.axios.get(`${ipObj.ip}/api/pf/list/1`).then((res) => {
      // console.log(res)
      if (res.status === 200) {
        this.cardViewList = [];
        res.data.projectList.forEach((item) => {
          let obj = new Object();
          obj.number = res.data.count--;
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

    // 활동 사진
    this.axios
      .get(`${ipObj.ip}/api/photo/list`)
      .then((res) => {
        if (res.status === 200) {
          this.photoContents = [];
          res.data.photoList.forEach((item) => {
            // 최근 6개만
            if (this.photoContents.length < 6) {
              let obj = new Object();
              obj.title = item.title;
              obj.date = item.date;
              obj._id = item._id;
              obj.contents = item.contents;
              obj.image = `${ipObj.ip}/api/photo/images/` + item.image;
              this.photoContents.push(obj);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    CardView,
    Table,
    PhotoCard,
  },
  data() {
    return {
      noticeContents: [],
      projectAnnounceContents: [],
      cardViewList: [],
      photoContents: [],
    };
  },
};
</script>

<style scoped>
#projectView {
  max-height: 785px;
  overflow: auto;
  margin-bottom: 190px;
}
</style>