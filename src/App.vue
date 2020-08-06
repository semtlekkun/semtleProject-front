<template>
  <v-app>
    <v-main>
      <!-- <MobileMenuBar v-show="isMobile"/> -->
      <MobileView v-show="isMobile"/>
      <PCView v-show="!isMobile"/>
      <TopBtn v-show="!isMobile" v-if="$route.name !== 'login'"/>
      <AdminBtn v-if="$route.name === 'Home'"/>
    </v-main>
  </v-app>
</template>

<script>
import TopBtn from "./components/TopBtn.vue";
import AdminBtn from './components/AdminBtn.vue';
import PCView from './views/PCView.vue';
import MobileView from './views/MobileView.vue';

export default {
  name: "App",
  beforeMount(){
    this.windowResize();
    window.addEventListener('resize', this.windowResize);
  },

  components: {
    TopBtn,
    MobileView,
    AdminBtn,
    PCView,
  },

  data: () => ({
    isMobile : false,
    isLogin: false
  }),

  methods:{
    windowResize(){
      if(window.innerWidth <= 1263){
        this.isMobile = true;
      }
      else{
        this.isMobile = false;
      }
    }
  }
};
</script>

<style>
*{
    text-decoration: none;
    @font-face { 
    font-family: 'BBTreeGL'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGL.woff') 
    format('woff'); 
    font-weight: normal; 
    font-style: normal; 
    }
}

.customBtn{
  background-color: #50829b !important;
  color: white !important;
  font-weight: bold;
}

::-webkit-scrollbar {
    display: none;
}
</style>