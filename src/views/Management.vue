<template>
  <div id="members">
    <v-container class="text-center">
      <div v-for="(cadre,i) in CadreList" :key="i">
        <div v-if="cadre[1][0].length !== 0">
          <h1 class="text-left my-5">{{cadre[0]}}년 1학기 (여름학기)</h1>
          <v-row>
            <v-col cols="6" sm="3" v-for="(member,j) in cadre[1][0]" :key="j">
              <v-card class="pa-10">
              <!--
              기본 이미지 오류 수정 
                : 백엔드에서 라우터 대거 수정, 모든 컴포넌트와 view의 이미지경로를 images/로 모두 바꿔줌
              그러나 계속 이미지가 업뎃되지 않는 현상 발견. 오류 수정 필요
                : 간부진 중 이효진의 이미지를 계속 바꾸었으나 제일 처음 변경한 이미지인 computer.png가 계속 뜸
                : 백엔드쪽을 확인하였으나 이상 없었음
                -->
                <v-img :src="imageURL+member.image" min-height="250px" max-height="250px" />
                <p class="position">{{member.language}}{{member.position}}</p>
                <p class="number">{{member.studentCode}}</p>
                <p class="name">{{member.name}}</p>
                <p class="contents">{{member.contents}}</p>
              </v-card>
            </v-col>
          </v-row>
          <v-divider class="my-10"></v-divider>
        </div>
        <div v-if="cadre[1][1].length !== 0">
          <h1 class="text-left my-5">{{cadre[0]}}년 2학기 (겨울학기)</h1>
          <v-row>
            <v-col cols="6" sm="3" v-for="(member,k) in cadre[1][1]" :key="k">
              <v-card class="pa-10">
                <v-img :src="imageURL+member.image" min-height="250px" max-height="250px" />
                <p class="position">{{member.language}}{{member.position}}</p>
                <p class="number">{{member.studentCode}}</p>
                <p class="name">{{member.name}}</p>
                <p class="contents">{{member.contents}}</p>
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
import axios from "axios";
export default {
  data() {
    return {
      CadreList: [],
      imageURL: "http://49.50.166.64/api/student/images/",
    };
  },

  created() {
    this.getData();
    console.log(this.CadreList);
  },
  methods: {
    getData() {
      axios
        .get("http://49.50.166.64/api/management/list")
        .then((res) => {
          this.CadreList = [];
          var managementList = res.data.management;
          console.log(managementList);
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
.position,
.number,
.contents {
  font-size: 0.9em;
}
.position {
  color: #727272 !important;
  margin-top: 20px;
}
.name {
  font-size: 1.1em;
  font-weight: 500;
}
.contents {
  color: #727272 !important;
}
</style>