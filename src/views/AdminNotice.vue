<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <nav>
    <v-toolbar flat app>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>[임시]동아리 아이콘, 상단바 들어갈 공간</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="blue">
        <span>[임시]버튼</span>
      </v-btn>
    </v-toolbar>
  </nav>
      </v-col>
    </v-row>

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

    <!-- 사진 -->
    <!-- 추후 수정 필요 사항 : 이미지 크기 조정 -->
    <v-row class="mt-5">
      <v-col cols="12" md="3" offset-lg="2">
        사진 첨부 
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="3" offset-lg="2">
        <input ref="imageInput" type="file" hidden @change="onChangeImages">
        <v-btn type="button" @click="onClickImageUpload">이미지 업로드</v-btn>
      </v-col>
      <v-col cols="12" md="9">  
        <v-img
        v-if="imageUrl" :src="imageUrl"
        width="200"
        height="200"
        ></v-img>
     </v-col> 
    </v-row>

    <!-- 최종 확인 버튼 -->
    <v-row>
        <v-col cols="3" md="12" offset-lg="2">
            <!-- 다이얼로그 -->
            <v-dialog
              v-model="dialog"
              width="500"
            ><v-spacer></v-spacer>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  v-bind="attrs"
                  v-on="on"
                  @click="check"
                >
                확인
                </v-btn>
              </template>

              <!-- 다이얼로그 구성 -->
              <v-card>
                <v-card-title class="headline grey lighten-2">
                  {{this.dialogText}}
                </v-card-title>

                <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      color="green darken-1"
                      text
                      @click="dialog = false"
                    >
                      확인
                    </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
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

      //작성자
      writerId: "00 testID",

      //작성일 정보
      dateInfo: "0000년 00월 00일 00시 00분",
      
      //제목
      title: "",

      //내용
      contents: "",

      //다이얼로그
      dialog: false,

      //다이얼로그에 띄울 문자열
      dialogText: "",
    }),

    methods:{
      //확인 버튼
      alert(){
        this.check();
      },

      //이미지 첨부
      onClickImageUpload() {
            this.$refs.imageInput.click();
      },
      onChangeImages(e) {
          console.log(e.target.files)
          const file = e.target.files[0];
          this.imageUrl = URL.createObjectURL(file);
      },

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
        if (this.title === ""){
          this.dialogText = '제목을 작성하지 않았습니다.';
        }
        else if(this.contents === "") {
          this.dialogText = '내용을 작성하지 않았습니다.';
        }
        else
          this.dialogText = '게시글 작성 완료.\n[확인용 메세지]\n작성 일자 : ' + this.getDateInfo()
          + '\n작성자 : ' +this.writerId
          + '\n제목 : ' + this.title
          + '\n내용 : ' + this.contents;
      }
    },
  }
</script>