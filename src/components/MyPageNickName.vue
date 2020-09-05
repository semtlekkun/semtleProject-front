<template>
  <div>
    <v-card height="200" light="light" class="pa-5">
      <v-card-title primary="primary" class="com-title justify-center">학번+이름</v-card-title>
      <v-card-text class="show mt-4 text-center">{{outputNick}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
import ipObj from "../key";
import { mapMutations } from "vuex";
export default {
  data() {
    return { outputNick: "" };
  },
  created() {
    this.initNickName();
  },
  methods: {
    initNickName() {
      let config = {
        headers: {
          token: sessionStorage.getItem("token"),
        },
      };

      this.axios.get(`${ipObj.ip}/api/mypage`, config)
      .then((res) => {
        this.outputNick = res.data.student.nick;
      });
    },
    ...mapMutations(["setLogout"]),
  },
};
</script>

<style scoped="scoped">
@font-face {
  font-family: "NEXON Lv1 Gothic OTF";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
.com-title {
  font-family: "NEXON Lv1 Gothic OTF";
}

.show {
  font-size: 150%;
}
</style>