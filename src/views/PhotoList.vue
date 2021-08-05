<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" md="8" lg="8" xl="9">
        <v-row>
          <v-col
            v-for="item in curContents"
            :key="item._id"
            cols="12"
            md="4"
            lg="4"
            xl="4"
            sm="6"
          >
            <router-link :to="{ name: 'photo', params: { id: item._id } }">
              <v-card
                height="300"
                max-height="300"
                max-width="250"
                class="mx-auto"
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="com-title">
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.date }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-img :src="item.image" height="194"></v-img>

                <v-card-text>
                  <span
                    v-for="(text, index) in item.contents"
                    :key="text.index"
                    v-show="index < 10"
                  >
                    {{ text }}
                  </span>
                  <span v-if="item.contents.length > 10">...</span>
                </v-card-text>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <div class="text-center pb-3">
      <v-pagination
        :value="curPage"
        v-model="curPage"
        :length="pageLength"
        color="#50829b"
      ></v-pagination>
    </div>
  </v-container>
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

          console.log(res.data.photoList);

          res.data.photoList.forEach((item) => {
            let obj = new Object();
            obj.title = item.title;
            obj.date = item.date;
            obj.contents = item.contents;
            obj.image = `${ipObj.ip}/api/photo/images/` + item.image;
            obj._id = item._id;
            this.contents.push(obj);
          });

          this.pageLength = Math.ceil(this.contents.length / 6);

          // 사진이 5장 이하라면
          if (this.contents.length < 6) this.curContents = this.contents;
          // 사진이 6장 이상이라면
          else {
            // 최초의 1번 페이지를 할당
            this.curContents = this.contents.slice(0, 6);
          }
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
      curPage: 1,
      pageLength: 0,
      curContents: [],
      subTitleObj: {
        title: "📸활동 사진",
        contents: "셈틀꾼의 활동 사진을 올리는 공간입니다.",
      },
    };
  },

  watch: {
    curPage: function () {
      let count = this.curPage - 1;
      // 마지막 페이지 예외처리
      if (this.curPage === this.pageLength)
        this.curContents = this.contents.slice(count * 6, this.contents.length);
      else this.curContents = this.contents.slice(count * 6, count * 6 + 6);
    },
  },
};
</script>

<style scoped>
</style>