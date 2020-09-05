<template>
  <div class="bubble">
    <table>
      <tr>
        <td width="120px" style="text-align-last: center; vertical-align:top;">
          <div class="userInfo">
            <div class="userImage">
              <img :src="writerURL" width="50" height="50" />
            </div>
            <div class="userName">{{comments.name}}</div>
          </div>
        </td>
        <td>
          <div :class="`rounded-lg`" class="QuestionBubble pa-6">
            <VueMarkdown :source="comments.comment"></VueMarkdown>
          </div>
        </td>
        <td class="time" style="font-size:12px;">{{comments.time}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import ipObj from "../key";
import VueMarkdown from "vue-markdown"; //markdown import
export default {
  name: "QuestionSpeechBubble",
  data() {
    return {
      writerURL: `${ipObj.ip}/api/student/images/` + this.comments.image,
    };
  },
  components: {
    VueMarkdown,
  },
  props: {
    comments: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.time {
  vertical-align: bottom;
  padding-bottom: 10px;
  padding-left: 10px;
}
.bubble {
  margin: 0.3em;
}
td {
  vertical-align: top;
}
.userImage {
  text-align: center;
}
.userName {
  text-align: center;
}
.userInfo {
  display: inline-block;
  margin: 0 1em 0 1em;
}
.QuestionBubble {
  max-width: 40em;
  position: relative;
  display: inline-block;
  background: #50829b;
  color: white;
}
.QuestionBubble:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 11px 14px 11px 0;
  border-color: transparent #50829b;
  display: block;
  width: 0;
  z-index: 0;
  left: -14px;
  top: 17px;
}
</style>