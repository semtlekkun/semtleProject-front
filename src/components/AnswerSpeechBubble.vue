<template>
  <div class="bubble">
    <table>
      <tr>
        <td class="time" style="font-size:12px;">{{comments.time}}</td>
        <td>
          <div :class="`rounded-lg`" class="AnswerBubble pa-6">
            <VueMarkdown :source="comments.comment"></VueMarkdown>
          </div>
        </td>
        <td width="120px" style="text-align-last: center; vertical-align:top;">
          <div class="userInfo">
            <div class="userImage">
              <img :src="writerURL" width="50" height="50" />
            </div>
            <div class="userName">{{comments.name}}</div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import ipObj from "../key";

import VueMarkdown from "vue-markdown"; //markdown import
export default {
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

<style scope>
.time {
  vertical-align: bottom;
  padding-bottom: 10px;
  padding-right: 10px;
}
.bubble {
  margin: 0.3em;
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
.AnswerBubble {
  max-width: 40em;
  position: relative;
  display: inline-block;
  background: #365164;
  color: white;
}
.AnswerBubble:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 11px 0 11px 14px;
  border-color: transparent #365164;
  display: block;
  width: 0;
  right: -14px;
  top: 17px;
}
</style>
