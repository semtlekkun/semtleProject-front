<template>
  <v-container>
    <v-row>
      <v-col>
        <div id="top" @mouseover="logoHover" @mouseout="topOut">
          <img src="../assets/logo.png" width="150px" id="logo" />
          <div id="box"></div>
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
      let browserWidth = document.body.clientWidth;
      let rangeLogo = document.querySelector("#logo").getBoundingClientRect().x;

      let boxObj = document.querySelector("#box");

      boxObj.style.width = (browserWidth - rangeLogo * 2).toString() + "px";
      boxObj.style.transition = "1s";
      console.log((browserWidth - rangeLogo).toString());
      console.log(rangeLogo);
    },

    topOut() {
      let boxObj = document.querySelector("#box");
      boxObj.style.width = "0%";
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
}

#menuBar {
  position: sticky;
  top: 0;
}
</style>