<template>
  <v-app>
    <Intro v-show="isIntro" :functions="switchScreen" />
    <v-main v-show="!isIntro">
      <MobileView v-show="isMobile" />
      <PCView v-show="!isMobile" />
      <TopBtn v-show="!isMobile" v-if="$route.name !== 'login'" />
      <AdminBtn v-if="$route.name === 'Home'" :class="getAdmin ? 'adminBbtn': 'notAdminBtn'" />
    </v-main>
  </v-app>
</template>

<script>
import TopBtn from "./components/TopBtn.vue";
import AdminBtn from "./components/AdminBtn.vue";
import PCView from "./views/PCView.vue";
import MobileView from "./views/MobileView.vue";
import Intro from "./views/Intro.vue";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  computed:{
    ...mapGetters(['getAdmin'])
  },
  created(){
    if(sessionStorage.getItem('token')){
      this.setLogin();
    }
    if(sessionStorage.getItem('admin') === 'true'){
      this.setAdmin();
    }
    
  },
  beforeMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
    if (sessionStorage.getItem("isIntro") === "false") {
      this.isIntro = false;
    }
  },
  mounted() {
    if (sessionStorage.getItem("token") !== null) {
      this.setLogin();
    }
    
  },

  components: {
    TopBtn,
    MobileView,
    AdminBtn,
    PCView,
    Intro,
  },

  data: () => ({
    isMobile: false,
    isLogin: false,
    isIntro: true,
  }),

  methods: {
    ...mapMutations(["setLogin",'setAdmin']),
    switchScreen() {
      this.isIntro = false;
      sessionStorage.setItem("isIntro", this.isIntro);
    },
    windowResize() {
      if (window.innerWidth <= 1263) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  },
};
</script>

<style>
* {
  text-decoration: none;
  @font-face {
    font-family: "BBTreeGL";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGL.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
}

.customBtn {
  background-color: #50829b !important;
  color: white !important;
  font-weight: bold;
}

::-webkit-scrollbar {
  display: none;
}

.adminBtn{
  display: block;
}

.notAdminBtn{
  display: none;
}
</style>