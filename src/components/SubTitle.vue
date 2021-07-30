<template>
  <v-container>
    <router-link :to="url">
      <h1 class="_title">
        {{ subTitleObj.title }}
      </h1>
    </router-link>
    <h3>
      {{ subTitleObj.contents }}
    </h3>
  </v-container>
</template>

<script>
export default {
  props: {
    subTitleObj: Object,
  },

  data() {
    return { url: "" };
  },

  mounted() {
    const curPath = this.$route.fullPath;

    if (curPath.includes("notice") && curPath.includes("detail"))
      this.url = "/notice/list";
    if (curPath.includes("project") && curPath.includes("detail"))
      this.url = "/project/list";
    if (curPath.includes("announce") && curPath.includes("detail"))
      this.url = "/project/announce/list";
    if (curPath.includes("qna") && curPath.includes("detail"))
      this.url = "/qna/list";
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.185rem;
}
/* ._title {
  cursor: pointer;
} */
</style>