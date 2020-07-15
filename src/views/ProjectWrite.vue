<template>
  <div id="projectWrite">
    <v-app>
      <v-content>
        <v-container style="margin-top: 4rem">
          <v-card>
            <v-alert outlined color="#226db2">
              <v-form v-model="isValid" ref="myform
              ">
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="제목" required></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <v-text-field label="모집인원" required></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="date"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="date" label="마감일" readonly v-on="on"></v-text-field>
                      </template>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">취소</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(date)">확인</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-file-input label="파일 첨부" v-model="chosenFile"></v-file-input>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <vue-markdown>
                      <v-textarea outlined label="내용 (마크다운)"></v-textarea>
                    </vue-markdown>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-btn color="primary">완료</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-alert>
          </v-card>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style>
.v-input__prepend-outer {
  display: none !important;
}
</style>