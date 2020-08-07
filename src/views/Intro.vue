<template>
    <div class="box">
        <!-- <video
            playsinline
            muted
            class="video"
            @click="functions"
        >
            <source src="../assets/mobileVideo.mp4" type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"'>
            <source src="../assets/mobileVideo.webm" type='video/webm; codecs="vp8.0, vorbis"'>
        </video> -->
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