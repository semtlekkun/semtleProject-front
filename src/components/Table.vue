<template>
  <div>
    <v-row cols="12" class="mb-0" v-if="$route.name !== 'Home'">
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
      <v-col>
        <v-text-field
          class="pl-3 pr-3 mb-5"
          v-model="search"
          append-icon="mdi-file-search"
          label="Search"
          single-line="single-line"
          hide-details
          clearable="clearable"
          rounded
          color="#50829b"
          background-color="#c5d4dc"
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-col>
      <!--            </v-col>-->
    </v-row>

    <v-data-table
      :headers="headers"
      :items="contents"
      :items-per-page="perPage"
      :search="search"
      @click:row="rowClick"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    tableName: String,
    perPage: Number,
    contents: Array,
  },
  data() {
    return {
      filters: {
        search: "",
        added_by: "",
      },
      search: "",
      contentType: null,
      headers: [
        {
          text: "번호",
          align: "start",
          sortable: false,
          value: "number",
        },
        {
          text: "제목",
          value: "title",
        },
        {
          text: "작성자",
          value: "writer",
        },
        {
          text: "작성 일시",
          value: "date",
        },
      ],
      content: [],
    };
  },
  methods: {
    rowClick(row) {
      console.log(row);
      if (this.tableName === "qna") {
        // console.log("id: ", row._id)
        this.$router.push({
          name: "QnA",
          params: {
            id: row._id,
          },
        });
      } else if (this.tableName === "notice") {
        this.$router.push({
          name: "notice",
          params: {
            id: row._id,
          },
        });
      } else if (this.tableName === "project") {
        this.$router.push({
          name: "project",
          params: {
            id: row._id,
          },
        });
      } else if (this.tableName === "projectAnnounce") {
        this.$router.push({
          name: "projectAnnounceRead",
          params: { id: row._id },
        });
      }
    },
  },
};
</script>

<style>
tbody > tr{
  cursor: pointer;
}
.v-data-footer__select {
  display: none !important;
}
.v-data-footer{
  border-bottom: solid 2px;
  border-color: #a6bbc5;
}
.v-data-table__wrapper {
  border-top: solid 2px;
  border-color: #a6bbc5;
}
</style>