<template>
  <div>
    <v-row>
      <v-col>
        <h1>📸 활동 사진</h1>
      </v-col>
      <v-col class="text-right my-auto">
        <router-link to="/photo/list">
          <v-btn rounded depressed class="customBtn">더보기</v-btn>
        </router-link>
      </v-col>
    </v-row>
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
        <router-link :to="photo.url">
          <v-img :src="photo.thumbNail"></v-img>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import DummyImage from "../assets/쿼카.jpg";

export default {
  data() {
    return {
      // photoList는 최초의 빈 배열로 생성
      photoList: [
        {
          thumbNail: DummyImage,
          url: "어쩌고저쩌고",
        },
        {
          thumbNail: DummyImage,
          url: "어쩌고저쩌고",
        },
        {
          thumbNail: DummyImage,
          url: "어쩌고저쩌고",
        },
        {
          thumbNail: DummyImage,
          url: "어쩌고저쩌고",
        },
        {
          thumbNail: DummyImage,
          url: "어쩌고저쩌고",
        },
        {
          thumbNail: DummyImage,
          url: "어쩌고저쩌고",
        },
      ],
    };
  },

  created() {
    // axios 비동기 통신으로 사진을 최대 6개 얻어와서
    // photoList에 할당
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