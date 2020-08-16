import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false // 로그인 됐는 지 확인하는 변수
  },
  mutations: {
    setLogin(state){ // 로그인하는 함수
      state.isLogin = !state.isLogin
    },
    setLogout(state){ // MainMenuBar, MobileView에서 로그아웃할 때 실행하는 함수
      state.isLogin = !state.isLogin // login true>false 전환
      // 세션스토리지 token,admin 삭제
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("admin")
      location.href = '/'; // 홈화면으로 이동
    }
  },
  getters:{
    getLogin(state){ // isLogin getter
      return state.isLogin
    },
  },
  actions: {
  },
  modules: {
  }
})
