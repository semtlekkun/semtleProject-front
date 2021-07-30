<template>
  <v-btn
    v-if="curScrollPos === 0 ? false : true"
    color="#50829b"
    class="top_btn"
    @click="go_top"
    fab
    :large="isMobile ? false : true"
    :small="isMobile ? true : false"
    dark
  >
    <v-icon>mdi-arrow-up-thick</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    isMobile: Boolean,
  },

  data() {
    return {
      isTop: true,
      curScrollPos: document.documentElement.scrollTop,
    };
  },

  mounted() {
    addEventListener("scroll", this.onScroll);
  },

  methods: {
    go_top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    onScroll() {
      this.curScrollPos = document.documentElement.scrollTop;
    },
  },
};
</script>

<style scoped>
.top_btn {
  right: 2%;
  bottom: 2%;
  position: fixed;
  z-index: 999;
}
</style>