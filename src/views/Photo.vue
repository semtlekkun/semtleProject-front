<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" lg="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>
      <v-col cols="12" lg="9">
        <div id="photoRead">
          <v-container class="px-0">
            <v-row>
              <v-col cols="12">
                <v-card id="contentBox">
                  <v-alert outlined color="#365164">
                    <v-row class="py-0">
                      <v-col cols="12" class="py-0">
                        <v-card-title class="font-weight-black">{{
                          title
                        }}</v-card-title>
                      </v-col>
                      <v-col class="text-right" cols="12" v-show="admin">
                        <v-btn color="error" @click="deletePhoto">삭제</v-btn>
                      </v-col>
                    </v-row>
                    <v-divider class="mb-2"></v-divider>
                    <ul class="photoInfo">
                      <li>
                        <b>작성자</b>
                        {{ writer }}
                      </li>
                      <li>
                        <b>작성일</b>
                        {{ date }}
                      </li>

                      <li>
                        <v-icon small>mdi-eye</v-icon>
                        {{ views }}
                      </li>
                    </ul>
                    <v-card-text style="color: #000">
                      <vue-markdown
                        :source="contents"
                        class="ml-2"
                      ></vue-markdown>
                    </v-card-text>
                    <v-card-text v-if="isImage">
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
import VueMarkdown from "vue-markdown";

export default {
  created() {
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
    this.photoID = this.$route.params.id;
    this.axios
      .get(`${ipObj.ip}/api/photo/${this.photoID}`)
      .then((res) => {
        if (res.status === 200) {
          this.title = res.data.photo.title;
          this.writer = res.data.photo.writer;
          this.views = res.data.photo.view;
          this.date = res.data.photo.date;
          this.contents = res.data.photo.contents;
          this.imageUrl = `${ipObj.ip}/api/photo/images/`.concat(
            res.data.photo.image
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data: () => ({
    admin: false,
    photoID: "",
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

    isImage: true,
  }),

  components: {
    SubTitle,
    VueMarkdown,
  },
  methods: {
    deletePhoto() {
      let result = confirm("정말로 삭제하시겠습니까?");
      if (result) {
        this.axios
          .delete(`${ipObj.ip}/api/photo/${this.photoID}`, {
            headers: {
              token: sessionStorage.getItem("token"),
            },
          })
          .then((res) => {
            if (res.status === 200) {
              this.$router.push({ name: "photoList" });
            }
          });
      }
    },
  },
};
</script>

<style>
#photoRead hr {
  border-top: 1px solid #365164;
}
#photoRead b {
  margin-right: 3px;
}
#photoRead ul {
  padding-left: 15px;
  font-size: 12px;
}
.photoInfo {
  color: gray;
  margin-bottom: 30px;
}
.photoInfo li {
  list-style: none;
  display: inline;
  margin-right: 10px;
}
.v-alert__content {
  max-width: 100% !important;
}
pre,
code {
  white-space: pre-wrap !important;
}
</style>