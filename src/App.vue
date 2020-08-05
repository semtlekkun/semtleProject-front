<template>
  <v-app>
    <v-main>
      <v-container v-if="$route.name !== 'login'">
        <v-row>
          <v-col class="text-left">
             <MobileMenuBar />
             <PCMenuBar/>
          </v-col>
          <v-col class="text-right">
            <loginBtn v-if="!isLogin"/>
            <logoutBtn v-else/>
          </v-col>
        </v-row>
      </v-container>
      <router-view />
      <TopBtn v-if="$route.name !== 'login'"/>
    </v-main>
  </v-app>
</template>

<script>
import TopBtn from "./components/TopBtn.vue";
import loginBtn from './components/LoginBtn.vue';
import logoutBtn from './components/LogoutBtn.vue';
import PCMenuBar from './components/MainMenuBar.vue';
import MobileMenuBar from './components/SideBar.vue';

export default {
  name: "App",

  components: {
    TopBtn,
    loginBtn,
    logoutBtn,
    PCMenuBar,
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
</style>