<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" lg="4" xl="3">
                <SubTitle :subTitleObj="subTitleObj"/>
            </v-col>
            <v-col cols="12" md="8" lg="8" xl="9">
                <v-row class="text-right">
                    <v-col>
                        <router-link :to="{name:'projectInput'}">
                            <v-btn rounded depressed class="customBtn">글쓰기</v-btn>
                        </router-link>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <Table :perPage="10"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Table from '../components/Table.vue';
import SubTitle from '../components/SubTitle.vue';
    export default {
        components:{
            Table,
            SubTitle
        },
        data(){
            return{
                subTitleObj:{
                    title:"프로젝트 목록",
                    contents:"프로젝트 목록이다."
                }
            }
        }
    }
</script>

<style scoped>

</style>