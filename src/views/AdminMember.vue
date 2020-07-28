<template>
    <v-container>

        <v-row>
        <v-col cols="12">
            <!-- :items="student" = 테이블 내용을 student(배열)로 채움. -->
            <v-data-table
            item-key="name"
            show-select
            v-model="selected"
            :headers="headers"
            :items="student"
            :search="search"
            sort-by="calories"
            class="elevation-1"
            >
            <template v-slot:top>
                <v-toolbar flat color="white">
                <v-toolbar-title>회원 명단 관리</v-toolbar-title>
                <v-divider
                    class="mx-4"
                    inset
                    vertical
                ></v-divider>
                
                <v-spacer></v-spacer>

                <!-- 검색 -->
                <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                clearable
            ></v-text-field>

                <v-spacer></v-spacer>

                <!-- 회원 추가 버튼 + 다이얼로그 -->
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                    >회원 추가</v-btn>
                    </template>
                    <v-card>
                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <!-- 회원 추가 버튼 클릭시 뜨는 내용 -->
                    <v-card-text>
                        <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.studentCode" label="학번"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.name" label="이름"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.phoneNum" label="전화번호"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="4">
                            <v-text-field v-model="editedItem.password" label="비밀번호"></v-text-field>
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="close">취소</v-btn>
                        <v-btn color="blue darken-1" text @click="save">확인</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
                </v-toolbar>
            </template>

            <!-- 학번 -->
            <template v-slot:item.studentCode="{ item }">
                <VueMarkdown style="margin-top:10px">{{item.studentCode}}</VueMarkdown>
            </template>

            <!-- 이름 -->
            <template v-slot:item.name="{ item }">
                <VueMarkdown style="margin-top:10px">{{item.name}}</VueMarkdown>
            </template>

            <!-- 전화번호 -->
            <template v-slot:item.phoneNum="{ item }">
                <VueMarkdown style="margin-top:10px">{{item.phoneNum}}</VueMarkdown>
            </template>

            <!-- 비밀번호 -->
            <template v-slot:item.password="{ item }">
               <VueMarkdown style="margin-top:10px">{{item.password}}</VueMarkdown>
            </template>

            <!-- 수정, 이미지는 정렬 불가능 -->
            <!-- 수정기능 -->
            <template v-slot:item.actions="{ item }">
                <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
                >
                mdi-pencil
                </v-icon>
                <v-icon
                small
                @click="deleteItem(item)"
                >
                mdi-delete
                </v-icon>
            </template>

            <!-- 유저 이미지 -->
            <!-- 이미지가 없으면 assets 에 저장된 sample 이미지로 대체 -->
            <template v-slot:item.image="{ item }">
                <div v-if="item.image===''">
                    <v-img
                        style="border-radius:30px"
                        :title="item.name"
                        alt="User Image"
                        :src="require('../assets/sample.png')"
                        width="30px"
                        height="30px"
                    ></v-img>
                </div>
                <div v-else>
                    <v-img 
                        style="border-radius:30px"
                        :title="item.name"
                        alt="User Image"
                        :src="item.image"
                        width="30px"
                        height="30px"
                    ></v-img>
                </div>
            </template>

            <!-- 테스트용// 데이터 없는 경우 테스트 데이터 생성  -->
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
            </v-data-table>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import VueMarkdown from 'vue-markdown';
    export default {
        components: {
            VueMarkdown
        },
        data: () => ({
        search:'',
        dialog: false,
        update : "2020.07.29",
        headers: [
            {
            text: '학번',
            align: 'start',
            sortable: true,
            value: 'studentCode',
            },
            { text: '이름', value: 'name' },
            { text: '전화번호', value: 'phoneNum' },
            { text: '비밀번호', value: 'password' },
            { text: '사진', value: 'image', sortable: false },
            { text: '수정', value: 'actions', sortable: false },
        ],

        //선택된 값 저장 배열
        selected: [],
        //학생 정보를 저장할 배열
        student: [],
        //검색 범위
        slots: [
          "학번",
          "이름",
          "전화번호",
          "비밀번호",
        ],

        editedIndex: -1,
        editedItem: {
            studentCode: '',
            name: '',
            phoneNum: '',
            password: '',
            image: '',
        },
        defaultItem: {
            studentCode: '',
            name: '',
            phoneNum: '',
            password: '',
            image: '',
        },
        }),

        computed: {
        formTitle () {
            return this.editedIndex === -1 ? '새 회원 등록' : '회원 정보 수정'
        },
        },

        watch: {
        dialog (val) {
            val || this.close()
        },
        },

        created () {
        this.initialize()
        },

        methods: {
        //표에 들어갈 내용 초기화.
        initialize () {

            //학생 배열에 들어갈 정보값
            this.student = [
            {
                studentCode: 20160140,
                name:"김도현",
                phoneNum: "01077935630",
                password: "1234",
                //테스트
                image: "https://cdn.vuetifyjs.com/images/parallax/material2.jpg",
            },
            {
                studentCode: 20141230,
                name:"이름1",
                phoneNum: "01077935630",
                password: "1234",
                image: '',
            },
            ]
        },

        //Action 에서 수정하는 부분
        editItem (item) {
            this.editedIndex = this.student.indexOf(item)

            //editedItem 에 기본 값으로 ''을 주고
            //assign 함수로 해당 위치 값을들 가져와서 assign으로 복사
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        //Action 에서 삭제하는 부분
        deleteItem (item) {
            const index = this.student.indexOf(item)
            confirm('삭제하시겠습니까?') && this.student.splice(index, 1)
        },

        //수정, 삭제 할때 뜨는 창에서 닫는 부분
        close () {
            this.dialog = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        //수정, 삭제 할때 뜨는 창에서 저장하는 부분
        save () {
            if (this.editedIndex > -1) {
            Object.assign(this.student[this.editedIndex], this.editedItem)
            } else {
            this.student.push(this.editedItem)
            }
            this.close()
        },
        },
    }
</script>