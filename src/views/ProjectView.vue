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
                            <h2 cols="9">{{this.Project.projectTitle}}</h2>

                            <v-col cols="3" class="py-0">
                                <v-btn
                                    :href="link"
                                    target="_blank"
                                    rounded="rounded"
                                    depressed="depressed"
                                    class="customBtn">Github</v-btn>
                            </v-col>
                        </v-row>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" sm="2" class="customTable text-center">작성자</v-col>
                    <v-col cols="9" sm="2" class="text-center">{{this.Project.writer}}</v-col>

                    <v-col cols="3" sm="2" class="customTable text-center">작성일</v-col>
                    <v-col cols="9" sm="2" class="text-center">{{this.Project.date}}</v-col>

                    <v-col cols="3" sm="2" class="customTable text-center">view</v-col>
                    <v-col cols="9" sm="2" class="text-center">{{this.Project.view}}</v-col>
                </v-row>

                <v-row>
                    <v-col cols="3" sm="2" class="customTable text-center">
                        팀장
                    </v-col>
                    <v-col cols="9" sm="2" class="text-center">
                        {{this.Project.teamLeaderCode}}
                    </v-col>

                    <v-col cols="3" sm="2" class="customTable text-center">
                        개발기간
                    </v-col>
                    <v-col cols="9" sm="6" class="text-center">
                        {{this.Project.date}}
                        ~
                        {{this.Project.projectEndDate}}
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12" md="2" class="customTable text-center">
                        프로젝트 설명
                    </v-col>

                    <v-col>
                        <v-card-text class="text-center">
                            <VueMarkdown :source="this.Project.contents"></VueMarkdown>

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
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                                            alt="test_img"/>
                                    </v-col>

                                    <v-col cols="6">
                                        {{member}}
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
        components: {
            VueMarkdown,
            SubTitle
        },
        data() {
            return {
                Project: "",
                members: [],
                link:"",
                test: '# test',
                subTitleObj: {
                    title: "프로젝트",
                    contents: "프로젝트이다."
                }
            }
        },
        methods: {
            goLinkEvent(){
                console.log("Why not");
            }
        },
        beforeCreate() {
            this
                .axios
                .get("http://49.50.166.64/api/pf/detail/5f35616dfdd21421cc3a8f76", {})
                .then((res) => {
                    // handle success
                    this.Project = res.data.portfolio[0],
                    this.members = this.Project.students,
                    this.link = this.Project.link
                })
                .catch((err) => {
                    // handle error
                    console.log(err);
                })
        }
    }
</script>

<style scoped="scoped">

    .customTable {
        background: rgb(56, 82, 103);
        color: white;
    }
</style>