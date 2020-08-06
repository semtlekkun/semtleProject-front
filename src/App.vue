<template>
  <v-app>
    <v-main>
      <!-- <MobileMenuBar v-show="isMobile"/> -->
      <MobileView v-show="isMobile"/>
      <PCView v-show="!isMobile"/>
      <TopBtn v-if="$route.name !== 'login'"/>
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
}
#stickyMenu{
  position: sticky;
  top: 5px;
  z-index: 99999;
}

::-webkit-scrollbar {
    display: none;
}
</style>