<template>
    <v-container>
        <v-row>
            <!-- 사진 -->
            <v-col cols="12" md="3">
                <UserImg />
            </v-col>

            <!-- 이름 -->
            <v-col cols="12" md="3">
                <v-card  height="200" class="pa-5" outlined="outlined" tile="tile">
                    <v-card-title>Name</v-card-title>
                    <v-card-text>{{myData.name}}</v-card-text>
                </v-card>
            </v-col>

            <!-- 전화번호 -->
            <v-col  cols="12" md="6">
                <PhoneNum />
                </v-col>

            <!-- 아이디 -->
            <v-col cols="12" md="6">
                <v-card height="200" class="pa-5" outlined="outlined" tile="tile">
                    <v-card-title>ID</v-card-title>
                    <v-card-text>{{myData.id}}</v-card-text>
                </v-card>
            </v-col>


            <!-- 비밀번호 -->
            <v-col cols="12" md="6">
                <Pw />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Pw from "../components/Password.vue"
    import UserImg from '../components/UserImg.vue'
    import PhoneNum from '../components/PhoneNum.vue'

    export default {
        data: () => ({
            dialog: false,
            myData: {
                name: 'testName',
                id: 'testID',
                img: 'testImg',
                phonNumber : 'testNumber'
            }
        }),
        components: {
            Pw,
            PhoneNum,
            UserImg
        },
        methods: {}
    }
</script>