import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headers:[
      {
        text: '번호',
        align: 'start',
        sortable: false,
        value: 'number',
      },
      { text: '제목', value: 'title' },
      { text: '작성자', value: 'writer' },
      { text: '작성 일시', value: 'date' },
    ],
    contents:[]
  },
  mutations: {
    setList(state, res){
      state.contents=[]
      res.data.forEach((el,index) => {
        let obj = {
          number: index+1,
          title: el.title,
          writer: el.writer,
          date: el.date,
          id: el._id
        }

        state.contents.push(obj);
      })
    }
  },
  getters:{
    getList(state){
      return state.contents
    },
    getHeaders(state){
      return state.headers
    }
  },
  actions: {
  },
  modules: {
  }
})
