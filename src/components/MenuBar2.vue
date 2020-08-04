<template>
    <div id="app">
        <v-app id="inspire">
            <span style="position: sticky; top: 0;">
            <v-img
                @mouseover="logoHover" 
                @mouseleave="logoNoHover"
                class="logo" 
                absolute 
                max-height="130" 
                max-width="130" 
                src="../assets/logo.png"    
            ></v-img>
            <v-app-bar
                @mouseover="logoHover" 
                @mouseleave="logoNoHover"
                :collapse="!collapseOnScroll"
                :collapse-on-scroll="collapseOnScroll"
                :width="menuIsOpen? '600':'0'"
                absolute
                color="rgb(46,117,182)"
                dark
                class="bar rounded-xl"
                style="padding-left: 90px;"
            >

                <v-toolbar-items style="margin: auto;">공지사항</v-toolbar-items>
                <v-toolbar-items style="margin: auto;">프로젝트</v-toolbar-items>
                <v-toolbar-items style="margin: auto;">QnA</v-toolbar-items>
            </v-app-bar>
            <!--
            <v-sheet
                id="scrolling-techniques-6"
                class="overflow-y-auto"
                max-height="600"
            >
                <v-container style="height: 1000px;"></v-container>
                
            </v-sheet>-->
            
            </span>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        </v-app>
    </div>
</template>

<script>
    export default {
        data: () => ({
            collapseOnScroll: true,
            menuIsOpen: true,
            projectIsOpen: false,
            mainItems: [
                    { name: '공지사항', sub: null, method: ()=>{}},
                    { name: '프로젝트', sub: ['공고', '등록'], method: ()=>{this.projectIsOpen = !this.projectIsOpen} },
                    { name: 'QnA', sub: null, method:()=>{}},
                ],
        }),
        methods:{
            logoHover(){
                // if(){this.menuIsOpen=true;}
                
                // this.collapseOnScroll=false;
            },
            logoNoHover(){
                this.menuIsOpen=false;
                // this.collapseOnScroll=true;
            },
            projectHover(){
                this.projectIsOpen=true;
            },
            projectNoHover(){
                this.projectIsOpen=false;
            }
            },
        }
</script>

<style scoped>
    .logo{
        z-index: 2;
    }
    .bar{
        height: 34.45px !important;
        left: 10px!important;
        top: 48.1px !important;
        z-index: 1;
    }
    .closeProject{
        height: 0;
        padding:0;
        margin:0;
    }
</style>

