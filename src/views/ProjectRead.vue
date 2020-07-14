<template>
  <div id="projectRead">
    <v-app>
      <v-content>
        <v-container style="margin-top: 4rem">
          <v-row>
            <v-col>
              <v-card>
                <v-alert outlined color="#226db2">
                  <v-card-title>{{title}}</v-card-title>
                  <v-divider class="mb-2"></v-divider>
                  <ul class="announceInfo">
                    <li>
                      <b>작성자</b>
                      {{author}}
                    </li>
                    <li>
                      <b>작성일</b>
                      {{date}}
                    </li>
                    <li>
                      <b>마감일</b>
                      {{deadline}}
                    </li>
                    <li>
                      <b>모집인원</b>
                      {{number}}
                    </li>
                    <li>
                      <v-icon small>mdi-eye</v-icon>
                      {{views}}
                    </li>
                  </ul>
                  <v-card-text>{{content}}</v-card-text>
                </v-alert>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "제목",
    author: "21 홍길동",
    date: "2시간 전",
    deadline: "2021.01.01",
    views: 5,
    number: 0,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac."
  })
};
</script>

<style>
#projectRead hr {
  border-top: 1px solid #226db2;
}
#projectRead b {
  margin-right: 3px;
}
#projectRead ul {
  padding-left: 15px;
  font-size: 12px;
}
.announceInfo {
  color: gray;
  margin-bottom: 30px;
}
.announceInfo li {
  list-style: none;
  display: inline;
  margin-right: 10px;
}
</style>