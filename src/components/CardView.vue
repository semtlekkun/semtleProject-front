<template>
  <router-link :to="{ name: 'project', params: { id: contentsObj._id } }">
    <v-card
      id="link"
      height="318"
      max-height="318"
      max-width="344"
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="com-title">{{
            contentsObj.title
          }}</v-list-item-title>
          <v-list-item-subtitle
            >by {{ contentsObj.teamName }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-img :src="contentsObj.imgSrc" height="194"></v-img>

      <!-- <v-card-text>
        <span
          v-for="(text, index) in contentsObj.contents"
          :key="text.index"
          v-show="index < 10"
          >{{ text }}</span
        >
        <span v-if="contentsObj.contents.length > 10">...</span>
      </v-card-text> -->
      <v-card-text>
        <v-list-item-subtitle>
          {{ contentsObj.contents }}
        </v-list-item-subtitle>
      </v-card-text>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    contentsObj: Object,
  },
};
</script>

<style scoped="scoped">
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.com-title {
  font-family: "NEXON Lv1 Gothic OTF";
  font-size: 125%;
}
#link {
  z-index: 0 !important;
}
</style>