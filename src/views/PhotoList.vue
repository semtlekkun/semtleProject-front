<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" md="8" lg="8" xl="9">
        <v-row>
          <v-col cols="12" md="4" lg="4" xl="4" sm="6">
            <router-link to="">
              <v-card
                height="300"
                max-height="300"
                max-width="250"
                class="mx-auto"
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="com-title">
                      제목
                    </v-list-item-title>
                    <v-list-item-subtitle> 날짜 </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img src="../assets/쿼카.jpg" height="194"></v-img>

                <v-card-text>
                  <span> 텍스트 </span>
                  <span>10자 넘으면...</span>
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <div class="text-center pb-3">
      <v-pagination
        v-model="page"
        :length="pageCount"
        color="#50829b"
      ></v-pagination>
    </div>
  </v-container>
  <!-- <v-container class="px-0">
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" md="8" lg="8" xl="9">
        <Table :perPage="10" tableName="photo" :contents="contents" />
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
import ipObj from "../key";
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
            obj.title = item.title;
            obj.date = item.date;
            // 추가해주세용
            obj.image = item.image;
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
    SubTitle,
  },
  data() {
    return {
      contents: [],
      page: 1,
      pageCount: 0,
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