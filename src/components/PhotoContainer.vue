<template>
  <div></div>
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
</style>