<template>
  <v-row>
    <v-col cols="11"></v-col>
    <v-col>
      <v-btn color="primary" class="top_btn" @click="go_top">go top</v-btn>
    </v-col>
  </v-row>
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
  bottom: 3%;
  position: fixed;
}
</style>