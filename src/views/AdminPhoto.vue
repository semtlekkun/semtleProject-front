<template>
  <v-container>
    <!-- 제목 -->
    <v-row class="mt-5 justify-center">
      <v-col cols="12" md="3" lg="2">
        <label>제목</label>
      </v-col>

      <v-col cols="12" md="9" lg="6">
        <v-text-field
          color="rgb(80, 130, 155)"
          label="제목"
          outlined
          v-model="title"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- 내용 -->
    <v-row class="mt-5 justify-center">
      <v-col cols="12" md="3" lg="2">
        <label for="contents_">내용</label>
      </v-col>
      <v-col cols="12" md="9" lg="6">
        <v-textarea
          color="rgb(80, 130, 155)"
          id="contents_"
          outlined
          counter
          rows="20"
          label="게시글 내용"
          no-resize
          v-model="contents"
        ></v-textarea>
      </v-col>
    </v-row>

    <!-- 이미지 -->
    <v-row class="mt-5 justify-center">
      <v-col cols="12" md="3" lg="2">
        <label for="image_">사진</label>
      </v-col>

      <v-col cols="12" md="9" lg="6">
        <v-file-input
          color="rgb(80, 130, 155)"
          label="이미지 첨부"
          accept="image/*"
          prepend-icon="mdi-camera"
          v-model="imageUrl"
        ></v-file-input>
      </v-col>
    </v-row>

    <!-- 최종 확인 버튼 -->
    <v-row>
      <v-col xs="12" md="8" offset-xs="0" offset-md="2">
        <!-- 스낵바 -->
        <v-btn block x-large dark color="rgb(80, 130, 155)" @click="check">
          <v-icon>mdi-pencil</v-icon>확인
        </v-btn>

        <!-- 스낵바 눌렀을 때 -->
        <v-snackbar v-model="snackbar" top :timeout="timeout">
          <!-- 띄울 메세지 -->
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn :color="color" text v-bind="attrs" @click="snackbar = false"
              >Close</v-btn
            >
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import { mapMutations } from "vuex";
export default {
  name: "HelloWorld",

  data: () => ({
    //이미지 주소 저장
    imageUrl: null,

    //제목
    title: "",

    //내용
    contents: "",

    //------------------
    //스낵바 관련 변수
    snackbar: false,

    //스낵바에 띄울 메세지
    text: "",

    //스낵바 지속시간
    timeout: 3000,

    //미작성부분 아이디 값 저장.
    item: "",

    //스낵바 버튼 색상
    color: "",
  }),

  methods: {
    //확인 버튼에서 넘어오는걸로 수정
    CheckForm() {
      let form = new FormData();
      form.append("title", this.title);
      form.append("contents", this.contents);
      form.append("image", this.imageUrl);
      this.axios
        .post(`${ipObj.ip}/api/photo`, form, {
          headers: {
            token: sessionStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            location.href = "/admin/menu";
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            this.text = "세션이 만료되어 홈 화면으로 이동합니다.";
            this.setLogout();
          }
          console.log(err);
        });
      //e.preventDefault();
    },

    //제목이나 내용중에서 누락된 부분이 있는지 체크
    check() {
      this.snackbar = true;

      if (this.title === "") {
        this.text = "제목을 작성하지 않았습니다.";
        this.item = "title_";
        this.moveView();
        this.color = "red";
      } else if (this.contents === "") {
        this.text = "내용을 작성하지 않았습니다.";
        this.item = "contents_";
        this.moveView();
        this.color = "red";
      } else if (this.imageUrl === null) {
        this.text = "사진이 등록되지 않았습니다.";
        this.item = "image_";
        this.moveView();
        this.color = "red";
      } else {
        this.text = "활동 사진 업로드 완료.";
        this.color = "blue";
        this.CheckForm();
      }
    },

    //작성이 되지 않은 영역으로 이동
    moveView() {
      if (this.item === "title_") window.scrollBy(0, -200);
      else window.scrollBy(0, -50);
    },
    ...mapMutations(["setLogout"]),
  },
};
</script>