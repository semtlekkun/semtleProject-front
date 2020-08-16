<template>
    <v-container>
        <v-row>
            <v-col cols="12" lg="3">
                <SubTitle :subTitleObj="subTitleObj"/>
            </v-col>
            <v-col cols="12" lg="9">
                <v-row>
                    <v-col
                    cols="12"
                    class="customTable text-centerZ">
                        <h2>{{contentsObj.title}}</h2>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row>
                    <v-col cols="3" sm="2" class="customTable text-center">작성자</v-col>
                    <v-col cols="9" sm="2" class="text-center">taese0ng</v-col>

                    <v-col cols="3" sm="2" class="customTable text-center">작성일</v-col>
                    <v-col cols="9" sm="2" class="text-center">2020-10-10</v-col>

                    <v-col cols="3" sm="2" class="customTable text-center">view</v-col>
                    <v-col cols="9" sm="2" class="text-center">00</v-col>
                </v-row>
                
                <v-divider></v-divider>
                
                <v-row>
                    <v-col
                    cols="3"
                    sm="2"
                    class="customTable text-center">
                        팀장
                    </v-col>
                    <v-col
                    cols="9"
                    sm="2"
                    class="text-center">
                        김태성
                    </v-col>

                    <v-col
                    cols="3"
                    sm="2"
                    class="customTable text-center">
                        개발기간
                    </v-col>
                    <v-col
                    cols="9"
                    sm="6"
                    class="text-center">
                        2020-12-24 ~ 2020-12-25
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row>
                    <v-col
                    cols="12"
                    md="2"
                    class="customTable text-center">
                        프로젝트 설명
                    </v-col>

                    <v-col>
                        <v-card-text class="text-center">
                            <VueMarkdown>{{contentsObj.contents}}</VueMarkdown>
                        </v-card-text>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row>
                    <v-col
                    cols="12"
                    md="2"
                    class="customTable text-center">
                        팀원
                    </v-col>
                    <v-col
                    cols="10"
                    class="text-center">
                        <v-row>
                            <v-col
                            v-for="member in members"
                            :key="member.index"
                            cols="12"
                            md="6">
                                <v-row align="center">
                                    <v-col
                                    cols="6">
                                        <v-img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                                        alt="test_img"
                                        />
                                    </v-col>

                                    <v-col
                                    cols="6">
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
        props:{
            contentsObj:Object
        },
        components:{
            VueMarkdown,
            SubTitle,
        },
        data(){
            return{
                members:["15김태성", "16김도현", "16박건웅","18이효진", "18전하영", "20김혜진", "20박수현"],
                test:'# test',
                subTitleObj: {title: "프로젝트", contents:"프로젝트이다."}
            }
        }
    }
</script>

<style scoped>

.customTable{
    /*기존
    background: rgb(56, 82, 103);
    color: white
    */

    background: #50829b;
    color: white;
    
}
</style>