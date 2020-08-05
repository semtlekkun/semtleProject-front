import Vue from 'vue'
import VueRouter from 'vue-router'
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
    component: () => import('../views/Home.vue')
  },
  {
    path: '/project/input',
    name: 'projectInput',
    component: () => import('../views/ProjectInput.vue')
  },
  {
    path: '/project/view',
    name: 'projectView',
    component: () => import('../views/ProjectView.vue'),
    props: true
  },
  {
    path: '/qna',
    name: 'QnA',
    component: () => import('../views/QnA.vue')
  },
  {
    path: '/qna/list',
    name: 'QnAList',
    component: () => import('../views/QnAList.vue')
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
  },
  {
    path: '/admin/mentor',
    name: 'mentor',
    component: ()=>import('../views/AdminMentor.vue')
  },
  {
    path: '/project/list',
    name: 'prijectList',
    component: ()=>import('../views/ProjectList.vue')
  },
  {
    path: '/notice/list',
    name: 'noticeList',
    component: ()=>import('../views/NoticeList.vue')
  },
  {
    path: '/project/announce/list',
    name: 'projectAnnounceList',
    component: ()=>import('../views/ProjectAnnounceList.vue')
  },
  {
    path: '/admin/menu',
    name: 'adminMenu',
    component: ()=> import('../views/AdminMenu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
