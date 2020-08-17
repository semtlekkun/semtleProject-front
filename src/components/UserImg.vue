<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on, attrs}">
        <!-- 회원정보 변경 화면에서 보여질 카드 -->
        <v-card height="200" light="light">
          <div class="text-center">
            <img height="150" :src="imageUrl" />
          </div>

          <v-card-actions style="justify-content:center;">
            <v-btn v-bind="attrs" v-on="on" dark="dark" class="btn">이미지 변경</v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <div class="white lighten-1">
        <v-card-title class="headline lighten-2">이미지 변경</v-card-title>

        <v-divider></v-divider>

        <!-- 
                <v-alert type="error" v-model="emptyfile">
                    이미지 파일이 존재하지 않습니다.
                </v-alert>
        -->

        <!-- 이미지 변경 다이얼로그 창 내용구성 -->
        <v-container>
          <v-container>
            <v-row>
              <v-col>
                <v-file-input
                  label="이미지 첨부"
                  accept="image/*"
                  prepend-icon="mdi-camera"
                  v-model="imageUrl"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-dark" text="text" @click="submit">확인</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    img: "../assets/sample.png",
    selectImg: null,
    data: null,
    imageUrl: null,
  }),
  created() {
    this.initImage();
  },
  methods: {
    submit() {
      console.log(this.imageUrl);
      //

      this.dialog = false;
    },
    initImage() {
      let config = {
        headers: { token: sessionStorage.getItem("token") },
      };

      console.log(config);

      this.axios
        .get("http://49.50.166.64/api/mypage", config)
        .then((res) => {
          this.imageUrl = "http://49.50.166.64/api/student/";
          this.imageUrl = this.imageUrl.concat(res.data.student.image);
          console.log(this.imageUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
</style>