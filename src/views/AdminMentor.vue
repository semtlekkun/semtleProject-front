<template>
  <v-container>
    <v-row>
      <v-col>간부 등록</v-col>
    </v-row>

    <v-row>
      <v-col cols="1">
        <v-text-field placeholder="활동 년도" solo></v-text-field>
      </v-col>

      <v-col cols="2">
        <v-select :items="Semester" label="활동한 학기" solo></v-select>
      </v-col>

      <v-col cols="1">
        <v-text-field placeholder="학번" solo></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-textarea solo label="내용"></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn block color="primary">등록</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      Semester: ["1학기(여름학기)", "2학기(겨울학기)"],
    };
  },

  methods: {},
};
</script>