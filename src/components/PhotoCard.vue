<template>
  <router-link :to="{ name: 'photo', params: { id: item._id } }">
    <v-card height="300" max-height="300" max-width="250" class="mx-auto">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="com-title">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.date }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img :src="item.image" height="194"></v-img>
    </v-card>
  </router-link>
</template>
<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
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
</style>