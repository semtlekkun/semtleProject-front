<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on, attrs}">
        <!-- 회원정보 변경 화면에서 보여질 카드 -->
        <v-card height="200" light="light">
          <div class="text-center">
            <img height="145" :src="imageUrl" />
          </div>

          <v-card-actions class="justify-center">
            <v-btn
              color="rgb(80, 130, 155)"
              v-bind="attrs"
              v-on="on"
              dark
              class="btn"
              @click="openDialog"
            >이미지 변경</v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <v-card class="white lighten-1">
        <v-card-title class="headline lighten-2">이미지 변경</v-card-title>

        <v-divider></v-divider>
        <!-- 이미지 변경 다이얼로그 창 내용구성 -->
        <v-container>
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-file-input
                color="rgb(80,130,155)"
                label="이미지 첨부"
                accept="image/*"
                prepend-icon="mdi-camera"
                v-model="selectImg"
              ></v-file-input>
            </v-col>
            <v-col cols="12" class="pt-0">
              <h5>※ 기본 이미지는 이미지 선택을 하지 않고 확인 버튼을 눌러주세요.</h5>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-dark" text="text" @click="submit">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ipObj from "../key";
import { mapMutations } from "vuex";
export default {
  data: () => ({
    dialog: false,
    img: "../assets/sample.png",
    data: null,
    imageUrl: null,
    selectImg: null,
  }),
  created() {
    this.initImage();
  },
  methods: {
    initImage() {
      let config = {
        headers: { token: sessionStorage.getItem("token") },
      };

      this.axios
        .get(`${ipObj.ip}/api/mypage`, config)
        .then((res) => {
          this.imageUrl = `${ipObj.ip}/api/student/images/`;
          this.imageUrl = this.imageUrl.concat(res.data.student.image);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openDialog() {
      this.selectImg = null;
    },
    submit() {
      let config = {
        headers: { token: sessionStorage.getItem("token") },
      };

      let form = new FormData();
      form.append("image", this.selectImg);

      this.axios
        .put(`${ipObj.ip}/api/mypage/picture/update`, form, config)
        .then((res) => {
          console.log(res);
          this.dialog = false;
          this.$router.go();
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("세션이 만료되어 홈 화면으로 이동합니다.");
            this.setLogout();
          }
        });
    },
    ...mapMutations(["setLogout"]),
  },
};
</script>

<style scoped>
h5 {
  color: gray;
}
</style>