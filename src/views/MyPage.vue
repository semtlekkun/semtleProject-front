<!--
pflist 없을 경우 null로 감 처리해야함

res.data.student.pfList -> 순회해서 출력
-->

<template>
    <v-container>
        <v-row cols="12">
            <h1 class="m-2 ml-2">프로필 수정</h1>
        </v-row>
        <v-row>
            <!-- 사진 -->
            <v-col cols="12" md="6">
                <UserImg/>
                <br/>
                <MyPageNickName/>
            </v-col>
            <v-col cols="12" md="6">
                <PhoneNum/>
                <br/>
                <Pw/>
            </v-col>
        </v-row>
        <v-row cols="12">
            <v-col cols="12">
                <h1 class="mt-3 ml-2">나의 포트폴리오</h1>
            </v-col>
            <v-col cols="12">
                <Table cols="12"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Pw from "../components/Password.vue";
    import UserImg from "../components/UserImg.vue";
    import PhoneNum from "../components/PhoneNum.vue";
    import MyPageNickName from "../components/MyPageNickName.vue";
    import Table from "../components/Table.vue";

    export default {
        data: () => ({dialog: false}),
        components: {
            Pw,
            PhoneNum,
            UserImg,
            MyPageNickName,
            Table
        },
        created() {
            let config = {
                headers : {
                    token : sessionStorage.getItem("token")
                }
            }

            this
                .axios
                .get("http://49.50.166.64/api/mypage", config, {})
                .then(res => {
                    console.log(res.data.student.pfList)
                    // if (res.status === 200) {
                    //     this.contents = [];
                    //     res
                    //         .data
                    //         .noticeList
                    //         .forEach((item, index) => {
                    //             let obj = new Object;
                    //             obj.number = index + 1;
                    //             obj.title = item.title;
                    //             obj.writer = item.writer;
                    //             obj.date = item.date;
                    //             obj._id = item._id;
                    //             this
                    //                 .contents
                    //                 .push(obj);
                    //         })
                    // }
                })
                .catch(err => {
                    console.log(err)
                })
            }
    };
</script>