<template>
  <div id="projectWrite">
    <v-container style="margin-top: 4rem; margin-bottom: 4rem">
      <v-row>
        <v-col cols="12" md="4" lg="4" xl="3">
            <SubTitle :subTitleObj="subTitleObj"/>
        </v-col>
        <v-col>
          <v-card>
            <v-alert outlined color="#226db2">
              <v-form>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="제목" required v-model="title"></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <v-text-field label="모집인원" required v-model="recruitment"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="endDate"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field v-model="endDate" label="마감일" readonly v-on="on"></v-text-field>
                      </template>

                      <v-date-picker v-model="endDate" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="$refs.menu.save(endDate)">확인</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-textarea v-model="contents" rows="7" auto-grow outlined label="내용"></v-textarea>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" class="text-right">
                    <v-btn block color="primary" @click="confirmAnnounce">완료</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-alert>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SubTitle from '../components/SubTitle.vue';
export default {
  components:{
    SubTitle
  },
  data(){
    return{
      title:null,
      menu:null,
      endDate:null,
      contents:"",
      recruitment:null,
      subTitleObj:{
          title:"프로젝트 공고 작성",
          contents:"프로젝트 공고 작성이다."
      }
    }
  },
  methods:{
    confirmAnnounce(){
      this.axios.post('http://49.50.166.64:/api/recruit',{
        endDate:this.endDate,
        title: this.title,
        recruitment: Number(this.recruitment),
        contents: this.contents
      },{
        headers:{
          'token' : sessionStorage.getItem('token')
        }
      })
      .then(res=>{
        console.log(res);
        if(res.status === 200){
          this.$router.push({name:'projectAnnounceList'})
        }
      })
    }
  }
};
</script>

<style>
.v-input__prepend-outer {
  display: none !important;
}
</style>