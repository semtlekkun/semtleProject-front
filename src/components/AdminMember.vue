<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <nav>
          <v-toolbar app>
            <v-toolbar-title class="text-uppercase grey--text">
              <span>[임시]동아리 아이콘, 상단바 들어갈 공간</span>
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn color="blue">
                <span>[임시]버튼</span>
            </v-btn>
          </v-toolbar>
        </nav>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="student"
          :search="search"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar color="white">
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
          ></v-text-field>

              <v-spacer></v-spacer>

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

                  <!-- 회원 추가 버튼 생성시 뜨는 창 -->
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
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.image" label="사진"></v-text-field>
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
          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>



<script>
  export default {
    //페이지 들어와서 바로 받아서
    data: () => ({
      search:'',
      dialog: false,
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
        { text: '사진', value: 'image' },
        { text: '수정', value: 'actions', sortable: false },
      ],
      student: [],
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
    //여기서 받아옴
    created () {
      this.initialize();
    },
    destroyed() {
      
    },

    methods: {

      //표에 들어갈 내용 초기화.
      initialize () {
        this.student = [
          {
            studentCode: 20160140,
            name:"김도현",
            phoneNum: "01077935630",
            password: "1234",
          },
          {
            studentCode: 20141230,
            name:"이름1",
            phoneNum: "01077935630",
            password: "1234",
          },
        ]
      },

      //Action 에서 수정하는 부분
      editItem (item) {
        this.editedIndex = this.student.indexOf(item)
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