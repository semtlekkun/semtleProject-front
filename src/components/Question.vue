<template>
  <div>
    <h2>{{Question.title}}</h2>
    <table class="table">
      <tr>
        <td rowspan="2">
          <img src="../assets/쿼카.jpg" width="50" />
        </td>
        <td>
          <p style="font-weight:bold; margin-left:0.3em;">{{Question.writerName}}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p style="margin-left:0.3em;">{{Question.time}} 조회 {{Question.views}}</p>
        </td>
      </tr>
    </table>
    <hr>
    <br />
    <vue-markdown>{{Question.question}}</vue-markdown>
    <img :src="Question.image" alt="첨부이미지" width="300px"/>
    
  </div>
</template> 


<script>
import VueMarkdown from "vue-markdown";
export default {
  components: { 
    VueMarkdown
  },
  props: {
    Question: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
img{
  margin-top:10px;
}
</style>