<template>
  <div id="members">
    <v-container class="text-center">
      <h1 class="text-left">2021년 2학기</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mt-16"></v-divider>
      <h1 class="mt-5 text-left">2021년 1학기</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
      </v-row>

      <v-divider class="mt-16"></v-divider>
      <h1 class="mt-5 text-left">2020년 2학기</h1>
      <v-row>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3">
          <v-card class="pa-10">
            <v-img
              src="https://t3.ftcdn.net/jpg/01/85/74/32/240_F_185743207_RUJhwfdeIvaEkhZxDyEqbsBZuFVOYRbp.jpg"
            ></v-img>
            <p class="role">{{role}}</p>
            <p class="number">{{number}}</p>
            <p class="name">{{name}}</p>
            <p class="content">{{content}}</p>
          </v-card>
        </v-col>
        <v-col cols="6" sm="3"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    role: "회장",
    number: "20210000",
    name: "김이름",
    content: `내용내용내용내용내용내용내용내용`,
  }),

  components: {},
};
</script>

<style>
.v-image__image {
  border-radius: 5px;
}
.v-application p {
  margin-bottom: 0;
}
.role,
.number,
.content {
  font-size: 0.9em;
}
.role {
  color: #727272 !important;
  margin-top: 20px;
}
.name {
  font-size: 1.1em;
  font-weight: 500;
}
.content {
  color: #727272 !important;
}
</style>