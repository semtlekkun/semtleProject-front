<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" lg="4" xl="3">
                <SubTitle :subTitleObj="subTitleObj"/>
            </v-col>
            <v-col cols="12" md="8" lg="8" xl="9">
                <Table :perPage="10" tableName="notice" :contents="contents"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Table from '../components/Table.vue';
    import SubTitle from '../components/SubTitle.vue';

    export default {
        created() {
            this
                .axios
                .get("http://49.50.166.64/api/notice/list")
                .then(res => {
                    // console.log(res)
                    if (res.status === 200) {
                        this.contents = [];
                        res
                            .data
                            .noticeList
                            .forEach((item, index) => {
                                let obj = new Object;
                                obj.number = index + 1;
                                obj.title = item.title;
                                obj.writer = item.writer;
                                obj.date = item.date;
                                obj._id = item._id;
                                this
                                    .contents
                                    .push(obj);
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
            },
        components: {
            Table,
            SubTitle
        },
        data() {
            return {
                contents: [],
                subTitleObj: {
                    title: "공지사항",
                    contents: "공지사항이다."
                }
            }
        }
    }
</script>

<style scoped="scoped"></style>