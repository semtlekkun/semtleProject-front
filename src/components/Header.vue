<template>
  <v-col>
    <h1>{{HeaderInfo.Title}}</h1>
    <hr />
    <p>작성자 : {{HeaderInfo.writerName}} | 작성일 : {{HeaderInfo.writeDate}} | 조회수 : {{HeaderInfo.countViews}}</p>
  </v-col>
</template>

<script>
export default {
  props: {
    HeaderInfo: {
      type: Object,
      required: true
    }
  }
};
</script>