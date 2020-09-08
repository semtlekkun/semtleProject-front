<template>
<div class="box">
    <img src="../assets/intro.gif" @click="functions" class="video" />
    <div class="goSign">홈으로 가려면 화면 아무데나 클릭하세요!</div>
</div>
</template>

<script>
export default {
    props: {
        functions: Function
    }
}
</script>

<style scoped>
.box {
    height: 100vh;
}

.video {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.goSign {
    position: absolute;
    z-index: 999;
    left: 20px;
    top: 20px;
    font-size: 1.1rem;
    font-weight: bold;
}
</style>
