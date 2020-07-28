<template>
  <v-row>
    <v-col :class="`rounded-lg`" class="CommentFormBubble px-4 py-2 amber lighten-2">
      <v-form>
        <v-row>
          <v-col>
            <div :class="`rounded-lg`" class="px-4 my-1 indigo accent-2">
              <v-file-input accept=".txt" dark label="Select File... Only .txt"></v-file-input>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea filled color="indigo accent-2" label="답변을 입력하세요" no-resize rows="8"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col>
            <v-btn @click="onUpload" color="indigo accent-2" large dark style="float:right;">등록</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
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
</style>