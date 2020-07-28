<template>
    <v-container>
        <v-row>
            <v-col
            cols="12"
            class="success">
                <h2 class="projectTitle">제목</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="4">
                <h3>작성자: ㅇㅇㅇ</h3>
            </v-col>
            <v-col
            cols="6">
                <h3>작성일: 2020-10-10</h3>
            </v-col>
            <v-col
            cols="2">
                <h3>view:00</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="2" 
            class="success text-center">
                Title : 
            </v-col>
            <v-col
            cols="10"
            class="text-center">
                title
            </v-col>
        </v-row>

        <v-row>
            <v-col
            cols="2"
            class="success text-center">
                팀장:
            </v-col>
            <v-col
            cols="10"
            md="4"
            class="text-center">
                김태성
            </v-col>

            <v-col
            cols="2"
            class="success text-center">
                개발기간
            </v-col>
            <v-col
            cols="10"
            md="4"
            class="text-center">
                2020-12-24 ~ 2020-12-25
            </v-col>
        </v-row>

        <v-row>
            <v-col
            cols="12"
            md="2"
            class="success text-center">
                프로젝트 설명
            </v-col>

            <v-col>
                <v-card-text class="text-center">
                    <VueMarkdown>{{test}}</VueMarkdown>
                </v-card-text>
            </v-col>
        </v-row>

        <v-row>
            <v-col
            cols="12"
            md="2"
            class="success text-center">
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
                                src="https://lh3.googleusercontent.com/proxy/MmLJV8wA_BBcQ7FzVECT-xMpVC31ObsE8OTdYm8haNeBtU3rhfIQtQKf5PPQHh2A7rLn8VPpE7MVMBHyjkX83muYU9TeT0XioMwSR78wkr5ucohu6iii08-1RiH-x0FzWikztdTmqZP-QCmWZYdMaGl2nlnjShRdqRUSUpbfDx4jJwwTLRF0bMj5O4S0RJ1N3rNIDwyn233JHIDAbtKqByU4WnosqyAbDMGApxohP5Srxf3l3otFrWq8Ts32SkTlslfU5AUixUM6rAVe0-pXDpuje-SxQuW7gy4PNzeaiSoaCp07uCExg1HsvElzmOAjwg3LSUOHeqOvyqS-_JV1tSUFtw"
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
        
    </v-container>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    export default {
        components:{
            VueMarkdown
        },
        data(){
            return{
                members:["15김태성", "16김도현", "16박건웅","18이효진", "18전하영", "20김혜진", "20박수현"],
                test:'# test'
            }
        }
    }
</script>

<style scoped>
.projectTitle{
    border-bottom: 1px solid black;
}
</style>