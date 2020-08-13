<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" lg="4" xl="3">
                <SubTitle :subTitleObj="subTitleObj"/>
            </v-col>
            <v-col cols="12" md="8" lg="8" xl="9">
                <v-row class="text-right">
                    <v-col>
                        <router-link :to="{name:'QuestionInput'}">
                            <v-btn rounded depressed class="customBtn">글쓰기</v-btn>
                        </router-link>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <Table :perPage="10" tableName="qna"/>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Table from '../components/Table.vue';
import SubTitle from '../components/SubTitle.vue';
import {mapMutations} from 'vuex';

    export default {
        mounted(){
            this.axios.get('http://49.50.166.64/api/question')
            .then(res=>{
                console.log(res)
                if(res.status === 200){
                    this.setList(res)
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        components:{
            Table,
            SubTitle
        },
        data(){
            return{
                subTitleObj:{
                    title:"Q&A 목록",
                    contents:"질문 목록이다."
                }
            }
        },
        methods:{
            ...mapMutations(['setList'])
        }
    }
</script>

<style scoped>

</style>