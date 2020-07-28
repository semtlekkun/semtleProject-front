import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ProjectInput from '../views/ProjectInput.vue'
import ProjectView from '../views/ProjectView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projectInput',
    name: 'ProjectInput',
    component: ProjectInput
  },
  {
    path: '/projectView',
    name: 'ProjectView',
    component: ProjectView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
