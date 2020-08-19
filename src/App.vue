<template>
    <v-app>
        <Intro v-show="isIntro" :functions="switchScreen"/>
        <v-main v-show="!isIntro">
            <SideBar v-if="isMobile" :loginStatus="getLogin"/>
            <v-container>
                <!-- <v-row class="mt-10" v-show="isMobile || $route.name === 'adminMenu'">
                <v-col offset="4" cols="4"> <router-link to="/"> <v-img width="200px"
                class="mx-auto" src="./assets/logo.png" /> </router-link> </v-col> </v-row> -->

                <v-row
                    v-show="isMobile || $route.name === 'adminMenu'"
                    class="mt-5"
                    :id="!isMobile && 'stickyMenu'"
                    v-if="$route.name !== 'login'">
                    <v-col offset-sm="3" sm="6" xl="6" offset-xl="3">
                        <router-link to="/">
                            <v-img class="mx-auto" src="./assets/logo.png"/>
                        </router-link>
                    </v-col>
                </v-row>

                <v-row
                    v-show="!isMobile &&  $route.name !== 'adminMenu'"
                    id="stickyMenu"
                    v-if="$route.name !== 'login'">
                    <v-col>
                        <PCMenuBar/>
                    </v-col>
                </v-row>

                <router-view/>
                <!-- <MobileView v-if="isMobile" :loginStatus="getLogin" /> <PCView
                v-if="!isMobile" /> -->
                <TopBtn v-show="!isMobile" v-if="$route.name !== 'login'"/>
                <AdminBtn
                    v-if="$route.name === 'Home'"
                    :class="getAdmin ? 'adminBbtn': 'notAdminBtn'"/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import TopBtn from "./components/TopBtn.vue";
    import AdminBtn from "./components/AdminBtn.vue";
    // import PCView from "./views/PCView.vue"; import MobileView from
    // "./views/MobileView.vue";
    import Intro from "./views/Intro.vue";
    import {mapMutations, mapGetters} from "vuex";
    import SideBar from './components/SideBar.vue';
    import PCMenuBar from "./components/MainMenuBar.vue";

    export default {
        name: "App",
        computed: {
            ...mapGetters(["getAdmin", "getLogin"])
        },
        beforeMount() {
            this.windowResize();
            window.addEventListener("resize", this.windowResize);
            if (sessionStorage.getItem("isIntro") === "false") {
                this.isIntro = false;
            }
        },
        created() {
            if (sessionStorage.getItem("token") !== null) {
                this.setLogin(true);
            } else {
                this.setLogin(false);
            }
            if (sessionStorage.getItem("admin") === "true") {
                this.setAdmin(true);
            } else {
                this.setAdmin(false);
            }
        },

        components: {
            TopBtn,
            // MobileView,
            AdminBtn,
            // PCView,
            Intro,
            SideBar,
            PCMenuBar
        },

        data: () => ({isMobile: false, isLogin: false, isIntro: true}),

        methods: {
            ...mapMutations(["setLogin", "setAdmin"]),
            switchScreen() {
                this.isIntro = false;
                sessionStorage.setItem("isIntro", this.isIntro);
            },
            windowResize() {
                if (window.innerWidth <= 1263) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            }
        }
    };
</script>

<style>

    @font-face {
        font-family: 'NEXON Lv1 Gothic OTF Light';
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff") format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'HangeulNuri-Bold';
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/HangeulNuri-Bold.woff") format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        text-decoration: none;
        font-family: 'NEXON Lv1 Gothic OTF Light';
    }

    h1{
        font-family: 'HangeulNuri-Bold';
    }

    .customBtn {
        background-color: #50829b !important;
        color: white !important;
        font-weight: bold;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .adminBtn {
        display: block;
    }

    .notAdminBtn {
        display: none;
    }
    #stickyMenu {
        position: sticky;
        top: 5px;
        width: 0;
        z-index: 10;
    }
</style>