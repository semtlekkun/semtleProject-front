<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row id="stickyMenu" v-if="$route.name !== 'login'">
          <v-col >
             <MobileMenuBar />
             <!-- <PCMenuBar /> -->
          </v-col>
          <!-- <v-col class="text-right">
            <loginBtn v-if="!isLogin"/>
            <logoutBtn v-else/>
          </v-col> -->
        </v-row>
      <v-row>
        <v-col>
          <router-view />
        </v-col>
      </v-row>
      </v-container>
      <TopBtn v-if="$route.name !== 'login'"/>
    </v-main>
  </v-app>
</template>

<script>
import TopBtn from "./components/TopBtn.vue";
// import PCMenuBar from './components/MainMenuBar.vue';
import MobileMenuBar from './components/SideBar.vue';

export default {
  name: "App",

  components: {
    TopBtn,
    // PCMenuBar,
    MobileMenuBar,
  },

  data: () => ({
    isLogin: false
  }),
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

</style>