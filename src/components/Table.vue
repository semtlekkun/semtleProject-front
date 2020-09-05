<template>
  <div>
    <v-row cols="12" class="mb-0" v-if="$route.name !== 'Home'">
      <!-- 검색 -->
      <v-col>
        <v-text-field
          class="px-3 mb-5"
          v-model="search"
          append-icon="mdi-file-search"
          label="검색"
          single-line="single-line"
          hide-details
          clearable="clearable"
          rounded
          color="#50829b"
          background-color="#c5d4dc"
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-col>
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
          align: "center",
          sortable: false,
          value: "number",
          width: "60px",
        },
        {
          text: "제목",
          align: "start",
          value: "title",
        },
        {
          text: "작성자",
          align: "center",
          value: "writer",
          width: "120px",
        },
        {
          text: "작성 일시",
          align: "center",
          value: "date",
          width: "140px",
        },
      ],
      content: [],
    };
  },
  methods: {
    rowClick(row) {
      if (this.tableName === "qna") {
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