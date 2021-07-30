<template>
  <v-btn
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

  mounted() {
    console.log(this.isMobile);
  },

  methods: {
    go_top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
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