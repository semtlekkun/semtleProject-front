<template>
  <div id="projectWrite">
    <v-container class="px-0">
      <v-row>
        <v-col cols="12" lg="3">
          <SubTitle :subTitleObj="subTitleObj" />
        </v-col>
        <v-col cols="12" lg="9">
          <v-container class="px-0">
            <v-row>
              <v-col cols="12">
                <v-card>
                  <v-alert outlined color="#365164">
                    <v-form>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            label="공고 제목"
                            required
                            v-model="title"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            color="rgb(80, 130, 155)"
                            label="모집인원"
                            required
                            v-model="recruitment"
                            @keypress="checkNumber"
                            @keyup="checkHan"
                          ></v-text-field>
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
                              <v-text-field
                                color="rgb(80, 130, 155)"
                                v-model="endDate"
                                label="마감일"
                                readonly
                                v-on="on"
                              ></v-text-field>
                            </template>

                            <v-date-picker
                              color="rgb(80, 130, 155)"
                              v-model="endDate"
                              no-title
                              scrollable
                            >
                              <v-spacer></v-spacer>
                              <v-btn
                                dark
                                color="rgb(80, 130, 155)"
                                @click="temp(); $refs.menu.save(endDate)"
                              >확인</v-btn>
                            </v-date-picker>
                          </v-menu>
                        </v-col>
                      </v-row>

                      <v-row>
                        <v-col cols="12">
                          <v-textarea
                            color="rgb(80, 130, 155)"
                            v-model="contents"
                            outlined
                            no-resize
                            height="300"
                            name="content-input"
                            label="공고 내용을 입력하세요"
                          />
                        </v-col>
                      </v-row>

                      <v-row class="justify-end">
                        <v-col cols="12" md="3" class="text-right">
                          <v-btn
                            color="#50829b"
                            @click="confirmAnnounce"
                            class="white--text"
                            block
                          >작성 완료</v-btn>
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-alert>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="headline error">
              <p style="color:white !important;">Error</p>
            </v-card-title>
            <ul class="mt-5">
              <li v-for="(error,i) in errorMsg" :key="i">{{error}}</li>
            </ul>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" text @click="dialog = false">OK</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ipObj from "../key";
import SubTitle from "../components/SubTitle.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    SubTitle,
  },
  data() {
    return {
      title: null,
      menu: null,
      endDate: new Date().toISOString().substr(0, 10),
      contents: "",
      recruitment: null,
      subTitleObj: {
        title: "✍공고 작성",
        contents: "프로젝트 모집 공고를 작성하는 공간입니다.",
      },
      errorMsg: [],
      dialog: false,
    };
  },
  methods: {
    //날짜 확인 관련 예외 처리.
    temp() {
      //(잘못한 경우) 종료일자를 오늘 보다 더 앞으로 한 경우
      var todayDate = new Date().toISOString().substr(0, 10);
      if (this.endDate < todayDate) {
        this.endDate = new Date().toISOString().substr(0, 10);
        this.errorMsg.push("날짜 설정이 잘못 되었습니다.");
        this.dialog = true;
      }
    },
    checkNumber(e) {
      if (e.keyCode < 48 || e.keyCode > 57) {
        e.returnValue = false;
      }
    },
    checkHan(e) {
      e = e || window.e;
      var keyID = e.which ? e.which : e.keyCode;
      if (keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39) return;
      else e.target.value = e.target.value.replace(/[^0-9]/g, "");
    },
    confirmAnnounce() {
      this.errorMsg = [];
      if (this.title === null) {
        this.errorMsg.push("제목을 입력해주세요.");
      }

      if (this.contents === "") {
        this.errorMsg.push("내용을 입력해주세요.");
      }
      if (this.recruitment === null) {
        this.errorMsg.push("모집인원을 입력해주세요.");
      }

      if (this.errorMsg.length != 0) {
        var message = "";
        for (var idx = 0; idx < this.errorMsg.length; idx++) {
          message = message + this.errorMsg[idx] + "\n";
        }
        this.dialog = true;
      } else {
        this.axios
          .post(
            `${ipObj.ip}/api/recruit`,
            {
              endDate: this.endDate,
              title: this.title,
              recruitment: Number(this.recruitment),
              contents: this.contents,
            },
            {
              headers: {
                token: sessionStorage.getItem("token"),
              },
            }
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              alert("작성 완료");
              this.$router.push({
                name: "projectAnnounceList",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            if (err.response.status === 401) {
              alert("세션이 만료되어 홈 화면으로 이동합니다.");
              this.setLogout();
            }
          });
      }
    },
    ...mapMutations(["setLogout"]),
  },
};
</script>

<style>
.v-input__prepend-outer {
  display: none !important;
}

li {
  list-style: none;
}
</style>
