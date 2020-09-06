<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" md="8" lg="8" xl="9">
        <Table :perPage="10" tableName="notice" :contents="contents" />
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
    this.axios
      .get(`${ipObj.ip}/api/notice/list`)
      .then((res) => {
        if (res.status === 200) {
          this.contents = [];
          res.data.noticeList.forEach((item, index) => {
            let obj = new Object();
            obj.number = index + 1;
            obj.title = item.title;
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
      subTitleObj: {
        title: "📌공지사항",
        contents: "셈틀꾼의 공지사항을 올리는 공간입니다.",
      },
    };
  },
};
</script>

<style scoped>
</style>