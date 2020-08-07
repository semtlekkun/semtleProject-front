<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="12" sm="8">
            <h1>📌 공지사항</h1>
          </v-col>
          <v-col class="text-right my-auto">
            <router-link to="/notice/list">
              <v-btn rounded depressed class="customBtn">더보기</v-btn>
            </router-link>
          </v-col>
        </v-row>
        <Table :perPage="5"/>

        <v-row class="mt-15">
          <v-col cols="12" sm="8">
            <h1>📝 프로젝트 공고</h1>
          </v-col>
          <v-col class="text-right my-auto">
            <router-link to="/project/announce/list">
              <v-btn rounded depressed class="customBtn">더보기</v-btn>
            </router-link>
          </v-col>
        </v-row>
        <Table :perPage="5"/>
      </v-col>

      <v-col>
        <v-row>
          <v-col cols="12" sm="8">
            <h1>💻 최근 프로젝트</h1>
          </v-col>
          <v-col class="text-right my-auto">
            <router-link to="/project/list">
              <v-btn rounded depressed class="customBtn">더보기</v-btn>
            </router-link>
          </v-col>
        </v-row>
        <v-row id="projectView">
          <v-col
           xs="12"
           md="12"
           lg="6"
           xl="4"
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
    Table,
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
          title: "KUMOCraft",
          teamName: "셈틀꾼",
          imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          contents: "이시발 힘들었ddddddddddd다."
        },
      ]
    }
  }
}
</script>

<style scoped>
#projectView{
  max-height: 785px;
  overflow: auto;
}
</style>