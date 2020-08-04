<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" lg="4" xl="3">
                <SubTitle :subTitleObj="subTitleObj"/>
            </v-col>

            <v-col cols="12" md="8" lg="8" xl="9">
                <v-row>
                    <v-col>
                        <v-text-field label="Project Title"/>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                    cols="6">
                        <v-text-field label="Team Leader"/>
                    </v-col>
                    <v-col
                    cols="6">
                        <v-text-field label="Team Name"/>
                    </v-col>
                </v-row>

                <v-row class="align-center">
                    <v-col
                    cols="9">
                        <v-text-field 
                        v-model.number="memberNum" 
                        label="Team Member"/>
                    </v-col>
                    <v-col
                    cols="3">
                        <v-btn @click="addMember" lage color="primary" block>Add</v-btn>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                    cols="6"
                    v-for="member in members"
                    :key="member.index">
                        <v-row class="align-center">
                            <v-col cols="4">
                                {{member}}
                            </v-col>
                            <v-col
                            cols="5">
                                <v-btn @click="()=>delMember(member)">Del</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col
                    cols="12">
                        <v-textarea 
                        v-model="contents"
                        outlined
                        no-resize
                        height="300"
                        name="content-input" 
                        label="Contents"/>
                    </v-col>
                </v-row>
                
                <v-row>
                    <v-col>
                        <v-file-input
                        v-model="files"
                        :roles="rules"
                        accept="image/*"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        multiple
                        placeholder="Select your images"
                        prepend-icon="mdi-camera"
                        outlined
                        :show-size="1000"/>
                    </v-col>
                </v-row>

                <v-row class="justify-end">
                    <v-col cols="12" md="3" class="text-right">
                        <v-btn @click="writeConents" color="success" block>write</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SubTitle from '../components/SubTitle.vue';
    export default {
        components:{
            // VueMarkdown
            SubTitle
        },
        data(){
            return{
                members:[],
                memberNum:'',
                files: [],
                rules: [
                    value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
                ],
                contents:'',
                subTitleObj:{
                    title:"프로젝트 작성",
                    contents:"프로젝트 작성이다."
                }
            }
        },
        methods:{
            addMember(){
                this.members.push(this.memberNum);
                this.memberNum='';
            },
            delMember(member){
                this.members = this.members.filter(el => el!==member);
            },
            writeConents(){
                console.log(this.files);
            }
        }
    }
</script>

<style scoped>
.projectTitle{
    border-bottom: 1px solid black;
}
</style>