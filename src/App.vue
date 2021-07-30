<template>
  <v-app>
    <Intro v-if="isIntro" :functions="switchScreen" />
    <v-main v-show="!isIntro">
      <SideBar v-if="isMobile" :loginStatus="getLogin" />
      <v-container>
        <!-- <v-row class="mt-10" v-show="isMobile || $route.name === 'adminMenu'">
                <v-col offset="4" cols="4"> <router-link to="/"> <v-img width="200px"
                class="mx-auto" src="./assets/logo.png" /> </router-link> </v-col> </v-row> -->

        <v-row
          v-if="
            isMobile || $route.name === 'login' || $route.name === 'adminMenu'
          "
          class="mt-5"
        >
          <v-col offset-sm="3" sm="6" xl="6" offset-xl="3">
            <router-link to="/">
              <v-img class="mx-auto" src="./assets/logo.png" />
            </router-link>
          </v-col>
        </v-row>

        <v-row
          id="stickyMenu"
          v-if="
            $route.name !== 'login' && !isMobile && $route.name !== 'adminMenu'
          "
        >
          <v-col>
            <PCMenuBar />
          </v-col>
        </v-row>

        <router-view />
        <TopBtn v-if="$route.name !== 'login'" :isMobile="isMobile" />

        <Footer id="customFooter" class="text-center" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TopBtn from "./components/TopBtn.vue";
import Intro from "./views/Intro.vue";
import { mapMutations, mapGetters } from "vuex";
import SideBar from "./components/SideBar.vue";
import PCMenuBar from "./components/MainMenuBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  computed: {
    ...mapGetters(["getAdmin", "getLogin"]),
  },
  beforeMount() {
    this.windowResize();
    window.addEventListener("resize", this.windowResize);
    if (sessionStorage.getItem("isIntro") === "false") {
      this.isIntro = false;
    }
  },
  created() {
    if (sessionStorage.getItem("token") !== null) {
      this.setLogin(true);
    } else {
      this.setLogin(false);
    }
    if (sessionStorage.getItem("admin") === "true") {
      this.setAdmin(true);
    } else {
      this.setAdmin(false);
    }
  },

  components: {
    TopBtn,
    Intro,
    SideBar,
    PCMenuBar,
    Footer,
  },

  data() {
    return {
      isMobile: false,
      isLogin: false,
      isIntro: true,
    };
  },

  methods: {
    ...mapMutations(["setLogin", "setAdmin"]),
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
    },
  },
};
</script>

<style>
@font-face {
  font-family: "NEXON Lv1 Gothic OTF Light";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "HangeulNuri-Bold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

* {
  text-decoration: none;
  font-family: "NEXON Lv1 Gothic OTF Light";
}

h1 {
  font-family: "HangeulNuri-Bold";
}

.customBtn {
  background-color: #50829b !important;
  color: white !important;
  font-weight: bold;
}

::-webkit-scrollbar {
  display: none;
}
#stickyMenu {
  position: sticky;
  top: 5px;
  width: 0;
  z-index: 10;
}
#customFooter {
  border-top: 2px solid #659ab5;
  background: white;
}
</style>