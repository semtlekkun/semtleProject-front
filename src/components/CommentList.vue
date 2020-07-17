<template>
  <v-app>
    <div v-for="(comment, i) in commentData.comments" :key="i">
      <v-row justify="start" v-show="comment.name == commentData.writerName">
        <QuestionSpeechBubble :comments="comment"></QuestionSpeechBubble>
      </v-row>
      <v-row justify="end" v-show="comment.name != commentData.writerName">
        <AnswerSpeechBubble :comments="comment"></AnswerSpeechBubble>
      </v-row>
    </div>
  </v-app>
</template> 


<script>
import QuestionSpeechBubble from "./QuestionSpeechBubble";
import AnswerSpeechBubble from "./AnswerSpeechBubble";

export default {
  components: {
    QuestionSpeechBubble,
    AnswerSpeechBubble
  },
  props: {
    commentData: {
      type: Object,
      required: true
    }
  }
};
</script>