<template>
  <v-container>
    <v-row>
      <!-- 사진 -->
      <v-col cols="12" md="6">
        <UserImg />
        <br />
        <MyPageNickName />
      </v-col>
      <v-col cols="12" md="6">
        <PhoneNum />
        <br />
        <Pw />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Pw from "../components/Password.vue";
import UserImg from "../components/UserImg.vue";
import PhoneNum from "../components/PhoneNum.vue";
import MyPageNickName from "../components/MyPageNickName.vue";

export default {
  data: () => ({
    dialog: false,
  }),
  components: {
    Pw,
    PhoneNum,
    UserImg,
    MyPageNickName,
  },
  methods: {},
};
</script>