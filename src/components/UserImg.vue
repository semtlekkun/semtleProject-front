<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on, attrs}">
        <!-- 회원정보 변경 화면에서 보여질 카드 -->
        <v-card height="200" light="light">
          <!-- 이미지를 설정 안하면 기본 이미지 -->
          <div v-if="userImg===null">
            <v-img height="150" :src="require('../assets/sample.png')" />
          </div>

          <!-- 이미지 있으면 해당 이미지 -->
          <div v-else>
            <v-img :src="userImg" style="width:auto; height:150px;" />
          </div>
          <v-card-actions>
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
          <v-row>
            <v-col class="text-center">
              <input ref="imageInput" accept="image/*" type="file" hidden @change="onChangeImages" />
              <v-btn width="150" dark="dark" type="button" @click="onClickImageUpload">이미지 업로드</v-btn>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-card height="400" align="center" color="grey lighten-5">
                <div v-if="!this.selectImg">
                  <br />
                  <p>[ 미리보기 ]</p>
                  <!-- 미리보기 화면 -->
                </div>

                <div v-else>
                  <br />
                  {{selectImg}}
                  <v-img mt-5 :src="selectImg" width="300" height="300"></v-img>
                  <v-btn color="error" @click="onClickDel">X</v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-dark" text="text" @click="checkImg()">확인</v-btn>
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
    userImg: null,
    emptyfile: false,
    data: null,
  }),
  methods: {
    //이미지
    onClickImageUpload() {
      this.$refs.imageInput.click();
    },

    onChangeImages(e) {
      console.log(e);

      const file = e.target.files[0];
      this.selectImg = URL.createObjectURL(file);
      console.log(this.selectImg);
    },

    onClickDel() {
      this.selectImg = null;
    },

    checkImg() {
      this.dialog = false;
      this.userImg = this.selectImg;

      if (!this.chosenFile) {
        return (this.emptyfile = true);
      }
    },
  },
};
</script>

<style scoped>
</style>