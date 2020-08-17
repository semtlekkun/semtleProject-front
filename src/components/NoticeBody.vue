<template>
  <v-row>
    <v-col cols="12">
      <VueMarkDown :source="noticeBody.mdText"></VueMarkDown>
      <v-img :src="imageURL" alt="Lena" max-width="960px" />
    </v-col>
  </v-row>
</template>

<script>
import VueMarkDown from "vue-markdown";
export default {
  data() {
    return {
      imageURL: "",
    };
  },
  created() {
    this.initImage();
  },
  mounted() {
    this.initImage();
  },
  props: {
    noticeBody: {
      type: Object,
      required: true,
    },
  },
  components: {
    VueMarkDown,
  },
  methods: {
    initImage() {
      let id = this.$route.params.id;
      this.axios.get(`http://49.50.166.64/api/notice/${id}`).then((res) => {
        if (res.status === 200) {
          this.imageURL =
            "http://49.50.166.64/api/notice/" + res.data.notice.image;
        }
      });
    },
  },
};
</script>