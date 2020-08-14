<template>
  <v-container>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="mentors" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>역대 간부 관리</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>

              <v-dialog v-model="dialog" width="3000px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">새로 등록</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{formTitle}}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.studentCode" label="학번"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select v-model="editedItem.position" :items="positionItems" label="직책"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select
                            v-if="editedItem.position ==='멘토' "
                            v-model="editedItem.language"
                            :items="languageItems"
                            label="과목"
                          ></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.activeYear" label="활동년도"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-select v-model="editedItem.season" :items="seasonItems" label="활동학기"></v-select>
                        </v-col>
                        <v-col cols="12" sm="6" md="12">
                          <v-text-field filled v-model="editedItem.contents" label="내용"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    headers: [
      { text: "이름", value: "name", sortable: false, align: "start" },
      { text: "학번", value: "studentCode", sortable: false },
      { text: "직책", value: "position", sortable: false },
      { text: "과목", value: "language", sortable: false },
      { text: "활동년도", value: "activeYear", sortable: false },
      { text: "활동학기", value: "season", sortable: false },
      { text: "Actions", value: "actions", sortable: false },
    ],
    mentors: [],

    editedIndex: -1,

    editedItem: {
      studentCode: "",
      language: "",
      position: "",
      activeYear: "",
      season: "",
      contents: "",
    },

    defaultItem: {
      studentCode: "",
      language: "",
      position: "",
      activeYear: "",
      season: "",
      contents: "",
    },

    positionItems: ["회장", "부회장", "멘토"],
    languageItems: [
      "C",
      "C++",
      "Python",
      "Java",
      "Linux",
      "Computer Architecture",
      "Data Structure",
      "Web Programming",
    ],
    seasonItems: ["1학기 (여름학기)", "2학기 (겨울학기)"],

    errorMsg: [],
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "새로 등록" : "수정";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      // axios 로 데이터 받아와서 this.mentors 데이터 배열에 삽입 (+)
      this.mentors = [
        {
          name: "박건웅",
          studentCode: "20160450",
          position: "멘토",
          language: "C++",
          activeYear: "2016",
          season: "1학기 (여름학기)",
        },
        {
          name: "전하영",
          studentCode: "20181061",
          position: "회장",
          language: "",
          activeYear: "2018",
          season: "2학기 (겨울학기)",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.mentors.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.mentors.indexOf(item);

      if (confirm("정말 지우시겠습니까?")) {
        this.mentors.splice(index, 1);
        // 여기 DELETE 비동기 함수 작성
      }
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      // 기존 간부 수정
      if (this.editedIndex > -1) {
        Object.assign(this.mentors[this.editedIndex], this.editedItem);
        // 여기 PUT 비동기 함수 작성
      }
      // 새로 간부 추가
      else {
        this.sendForm();
      }
    },

    // 여기 POST 비동기 함수 작성
    sendForm() {
      this.errorMsg = [];

      if (this.editedItem.studentCode.length != 8)
        this.errorMsg.push("학번을 정확하게 입력해주세요.");

      if (this.editedItem.position === "")
        this.errorMsg.push("직책을 선택해주세요.");

      if (this.editedItem.activeYear.length != 4)
        this.errorMsg.push("활동 년도를 정확하게 입력해주세요.");

      if (this.editedItem.season === "")
        this.errorMsg.push("활동한 학기를 선택해주세요.");

      if (this.editedItem.contents === "")
        this.errorMsg.push("간단하게라도 내용을 적어주세요.");

      // 예외처리에 걸린 경우 -> 알람 띄우고 다시 폼 입력
      if (this.errorMsg.length !== 0) {
        let errString = "";
        for (let idx = 0; idx < this.errorMsg.length; ++idx) {
          errString = errString.concat(this.errorMsg[idx]);

          if (idx === this.errorMsg.length - 1) {
            break;
          }
          errString = errString.concat("\n");
        }

        alert(errString);
      }
      // 예외처리에 걸리지 않을 경우 -> 데이터 전송 후 닫기
      else {
        this.mentors.push(this.editedItem);

        let sendObj = {
          activeYear: this.editedItem.activeYear,
          season: this.editedItem.season,
          position: this.editedItem.position,
          language: this.editedItem.language,
          studentCode: this.editedItem.studentCode,
          contents: this.editedItem.contents,
        };

        if (this.editedItem.position !== "멘토") {
          sendObj.Subject = "";
        }

        // 관리자임을 알 수 있도록 헤더 추가
        let config = {
          headers: { token: sessionStorage.getItem("token") },
        };

        this.axios
          .post("http://49.50.166.64/api/management/input", sendObj, config)
          .then((res) => {
            if (res.status === 200) {
              alert("등록 성공!");
            } else {
              alert("실패!");
            }
          })
          .catch((err) => {
            console.log(err);
          });

        this.close();
      }
    },
  },
};
</script>

<style scoped>
</style>