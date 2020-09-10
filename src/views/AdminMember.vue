<template>
  <v-container id="container">
    <v-row>
      <v-col cols="12">
        <!-- :items="student" = 테이블 내용을 student(배열)로 채움. -->
        <v-data-table
          item-key="_id"
          v-model="selected"
          :headers="headers"
          :items="student"
          :search="search"
          sort-by="_id"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>회원 명단 관리</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>

              <v-spacer></v-spacer>

              <!-- 검색 -->
              <v-text-field
                color="rgb(80, 130, 155)"
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                clearable
              ></v-text-field>

              <v-spacer></v-spacer>

              <!-- 회원 추가 버튼 + 다이얼로그 -->
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="rgb(80, 130, 155)" dark class="mb-2" v-bind="attrs" v-on="on">회원 추가</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <!-- 회원 추가 버튼 클릭시 뜨는 내용 -->
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <!-- 학번 -->
                        <v-col cols="12">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            type="number"
                            v-model="editedItem._id"
                            label="학번"
                            counter
                            maxlength="8"
                            :rules="[rules.required, rules.counter8]"
                            :disabled="controll ? false : true"
                          ></v-text-field>
                        </v-col>

                        <!-- 이름 -->
                        <v-col cols="12">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            v-model="editedItem.name"
                            label="이름"
                          ></v-text-field>
                        </v-col>

                        <!-- 이건 기존 전화번호 입력 방식
                            <v-col cols="12">
                            <v-text-field 
                                v-model="editedItem.phoneNum" 
                                label="전화번호"
                                type="">
                            </v-text-field>
                        </v-col>-->

                        <!-- 전화번호 입력시작 -->

                        <!--맨앞 3자리 -->
                        <v-col cols="3">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            v-model="phonenum[0]"
                            label="전화번호"
                            type="number"
                            :rules="[rules.counter3]"
                            counter
                            maxlength="3"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="1">
                          <p>
                            <br />-
                          </p>
                        </v-col>

                        <!--가운데 4자리 -->
                        <v-col cols="3">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            v-model="phonenum[1]"
                            label="전화번호"
                            type="number"
                            :rules="[rules.counter4]"
                            counter
                            maxlength="4"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="1">
                          <p>
                            <br />-
                          </p>
                        </v-col>

                        <!--마지막 4자리 -->
                        <v-col cols="3">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            v-model="phonenum[2]"
                            label="전화번호"
                            type="number"
                            :rules="[rules.counter4]"
                            counter
                            maxlength="4"
                          ></v-text-field>
                        </v-col>
                        <!-- 전화번호 끝 -->
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="rgb(80, 130, 155)" text @click="close">취소</v-btn>
                    <v-btn color="rgb(80, 130, 155)" text @click="save">확인</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>

          <!-- 수정, 이미지는 정렬 불가능 -->
          <!-- 수정기능 -->
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>

          <!-- 유저 이미지 -->
          <!-- 이미지가 없으면 assets 에 저장된 sample 이미지로 대체 -->
          <!-- 이미지 처리 시작 12:54 
          -->
          <template v-slot:item.image="{ item }">
            <v-img
              style="border-radius:30px"
              :title="item.name"
              alt="User Image"
              :src="imageSrc + item.image"
              width="30px"
              height="30px"
            ></v-img>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ipObj from "../key";
import { mapMutations } from "vuex";
//import VueMarkdown from 'vue-markdown';
export default {
  components: {
    //VueMarkdown
  },
  data: () => ({
    //여기에 이미지 받아서 더해서 출력
    imageSrc: `${ipObj.ip}/api/student/images/`,

    //각 폼에서 입력값 확인
    rules: {
      required: (value) => !!value || "필수 입력사항.",
      counter3: (value) => value.length <= 3 || "최대 3자리",
      counter4: (value) => value.length <= 4 || "최대 4자리",
      counter8: (value) =>
        value.length === 8 || "학번은 8자리로 입력되어야 합니다.",
    },
    //검색
    search: "",

    //다이얼로그 제어
    dialog: false,

    //토큰 저장
    token: "",

    //데이터 추가 제어 변수
    canAdd: true,

    //전화번호 테스트
    phonenum: ["", "", ""],

    //선택된 값 저장 배열
    selected: [],

    //학번 입력여부 제어 변수
    controll: true,

    //여기에 토큰 저장해서 넘김.
    headers: [
      {
        text: "학번",
        align: "start",
        sortable: true,
        value: "_id",
      },
      { text: "이름", value: "name" },
      { text: "전화번호", value: "phoneNum" },
      { text: "사진", value: "image", sortable: false },
      { text: "수정", value: "actions", sortable: false },
    ],

    //학생 정보를 저장
    student: [],

    //정보 추가, 수정 상태를 제어하기 위한 변수
    editedIndex: -1,

    editedItem: {
      _id: "",
      name: "",
      phoneNum: "",
      image: "",
    },
    defaultItem: {
      _id: "",
      name: "",
      phoneNum: "",
      image: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "새 회원 등록" : "회원 정보 수정";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.check();
  },

  methods: {
    //관리자 확인
    check() {
      //이게 참이면 관리자
      //토큰값 가져와서 저장한다음에 넘겨줌
      if (sessionStorage.getItem("admin")) {
        this.getData();
      }
      //아니면 관리자 아님.
      else {
        alert("접근 권한이 없습니다.");
        console.log("관리자 아님");
      }
    },

    //-----통신 시작
    //성공여부 확인 : res.status === 200
    //가져오기,get
    getData() {
      let config = {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      };

      this.axios
        .get(`${ipObj.ip}/api/student/list`, config)
        .then((res) => {
          if (res.status === 200) {
            console.log("성공");
            console.log(res);

            this.student = res.data.students;
          } else {
            console.log(res);
            console.log("ststus : " + res.status);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("세션이 만료되어 홈 화면으로 이동합니다.");
            this.setLogout();
          }
        });
    },
    //수정 put
    modiDate(modidata) {
      let config = {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      };
      let data = {
        studentCode: modidata._id,
        phoneNum: modidata.phoneNum,
        name: modidata.name,
      };

      this.axios
        .put(`${ipObj.ip}/api/student/update`, data, config)
        .then((res) => {
          if (res.status === 200) {
            console.log(res);

            alert("수정완료");
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("세션이 만료되어 홈 화면으로 이동합니다.");
            this.setLogout();
          }
        });
    },
    //추가 post
    addData(adddata) {
      let config = {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      };
      let data = {
        studentCode: adddata._id,
        phoneNum: adddata.phoneNum,
        name: adddata.name,
      };

      this.axios
        .post(`${ipObj.ip}/api/student/input`, data, config)
        .then((res) => {
          if (res.status === 200) {
            this.canAdd = true;
            alert("추가완료");
            this.$router.go();
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("세션이 만료되어 홈 화면으로 이동합니다.");
            this.setLogout();
          }

          alert("[에러]중복데이터 존재");
          this.canAdd = false;
          this.student.pop();
        });
    },
    //삭제 delete
    //idsArr 에는 삭제될 학번들이 있음.
    delDate(idsArr) {
      this.axios
        .delete(`${ipObj.ip}/api/student/delete`, {
          headers: {
            token: sessionStorage.getItem("token"),
          },
          data: {
            //배열로 넘겨줄 부분
            ids: idsArr,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            // this.$router.go();
          } else {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            alert("세션이 만료되어 홈 화면으로 이동합니다.");
            this.setLogout();
          }
        });
    },
    //-----통신 끝

    //수정 -> 해당 회원 삭제시 실제로 삭제가 이뤄지는 부분
    del() {
      let index = 0;
      let idsArr = [];
      this.selected.forEach((element) => {
        //백 : 서버에 넘겨주기 위해 학번을 배열에 하나씩 저장
        idsArr.push(element._id);

        //프로트 : 현재 인덱스 를 가지고 배열에서 삭제.
        index = this.student.indexOf(element);
        this.student.splice(index, 1);
      });

      this.selected = [];
      //디비로 삭제 요청
      this.delDate(idsArr);
    },

    //Action 에서 수정하는 부분
    editItem(item) {
      this.controll = false;
      this.editedIndex = this.student.indexOf(item);

      //editedItem 에 기본 값으로 ''을 주고
      //assign 함수로 해당 위치 값을들 가져와서 assign으로 복사
      this.editedItem = Object.assign({}, item);

      //수정 버튼을 눌렀을때의 위치에서 전화 번호 값을 가지는 부분
      this.editedItem.phoneNum;

      //전화번호를 '-' 로 잘라서 각 배열에 저장.
      this.phonenum = this.editedItem.phoneNum.split("-");

      this.dialog = true;
    },

    //Action 에서 삭제하는 부분
    //체크박스 추가
    deleteItem(item) {
      //여러개
      if (this.selected.length != 0) {
        confirm("삭제하시겠습니까?") && this.del();
      }
      //한개
      else {
        this.selected.push(item);
        confirm("삭제하시겠습니까?") && this.del();
      }
      this.selected = [];
    },

    //수정, 삭제 할때 뜨는 창에서 닫는 부분
    close() {
      if (!this.controll) {
        this.controll = !this.controll;
      }

      //닫을때 마다 전화번호값 초기화
      this.phonenum = ["", "", ""];
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    //수정, 삭제 할때 뜨는 창에서 저장하는 부분
    save() {
      //입력값 확인
      if (
        this.phonenum[0].length != 3 ||
        this.phonenum[1].length != 4 ||
        this.phonenum[2].length != 4 ||
        this.editedItem.name.length === null ||
        this.editedItem._id.length != 8
      ) {
        alert("입력폼 형식 오류");
      }

      //입력값이 확인된 경우
      else {
        //수정하는경우
        if (this.editedIndex > -1) {
          Object.assign(this.student[this.editedIndex], this.editedItem);
          this.student[this.editedIndex].phoneNum =
            this.phonenum[0] + "-" + this.phonenum[1] + "-" + this.phonenum[2];

          //put
          this.modiDate(this.student[this.editedIndex]);
        }

        //추가하는 경우
        else {
          this.editedItem.phoneNum =
            this.phonenum[0] + "-" + this.phonenum[1] + "-" + this.phonenum[2];
          this.student.push(this.editedItem);
          const index = this.student.indexOf(this.editedItem);

          //post
          this.addData(this.student[index]);
        }
      }
      this.close();
    },
    ...mapMutations(["setLogout"]),
  },
};
</script>