<template>
  <div>
    <router-link to="/admin/menu" >
        <v-img class="top_btn" src="../assets/adminBtn.png" width="70"/>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {

  },
};
</script>

<style scoped>
.top_btn {
  right: 110px;
  bottom: 20px;
  position: fixed;
  z-index: 999;
}
</style>