<template>
  <div>
    <h2>{{Question.title}}</h2>
    <table class="table">
      <tr>
        <td rowspan="2">
          <img src="../assets/쿼카.jpg" width="40" />
        </td>
        <td>
          <p class="pa-0">{{Question.writerName}}</p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="pa-0">{{Question.time}} 조회 {{Question.views}}</p>
        </td>
      </tr>
    </table>
    <hr>
    <vue-markdown>{{Question.question}}</vue-markdown>
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
.table tr td {
}
</style>