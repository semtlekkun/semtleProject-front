<template>
  <v-container>
    <router-link v-if="!isList" :to="url" style="color: black">
      <h1>
        {{ subTitleObj.title }}
      </h1>
    </router-link>

    <h1 v-if="isList" style="color: black">
      {{ subTitleObj.title }}
    </h1>

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
    return { url: "", isList: false };
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
    if (curPath.includes("photo") && curPath.includes("detail"))
      this.url = "/photo/list";

    this.isList = curPath.slice(-4) === "list" ? true : false;
  },
};
</script>

<style scoped>
h1 {
  font-size: 2.185rem;
}
</style>