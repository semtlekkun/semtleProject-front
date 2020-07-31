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
    path: '/project/input',
    name: 'ProjectInput',
    component: () => import('../views/ProjectInput.vue')
  },
  {
    path: '/project/view',
    name: 'ProjectView',
    component: () => import('../views/ProjectView.vue')
  },
  {
    path: '/qna',
    name: 'QnA',
    component: () => import('../views/QnA.vue')
  },
  {
    path: '/admin/notice',
    name: 'adminNotice',
    component: () => import('../views/AdminNotice.vue')
  },
  {
    path: '/project/announce/write',
    name: 'ProjectAnnounceWrite',
    component: () => import('../views/ProjectAnnounceWrite.vue')
  },
  {
    path: '/project/announce/read',
    name: 'ProjectAnnounceRead',
    component: ()=> import('../views/ProjectAnnounceRead.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
