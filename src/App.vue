<template>
  <v-app>
    <v-main>
      <MobileMenuBar v-show="isMobile"/>
      <v-container>
        <v-row :id="!isMobile && 'stickyMenu'" v-if="$route.name !== 'login'">
          <v-col>
            <router-link to="/" v-show="isMobile || $route.name === 'adminMenu'" >
              <v-img width="200px" 
              class="mx-auto mt-13"
              src="./assets/logo.png"/>
            </router-link>

            <PCMenuBar v-show="!isMobile &&  $route.name !== 'adminMenu'" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
      <TopBtn v-if="$route.name !== 'login'"/>
      <AdminBtn v-if="$route.name === 'Home'"/>
    </v-main>
  </v-app>
</template>

<script>
import TopBtn from "./components/TopBtn.vue";
import PCMenuBar from './components/MainMenuBar.vue';
import MobileMenuBar from './components/SideBar.vue';
import AdminBtn from './components/AdminBtn.vue';

export default {
  name: "App",
  beforeMount(){
    this.windowResize();
    window.addEventListener('resize', this.windowResize);
  },

  components: {
    TopBtn,
    PCMenuBar,
    MobileMenuBar,
    AdminBtn
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