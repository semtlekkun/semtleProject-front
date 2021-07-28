<template>
  <div id="members">
    <v-container class="text-center">
      <div v-for="(cadre, i) in CadreList" :key="i">
        <div v-if="cadre[1][1].length !== 0">
          <h1 class="text-left my-5">{{ cadre[0] }}년 2학기</h1>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="(member, k) in cadre[1][1]"
              :key="k"
            >
              <v-card class="pa-10">
                <v-row justify="center">
                  <v-img
                    :src="imageURL + member.image"
                    min-height="250px"
                    max-height="250px"
                    max-width="250px"
                  />
                </v-row>
                <p class="position">
                  {{ member.language }}{{ member.position }}
                </p>
                <p class="number">{{ member.studentCode }}</p>
                <p class="name">{{ member.name }}</p>
                <p class="contents">{{ member.contents }}</p>
              </v-card>
            </v-col>
          </v-row>
          <v-divider class="my-10"></v-divider>
        </div>
        <div v-if="cadre[1][0].length !== 0">
          <h1 class="text-left my-5">{{ cadre[0] }}년 1학기</h1>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="(member, j) in cadre[1][0]"
              :key="j"
            >
              <v-card class="pa-10">
                <v-row justify="center">
                  <v-img
                    :src="imageURL + member.image"
                    min-height="250px"
                    max-height="250px"
                    max-width="250px"
                  />
                </v-row>

                <p class="position">
                  {{ member.language }}{{ member.position }}
                </p>
                <p class="number">{{ member.studentCode }}</p>
                <p class="name">{{ member.name }}</p>
                <p class="contents">{{ member.contents }}</p>
              </v-card>
            </v-col>
          </v-row>
          <v-divider class="my-10"></v-divider>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import ipObj from "../key";
import axios from "axios";
export default {
  data() {
    return {
      CadreList: [
        // 각 리스트에는 [0]:year-Number, [1]:[1학기(여름학기)-list, [2]2학기(겨울학기)-list] 가 담긴다
        [2017,
          [ 
            [ {position: "회장", studentCode: 20170000, name: "바보", contents: "바보아니다"},
              {position: "부회장", studentCode: 20171111, name: "올림픽", contents: "코리아화이팅"},
              {position: "멘토", studentCode: 20172222, language: "양궁", name: "김제덕", contents: "코리아화이팅"},
              {position: "멘토", studentCode: 20173333, language: "양궁", name: "안산", contents: "안산을 안산시홍보대사로"} ], 
            [ {position: "회장", studentCode: 20170000, name: "바보", contents: "바보아니다"},
              {position: "부회장", studentCode: 20171111, name: "올림픽", contents: "코리아화이팅"} ]
          ]
        ],
        [2018,
          [
            [ {position: "회장", studentCode: 20180000, name: "기기기", contents: "기기기가 회장"},
              {position: "부회장", studentCode: 20181111, name: "디디디", contents: "디디디가 부회장"},
              {position: "멘토", studentCode: 20182222, language: "악", name: "니니니", contents: "힘들다"},
              {position: "멘토", studentCode: 20183333, language: "옥", name: "리리리", contents: "난안힌듬데"} ], 
            [ {position: "회장", studentCode: 20180000, name: "기기기", contents: "기기기가 회장"},
              {position: "부회장", studentCode: 20181111, name: "디디디", contents: "디디디가 부회장"},
              {position: "멘토", studentCode: 20184444, language: "익", name: "미미미", contents: "휴"},
              {position: "멘토", studentCode: 20183333, language: "윽", name: "리리리", contents: "하"} ]
          ]
        ],
        [2019, 
          [
            [ {position: "회장", studentCode: 20190000, name: "가가가", contents: "내가 회장"},
              {position: "부회장", studentCode: 20191111, name: "나나나", contents: "내가 부회장"},
              {position: "멘토", studentCode: 20194444, language: "파이썬", name: "다다다", contents: "최고의 멘토"},
              {position: "멘토", studentCode: 20193333, language: "자바", name: "라라라", contents: "최고의 멘토"} ], 
            [ {position: "회장", studentCode: 20190000, name: "가가가", contents: "내가 회장"},
              {position: "부회장", studentCode: 20191111, name: "나나나", contents: "내가 부회장"},
              {position: "멘토", studentCode: 20195555, language: "C언어", name: "마마마", contents: "최고의 멘토"},
              {position: "멘토", studentCode: 20196666, language: "리눅스", name: "바바바", contents: "최고의 멘토"} ]
          ]
        ],
        [2020, 
          [
            [ {position: "회장", studentCode: 20200000, name: "거거거", contents: "내가 회장"},
              {position: "부회장", studentCode: 20201111, name: "너너너", contents: "내가 부회장"},
              {position: "멘토", studentCode: 20203333, language: "웹", name: "더더더", contents: "최고의 멘토"},
              {position: "멘토", studentCode: 20204444, language: "운체", name: "러러러", contents: "최고의 멘토"} ], 
            [ {position: "회장", studentCode: 20200000, name: "거거거", contents: "내가 회장"},
              {position: "부회장", studentCode: 20201111, name: "너너너", contents: "내가 부회장"},
              {position: "멘토", studentCode: 20205555, language: "딥러닝", name: "머머머", contents: "최고의 멘토"} ]
          ]
        ],
        [2021, 
          [
            [ {position: "회장", studentCode: 20210000, name: "고고고", contents: "내가 회장"},
              {position: "부회장", studentCode: 20211111, name: "노노노", contents: "내가 부회장"},
              {position: "멘토", studentCode: 20212222, language: "파이썬", name: "도도도", contents: "최고의 멘토"},
              {position: "멘토", studentCode: 20213333, language: "자바스크립트", name: "로로로", contents: "최고의 멘토"} ], 
            [] // 2021-2 Empty
          ]
        ]
      ], // END CadreList
      imageURL: `${ipObj.ip}/api/student/images/`,
    };
  },

  created() {
    // this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`${ipObj.ip}/api/management/list`)
        .then((res) => {
          this.CadreList = [];
          var managementList = res.data.management;
          managementList.forEach((element) => {
            var flag = false;
            if (this.CadreList.length === 0) {
              if (element.season === "2학기 (겨울학기)") {
                this.CadreList.push([element.activeYear, [[], [element]]]);
              } else if (element.season === "1학기 (여름학기)") {
                this.CadreList.push([element.activeYear, [[element], []]]);
              }
            } else {
              for (let i = 0; i < this.CadreList.length; i++) {
                if (this.CadreList[i][0] === element.activeYear) {
                  if (element.season === "1학기 (여름학기)") {
                    this.CadreList[i][1][0].push(element);
                  } else if (element.season === "2학기 (겨울학기)") {
                    this.CadreList[i][1][1].push(element);
                  }
                  flag = true;
                }
              }
              if (flag === false) {
                if (element.season === "2학기 (겨울학기)") {
                  this.CadreList.push([element.activeYear, [[], [element]]]);
                } else if (element.season === "1학기 (여름학기)") {
                  this.CadreList.push([element.activeYear, [[element], []]]);
                }
              }
            }
            this.CadreList.sort(function (a, b) {
              return b[0] - a[0];
            });
          });
          console.log(this.CadreList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
v-card img {
  border-radius: 5px;
  width: 100%;
}
.v-application p {
  margin-bottom: 0;
}
p {
  margin: 3px;
}
.position,
.number,
.contents {
  font-size: 0.9em;
}
.position {
  color: rgb(80, 130, 155) !important;
  margin-top: 20px;
  font-weight: 700;
}
.name {
  font-size: 1.1em;
  font-weight: 700;
}
.contents {
  color: #727272 !important;
}
.v-img {
  margin: 0 auto !important;
}
</style>