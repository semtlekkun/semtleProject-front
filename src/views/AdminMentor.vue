<template>
  <v-container>
    <v-row>
      <v-col>역대 간부 등록</v-col>
    </v-row>

    <v-form>
      <v-row>
        <v-col>
          <v-text-field placeholder="활동 년도" solo v-model="activeYear"></v-text-field>
        </v-col>

        <v-col>
          <v-select :items="Semester" label="활동한 학기" solo v-model="Semester"></v-select>
        </v-col>

        <v-col>
          <v-text-field placeholder="학번" solo v-model="studentId"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-textarea solo label="내용" v-model="contents"></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-btn block color="primary" type="submit" @click="checkForm">등록</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeYear: "",
      Semester: ["1학기(여름학기)", "2학기(겨울학기)"],
      studentId: "",
      contents: "",
    };
  },

  methods: {
    checkForm() {},
  },
};
</script>