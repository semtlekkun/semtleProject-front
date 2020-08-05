<template>
  <v-container id="container">
    <v-row id="glue">
      <v-col>
        <img src="../assets/logo.png" width="150px" id="logo" @mouseover="menuOpen" />
        <div id="box">
          <div class="dummy1"></div>
          <MenuElement
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

      // 메뉴 버튼마다 들어갈 리스트 아이템과 버튼 제목
      Attributes: [
        {
          Items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
          ],
          Title: "공지사항",
        },

        {
          Items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
          ],
          Title: "프로젝트",
        },

        {
          Items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
          ],
          Title: "질의응답",
        },

        {
          Items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Me" },
          ],
          Title: "로그인",
        },
      ],
    };
  },
  methods: {
    // 메뉴가 펼쳐지는 함수
    menuOpen() {
      if (this.controller) {
        let boxObj = document.querySelector("#box");
        boxObj.style.width = "1200px";
        boxObj.style.transition = "1s";
      }
    },

    // 메뉴가 닫히는 함수
    menuClose() {
      if (this.controller) {
        let boxObj = document.querySelector("#box");
        boxObj.style.width = "0px";
        boxObj.style.transition = "1s";
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
#glue {
  position: sticky;
  top: 2%;
}

#container {
  height: 10000px;
}

#logo {
  position: absolute;
  top: 5px;
  z-index: 100;
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
#menuBar {
  position: sticky;
  top: 0;
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