<template>
  <div>
    <div id="topBar" class>
      <v-btn
        id="btn"
        @click="activeMenu"
        :class="isOpen ? 'moveBtn' : 'reBtn'"
        color="#50829b"
        elevation="0"
      >
        <v-icon large color="white">mdi-menu</v-icon>
      </v-btn>
      <v-img width="90px" class="logoImg" src="../assets/menuBarLogo.png" />
    </div>
    <div id="sideBar" :class="isOpen ? 'open' : 'close'">
      <ul>
        <li>
          <router-link to="/">
            <v-img
              id="mainLogo"
              class="mx-auto my-4"
              :max-height="imgSize"
              :max-width="imgSize"
              src="../assets/mainLogo.png"
              @click="goHome"
            ></v-img>
          </router-link>
        </li>
        <v-divider></v-divider>
        <router-link v-for="item in Items" :key="item.Title" :to="item.url">
          <li class="menuList py-2" @click="item.method">
            {{ item.Title }}
            <ul
              v-if="item.Items !== null"
              :class="projectClick ? 'openProject' : 'closeProject'"
            >
              <router-link
                v-for="subItem in item.Items"
                :key="subItem.title"
                :to="subItem.url"
              >
                <li class="menuList py-1" @click="subItem.method">
                  {{ subItem.title }}
                </li>
              </router-link>
            </ul>
          </li>
        </router-link>

        <div v-if="loginStatus">
          <router-link
            v-for="item in mainItemsLogIn"
            :key="item.Title"
            :to="item.url"
          >
            <li class="menuList py-2" @click="item.method">{{ item.Title }}</li>
          </router-link>
        </div>

        <div v-if="!loginStatus">
          <router-link
            v-for="item in mainItemsLogOut"
            :key="item.Title"
            :to="item.url"
          >
            <li class="menuList py-2" @click="item.method">{{ item.Title }}</li>
          </router-link>
        </div>
      </ul>
    </div>

    <div
      id="background"
      :class="isOpen ? 'backOpen' : 'backClose'"
      @click="activeMenu"
    ></div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAdmin", "getLogin"]),
    Items() {
      this.isLogin();
      return this.mainItems;
    },
  },
  props: {
    loginStatus: Boolean,
  },
  data() {
    return {
      imgSize: 150,
      isOpen: false,
      projectClick: false,
      mainItems: [
        {
          Items: null,
          url: "/notice/list",
          Title: "공지사항",
          method: () => {
            this.activeMenu();
          },
        },

        {
          Items: [
            {
              title: "목록",
              url: "/project/list",
              method: () => {
                this.activeMenu();
              },
            },
            {
              title: "공고",
              url: "/project/announce/list",
              method: () => {
                this.activeMenu();
              },
            },
          ],
          url: "",
          Title: "프로젝트",
          method: () => {
            this.projectClick = !this.projectClick;
          },
        },
        {
          Items: null,
          url: "/management",
          Title: "역대 간부",
          method: () => {
            this.activeMenu();
          },
        },

        {
          Items: null,
          url: "/qna/list",
          Title: "Q&A",
          method: () => {
            this.activeMenu();
          },
        },

        {
          Items: null,
          url: "/photo/list",
          Title: "활동 사진",
          method: () => {
            this.activeMenu();
          },
        },
      ],
      // 로그아웃 때 메뉴
      mainItemsLogOut: [
        {
          Items: null,
          url: "/login",
          Title: "로그인",
          method: () => {
            this.activeMenu();
          },
        },
      ],
      // 로그인 때 메뉴
      mainItemsLogIn: [
        {
          Items: null,
          url: "/mypage",
          Title: "마이페이지",
          method: () => {
            this.activeMenu();
          },
        },

        {
          Items: null,
          url: "",
          Title: "로그아웃",
          method: () => {
            this.setLogout();
          },
        },
      ],

      adminMenu: {
        Items: null,
        url: "/admin/menu",
        Title: "관리자페이지",
        method: () => {
          this.activeMenu();
        },
      },
    };
  },

  methods: {
    ...mapMutations(["setLogout"]),
    activeMenu() {
      this.isOpen = !this.isOpen;
    },
    isLogin() {
      if (this.getLogin) {
        if (this.getAdmin) {
          this.mainItemsLogIn[0] = this.adminMenu;
        }
      }
    },
    goHome() {
      this.activeMenu();
    },
  },
};
</script>

<style scoped>
.logoImg {
  transform: translate(100px, 50%);
}
a {
  color: #2b7aa1 !important;
  font-weight: 600;
}
.openProject {
  height: 72px;
  padding: 0;
  margin: 0;
  transition: all 0.5s;
  overflow: hidden;
}

.closeProject {
  height: 0;
  padding: 0;
  margin: 0;
  transition: all 0.5s;
  overflow: hidden;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
  width: 100%;
  text-align: center;
}

.menuList {
  font-size: 1.2rem;
  cursor: pointer;
}

.menuList:hover {
  font-size: 1.5rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.61);
}

#topBar {
  margin: 0;
  padding: 0;
  height: 60px;
  width: 100vw;
  z-index: 10;
  background: #50829b;
}
.moveBtn {
  position: fixed;
  top: 10px;
  left: 310px;
  z-index: 13;
  transition: all 0.5s;
}
.backOpen {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.637);
  z-index: 10;
  cursor: pointer;
  width: 100vw;
  height: 100vh;
}
.backClose {
  display: none;
}
.reBtn {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 13;
  transition: all 0.5s;
}

.close {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100vh;
  transition: all 0.5s;
}

.open {
  position: fixed;
  top: 0;
  left: 0px;
  width: 300px;
  height: 100vh;
  transition: all 0.5s;
  z-index: 12;
  background: #e7f3f8;
}

#sideBar > ul {
  width: 100%;
  height: 100%;
}

#mainLogo:hover {
  cursor: pointer;
}
</style>