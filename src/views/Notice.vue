<template>
  <v-container>
    <NoticeHeader :noticeHeader="noticeHeader" />

    <NoticeBody :noticeBody="noticeBody" />
  </v-container>
</template>

<script>
import NoticeHeader from "../components/NoticeHeader.vue";
import NoticeBody from "../components/NoticeBody.vue";

export default {
  mounted(){
    const noticeID = this.$route.params.id
    this.axios.get(`http://49.50.166.64/api/notice/${noticeID}`)
    .then(res=>{
      // console.log(res)
      this.noticeHeader = {
        title:res.data.notice.title,
        writerName:res.data.notice.writer,
        date: res.data.notice.date,
        views: res.data.notice.view
      }

      this.noticeBody = {
        mdText: res.data.notice.contents,
        imagePath: res.data.notice.image
      }
    })
    .catch(err=>{
      console.log(err)
    })
  },
  components: {
    NoticeHeader,
    NoticeBody,
  },
  data() {
    return {
      noticeHeader: {
        title: "",
        writerName: "",
        date: "",
        views: 0,
      },
      noticeBody: {
        mdText: "",
        imagePath: "",
      },
    };
  },
};
</script>