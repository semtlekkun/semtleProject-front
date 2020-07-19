<template>
  <v-app>
    <v-content>
      <v-container>
        <div :class="`rounded-lg`" class="CommentFormBubble px-4 py-2 amber lighten-2">
          <v-form>
            <v-row>
              <v-col cols="12">
                <div :class="`rounded-lg`" class="px-4 my-1 indigo accent-2">
                  <v-file-input accept=".txt" label="Select File... Only .txt"></v-file-input>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <input type="text" class="CommentInput amber lighten-2" placeholder="댓글을 입력하세요" />
              </v-col>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="1">
                <v-btn
                  @click="onUpload"
                  :class="`rounded-lg`"
                  class="px-2"
                  color="indigo accent-2"
                  dark
                >등록</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>
<style scoped>
.CommentFormBubble {
  width: 70em;
  position: relative;
  display: inline-block;
}
.CommentFormBubble:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 11px 0 11px 14px;
  border-color: transparent #ffd54f;
  display: block;
  width: 0;
  z-index: 1;
  right: -14px;
  top: 17px;
}
.CommentInput {
  width: 68em;
  height: 5em;
}
</style>