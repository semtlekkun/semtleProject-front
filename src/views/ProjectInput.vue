<template>
  <v-container class="px-0">
    <v-row>
      <v-col cols="12" lg="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>

      <v-col cols="12" lg="9">
        <v-container class="px-0">
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-alert outlined color="#365164">
                  <v-row>
                    <v-col>
                      <v-text-field
                        color="rgb(80, 130, 155)"
                        label="프로젝트 제목"
                        v-model="projectTitle"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="6">
                      <v-text-field
                        color="rgb(80, 130, 155)"
                        label="팀장 (학번)"
                        v-model="teamLeader"
                        @keypress="checkNumber"
                        @keyup="checkHan"
                        counter
                        maxlength="8"
                        hint="학번을 8자리 숫자로 입력하세요."
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        color="rgb(80, 130, 155)"
                        label="팀명"
                        v-model="teamName"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        :return-value.sync="startDate"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            v-model="startDate"
                            label="프로젝트 시작일"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>

                        <v-date-picker
                          color="rgb(80, 130, 155)"
                          v-model="startDate"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            dark
                            id="menu1"
                            color="rgb(80, 130, 155)"
                            @click="$refs.menu1.save(startDate)"
                            >확인</v-btn
                          >
                        </v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="6">
                      <v-menu
                        ref="menu2"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :return-value.sync="endDate"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            v-model="endDate"
                            label="프로젝트 마감일"
                            readonly
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          color="rgb(80, 130, 155)"
                          v-model="endDate"
                          no-title
                          scrollable
                        >
                          <v-spacer></v-spacer>
                          <v-btn
                            dark
                            id="menu2"
                            color="rgb(80, 130, 155)"
                            @click="
                              () => {
                                temp();
                                $refs.menu2.save(endDate);
                              }
                            "
                            >확인</v-btn
                          >
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                  </v-row>
                  <v-row class="align-center">
                    <v-col cols="7" xs="7" sm="8" md="10">
                      <v-text-field
                        color="rgb(80, 130, 155)"
                        @keypress="checkNumber"
                        @keyup="checkHan"
                        v-model.number="memberNum"
                        label="팀원 (학번)"
                        counter
                        maxlength="8"
                        placeholder="등록된 셈틀꾼 회원만 추가 가능합니다."
                      />
                    </v-col>
                    <v-col cols="5" xs="5" sm="4" md="2">
                      <v-btn
                        @click="addMember"
                        lage
                        color="#50829b"
                        class="white--text"
                        block
                        >추가하기</v-btn
                      >
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col
                      cols="12"
                      xs="12"
                      sm="6"
                      md="6"
                      v-for="member in members"
                      :key="member.index"
                    >
                      <v-row class="align-center">
                        <v-col cols="8">{{ member }}</v-col>
                        <v-col cols="4">
                          <v-btn @click="() => delMember(member)">삭제</v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field
                        label="Git"
                        color="rgb(80, 130, 155)"
                        v-model="git"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-text-field
                        color="rgb(80, 130, 155)"
                        label="Link"
                        v-model="link"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                        color="rgb(80, 130, 155)"
                        v-model="contents"
                        outlined
                        no-resize
                        height="300"
                        name="content-input"
                        label="프로젝트 내용을 입력하세요"
                      />
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col>
                      <v-file-input
                        v-model="files"
                        :roles="[rules.fileCheck]"
                        accept="image/*"
                        color="rgb(80, 130, 155)"
                        counter
                        label="사진 추가"
                        multiple
                        placeholder="사진을 추가하려면 여기를 클릭하세요"
                        prepend-icon="mdi-camera"
                        outlined
                        :show-size="1000"
                      />
                    </v-col>
                  </v-row>

                  <v-row class="justify-end">
                    <v-col cols="12" md="3" class="text-right">
                      <v-btn
                        @click="writeConents"
                        color="#50829b"
                        class="white--text"
                        block
                        >작성 완료</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-alert>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline error">
          <p style="color:white !important;">Error</p>
        </v-card-title>
        <ul class="mt-5 px-5">
          <li v-for="(error, i) in errorMsg" :key="i">{{ error }}</li>
        </ul>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import SubTitle from "../components/SubTitle.vue";
import { mapMutations } from "vuex";
import { ProjectInputwriteConentsApi } from "../api/api.js";
export default {
  components: {
    SubTitle
  },

  data() {
    return {
      git: "",
      link: "",
      teamLeader: "",
      teamName: "",
      projectTitle: "",
      menu1: false,
      startDate: new Date().toISOString().substr(0, 10),
      menu2: false,
      endDate: new Date().toISOString().substr(0, 10),
      datecheck: false,
      members: [],
      memberNum: "",
      files: null,
      errorMsg: [],
      rules: {
        fileCheck: value =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
        counter: value =>
          value.length <= 8 || "Student Code length should be 8!"
      },
      contents: "",
      subTitleObj: {
        title: "✍프로젝트 작성",
        contents: "프로젝트 게시물을 작성하는 공간입니다."
      },
      dialog: false
    };
  },
  methods: {
    //날짜 확인 관련 예외 처리.
    temp() {
      this.errorMsg.pop();
      //(잘못한 경우) 종료일자를 더 앞으로 한 경우
      if (this.endDate < this.startDate) {
        this.startDate = new Date().toISOString().substr(0, 10);
        this.endDate = new Date().toISOString().substr(0, 10);
        this.errorMsg.push("날짜 설정이 잘못 되었습니다.");
        this.dialog = true;
      }
    },

    checkNumber(e) {
      if (e.keyCode < 48 || e.keyCode > 57) {
        e.returnValue = false;
      }
    },
    checkHan(e) {
      e = e || window.e;
      var keyID = e.which ? e.which : e.keyCode;
      if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) return;
      else e.target.value = e.target.value.replace(/[^0-9]/g, "");
    },

    addMember() {
      this.errorMsg.pop();
      //입력이 없는 경우
      if (this.memberNum === "") {
        this.errorMsg.push("학번 입력후 추가 버튼을 눌러주세요.");
        this.dialog = true;
      }
      //입력이 있긴 한경우
      else {
        //학번을 잘못 입력 한 경우
        if (this.memberNum.toString().length != 8) {
          this.errorMsg.push("학번을 제대로 입력해주세요.");
          this.dialog = true;
        }
        //학번을 잘 입력 한 경우
        else {
          this.members.push(this.memberNum.toString());
          this.memberNum = "";
        }
      }
    },

    delMember(member) {
      this.members = this.members.filter(el => el !== member);
    },
    writeConents() {
      this.errorMsg = [];

      //이미지, 팀원, 깃,  링크는 예외 사항에서 제외.
      if (this.projectTitle === "") this.errorMsg.push("제목을 입력해주세요.");
      if (this.contents === "") this.errorMsg.push("내용을 입력해주세요.");
      if (this.teamLeader === "")
        this.errorMsg.push("팀장의 학번을 입력해주세요.");
      if (this.teamName === "") this.errorMsg.push("팀 이름을 입력해주세요.");
      if (this.teamLeader.toString().length != 8)
        this.errorMsg.push("팀장의 학번을 제대로 입력해주세요.");

      // 에러가 있을 경우
      if (this.errorMsg.length !== 0) {
        this.dialog = true;
      } else if (this.errorMsg.length === 0) {
        var form = new FormData();
        form.append("projectTitle", this.projectTitle);
        if (this.members.length != 0 && this.members != "none") {
          form.append("students", this.members);
        }
        form.append("contents", this.contents);

        // link 삽입 시 http 추가
        if (this.link.substring(0, 4) !== "http") {
          this.link = "http://" + this.link;
        }

        form.append("link", this.link);
        form.append("projectStartDate", this.startDate);
        form.append("projectEndDate", this.endDate);
        form.append("projectTeamName", this.teamName);
        form.append("teamLeaderCode", this.teamLeader);

        // git 삽입 시 http 추가
        if (this.git.substring(0, 4) !== "http") {
          this.git = "http://" + this.git;
        }

        form.append("git", this.git);
        if (this.files != null) {
          for (let i = 0; i < this.files.length; i++) {
            form.append("projectImages[]", this.files[i]);
          }
        }

        ProjectInputwriteConentsApi(form)
          .then(res => {
            console.log(res.status);
            alert("작성 완료");
            location.href = "/project/list";
          })
          .catch(err => {
            //팀장 학번이 셈틀꾼에 등록되어있지 않은 경우
            if (
              err.response.status === 400 &&
              err.response.data.status === "none"
            ) {
              this.errorMsg.push(
                "팀장, 팀원중에 셈틀꾼에 등록되어있지 않은 학번이 있습니다."
              );
              this.dialog = true;
            } else if (err.response.status === 401) {
              alert("세션이 만료되어 홈 화면으로 이동합니다.");
              this.setLogout();
            }
          });
      }
    },
    ...mapMutations(["setLogout"])
  }
};
</script>

<style scoped>
.projectTitle {
  border-bottom: 1px solid black;
}

li {
  list-style: none;
}
</style>
