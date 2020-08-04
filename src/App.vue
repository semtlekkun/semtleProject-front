<template>
  <v-app>
    <v-main>
      <v-container v-if="$route.name !== 'login'">
        <v-row>
          <v-col class="text-left">
             <loginBtn />
             메뉴바자리다 건들지마라
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
export default {
  name: "App",

  components: {
    TopBtn,
    loginBtn,
    logoutBtn
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