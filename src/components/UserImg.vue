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
            <v-img :src="imageUrl" style="width:auto; height:150px;" />
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
    imageUrl: null,
  }),
  methods: {
    //이미지

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