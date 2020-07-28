<template>
  <v-row>
    <v-col cols="12">
      <h1>{{noticeHeader.title}}</h1>
      <hr />
      <table>
        <tr>
          <td rowspan="2">
            <img :src="noticeHeader.writerImage" width="50px" />
          </td>
          <td style="vertical-align:top;">작성자:{{noticeHeader.writerName}}</td>
        </tr>
        <tr style="vertical-align:bottom;">
          <td>작성일:{{noticeHeader.date}}</td>
          <td>|조회수:{{noticeHeader.views}}</td>
        </tr>
      </table>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    noticeHeader: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
hr {
  background-color: #fff;
  border-top: 2px dashed #8c8b8b;
}
</style>