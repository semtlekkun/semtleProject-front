<template>
    <v-main>
        <v-row>
            <v-col
            cols="">
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
            cols="10">
                <v-text-field 
                v-model.number="memberNum" 
                label="Team Member"/>
            </v-col>
            <v-col
            cols="2">
                <v-btn @click="addMember" lage color="primary" block>Add</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col
            cols="6"
            v-for="member in members"
            :key="member.index">
                <v-row class="align-center">
                    <v-col
                    cols="1">
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

        <v-row class="justify-center">
            <v-col cols="6" class="text-center">
                <v-btn @click="writeConents" color="success" block>write</v-btn>
            </v-col>
        </v-row>
    </v-main>
</template>

<script>
    export default {
        components:{
            // VueMarkdown
        },
        data(){
            return{
                members:[],
                memberNum:'',
                files: [],
                rules: [
                    value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
                ],
                contents:''
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