<template>
  <v-container>
    <v-row>
      <v-col>
        <div id="top" @mouseover="logoHover" @mouseout="topOut">
          <img src="../assets/logo.png" width="150px" id="logo" />
          <div id="box">
            <div class="dummy1"></div>
            <v-btn class="child white--text" text>공지사항</v-btn>
            <v-btn class="child white--text" text>프로젝트</v-btn>
            <v-btn class="child white--text" text>질의응답</v-btn>
            <v-btn class="child white--text" text>로그인</v-btn>
            <div class="dummy2"></div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logoHover() {
      let boxObj = document.querySelector("#box");
      boxObj.style.width = "1200px";
      boxObj.style.transition = "1s";
    },

    topOut() {
      let boxObj = document.querySelector("#box");
      boxObj.style.width = "0";
      boxObj.style.transition = "1s";
    },
  },
};
</script>

<style scoped>
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
  width: 0px;
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