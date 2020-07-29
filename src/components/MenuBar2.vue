<template>
    <div id="app">
        <v-app id="inspire">
            <v-card class="overflow-hidden">
            <v-img 
                class="logo" 
                absolute 
                max-height="130" 
                max-width="130" 
                src="../assets/logo.png"
                @mouseover="logoHover" 
                @mouseleave="logoNoHover"    
            ></v-img>
            <v-app-bar
                @mouseover="logoHover" 
                @mouseleave="logoNoHover" 
                :collapse="!collapseOnScroll"
                :collapse-on-scroll="collapseOnScroll"
                :width="collapseOnScroll? '600':'0'"
                absolute
                color="rgb(46,117,182)"
                dark
                scroll-target="#scrolling-techniques-6"
                class="bar rounded-xl"
            >
                <v-toolbar-title></v-toolbar-title>
            </v-app-bar>
            <v-sheet
                id="scrolling-techniques-6"
                class="overflow-y-auto"
                max-height="600"
            >
                <v-container style="height: 1000px;"></v-container>
            </v-sheet>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    export default {
        data: () => ({
            collapseOnScroll: true,
            menuIsOpen: false,
            projectIsOpen: false,
        }),
        methods:{
            logoHover(){
                this.menuIsOpen=true;
                this.collapseOnScroll=true;
            },
            logoNoHover(){
                this.menuIsOpen=false;
                this.collapseOnScroll=false;
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
</style>