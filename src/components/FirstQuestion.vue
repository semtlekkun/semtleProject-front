<template>
  <div class="bubble">
    <table>
      <tr>
        <td style="text-align-last: center;">
          <div class="userInfo">
            <div class="userImage">
              <img src="../assets/쿼카.jpg" width="50" height="50" />
            </div>
            <p class="userName">{{FirstQuestion.writerName}}</p>
          </div>
        </td>
        <td>
          <div :class="`rounded-lg`" class="FirstQuestion pa-6 blue lighten-1">
            <vue-markdown>{{FirstQuestion.question}}</vue-markdown>
          </div>
        </td>
        <td class="time" style="font-size:12px;">{{FirstQuestion.time}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown"; //markdown import
export default {
  name: "FirstQuestion",
  components: {
    VueMarkdown
  },
  props: {
    FirstQuestion: {
      type: Object,
      required: true
    }
  }
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
.FirstQuestion {
  max-width: 40em;
  position: relative;
  display: inline-block;
}
.FirstQuestion:after {
  content: "";
  position: absolute;
  border-style: solid;
  border-width: 11px 14px 11px 0;
  border-color: transparent #42a5f5;
  display: block;
  width: 0;
  z-index: 1;
  left: -14px;
  top: 17px;
}
</style>