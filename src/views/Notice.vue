<template>
  <!--<v-container style="margin-top: 4rem; margin-bottom: 4rem;">-->
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" lg="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" lg="9">
        <div id="noticeRead">
          <v-container class="px-0">
            <v-row>
              <v-col cols="12">
                <v-card id="contentBox">
                  <v-alert outlined color="#365164">
                    <v-row class="py-0">
                      <v-col cols="12" class="py-0">
                        <v-card-title class="font-weight-black">{{title}}</v-card-title>
                      </v-col>
                      <v-col class="text-right" cols="12" v-show="admin">
                        <v-btn color="error" @click="deleteNotice">삭제</v-btn>
                      </v-col>
                    </v-row>
                    <v-divider class="mb-2"></v-divider>
                    <ul class="noticeInfo">
                      <li>
                        <b>작성자</b>
                        {{writer}}
                      </li>
                      <li>
                        <b>작성일</b>
                        {{date}}
                      </li>

                      <li>
                        <v-icon small>mdi-eye</v-icon>
                        {{views}}
                      </li>
                    </ul>
                    <v-card-text style="color: #000;">{{contents}}</v-card-text>
                    <v-card-text>
                      <div id="imageContainer">
                        <img :src="imageUrl" width="100%;" />
                      </div>
                    </v-card-text>
                  </v-alert>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import SubTitle from "../components/SubTitle.vue";

export default {
  created() {
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
    this.noticeID = this.$route.params.id;
    this.axios
      .get(`${ipObj.ip}/api/notice/${this.noticeID}`)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          this.title = res.data.notice.title;
          this.writer = res.data.notice.writer;
          this.views = res.data.notice.view;
          this.date = res.data.notice.date;
          this.contents = res.data.notice.contents;
          this.imageUrl = `${ipObj.ip}/api/notice/images/`.concat(
            res.data.notice.image
          );
          // 이미지도 추가
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data: () => ({
    admin: false,
    noticeID: "",
    title: "",
    writer: "",
    date: "",
    views: 0,
    imageUrl: "",

    contents: "",
    subTitleObj: {
      title: "📌공지사항",
      contents: "셈틀꾼의 공지사항을 올리는 공간입니다.",
    },
  }),

  components: {
    SubTitle,
  },
  methods: {
    deleteNotice() {
      let result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        this.axios
          .delete(`${ipObj.ip}/api/notice/${this.noticeID}`, {
            headers: {
              token: sessionStorage.getItem("token"),
            },
          })
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ name: "noticeList" });
            }
          });
      }
    },
  },
};
</script>

<style>
#noticeRead hr {
  border-top: 1px solid #365164;
}
#noticeRead b {
  margin-right: 3px;
}
#noticeRead ul {
  padding-left: 15px;
  font-size: 12px;
}
.noticeInfo {
  color: gray;
  margin-bottom: 30px;
}
.noticeInfo li {
  list-style: none;
  display: inline;
  margin-right: 10px;
}
</style>