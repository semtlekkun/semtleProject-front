<template>
  <div id="projectWrite">
    <v-container>
      <v-card>
        <v-alert outlined color="primary">
          <v-form>
            <v-row>
              <v-col>
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
                    <v-btn flat color="primary" @click="$refs.menu.save(date)">확인</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-textarea rows="7" auto-grow outlined label="내용"></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-file-input label="파일 첨부" outlined v-model="chosenFile"></v-file-input>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-btn color="primary">완료</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-alert>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
.v-input__prepend-outer {
  display: none !important;
}
</style>