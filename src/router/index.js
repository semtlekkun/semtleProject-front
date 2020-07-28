import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projectInput',
    name: 'ProjectInput',
    component: () => import('../views/ProjectInput.vue')
  },
  {
    path: '/projectView',
    name: 'ProjectView',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/qna',
    name: 'QnA',
    component: () => import('../views/QnA.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
