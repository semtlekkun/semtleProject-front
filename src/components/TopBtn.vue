<template>
  <div>
    <v-btn color="primary" class="top_btn" @click="go_top" fab x-large dark>
      <v-icon>mdi-arrow-up-thick</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
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
  right: 20px;
  bottom: 20px;
  position: fixed;
  z-index: 999;
}
</style>