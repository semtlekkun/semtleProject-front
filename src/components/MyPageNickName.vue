<template>
  <div>
    <v-card height="200" light="light" class="pa-5">
      <v-card-title primary="primary" class="title justify-center">Nickname</v-card-title>
      <v-card-text class="text-center">{{outputNick}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outputNick: "",
    };
  },
  created() {
    this.initNickName();
  },
  methods: {
    initNickName() {
      let config = {
        headers: { token: sessionStorage.getItem("token") },
      };

      this.axios.get("http://49.50.166.64/api/mypage", config).then((res) => {
        this.outputNick = res.data.student.nick;
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
</style>