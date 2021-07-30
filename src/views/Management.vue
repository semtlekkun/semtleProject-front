<template>
  <div id="members">
    <v-container class="text-center">
      <v-row>
        <v-col
          cols="6"
          sm="4"
          lg="2"
        >
          <v-combobox
            v-model="selectedYear"
            :items="yearList"
            label="연도별 보기"
          ></v-combobox>
        </v-col>
      </v-row>   
      <div 
        v-for="(cadre, index) in CadreList"
        :key="index"
      >
        <div v-if="selectedYear === '전체' || cadre.activeYear === selectedYear">
          <!-- 2학기에 간부들이 있다면 조건부로 렌더링 -->
          <div v-if="cadre.secondManagers.length !== 0">
            <h1 class="text-left my-5">{{ cadre.activeYear }}년 2학기</h1>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="(member, k) in cadre.secondManagers"
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
          </div>

          <div v-if="cadre.firstManagers.length !== 0">
            <h1 class="text-left my-5">{{ cadre.activeYear }}년 1학기</h1>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="(member, k) in cadre.firstManagers"
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

            <v-divider
              v-if="index !== CadreList.length - 1"
              class="my-10"
            ></v-divider>
            <div v-if="index === CadreList.length - 1" class="my-15"></div>
          </div>
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
      CadreList: [],
      imageURL: `${ipObj.ip}/api/student/images/`,
      yearList: ["전체"],
      selectedYear: "전체",
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      axios
        .get(`${ipObj.ip}/api/management/list`)
        .then((res) => {
          let managementList = res.data.management;
          let CopyCadreList = [];

          managementList.forEach((element) => {
            // 최초의 배열이 비어있을 경우 추가하는 과정
            if (
              CopyCadreList.findIndex(
                (el) => el.activeYear === element.activeYear
              ) < 0 ||
              CopyCadreList.length === 0
            ) {
              // 유심히 봐둬야 할 구조
              CopyCadreList.push({
                activeYear: element.activeYear,
                firstManagers: [],
                secondManagers: [],
              });
            }

            // 학생 객체 삽입
            CopyCadreList.forEach((el, idx) => {
              if (el.activeYear === element.activeYear) {
                if (element.season === "1학기 (여름학기)")
                  CopyCadreList[idx].firstManagers.push(element);
                else CopyCadreList[idx].secondManagers.push(element);
              }
            });
          });

          // 년도를 내림차순으로 정렬
          CopyCadreList.sort(function (a, b) {
            return b.activeYear - a.activeYear;
          });

          CopyCadreList.forEach((el) => {
            if (el.firstManagers.length !== 0) {
              // 학번순 정렬
              el.firstManagers.sort((a, b) => {
                return Number(a["studentCode"]) - Number(b["studentCode"]);
              });

              // 부회장, 회장에 해당하는 학생의 객체를 변수에 받아놓음
              let viceChairMan =
                el.firstManagers[
                  el.firstManagers.findIndex((x) => x.position === "부회장")
                ];
              let chairMan =
                el.firstManagers[
                  el.firstManagers.findIndex((x) => x.position === "회장")
                ];

              // 현재 부회장, 회장에 해당하는 값들을 삭제
              el.firstManagers.splice(
                el.firstManagers.findIndex((x) => x.position === "부회장"),
                1
              );
              el.firstManagers.splice(
                el.firstManagers.findIndex((x) => x.position === "회장"),
                1
              );

              // 위에서 받아놓은 값들을 배열의 앞에 붙임
              el.firstManagers.unshift(viceChairMan);
              el.firstManagers.unshift(chairMan);
            }
            if (el.secondManagers.length !== 0) {
              el.secondManagers.sort((a, b) => {
                return Number(a["studentCode"]) - Number(b["studentCode"]);
              });

              // 부회장, 회장에 해당하는 학생의 객체를 변수에 받아놓음
              let viceChairMan =
                el.secondManagers[
                  el.secondManagers.findIndex((x) => x.position === "부회장")
                ];
              let chairMan =
                el.secondManagers[
                  el.secondManagers.findIndex((x) => x.position === "회장")
                ];

              // 현재 부회장, 회장에 해당하는 값들을 삭제
              el.secondManagers.splice(
                el.secondManagers.findIndex((x) => x.position === "부회장"),
                1
              );
              el.secondManagers.splice(
                el.secondManagers.findIndex((x) => x.position === "회장"),
                1
              );

              // 위에서 받아놓은 값들을 배열의 앞에 붙임
              el.secondManagers.unshift(viceChairMan);
              el.secondManagers.unshift(chairMan);
            }
          });

          this.CadreList = CopyCadreList;

          this.getYear();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getYear() {
      this.CadreList.forEach((el) => {
        this.yearList.push(el.activeYear);
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
.v-text-field__details {
  display: none;
}
</style>