import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    setLogin(state){
      // console.log(state.isLogin)
      state.isLogin = !state.isLogin
      // console.log(state.isLogin)
    },
    setLogout(state){
      console.log("logout")
      state.isLogin = !state.isLogin
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("admin")
      // this.$router.go() 
      // location.href('/')
    }
  },
  getters:{
    getLogin(state){
      return state.isLogin
    },
  },
  actions: {
  },
  modules: {
  }
})
