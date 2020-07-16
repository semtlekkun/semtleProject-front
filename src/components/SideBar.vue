<template>
    <div class="whole">
        <v-app-bar-nav-icon
            color="rgb(46,117,182)" 
            x-large>
        </v-app-bar-nav-icon>
        <div class='left'>
            <ul class="sideBar">
                <li>
                    <img class="logo" src="../assets/logo.png"/>
                </li>
                <li>공지사항</li>
                <li>프로젝트
                    <ul class="miniBar">
                        <li>공고</li>
                        <li>등록</li>
                    </ul>
                </li>
                <li>QnA</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .logo{
        width: 45%;
    }
    .sideBar{
        width: 40%;
        padding: 0;
        height: calc(100vh - 52px);
        background-color: green;
    }
    .miniBar{
        padding: 0;
    }
    li{
        margin-top: 40px;
        list-style: none;
        text-align:center;
        cursor: pointer;
        background-color: red;
    }
</style>