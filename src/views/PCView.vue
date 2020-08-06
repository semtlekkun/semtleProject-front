<template>
    <v-container>
        <v-row>
            <v-col offset="4" cols="4">
                <router-link to="/" v-show="isMobile || $route.name === 'adminMenu'" >
                    <v-img width="200px" 
                    class="mx-auto"
                    src="../assets/logo.png"/>
                </router-link>
            </v-col>
        </v-row>

        <v-row id="stickyMenu" v-if="$route.name !== 'login'">
            <v-col>
                <PCMenuBar v-show="!isMobile &&  $route.name !== 'adminMenu'" />
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <router-view />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import PCMenuBar from '../components/MainMenuBar.vue';
export default {
    beforeMount(){
        this.windowResize();
        window.addEventListener('resize', this.windowResize);
    },
    components:{
        PCMenuBar,
    },
    data(){
        return{
            isMobile : false
        }
    },
    methods:{
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
#stickyMenu{
  position: sticky;
  top: 5px;
  width: 0px;
  z-index: 99999;
}
</style>