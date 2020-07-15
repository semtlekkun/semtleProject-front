<template>
  <v-btn color="primary" class="top_btn" @click="go_top">TopButton</v-btn>
</template>

<script>
export default {
  methods: {
    go_top() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
.top_btn {
  position: fixed;
  bottom: 15px;
  right: 15px;
  position: fixed;
}
</style>