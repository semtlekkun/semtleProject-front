<template>
    <div class="box">
        <img src="../assets/intro.gif" @click="functions" class="video"/>
    </div>
</template>

<script>
    export default {
        props:{
            functions: Function
        }
    }
</script>

<style scoped>
    .box{
        height: 100vh;
    }
    .video{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>