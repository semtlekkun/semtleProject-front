<template>
    <div>
        <v-app-bar-nav-icon
            color="rgb(46,117,182)" 
            x-large
            @click="hamburgerHover"
        >
        </v-app-bar-nav-icon>
        <div class="whole"
        @click="hamburgerNoHover">
            <ul :class="menuIsOpen?'sideBar':'closeBar'">
                <li id="nomargin">
                    <img class="logo" src="../assets/logo.png"/>
                </li>
                <li :class="menuIsOpen?'':'closeli'">공지사항</li>
                <li :class="menuIsOpen?'':'closeli'">프로젝트
                    <ul class="miniBar">
                        <li :class="menuIsOpen?'':'closeli'">공고</li>
                        <li :class="menuIsOpen?'':'closeli'">등록</li>
                    </ul>
                </li>
                <li :class="menuIsOpen?'':'closeli'">QnA</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
          return{
            menuIsOpen:false
          }
        },

        methods:{
          hamburgerHover(){
            this.menuIsOpen=true;
          },
          hamburgerNoHover(){
            this.menuIsOpen=false;
          },
          
        },
    }
</script>

<style scoped>
    .logo{
        width: 45%;
        margin-top: 20px;
    }
    #nomargin{
        margin:0;
    }
    .sideBar{
        width: 35%;
        padding: 0;
        height: calc(100vh - 52px);
        box-shadow: 7px 0px 5px 0px lightgrey;
        background-color: white;
    }
    .closeBar{
        width: 0px;
    }
    .miniBar{
        padding: 0px;
    }
    .miniBar > li{
        font-size: 1rem;
        margin-top: 20px;
    }
    li{
        margin-top: 40px;
        list-style: none;
        text-align:center;
        cursor: pointer;
        font-size: 1.2rem;
    }
    .closeli{
        display: none;
    }
</style>