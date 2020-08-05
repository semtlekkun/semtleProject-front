<template>
  <v-menu offset-y open-on-hover>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        id="menuBtn"
        class="child white--text"
        text
        large
        v-bind="attrs"
        v-on="on"
      >{{Attribute.Title}}</v-btn>
    </template>
    <v-list flat>
      <v-list-item-group>
        <v-list-item v-for="(item, index) in Attribute.Items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    Attribute: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // 메뉴가 접혀질 때 버튼들을 지우고싶지만 ref가 잘안됩니다...
    // 버그는 메뉴가 접혀져 있을 때 로고의 오른쪽에 버튼들이 조금씩 뭉쳐있습니다.
    // eraseBtn() {
    //   document.querySelector("#menuBtn").style.display = "none";
    // },
    // drawBtn() {
    //   document.querySelector("#menuBtn").style.display = "block";
    // },
  },
};
</script>

<style scoped>
</style>