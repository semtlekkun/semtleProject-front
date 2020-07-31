<template>
  <v-container>
    <!-- 작성자 정보 표시 (임시) -->
    <v-row class="mt-5">
      <v-col cols="12" md="3" offset-lg="2" lg="2">
        작성자 : {{writerId}}
      </v-col>
    </v-row>

    <!-- 제목 -->
    <v-row class="mt-5 justify-center">
      <v-col cols="12" md="3" lg="2">
        <label for="title_">제목</label>
      </v-col>

      <v-col cols="12" md="9" lg="6">
        <v-text-field
          id="title_"
          label="제목"
          outlined
          v-model="title"
          >
          </v-text-field>
      </v-col>
    </v-row>

    <!-- 내용 -->
    <v-row class="mt-5 justify-center">
      <v-col cols="12" md="3" lg="2">
        <label for="contents_">내용</label>
      </v-col>
      <v-col cols="12" md="9" lg="6">
        <v-textarea 
          id="contents_"
          outlined
          counter
          rows="20"
          label="게시글 내용"
          no-resize
          v-model="contents">
        </v-textarea>
      </v-col>
    </v-row>

    <!-- 이미지 -->
    <v-row class="mt-5 justify-center">
      <v-col cols="12" md="3" lg="2">
        <label for="image_">사진</label>
      </v-col>

      <v-col cols="12" md="9" lg="6">
        <input ref="imageInput" accept="image/*" type="file" hidden @change="onChangeImages">
        <v-btn type="button" @click="onClickImageUpload">이미지 업로드</v-btn>
      </v-col>
    </v-row>

    <!-- 이미지 미리보기 -->
    <v-row>
      <v-col cols="12" offset-md="3" md="9" offset-lg="4" lg="6">
        <v-card
          height="400"
          align="center"
          color="grey lighten-3"
        >
          <div v-if="!this.imageUrl">
            <p align-center><br/><br/><br/><br/><br/><br/><br/>[ 미리보기 ] </p>
              <!-- 미리보기 화면 -->
          </div>
          <div v-else>
            <br/>
            {{imageUrl}}
            <v-img
              :src="imageUrl"
              width="400"
              height="300"
            >
            </v-img>
            <v-btn color="error"
            @click="onClickDel">
              X
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <!-- 최종 확인 버튼 -->
    <v-row>
      <v-col xs="12" md="8" offset-xs="0" offset-md="2">
        <!-- 스낵바 --> 
        <v-btn
          block
          x-large
          dark
          color="primary"
          @click="check"
        >
          <v-icon>mdi-pencil</v-icon>확인
        </v-btn>

        <!-- 스낵바 눌렀을 때 -->
        <v-snackbar
          v-model="snackbar"
          top
          :timeout="timeout"
        >
        <!-- 띄울 메세지 -->
          {{ text }}
 
          <template v-slot:action="{ attrs }">
            <v-btn
              :color="color"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      //이미지 주소 저장
      imageUrl: null,
      imageName : "",
      imageSize : "",
      //작성자
      writerId: "00 testID",

      //작성일 정보
      dateInfo: "0000년 00월 00일 00시 00분",
      
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
      color:"",
    }),

    methods:{

      //-----------------------
      //이미지 관련
      onClickImageUpload() {
            this.$refs.imageInput.click();
      },

      onChangeImages(e) {
          const file = e.target.files[0];
          this.imageUrl = URL.createObjectURL(file);
      },

      onClickDel() {
        this.imageUrl = null;
      },
      //-----------------------

      //날짜 정보 반환
      getDateInfo(){
          let date = new Date();
          this.dateInfo = 
          date.getFullYear() + '년 ' +
          date.getMonth() + '월 ' +
          date.getDay() + '일 ' +
          date.getHours() + '시 ' +
          date.getMinutes() + '분';
          
          return this.dateInfo;
      },

      //제목이나 내용중에서 누락된 부분이 있는지 체크
      check() {
        this.snackbar = true;

        if (this.title === ""){
          this.text = '제목을 작성하지 않았습니다.';
          this.item = 'title_';
          this.moveView();
          this.color ="red";
        }
        else if(this.contents === "") {
          this.text = '내용을 작성하지 않았습니다.';
          this.item = 'contents_';
          this.moveView();
          this.color ="red";
        }
        else {
          this.text = '공지사항 작성완료.';
          this.color ="blue";
        }
      },

      //작성이 되지 않은 영역으로 이동
      moveView() {
        document.getElementById(this.item).focus();
      }
    },
  }
</script>