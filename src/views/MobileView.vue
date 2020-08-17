<template>
  <v-card class="mx-auto" id="menuBar">
    <v-app-bar
      dark
    >
      <v-app-bar-nav-icon 
       x-large
      @click="()=>{
          drawer = true;
          projectClick = false;
        }"></v-app-bar-nav-icon>

      <v-toolbar-title>
            <v-img width="90px" 
            class="mx-auto"
            src="../assets/menuBarLogo.png"/>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      :stateless='!drawer'
    >
        <v-list-item>
    
            <v-list-item-content>
                <v-img class="mx-auto my-4" 
                :max-height="imgSize" 
                :max-width="imgSize" 
                src="../assets/mainLogo.png"></v-img>
            </v-list-item-content>
            
        </v-list-item>
    
        <v-divider></v-divider>

      <v-list nav>
        <v-list-item-group
          active-class="text--accent-4"
        >
            <router-link
            v-for="item in mainItems"
            :key="item.Title" :to="item.url">
                <v-list-item link 
                    class="py-4" @click="item.method">

                    <v-list-item-title class="text-center text-h5">
                        {{item.Title}}
                        <v-list v-if="item.Items!==null" :class="projectClick? '':'closeProject'">
                            <router-link 
                            v-for="subItem in item.Items"
                            :key="subItem.title" :to="subItem.url">
                                <v-list-item link>
                                    <v-list-item-content>
                                        <v-list-item-title class="text-h6">{{ subItem.title }}</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>
                        </v-list>
                    </v-list-item-title>
                    
                </v-list-item>
            </router-link>
            
            <div v-show="isLogin"> <!-- 로그인일 때 메뉴 -->
            <router-link
            v-for="item in mainItemsLogIn"
            :key="item.Title" :to="item.url">
                <v-list-item link
                    class="py-4" @click="item.method">
                    <v-list-item-title class="text-center text-h5">
                        {{item.Title}}
                    </v-list-item-title>
                </v-list-item>    
            </router-link>
            </div>

            <div v-show="!isLogin"> <!-- 로그아웃일 때 메뉴 -->
            <router-link
            v-for="item in mainItemsLogOut"
            :key="item.Title" :to="item.url">
                <v-list-item link
                    class="py-4" @click="item.method">
                    <v-list-item-title class="text-center text-h5">
                        {{item.Title}}
                    </v-list-item-title>
                </v-list-item>  
            </router-link>
            </div>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>


    <v-container>
        
        <v-row :id="!isMobile && 'stickyMenu'" v-if="$route.name !== 'login'">
            <v-col offset-sm="3" sm="6" xl="6" offset-xl="3">
                <router-link to="/" v-show="isMobile || $route.name === 'adminMenu'" >
                <v-img 
                class="mx-auto"
                src="../assets/logo.png"/>
                </router-link>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <router-view />
            </v-col>
        </v-row>
        
    </v-container>
  </v-card>
</template>

<script>
import {mapMutations,mapGetters} from 'vuex'
  export default {
    computed:{
        ...mapGetters([
            "getLogin"
        ]),
    },
    beforeMount(){
        this.windowResize();
        window.addEventListener('resize', this.windowResize);
        if(this.getLogin){
            this.isLogin = true
        }
    },
    data(){
        return{
            isLogin:false,
            isMobile : false,
            drawer: false,
            imgSize: 150,
            projectClick: false,
            issnackBar: false,
            timeout: 2000,
            mainItems: [
                {
                    Items: null,
                    url: '/notice/list',
                    Title: "공지사항",
                    method: ()=>{}
                },

                {
                    Items: [
                        { title: "목록", url:'/project/list' },
                        { title: "공고", url: '/project/announce/list' },
                    ],
                    url: '',
                    Title: "프로젝트",
                    method: ()=>{this.projectClick = !this.projectClick}
                },
                {
                    Items: [],
                    url: '/management',
                    Title: "역대 간부",
                    method: ()=>{}
                },

                {
                    Items: null,
                    url: '/qna/list',
                    Title: "Q&A",
                    method: ()=>{}
                },

            ],
            // 로그아웃 때 메뉴
            mainItemsLogOut: [
                {
                    Items: null,
                    url: '/login',
                    Title: "로그인",
                    method: ()=>{}
                },
            ],
            // 로그인 때 메뉴
            mainItemsLogIn: [
                {
                    Items: null,
                    url: '/mypage',
                    Title: "마이페이지",
                    method: ()=>{}
                },

                {
                    Items: null,
                    url: '',
                    Title: "로그아웃",
                    method: ()=>{
                        this.setLogout()                 
                    }
                },
            ]
        }
    },
    methods:{
        ...mapMutations([
            'setLogout'
        ]),
        windowResize(){
            if(window.innerWidth <= 1263){
                this.isMobile = true;
            }
            else{
                this.isMobile = false;
            }
        }
    }
  }
</script>


<style scoped>
#menuBar{
    height: 100%;
}

.v-main__wrap header{
    /* z-index: 999 !important;
    position: sticky !important;
    top: 0; */
    background-color: #50829b !important;
}

.v-card{
    border-radius:  0 !important;
}

/* .v-main__wrap aside{
    z-index: 9999 !important;
} */

.closeProject{
    height: 0;
    padding:0;
    margin:0;
}
</style>