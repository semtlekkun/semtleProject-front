import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notice_header: {
      title: "제목제목제목제목제목제목",
      writer: "홍길동",
      date: "2020년 7월 14일",
      views: "999"
    },
    notice_body: {
      md_text: "마크다운으로 작성된 글"
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
