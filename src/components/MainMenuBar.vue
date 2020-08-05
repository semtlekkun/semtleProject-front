<template>
  <v-container id="container">
    <v-row>
      <v-col>
        <router-link to="/">
          <img src="../assets/mainLogo.png" 
            width="150px" id="logo"
          @mouseover="menuOpen" 
          @mouseleave="menuClose"/>
        </router-link>
        <div id="box"
        @mouseover="menuOpen"
        @mouseleave="menuClose">

          <div class="dummy1"></div>

          <MenuElement
            :functions = "functions"
            v-for="(item, index) in Attributes"
            :key="index"
            :Attribute="item"
            ref="args"
          />

          <div class="dummy2"></div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MenuElement from "./MenuElement.vue";
export default {
  components: {
    MenuElement,
  },
  data() {
    return {
      // 현재 스크롤 위치와 호버에 대한 제어를 두기 위한 변수
      controller: false,
      subMenu:false,
      functions:{
        menuOpen : this.menuOpen,
        menuClose : this.menuClose,
        subMenuOpen : this.subMenuOpen,
        subMenuClose : this.subMenuClose
      },
      // 메뉴 버튼마다 들어갈 리스트 아이템과 버튼 제목
      Attributes: [
        {
          Items: [],
          url: '/notice/list',
          Title: "공지사항",
        },

        {
          Items: [
            { title: "프로젝트 목록", url:'/project/list' },
            { title: "프로젝트 공고", url: '/project/announce/list' },
          ],
          url: '',
          Title: "프로젝트",
        },

        {
          Items: [],
          url: '/qna/list',
          Title: "Q&A",
        },

        {
          Items: [],
          url: '/login',
          Title: "로그인",
        },
      ],
    };
  },
  methods: {

    subMenuOpen(){
      this.subMenu = true;
    },
    subMenuClose(){
      this.subMenu = false;
    },
    // 메뉴가 펼쳐지는 함수
    menuOpen() {
      if (this.controller) {
        let boxObj = document.querySelector("#box");
        boxObj.style.width = "1200px";
        boxObj.style.transition = ".5s";
      }
      else if(this.subMenu){
        let boxObj = document.querySelector("#box");
        boxObj.style.width = "1200px";
      }
      // console.log(this.subMenu)
    },

    // 메뉴가 닫히는 함수
    menuClose() {
      if (this.controller) {
        let boxObj = document.querySelector("#box");
        boxObj.style.width = "0px";
        boxObj.style.transition = ".5s";
      }
    },

    // 스크롤 시 수행되는 함수
    handleScroll() {
      if ((window.scrollY || document.documentElement.scrollTop) < 10) {
        this.menuOpen();
        this.controller = false;
      } else {
        this.controller = true;
        this.menuClose();
      }
    },
  },

  // 스크롤 시 수행되는 함수를 인스턴스 생성 시 호출
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  // 사용한 함수는 인스턴스 소멸 시 제거
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>

#container {
  height: 150px;
}

#logo {
  position: absolute;
  top: 5px;
  z-index: 100;
  border-radius: 100%;
}

#box {
  position: absolute;
  top: 60.5px;
  background-color: rgb(46, 117, 182);
  width: 1200px;
  height: 39.5px;
  transition: 0.4s;
  margin-left: 4px;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.child {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

  font-weight: bold;
}

.dummy1 {
  width: 150px;
  height: 40px;
}

.dummy2 {
  width: 0px;
  height: 39.5px;
}
</style>