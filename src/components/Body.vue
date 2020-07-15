<template>
  <v-container>
    <VueMarkDown>{{noticeBody.mdText}}</VueMarkDown>
    <img :src="noticeBody.imagePath" alt="예지쨩 사진" width="300px" />
  </v-container>
</template>

<script>
import VueMarkDown from "vue-markdown";
export default {
  props: {
    noticeBody: {
      mdText: "## 마크다운으로 작성된 글",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Hwang_Ye-ji_going_to_a_Music_Bank_recording_on_August_8%2C_2019.png"
    }
  },
  components: {
    VueMarkDown
  }
};
</script>