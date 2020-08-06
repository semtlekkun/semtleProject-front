<template>
    <div class="box">
        <video
            autoplay
            muted
            class="video"
            @click="test"
        >
            <source src="../assets/mobileVideo.mp4">
        </video>
    </div>
</template>

<script>
    export default {
        methods:{
            test(){
                console.log("Test Success");
            }
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