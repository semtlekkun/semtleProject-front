<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" lg="4" xl="3">
        <SubTitle :subTitleObj="subTitleObj" />
      </v-col>

      <v-col cols="12" md="8" lg="8" xl="9">
        <v-row>
          <v-col>
            <v-text-field label="Project Title" v-model="projectTitle" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Team Leader(Number)"
              v-model="teamLeader"
              @keypress="checkNumber"
              @keyup="checkHan"
              counter
              maxlength="8"
              hint="학번을 8자리 숫자로 입력하세요."
            />
          </v-col>
          <v-col cols="6">
            <v-text-field label="Team Name" v-model="teamName" />
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
                <v-text-field v-model="startDate" label="Start Date" readonly v-on="on"></v-text-field>
              </template>

              <v-date-picker v-model="startDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn id="menu1" flat color="primary" @click="()=> {temp(); $refs.menu1.save(startDate);}">확인</v-btn>
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
                <v-text-field v-model="endDate" label="End Date" readonly v-on="on"></v-text-field>
              </template>
              <v-date-picker v-model="endDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn id="menu2" flat color="primary" @click="()=> {temp(); $refs.menu2.save(endDate); }">확인</v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row class="align-center">
          <v-col cols="9">
            <v-text-field
              @keypress="checkNumber"
              @keyup="checkHan"
              v-model.number="memberNum"
              label="Team Member(Number)"
              counter
              maxlength="8"
              hint="학번을 8자리 숫자로 입력하세요."
            />
          </v-col>
          <v-col cols="3">
            <v-btn @click="addMember" lage color="primary" block>Add</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6" v-for="member in members" :key="member.index">
            <v-row class="align-center">
              <v-col cols="4">{{member}}</v-col>
              <v-col cols="5">
                <v-btn @click="()=>delMember(member)">Del</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field label="Git" v-model="git" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field label="Link" v-model="link" />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12">
            <v-textarea
              v-model="contents"
              outlined
              no-resize
              height="300"
              name="content-input"
              label="Contents"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-file-input
              v-model="files"
              :roles="[rules.fileCheck]"
              accept="image/*"
              color="deep-purple accent-4"
              counter
              label="File input"
              multiple
              placeholder="Select your images"
              prepend-icon="mdi-camera"
              outlined
              :show-size="1000"
            />
          </v-col>
        </v-row>

        <v-row class="justify-end">
          <v-col cols="12" md="3" class="text-right">
            <v-btn @click="writeConents" color="success" block>write</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SubTitle from "../components/SubTitle.vue";
export default {
  components: {
    // VueMarkdown
    SubTitle,
  },
  data() {
    return {
      git:"",
      link: "",
      teamLeader: "",
      teamName: "",
      projectTitle: "",
      menu1: false,
      startDate: new Date().toISOString().substr(0, 10),
      menu2: false,
      endDate: new Date().toISOString().substr(0, 10),
      datecheck:false,
      members: [],
      memberNum: "",
      files: [],
      errorMsg: [],
      rules:{
        fileCheck :value =>!value || value.size < 2000000 ||"Avatar size should be less than 2 MB!",
        counter: value=>value.length <= 8 || 'Student Code length should be 8!'
      },
      contents: "",
      subTitleObj: {
        title: "프로젝트 작성",
        contents: "프로젝트 작성이다.",
      },
    };
  },
  methods: {
    //날짜 확인 관련 예외 처리.
    temp() {
      //(잘못한 경우) 종료일자를 더 앞으로 한 경우
      if(this.endDate < this.startDate) {
        this.startDate = new Date().toISOString().substr(0,10);
        this.endDate = new Date().toISOString().substr(0,10)
        alert("날짜 설정이 잘못 되었습니다.");
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
      if (this.memberNum === "") {
        alert("입력을 해주세요.");
      } else {
        if (this.memberNum.toString().length != 8) {
          alert("학번을 제대로 입력해주세요");
        } else {
          this.members.push(this.memberNum.toString());
          this.memberNum = "";
        }
      }
    },
    delMember(member) {
      this.members = this.members.filter((el) => el !== member);
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
      if (this.errorMsg.length != 0) {
        var message = "";
        for (var idx = 0; idx < this.errorMsg.length; idx++) {
          message = message + this.errorMsg[idx] + "\n";
        }
        alert(message);
      } else {
        var form = new FormData();
        form.append("projectTitle", this.projectTitle);
        form.append("students", this.members);
        form.append("contents", this.contents);
        form.append("link", this.link);
        form.append("projectStartData", this.startDate);
        form.append("projectEndDate", this.endDate);
        form.append("projectTeamName", this.teamName);
        form.append("teamLeaderCode", this.teamLeader);
        form.append("projectImages", this.files);
        form.append("git", this.git);

        for (var value of form.values()) {
          console.log(value);
        }

        let config = {
          headers: {
            token: sessionStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        };

        this.axios
          .post(`http://49.50.166.64/api/pf`, form, config)
          .then((res) => {
            console.log(res.status);
            alert("작성 성공. 프로젝트 리스트로 돌아갑니다.");
            location.href = "/project/list";
          })
          .catch((err) => {
            console.log(err.response);

            //팀장학번, 팀원 학번 찾아서 없으면 에러 받야하 하는거 추가되어야 함.
          });
      }
    },
  },
};
</script>

<style scoped>
.projectTitle {
  border-bottom: 1px solid black;
}
</style>