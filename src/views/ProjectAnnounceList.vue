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
                        <Table :perPage="10"
                        tableName="projectAnnounce"
                        :contents="contents"/>
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
        created(){
            this.axios.get('http://49.50.166.64/api/recruit/list')
            .then(res=>{
                console.log(res)
                if(res.status === 200){
                    res.data.recruitList.forEach((item,index)=>{
                        let obj = new Object;
                        obj.number = index+1;
                        obj.title = item.title;
                        obj.writer = item.writer;
                        obj.date = item.endDate;
                        obj._id = item._id;
                        this.contents.push(obj)
                    })
                }
            })
            .catch(err=>{
                console.log(err)
            })
        },
        components:{
            Table,
            SubTitle
        },
        data(){
            return{
                contents:[],
                subTitleObj:{
                    title:"프로젝트 공고",
                    contents:"프로젝트 공고이다."
                }
            }
        }
    }
</script>

<style scoped>

</style>