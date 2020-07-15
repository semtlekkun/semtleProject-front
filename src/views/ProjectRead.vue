<template>
  <div id="projectRead">
    <v-app>
      <v-content>
        <v-container style="margin-top: 4rem; margin-bottom: 4rem;">
          <v-row>
            <v-col cols="12">
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
                  <v-card-text style="color: #000;">
                    <vue-markdown>{{content}}</vue-markdown>
                  </v-card-text>
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
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.
    Senectus et netus et malesuada. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt eget. Leo a diam sollicitudin tempor id. A lacus vestibulum sed arcu non odio euismod lacinia. In tellus integer feugiat scelerisque. Feugiat in fermentum posuere urna nec tincidunt praesent. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Et malesuada fames ac turpis egestas sed. Sit amet nisl suscipit adipiscing bibendum est ultricies. Arcu ac tortor dignissim convallis aenean et tortor at. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Eros donec ac odio tempor orci dapibus ultrices. Elementum nibh tellus molestie nunc. Et magnis dis parturient montes nascetur. Est placerat in egestas erat imperdiet. Consequat interdum varius sit amet mattis vulputate enim.
    Sit amet nulla facilisi morbi tempus. Nulla facilisi cras fermentum odio eu. Etiam erat velit scelerisque in dictum non consectetur a erat. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ut sem nulla pharetra diam. Fames ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam. Laoreet id donec ultrices tincidunt arcu non sodales neque. Eget felis eget nunc lobortis mattis aliquam faucibus purus. Faucibus interdum posuere lorem ipsum dolor sit.
    Et netus et malesuada fames ac. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Sodales neque sodales ut etiam sit amet nisl purus in. Maecenas volutpat blandit aliquam etiam. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Egestas purus viverra accumsan in nisl. Semper feugiat nibh sed pulvinar proin. Duis convallis convallis tellus id interdum velit laoreet. Ante in nibh mauris cursus mattis molestie. Ut etiam sit amet nisl purus in mollis nunc. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Tellus at urna condimentum mattis pellentesque id nibh tortor id. Tristique magna sit amet purus gravida quis blandit turpis cursus. Dolor sit amet consectetur adipiscing. Consequat ac felis donec et odio pellentesque diam volutpat. Nunc sed augue lacus viverra vitae congue. Mauris in aliquam sem fringilla ut morbi tincidunt augue.
    Elementum eu facilisis sed odio morbi quis commodo odio. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas maecenas pharetra convallis posuere. Nibh venenatis cras sed felis eget velit aliquet. Elementum nisi quis eleifend quam adipiscing. Amet cursus sit amet dictum sit amet justo donec enim. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Habitant morbi tristique senectus et netus et malesuada. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis. Ac turpis egestas maecenas pharetra.`
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