<template>
    <v-data-table
        :headers="getHeaders"
        :items="getList"
        :items-per-page="perPage"
        class="elevation-1"
        @click:row="rowClick"
    ></v-data-table>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        computed:{
            ...mapGetters(['getList', 'getHeaders'])
        },
        props:{
            tableName:String,
            perPage:Number
        },
        data () {
            return {
                headers: [
                    {
                        text: '번호',
                        align: 'start',
                        sortable: false,
                        value: 'number',
                    },
                    { text: '제목', value: 'title' },
                    { text: '작성자', value: 'writer' },
                    { text: '작성 일시', value: 'date' },
                ],
                contents: [
                    {
                        number: '1',
                        title: '파이썬 여름 방학 특강 안내',
                        writer: '김태호',
                        date: '2020 / 06 / 30'
                    },
                    {
                        number: '2',
                        title: 'C언어 여름 방학 특강 안내',
                        writer: '이정철',
                        date: '2020 / 06 / 30'
                    },
                    {
                        number: '3',
                        title: '웹 프로그래밍 여름방학 특강 안내',
                        writer: '이정철',
                        date: '2020 / 06 / 30'
                    },
                    {
                        number: '4',
                        title: '종강 파티 안내 및 장소 투표',
                        writer: '김태호',
                        date: '2020 / 06 / 24'
                    },
                    {
                        number: '5',
                        title: '셈틀 프로젝트 참가자 모집',
                        writer: '이정철',
                        date: '2020 / 06 / 24'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },
                    {
                        number: '6',
                        title: '2020-1학기 멘토링 종료',
                        writer: '김태호',
                        date: '2020 / 06 / 10'
                    },

                ],
            }
        },
        methods:{
            rowClick(row){
                console.log(row)
                if(this.tableName === 'qna'){
                    this.$router.push({name:'QnA', params:{id:row.id}})
                }
            }
        }
    }
</script>

<style>
.v-data-footer__select{
    display: none !important;
}
</style>