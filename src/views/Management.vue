<template>
  <div id="members">
    <v-container class="text-center">
      <div v-for="(cadre,i) in CadreList" :key="i">
        <div v-if="cadre[1][0].length !== 0">
          <h1 class="text-left my-5">{{cadre[0]}}년 1학기</h1>
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(member,j) in cadre[1][0]" :key="j">
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
        <div v-if="cadre[1][1].length !== 0">
          <h1 class="text-left my-5">{{cadre[0]}}년 2학기</h1>
          <v-row>
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(member,k) in cadre[1][1]" :key="k">
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
p{
  margin:3px;
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
</style>