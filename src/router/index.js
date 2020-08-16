import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/management',
    name: 'Management',
    component: () => import('../views/Management.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    component: () => import('../views/Notice.vue')
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
    path: '/qna/detail/:id',
    name: 'QnA',
    component: () => import('../views/QnA.vue')
  },
  {
    path: '/qna/list',
    name: 'QnAList',
    component: () => import('../views/QnAList.vue')
  },
  {
    path: '/qna/input',
    name: 'QuestionInput',
    component: () => import('../views/QuestionInput.vue')
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
    component: () => import('../views/ProjectAnnounceRead.vue')
  },
  {
    path: '/mypage',
    name: 'myPage',
    component: () => import('../views/MyPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/management',
    name: 'management',
    component: () => import('../views/Management.vue')
  },
  {
    path: '/project/list',
    name: 'prijectList',
    component: () => import('../views/ProjectList.vue')
  },
  {
    path: '/notice/list',
    name: 'noticeList',
    component: () => import('../views/NoticeList.vue')
  },
  {
    path: '/project/announce/list',
    name: 'projectAnnounceList',
    component: () => import('../views/ProjectAnnounceList.vue')
  },
  {
    path: '/admin/menu',
    name: 'adminMenu',
    component: () => import('../views/AdminMenu.vue')
  },
  {
    path: '/admin/modify',
    name: 'adminModify',
    component: () => import('../views/AdminModify.vue')
  }
]

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
