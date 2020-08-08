<template>
  <v-container>
    <v-dialog v-model="dialog" width="400" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-row>
          <v-col>
            <h1>역대 간부(회장, 부회장, 멘토) 등록</h1>
          </v-col>
        </v-row>
        <v-form @submit="checkForm" novalidate="true">
          <v-row>
            <v-col>
              <v-text-field
                color="primary"
                placeholder="활동 년도 (ex : 2016)"
                v-model="activeYear"
                @keypress="checkNumber"
                @keyup="checkHan"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-select color="primary" v-model="Semester" :items="SemesterItems" label="활동한 학기"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                color="primary"
                placeholder="학번 (ex : 20160450)"
                v-model="studentId"
                @keypress="checkNumber"
                @keyup="checkHan"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select color="primary" v-model="Position" :items="PositionItems" label="직책"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-select
                v-if="Position==='멘토'"
                color="primary"
                v-model="Subject"
                :items="MentorSubject"
                label="과목"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-textarea filled label="내용" color="primary" no-resize rows="19" v-model="contents"></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-btn block color="primary" type="submit" v-bind="attrs" v-on="on">등록</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </template>

      <v-card>
        <v-card-title id="cardTitle">ERROR!</v-card-title>
        <hr />
        <br />
        <v-card-text v-for="msg in errorMsg" :key="msg.index">
          <span>-</span>
          {{msg}}
        </v-card-text>

        <v-btn id="dialogBtn" @click="dialog = false" color="primary">확인</v-btn>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,

    errorMsg: [],

    SemesterItems: ["1학기 (여름학기)", "2학기 (겨울학기)"],
    PositionItems: ["회장", "부회장", "멘토"],
    MentorSubject: [
      "C",
      "C++",
      "Python",
      "Java",
      "Linux",
      "Computer Architecture",
      "Data Structure",
      "Web Programming",
    ],

    activeYear: "",
    Semester: "",
    Position: "",
    Subject: "",
    studentId: "",
    contents: "",
  }),

  methods: {
    checkForm(e) {
      this.dialog = false;
      this.errorMsg = [];
      console.log(this.Semester);

      if (this.activeYear.length != 4)
        this.errorMsg.push("활동 년도를 정확하게 입력해주세요.");

      if (this.studentId.length != 8)
        this.errorMsg.push("학번을 정확하게 입력해주세요.");

      if (this.contents === "")
        this.errorMsg.push("간단하게라도 내용을 적어주세요.");

      if (!this.errorMsg.length) {
        if (this.Position !== "멘토") this.Subject = "";
        return true;
      } else this.dialog = true;

      e.preventDefault();
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
  },
};
</script>

<style scoped>
#dialogBtn {
  position: absolute;
  right: 5%;
  bottom: 5%;
}

#cardTitle {
  color: red;
}
</style>
