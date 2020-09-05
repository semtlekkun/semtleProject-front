import Vue from 'vue'
import Vuex from 'vuex'
import ipObj from '../key'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false, // 로그인 됐는 지 확인하는 변수
    isAdmin: false,
  },
  mutations: {
    setLogin(state, bool) { // 로그인하는 함수
      if (bool)
        state.isLogin = true
      else {
        state.isLogin = false
      }
    },
    setAdmin(state, bool) {
      if (bool)
        state.isAdmin = true
      else {
        state.isAdmin = false
      }
    },
    setLogout(state) { // MainMenuBar, MobileView에서 로그아웃할 때 실행하는 함수
      let config = {
        headers: { token: sessionStorage.getItem("token") },
      };

      axios.post(`${ipObj.ip}/api/log/out`, {}, config).then(res => {
        if (res.status === 200) {
          state.isLogin = !state.isLogin
          sessionStorage.removeItem("token")
          sessionStorage.removeItem("admin")
          location.href = '/';

        }
      }).catch(err => {
        if (err.response.status === 401) {
          state.isLogin = !state.isLogin
          sessionStorage.removeItem("token")
          sessionStorage.removeItem("admin")
          location.href = '/';
        }
      })

    }
  },
  getters: {
    getLogin(state) { // isLogin getter
      return state.isLogin
    },
    getAdmin(state) {
      return state.isAdmin;
    }
  },
  actions: {
  },
  modules: {
  }
})
