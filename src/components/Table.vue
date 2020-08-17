<template>
    <div>
        <v-row cols="12" class="mb-0">
<!--        
        콤보박스 이용 항목 별 검색 가능 기능->추후 업뎃    
            <v-col cols="3">
                <v-select
                    :items="['전체','제목', '작성자', '작성 일시']"
                    label="검색"
                    v-model="contentType"></v-select>
            </v-col>
            <v-col cols="9" class="p-8">-->
                <!-- 검색 -->
                <v-text-field
                    v-if="$route.name !== 'Home'"
                    class="pl-3 mb-5"
                    v-model="search"
                    append-icon="mdi-file-search"
                    label="Search"
                    single-line="single-line"
                    hide-details
                    clearable="clearable"></v-text-field>
                <v-spacer></v-spacer>
<!--            </v-col>-->
        </v-row>

        <v-data-table
            :headers="headers"
            :items="contents"
            :items-per-page="perPage"
            :search="search"
            class="elevation-1"
            @click:row="rowClick">
            </v-data-table>
    </div>

</template>

<script>
    import {Home} from '@/views/Home'
    export default {
        props: {
            tableName: String,
            perPage: Number,
            contents: Array
        },
        routes: [
            {
                path: '/',
                name: 'Home',
                component: Home
            }
        ],
        data() {
            return {
                filters:{
                    search:'',
                    added_by:''
                },
                search: '',
                contentType: null,
                headers: [
                    {
                        text: '번호',
                        align: 'start',
                        sortable: false,
                        value: 'number'
                    }, {
                        text: '제목',
                        value: 'title'
                    }, {
                        text: '작성자',
                        value: 'writer'
                    }, {
                        text: '작성 일시',
                        value: 'date'
                    }
                ],
                content: []
            }
        },
        methods: {
            rowClick(row) {
                console.log(row)
                if (this.tableName === 'qna') {
                    // console.log("id: ", row._id)
                    this
                        .$router
                        .push({
                            name: 'QnA',
                            params: {
                                id: row._id
                            }
                        })
                } else if (this.tableName === 'notice') {
                    this
                        .$router
                        .push({
                            name: "notice",
                            params: {
                                id: row._id
                            }
                        })
                } else if (this.tableName === 'project') {
                    this
                        .$router
                        .push({
                            name: "project",
                            params: {
                                id: row._id
                            }
                        })
                }
                else if(this.tableName === 'projectAnnounce'){
                    this.$router.push({name:"projectAnnounceRead", params:{id:row._id}})
                }
            }
        },
        computed: {
            filteredItems() {
                return this
                    .content
                    .filter((i) => {
                        return !this.contentType || (i.type === this.contentType);
                    })
            }
        }
    }
</script>

<style>
    .v-data-footer__select {
        display: none !important;
    }
</style>