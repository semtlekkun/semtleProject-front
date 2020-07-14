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
      md_text: "마크다운으로 작성된 글",
      image_path: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Hwang_Ye-ji_going_to_a_Music_Bank_recording_on_August_8%2C_2019.png"
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
