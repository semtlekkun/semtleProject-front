import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
//Usage
// Vue.axios.get(api).then((response) => {
//   console.log(response.data)
// })
 
// this.axios.get(api).then((response) => {
//   console.log(response.data)
// })
 
// this.$http.get(api).then((response) => {
//   console.log(response.data)
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
