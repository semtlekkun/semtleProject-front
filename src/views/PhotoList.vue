<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" md="8" lg="8" xl="9">
        <Table :perPage="10" tableName="photo" :contents="contents" />
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
      .get(`${ipObj.ip}/api/photo/list`)
      .then((res) => {
        if (res.status === 200) {
          this.contents = [];
          res.data.photoList.forEach((item) => {
            let obj = new Object();
            obj.number = res.data.count--;
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
        title: "📸활동 사진",
        contents: "셈틀꾼의 활동 사진을 올리는 공간입니다.",
      },
    };
  },
};
</script>

<style scoped>
</style>