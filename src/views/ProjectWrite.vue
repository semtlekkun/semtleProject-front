<template>
  <div id="projectWrite">
    <v-app>
      <v-content>
        <v-container>
          <v-card>
            <v-alert outlined color="#226db2">
              <v-card-title>공고 쓰기</v-card-title>
              <v-form v-model="isValid" ref="myform">
                <v-text-field label="모집인원" required></v-text-field>
                <v-text-field label="제목" required></v-text-field>
                <v-text-field label="내용" required></v-text-field>
                <v-text-field label="마감일" required></v-text-field>
                <v-file-input label="파일 첨부" outlined v-model="chosenFile"></v-file-input>

                <v-layout>
                  <v-flex>
                    <vue-markdown>
                      <v-textarea label="여기에 내용을 작성해 주세요! (마크다운)"></v-textarea>
                    </vue-markdown>
                  </v-flex>
                </v-layout>

                <v-btn color="#226db2">완료</v-btn>
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
</style>