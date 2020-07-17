<template>
    <div class="bubble">
    <table>
      <tr>
        <td >
        <div class="userInfo">
            <div class="userImage"><img src="../assets/쿼카.jpg" width="50" height="50" ></div>
            <p class="userName">{{name}}</p>
        </div>
        </td>
        <td>
        <div
            :class="`rounded-lg`"
            class="QuestionBubble pa-6 font-weight-bold indigo accent-2"
          >{{msg}}</div>
          </td>
        </tr>
      </table>
      </div>
</template>

<script>
export default {
  name: 'QuestionSpeechBubble',
  props:['msg','name']
}
</script>

<style scoped>
.bubble{
  margin:0.3em;
}
td{
  vertical-align: top;
}
.userImage{
    text-align:center;
}
.userName{
    text-align:center;
}
.userInfo{
    display:inline-block;
    margin:0 1em 0 1em;
}
.QuestionBubble{
    max-width:40em;
    position: relative;
    display:inline-block;
}
.QuestionBubble:after{
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 11px 14px 11px 0;
    border-color: transparent #536DFE;
    display: block;
    width: 0;
    z-index: 1;
    left: -14px;
    top: 17px;
}

</style>