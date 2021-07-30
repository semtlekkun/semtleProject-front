<template>
  <v-btn
    color="#50829b"
    class="top_btn"
    :class="curScrollPos === 0 ? 'isTop' : 'isBody'"
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

  transition: all 1s;
}

.isTop {
  opacity: 0;
  transition: all 0.5s;
  cursor: default;
}

.isBody {
  opacity: 1;
  transition: all 0.5s;
}
</style>