<template>
    <v-footer absolute>
        <v-col cols="12">
            <v-row class="justify-center">
                <v-col cols="12" sm="6" md="4" lg="4" xl="3">
                    <h4>문의 : 셈틀꾼 (부)회장</h4>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl="3">
                    <h4>찾아오는 길 : 컴퓨터공학과 셈틀꾼</h4>
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="4" xl="3">
                    <h4>소속 : 금오공과대학교 컴퓨터공학과</h4>
                </v-col>
            </v-row>
        </v-col>

        <v-col class="text-center" cols="12">
            <h4 id="footerCopyright">&copy; Copyright {{ new Date().getFullYear() }} 셈틀꾼</h4>
        </v-col>
    </v-footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #footerCopyright{
        color: gray;
    }

    h4{
        color:#659ab5;
    }
</style>