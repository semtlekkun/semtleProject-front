<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" lg="4" xl="3">
                <SubTitle :subTitleObj="subTitleObj"/>
            </v-col>

            <v-col cols="12" md="8" lg="8" xl="9">
                <v-row>
                    <v-col>
                        <v-text-field label="Question Title" v-model="title"/>
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
                        placeholder="Select your images"
                        prepend-icon="mdi-camera"
                        outlined
                        :show-size="1000"/>
                    </v-col>
                </v-row>

                <v-row class="justify-end">
                    <v-col cols="12" md="3" class="text-right">
                        <v-btn @click="writeConents" color="primary" block>write</v-btn>
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
                title:'',
                files: [],
                rules: [
                    value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
                ],
                contents:'',
                subTitleObj:{
                    title:"질문 작성",
                    contents:"질문 작성이다."
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
                let form = new FormData;
                form.append("title",this.title)
                form.append("contents", this.contents)
                form.append("image", this.files[0])
                // console.log(this.files[0])
                this.axios.post(`http://49.50.166.64/api/question`,
                form,
                {
                    headers:{
                        'token': sessionStorage.getItem('token')
                    }
                })
                .then(()=>{
                    // console.log(res)
                    this.$router.push({name:"QnAList"})
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
.projectTitle{
    border-bottom: 1px solid black;
}
</style>