<template>
  <v-row class="photoContainer">
    <v-col
      cols="4"
      lg="2"
      md="2"
      sm="4"
      xs="4"
      v-for="(photo, idx) in photoList"
      :key="idx"
    >
      <v-img :src="photo"></v-img>
    </v-col>
  </v-row>
</template>
<script>
import DummyImage from "../assets/쿼카.jpg";

export default {
  data() {
    return {
      photoList: [
        DummyImage,
        DummyImage,
        DummyImage,
        DummyImage,
        DummyImage,
        DummyImage,
      ],
    };
  },
};
</script>
<style scoped="scoped">
.photoContainer {
  text-align: -webkit-center;
}
.testBox {
  width: 100px;
  height: 100px;
  background: tomato;
}
</style>