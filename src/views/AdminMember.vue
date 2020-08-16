<template>
    <v-container id="container">
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
                            <v-col cols="12">
                            <v-text-field
                                type="number" 
                                v-model="editedItem._id" 
                                label="학번"
                                :rules="[rules.required, rules.counter8]"
                                :disabled = "controll ? false : true"
                            ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                            <v-text-field 
                                v-model="editedItem.name" 
                                label="이름">
                            </v-text-field>
                            </v-col>
                            <!--
                            <v-col cols="12">
                            <v-text-field 
                                v-model="editedItem.phoneNum" 
                                label="전화번호"
                                type="">
                            </v-text-field>
                            </v-col> -->

                            <!-- 전화번호 입력값 테스트 -->
                            <v-col cols="3">
                            <v-text-field 
                                v-model="phonenum[0]" 
                                label="전화번호"
                                type="number"
                                :rules="[rules.counter3]"
                                counter
                                maxlength="3"
                                >
                            </v-text-field>
                            </v-col>

                            <v-col cols="1">
                                <p><br/>-</p>
                            </v-col>

                            <v-col cols="3">
                            <v-text-field 
                                v-model="phonenum[1]" 
                                label="전화번호"
                                type="number"
                                :rules="[rules.counter4]"
                                counter
                                maxlength="4"
                                 >
                            </v-text-field>
                            </v-col>

                            <v-col cols="1">
                                <p><br/>-</p>
                            </v-col>

                            <v-col cols="3">
                            <v-text-field 
                                v-model="phonenum[2]" 
                                label="전화번호"
                                type="number"
                                :rules="[rules.counter4]"
                                counter
                                maxlength="4" >
                            </v-text-field>
                            </v-col>
                            <!-- 전화번호 입력값 테스트 -->
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
            </v-data-table>
        </v-col>
        </v-row>
    </v-container>
</template>

<script>
    //import VueMarkdown from 'vue-markdown';
    //할일 : 전화번호 입력폼 맞추기
    //학번 : 8자리 맞추기
    //입력값 확인해서 해당하는 폼에 안맞으면 추가 X
    //입력값 확인해서 없으면 추가 X
    //세션값 사라지면 없다고 메세지
    //Notice 에 스낵바 컴퓨터 화면에서 상단으로 안올라가는 버그 수정

    //세션값이 없으면 표내용을 가져올수 없음 -> 아무데이터도 안보임.
    export default {
        components: {
            //VueMarkdown
        },
        data: () => ({
        //학번 입력값 확인

        //이름 입력값 확인
        //입력값 확인
        rules: {
            required: value => !!value || '필수 입력사항.',
            counter3: value => value.length <= 3 || '최대 3자리',
            counter4: value => value.length <= 4 || '최대 4자리',
            counter8: value => value.length === 8 || '학번은 8자리로 입력되어야 합니다.'
        },

        search:'',
        dialog: false,
        update : "2020.07.29",
        token :'',
        //데이터 추가 제어 변수
        canAdd : true,

        //전화번호 테스트
        phonenum : ['', '', ''],
        //학번 입력여부 제어 변수
        controll : true,

        //여기에 토큰 저장해서 넘김.
        head : '',
        headers: [
            {
            text: '학번',
            align: 'start',
            sortable: true,
            value: '_id',
            },
            { text: '이름', value: 'name' },
            { text: '전화번호', value: 'phoneNum' },
            { text: '사진', value: 'image', sortable: false },
            { text: '수정', value: 'actions', sortable: false },
        ],

        //선택된 값 저장 배열
        selected: [],

        //학생 정보를 저장할 배열
        //여기에 서버에서 불러온 정보를
        student: [],

        editedIndex: -1,

        //_id -> 학번
        editedItem: {
            _id: '',
            name: '',
            phoneNum: '',
            image: '',
        },
        defaultItem: {
            _id: '',
            name: '',
            phoneNum: '',
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
            //this.initialize()
        },

        //마운티드에서 부착.
        beforeMount() {
            this.check();
        },

        methods: {
        //-----
        //통신
        //조회
        //res.status === 200 인게 성공한경우.
        check() {
            //이게 참이면 관리자
            //토큰값 가져와서 저장한다음에 넘겨줌
           if(sessionStorage.getItem("admin")){
                this.getData();
           }
           //아니면 관리자 아님.
           else {
                //container -> display:none?
                console.log("관리자 아님")
           }
        },

        //-----통신 시작
        //가져오기,get
        getData(){
            let config = {
                headers : {
                    token : sessionStorage.getItem("token")
                }
            }

            this.axios.get("http://49.50.166.64/api/student/list", config)
            .then((res) => {
                console.log("성공");
                //console.log(res);

                //모든 학생정보를 가져와서 student 에 저장.
                //저장하면 알아서 다 뜸.
                this.student = res.data.students;
            })
            .catch((err) => {
                console.log(err);
            })
        },
        //수정 put
        modiDate(modidata){
            let config = {
                headers : {
                    "token" : sessionStorage.getItem("token")
                }
            }
            let data = {
                studentCode : modidata._id,
                phoneNum : modidata.phoneNum,
                name : modidata.name
            }
            
            this.axios.put("http://49.50.166.64/api/student/update",data, config)
            .then((res) => {
                console.log(res);
                console.log("put 성공");
            })
            .catch((err) => {
                console.log(err);
            })
        },
        //추가 post
        addData(adddata){
            console.log(adddata.phoneNum)
            let config = {
                headers : {
                    "token" : sessionStorage.getItem("token")
                }
            }
            let data = {
                studentCode : adddata._id,
                phoneNum : adddata.phoneNum,
                name : adddata.name
            }
            this.axios.post("http://49.50.166.64/api/student/input",data,config)
            .then((res) => {
                console.log(res);
                console.log("post 성공");
                this.canAdd = true;
                //res.status400 -> 중복 
            })
            .catch((err) => {
                console.log(err);
                console.log("에러코드 : " + err.response.status);
                console.log("중복된 학번");
                this.canAdd = false;
                this.student.pop();
            })
        },
        //삭제 delete
        delDate(id){
            this.axios.delete("http://49.50.166.64/api/student/delete",{
            headers: {
                    token: sessionStorage.getItem("token")
                },
                data: {
                    studentCode : id
                }
            })
            .then((res) => {
                console.log("delete 성공");
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
        },
        //-----통신 끝

        //수정 -> 해당 회원 삭제시 실제로 삭제가 이뤄지는 부분
        del(index) {
            //디비로 삭제 요청
            this.delDate(this.student[index]._id);

            //배열에서 삭제
            this.student.splice(index, 1)
        },

        //Action 에서 수정하는 부분
        editItem (item) {
            console.log("수정시작")
            this.controll = false;
            this.editedIndex = this.student.indexOf(item)

            //editedItem 에 기본 값으로 ''을 주고
            //assign 함수로 해당 위치 값을들 가져와서 assign으로 복사
            this.editedItem = Object.assign({}, item)

            //수정 버튼을 눌렀을때의 위치에서 전화 번호 값을 가지는 부분
            this.editedItem.phoneNum

            //전화번호를 '-' 로 잘라서 각 배열에 저장.
            this.phonenum = this.editedItem.phoneNum.split('-');

            //console.log("원본 데이터 : " + this.editedItem.phoneNum);
            //console.log("문자열 자른 결과 : " + this.phonenum);

            this.dialog = true
        },

        //Action 에서 삭제하는 부분
        deleteItem (item) {
            const index = this.student.indexOf(item)
            confirm('삭제하시겠습니까?') && this.del(index);
        },

        //수정, 삭제 할때 뜨는 창에서 닫는 부분
        close () {
            if(!this.controll){
                this.controll = !this.controll;
            }

            //닫을때 마다 전화번호값 초기화
            this.phonenum = ['', '', ''];
            this.dialog = false
            this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        //수정, 삭제 할때 뜨는 창에서 저장하는 부분
        //여기서 put, delete ㄱㄱ
        save () {

            //입력값 확인
            if(this.phonenum[0].length != 3 || this.phonenum[1].length != 4 || this.phonenum[2].length != 4 || this.editedItem.name.length === null || this.editedItem._id.length != 8) {
                    alert("입력폼 형식 오류");
                    console.log("입력폼 형식 오류")
            }

            //입력값이 확인된 경우
            else {
                //수정하는경우
                if (this.editedIndex > -1) {
                Object.assign(this.student[this.editedIndex], this.editedItem)
                this.student[this.editedIndex].phoneNum = this.phonenum[0] + "-" + this.phonenum[1] + "-" + this.phonenum[2]
                //put
                this.modiDate(this.student[this.editedIndex]);
                alert("수정완료");
                console.log("수정완료");
                }
                
                //추가하는 경우
                else {
                    this.editedItem.phoneNum = this.phonenum[0] + "-" + this.phonenum[1] + "-" + this.phonenum[2];
                    this.student.push(this.editedItem)
                    const index = this.student.indexOf(this.editedItem)
                    //post
                    this.addData(this.student[index]);
                    alert("추가완료");
                    console.log("추가완료");
                }
            }
            this.close()
        },
        },
    }
</script>