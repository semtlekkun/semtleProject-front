<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="3">
                <SubTitle :subTitleObj="subTitleObj"/>
            </v-col>
            <v-col cols="12" lg="9">
                <v-row>
                    <v-col cols="12" class="customTable text-centerZ">
                        <v-row class="pl-5">
                            <v-col cols="6">
                                <h2>{{title}}</h2>
                            </v-col>
                            <v-col cols="3" class="py-0 text-right">
                                <v-btn
                                    :href="link"
                                    target="_blank"
                                    rounded="rounded"
                                    depressed="depressed"
                                    class="customBtn">Github</v-btn>
                            </v-col>
                            <v-col cols="3" class="py-0 text-right">
                                <v-btn v-show="admin" color="error" @click="deleteProject">삭제</v-btn>
                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" sm="2" class="customTable text-center">작성자</v-col>
                    <v-col cols="9" sm="2" class="text-center">{{writer}}</v-col>

                    <v-col cols="3" sm="2" class="customTable text-center">작성일</v-col>
                    <v-col cols="9" sm="2" class="text-center">{{date}}</v-col>

                    <v-col cols="3" sm="2" class="customTable text-center">view</v-col>
                    <v-col cols="9" sm="2" class="text-center">{{view}}</v-col>
                </v-row>

                <v-row>
                    <v-col cols="3" sm="2" class="customTable text-center">
                        팀장
                    </v-col>
                    <v-col cols="9" sm="2" class="text-center">
                        {{leaderNick}}
                    </v-col>

                    <v-col cols="3" sm="2" class="customTable text-center">
                        개발기간
                    </v-col>
                    <v-col cols="9" sm="6" class="text-center">
                        {{startDate}}
                        ~
                        {{endDate}}
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="2" class="customTable text-center">
                        팀명
                    </v-col>
                    <v-col class="text-center">
                        {{teamName}}
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="2" class="customTable text-center">
                        프로젝트 설명
                    </v-col>

                    <v-col>
                        <v-card-text class="text-center">
                            <VueMarkdown :source="contents"></VueMarkdown>

                        </v-card-text>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="2" class="customTable text-center">
                        팀원
                    </v-col>
                    <v-col cols="10" class="text-center">
                        <v-row>
                            <v-col v-for="member in members" :key="member.index" cols="12" md="6">
                                <v-row align="center">
                                    <v-col cols="6">
                                        <v-img
                                            :src="member.image"
                                            alt="test_img"/>
                                    </v-col>

                                    <v-col cols="6">
                                        {{member.nick}}
                                    </v-col>
                                </v-row>
                            </v-col>

                        </v-row>

                    </v-col>

                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    import SubTitle from '../components/SubTitle.vue';

    export default {
        created() {
            this.admin = JSON.parse(sessionStorage.getItem("admin"));
            this.projectID = this.$route.params.id
            this.axios.get(`http://49.50.166.64/api/pf/${this.projectID}`)
                .then((res) => {
                    // handle success
                    console.log(res)
                    this.title = res.data.project.projectTitle;
                    this.startDate = res.data.project.projectStartDate;
                    this.endDate = res.data.project.projectEndDate;
                    this.contents = res.data.project.contents;
                    this.leaderNick = res.data.project.leaderNick;
                    this.writer = res.data.project.writer;
                    this.view = res.data.project.view;
                    this.date = res.data.project.date;
                    this.link = res.data.project.link;
                    this.teamName = res.data.project.projectTeamName;
                    res.data.studentInfo.forEach(student=>{
                        this.members.push(student)
                    });
                })
                .catch((err) => {
                    // handle error
                    console.log(err);
                })
        },
        components: {
            VueMarkdown,
            SubTitle
        },
        data() {
            return {
                projectID:"",
                admin:false,
                title:"",
                startDate:"",
                endDate:"",
                contents:"",
                leaderNick:"",
                writer:"",
                view:"",
                date:"",
                members: [],
                link:"",
                teamName:"",
                subTitleObj: {
                    title: "프로젝트",
                    contents: "프로젝트이다."
                }
            }
        },
        methods: {
            goLinkEvent(){
                console.log("Why not");
            },
            deleteProject(){
                this.axios.delete(`http://49.50.166.64/api/pf/${this.projectID}`,{
                headers:{
                    'token': sessionStorage.getItem('token')
                    }
                },{})
                .then(res=>{
                    if(res.status === 200){
                        this.$router.push({name:'projectList'})
                    }
                })
            }
        },
    }
</script>

<style scoped="scoped">

    .customTable {
        background: rgb(56, 82, 103);
        color: white;
    }
</style>