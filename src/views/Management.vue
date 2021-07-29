<template>
  <div id="members">
    <v-container class="text-center">
      <div v-for="(cadre, i) in CadreList" :key="i">
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
      CadreList: [],
      imageURL: `${ipObj.ip}/api/student/images/`,
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
          managementList.forEach((element) => {
            if (
              this.CadreList.findIndex(
                (el) => el.activeYear === element.activeYear
              ) < 0 ||
              this.CadreList.length === 0
            ) {
              this.CadreList.push({
                activeYear: element.activeYear,
                firstManagers: [],
                secondManagers: [],
              });
            }

            this.CadreList.forEach((el, idx) => {
              console.log(el);
              console.log(element);
              if (el.activeYear === element.activeYear) {
                if (element.season === "1학기 (여름학기)") {
                  if (element.position === "회장")
                    this.CadreList[idx].firstManagers.splice(0, 0, element);
                  else if (element.position === "부회장")
                    this.CadreList[idx].firstManagers.splice(1, 0, element);
                  else this.CadreList[idx].firstManagers.push(element);
                } else {
                  if (element.position === "회장")
                    this.CadreList[idx].secondManagers.splice(0, 0, element);
                  else if (element.position === "부회장")
                    this.CadreList[idx].secondManagers.splice(1, 0, element);
                  else this.CadreList[idx].secondManagers.push(element);
                }
              }
            });

            // 년도를 내림차순으로 정렬
            this.CadreList.sort(function (a, b) {
              return b.activeYear - a.activeYear;
            });
          });
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