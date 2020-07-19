<template>
  <div class="bubble">
    <table>
      <tr>
        <td>
          <div class="userInfo">
            <div class="userImage">
              <img src="../assets/쿼카.jpg" width="50" height="50" />
            </div>
            <p class="userName">{{comments.name}}</p>
          </div>
        </td>
        <td>
          <div
            :class="`rounded-lg`"
            class="QuestionBubble pa-6 indigo accent-2"
          ><vue-markdown>{{comments.comment}}</vue-markdown></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'; //markdown import
export default {
  name: "QuestionSpeechBubble",
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

<style scoped>
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
}
.QuestionBubble:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 11px 14px 11px 0;
  border-color: transparent #536dfe;
  display: block;
  width: 0;
  z-index: 1;
  left: -14px;
  top: 17px;
}
</style>