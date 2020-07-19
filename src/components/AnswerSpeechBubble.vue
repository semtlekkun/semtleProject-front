<template>
  <div class="bubble">
    <table>
      <tr>
        <td>
          <div :class="`rounded-lg`" class="AnswerBubble pa-6 amber lighten-2">{{comments.comment}}</div>
        </td>
        <td>
          <div class="userInfo">
            <div class="userImage">
              <img src="../assets/쿼카.jpg" width="50" height="50" />
            </div>
            <p class="userName">
              <vue-markdown>{{comments.comment}}</vue-markdown>
            </p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown"; //markdown import
export default {
  components: {
    VueMarkdown
  },
  props: {
    comments: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scope>
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
}
.AnswerBubble:after {
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
