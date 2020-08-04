import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/notice',
    name: 'notice',
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/input',
    name: 'projectInput',
    component: () => import('../views/ProjectInput.vue')
  },
  {
    path: '/project/view',
    name: 'projectView',
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
    path: '/admin/member',
    name: 'adminMember',
    component: () => import('../views/AdminMember.vue')
  },
  {
    path: '/project/announce/write',
    name: 'projectAnnounceWrite',
    component: () => import('../views/ProjectAnnounceWrite.vue')
  },
  {
    path: '/project/announce/read',
    name: 'projectAnnounceRead',
    component: ()=> import('../views/ProjectAnnounceRead.vue')
  },
  {
    path: '/mypage',
    name: 'myPage',
    component: ()=>import('../views/MyPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/Login.vue')
  },
  {
    path: '/management',
    name: 'management',
    component: ()=>import('../views/Management.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
