<template>
  <v-container id="container">
    <v-row id="myrow">
      <v-col>
        <div id="top" @mouseover="menuOpen" @mouseout="menuClose">
          <img src="../assets/logo.png" width="150px" id="logo" />
          <div>
            <div id="box">
              <div class="dummy1"></div>
              <MenuElement
                class="test"
                v-for="item in Attributes"
                :key="item.index"
                :Attribute="item"
              />
              <div class="dummy2"></div>
            </div>
          </div>
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
      controller: false,

      Attributes: [
        {
          Items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Medskjflsdlkjfsdlkfjdsfljkdsfkljdsflkj" },
            { title: "Click Me 2fdsifhsdakjfsdhlfsdkfjdlkfj" },
          ],
          Title: "공지사항",
          Stop: this.controllStop,
          Start: this.controllStart,
        },

        {
          Items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Medskjflsdlkjfsdlkfjdsfljkdsfkljdsflkj" },
            { title: "Click Me 2fdsifhsdakjfsdhlfsdkfjdlkfj" },
          ],
          Title: "프로젝트",
          Stop: this.controllStop,
          Start: this.controllStart,
        },

        {
          Items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Medskjflsdlkjfsdlkfjdsfljkdsfkljdsflkj" },
            { title: "Click Me 2fdsifhsdakjfsdhlfsdkfjdlkfj" },
          ],
          Title: "질의응답",
          Stop: this.controllStop,
          Start: this.controllStart,
        },

        {
          Items: [
            { title: "Click Me" },
            { title: "Click Me" },
            { title: "Click Medskjflsdlkjfsdlkfjdsfljkdsfkljdsflkj" },
            { title: "Click Me 2fdsifhsdakjfsdhlfsdkfjdlkfj" },
          ],
          Title: "로그인",
          Stop: this.controllStop,
          Start: this.controllStart,
        },
      ],
    };
  },
  methods: {
    menuOpen() {
      if (this.controller) {
        let topObj = document.querySelector("#top");
        topObj.style.width = "1200px";
        let boxObj = document.querySelector("#box");
        boxObj.style.width = "1200px";
        boxObj.style.transition = "1s";
      }
    },

    menuClose() {
      if (this.controller) {
        let topObj = document.querySelector("#top");
        topObj.style.width = "0px";
        let boxObj = document.querySelector("#box");
        boxObj.style.width = "0px";
        boxObj.style.transition = "1s";
      }
    },

    controllStop() {
      this.menuOpen();
      this.controller = false;
    },

    controllStart() {
      this.controller = true;
      this.menuClose();
    },

    handleScroll() {
      if ((window.scrollY || document.documentElement.scrollTop) < 10) {
        this.controllStop();
      } else {
        this.controllStart();
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
#top {
  width: 0px;
  height: 200px;
}

#myrow {
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
  width: 1200px;
  height: 39.5px;
  background: rgb(46, 117, 182);
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