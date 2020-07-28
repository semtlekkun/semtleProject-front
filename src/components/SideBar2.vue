<template>
    <div id="app">
        <v-app id="inspire">

            <v-app-bar-nav-icon
                x-large
                @click.stop="drawer = !drawer"
                :class="drawer?'hamburgerOpen':'hamburgerClose'"
            >
            </v-app-bar-nav-icon>
        
            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
            >
                <v-list-item>
        
                <v-list-item-content class=""> <!-- 로고 크기 줄여야함 -->
                    <v-img class="mx-auto my-4" 
                    :max-height="this.imgSize" 
                    :max-width="this.imgSize" 
                    src="../assets/logo.png"></v-img>
                </v-list-item-content>
                
                </v-list-item>
        
                <v-divider></v-divider>
        
                <v-list>
                
                <v-list-item
                    v-for="item in mainItems"
                    :key="item.name"
                    link
                >
                    <v-list-item-content @click="item.method">
                        <v-list-item-title class="text-center text-h5">
                            {{ item.name }}

                            <v-list v-if="item.sub!==null" :class="projectClick? '':'closeProject'">
                                <v-list-item
                                    v-for="subItem in item.sub"
                                    :key="subItem"
                                    link
                                >
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6">{{ subItem }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>

                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                
                <!--
                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title>공지사항</v-list-item-title>
                        <v-list-item-title>프로젝트
                            <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>공고</v-list-item-title>
                                        <v-list-item-title>등록</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-list-item-title>
                        <v-list-item-title>QnA</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                -->
                
                </v-list>
            </v-navigation-drawer>
        </v-app>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                imgSize: 150,
                drawer: null,
                projectClick: false,
                mainItems: [
                    { name: '공지사항', sub: null, method: ()=>{}},
                    { name: '프로젝트', sub: ['공고', '등록'], method: ()=>{this.projectClick = !this.projectClick} },
                    { name: 'QnA', sub: null, method:()=>{}},
                ],
            }
        },
    }
</script>

<style scoped>
    .logoImg{
        width:100%;
    }
    .hamburgerClose{
        transition: all 0.2s;
        color:rgb(46,117,182) !important;
    }
    .hamburgerOpen{
        transition: all 0.2s;
        position: absolute;
        left: 256px;
        z-index:9999;
        color: white !important;
    }
    .closeProject{
        height: 0;
        padding:0;
        margin:0;
    }
</style>