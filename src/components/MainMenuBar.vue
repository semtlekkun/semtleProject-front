<template>
    <div id="container">
      <router-link to="/">
        <img src="../assets/mainLogo.png" 
          width="150px" id="logo"
        @mouseover="menuOpen" 
        @mouseleave="menuClose"/>
      </router-link>
      
      <div id="transBox"
      @mouseover="menuOpen"
      @mouseleave="menuClose">
        <div id="box">
        
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
      </div>
    </div>
</template>

<script>
import MenuElement from "./MenuElement.vue";
import {mapMutations, mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters([
      'getLogin'
    ]),
  },
  components: {
    MenuElement,
  },
  data() {
    return {
      // 현재 스크롤 위치와 호버에 대한 제어를 두기 위한 변수
      controller: false,
      subMenu:false,
      Attributes: null,
      functions:{
        menuOpen : this.menuOpen,
        menuClose : this.menuClose,
        subMenuOpen : this.subMenuOpen,
        subMenuClose : this.subMenuClose
      },
      // 로그아웃 시 들어갈 리스트 아이템과 버튼 제목
      AttributesLogOut:[
        {
          Items: [],
          url: '/notice/list',
          Title: "공지사항",
          method: ()=>{}
        },
        {
          Items: [
            { title: "목록", url:'/project/list' },
            { title: "공고", url: '/project/announce/list' },
          ],
          url: '',
          Title: "프로젝트",
          method: ()=>{}
        },
        {
          Items: [],
          url: '/management',
          Title: "역대 간부",
          method: ()=>{}
        },
        {
          Items: [],
          url: '/qna/list',
          Title: "Q&A",
          method: ()=>{}
        },
        {
          Items: [],
          url: '/login',
          Title: "로그인",
          method: ()=>{}
        },
      ],
      // 로그인 시 들어갈 리스트 아이템과 버튼 제목
      AttributesLogIn:[
        {
          Items: [],
          url: '/notice/list',
          Title: "공지사항",
          method: ()=>{}
        },
        {
          Items: [
            { title: "목록", url:'/project/list' },
            { title: "공고", url: '/project/announce/list' },
          ],
          url: '',
          Title: "프로젝트",
          method: ()=>{}
        },
        {
          Items: [],
          url: '/management',
          Title: "역대 간부",
          method: ()=>{}
        },
        {
          Items: [],
          url: '/qna/list',
          Title: "Q&A",
          method: ()=>{}
        },
        {
          Items: [],
          url: '/mypage',
          Title: "마이페이지",
          method: ()=>{}
        },
        {
          Items: [],
          url: '',
          Title: "로그아웃",
          method: ()=>{this.setLogout()}
        },
      ]
    };
  },
  methods: {
    ...mapMutations([
      'setLogout'
    ]),
    // 로그인 됐는 지 확인하는 함수
    isLogin(){
      if (this.getLogin){ // 로그인일 때
        // console.log("login success")
        this.Attributes = this.AttributesLogIn // 로그인 메뉴 받음
      }
      else { // 로그아웃일 때
        // console.log("login fail")
        this.Attributes = this.AttributesLogOut // 로그아웃 메뉴 받음
      }
    },
    subMenuOpen(){
      this.subMenu = true;
    },
    subMenuClose(){
      this.subMenu = false;
    },
    // 메뉴가 펼쳐지는 함수
    menuOpen() {
      if (this.controller) {
        let boxObj = document.querySelector("#transBox");
        boxObj.style.width = "1000px";
        boxObj.style.transition = ".5s";
      }
      else if(this.subMenu){
        let boxObj = document.querySelector("#transBox");
        boxObj.style.width = "1000px";
      }
      // console.log(this.subMenu)
    },

    // 메뉴가 닫히는 함수
    menuClose() {
      if (this.controller) {
        let boxObj = document.querySelector("#transBox");
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
    this.isLogin();
  },

  // 사용한 함수는 인스턴스 소멸 시 제거
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
             @font-face {
    font-family: 'HangeulNuri-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
            
            
*{
  font-family: 'HangeulNuri-Bold';
}
#transBox{
  /* background: red; */
  transform: translateY(-105%);
  height: 150px;
  width: 1000px;
  border-radius: 100px 0 0 100px;
}

#container {
  height: 150px;
}

#logo {
  /* position: absolute;
  top: 5px; */
  position: relative;
  z-index: 100;
  border-radius: 100%;
}

#box {
  /* position: absolute;
  top: 60.5px; */
  transform: translateY(137%);
  background-color: #50829b;
  
  height: 40.5px;
  transition: 0.4s;
  margin-left: 4px;
  border-radius: 20px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
}

.dummy1 {
  width: 150px;
}

.dummy2 {
  width: 0px;
}

</style>