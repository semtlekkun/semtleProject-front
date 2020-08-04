<template>
  <v-container>
    <v-row>
      <v-col>
          <v-col>
            <h1>공지사항</h1>
            <Table/>
          </v-col>
          <v-col>
            <h1>프로젝트 공고</h1>
            <Table/>
          </v-col>
      </v-col>

      <v-col>
        <h1>최근 프로젝트</h1>
        <v-row id="projectView">
          <v-col
           xs="12"
           md="6"
           lg="4"
           v-for="item in cardViewList" 
           :key="item.index">
            <CardView :contentsObj="item"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardView from '../components/CardView.vue';
import Table from '../components/Table.vue';

export default {
  components: {
    CardView,
    Table
  },
  data(){
    return{
      cardViewList:[
        {
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었다."
        },
        {
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었다."
        },
        {
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었다."
        },
        {
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었다."
        },
        {
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었다."
        },
        {
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었다."
        },
        {
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었다."
        },
        {
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었ddddddddddd다."
        },
        {
          title: "더보기",
          teamName: "",
          imgSrc: "https://lh3.googleusercontent.com/zG2fdyrzYaDYmOQjU7cXEpY5fGFFUXvCav_KBPPrW0nqVJuZ6vQj8_Ez2xDBTzLbTw",
          contents: ""
        },
      ]
    }
  }
}
</script>

<style scoped>
#projectView{
  max-height: 780px;
  overflow: auto;
}
</style>