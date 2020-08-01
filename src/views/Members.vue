<template>
  <div id="members">
    <v-app>
      <v-content>
        <v-container style="margin-top: 4rem; margin-bottom: 4rem;" class="text-center">
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-alert outlined color="#226db2">
                  <v-card-title>{{title}}</v-card-title>
                  <v-card-text color="primary">
                    <h1>2021년 2학기</h1>
                    <v-row justify="center">
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.squarespace-cdn.com/content/v1/5d6d91d62a5c4f0001f7df63/1591250171050-GLE1I49UFP5BZEK2V0EP/ke17ZwdGBToddI8pDm48kF5u7Uw9XShestTm9iBrIh0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcYCt66E9QQuUlHQrS4Ab9bfbNxW7EAbf_wJZI0i6lk1RAMO5BZD-WTyqcA0wsxYW1/blog+banner+-+blackout.png"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixlib=rb-1.2.1&w=1000&q=80"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.squarespace-cdn.com/content/v1/5d6d91d62a5c4f0001f7df63/1591250171050-GLE1I49UFP5BZEK2V0EP/ke17ZwdGBToddI8pDm48kF5u7Uw9XShestTm9iBrIh0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcYCt66E9QQuUlHQrS4Ab9bfbNxW7EAbf_wJZI0i6lk1RAMO5BZD-WTyqcA0wsxYW1/blog+banner+-+blackout.png"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixlib=rb-1.2.1&w=1000&q=80"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                    </v-row>

                    <h1>2021년 1학기</h1>
                    <v-row justify="center">
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.squarespace-cdn.com/content/v1/5d6d91d62a5c4f0001f7df63/1591250171050-GLE1I49UFP5BZEK2V0EP/ke17ZwdGBToddI8pDm48kF5u7Uw9XShestTm9iBrIh0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcYCt66E9QQuUlHQrS4Ab9bfbNxW7EAbf_wJZI0i6lk1RAMO5BZD-WTyqcA0wsxYW1/blog+banner+-+blackout.png"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixlib=rb-1.2.1&w=1000&q=80"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.squarespace-cdn.com/content/v1/5d6d91d62a5c4f0001f7df63/1591250171050-GLE1I49UFP5BZEK2V0EP/ke17ZwdGBToddI8pDm48kF5u7Uw9XShestTm9iBrIh0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcYCt66E9QQuUlHQrS4Ab9bfbNxW7EAbf_wJZI0i6lk1RAMO5BZD-WTyqcA0wsxYW1/blog+banner+-+blackout.png"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixlib=rb-1.2.1&w=1000&q=80"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                    </v-row>

                    <h1>2020년 2학기</h1>
                    <v-row justify="center">
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.squarespace-cdn.com/content/v1/5d6d91d62a5c4f0001f7df63/1591250171050-GLE1I49UFP5BZEK2V0EP/ke17ZwdGBToddI8pDm48kF5u7Uw9XShestTm9iBrIh0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcYCt66E9QQuUlHQrS4Ab9bfbNxW7EAbf_wJZI0i6lk1RAMO5BZD-WTyqcA0wsxYW1/blog+banner+-+blackout.png"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixlib=rb-1.2.1&w=1000&q=80"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.squarespace-cdn.com/content/v1/5d6d91d62a5c4f0001f7df63/1591250171050-GLE1I49UFP5BZEK2V0EP/ke17ZwdGBToddI8pDm48kF5u7Uw9XShestTm9iBrIh0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcYCt66E9QQuUlHQrS4Ab9bfbNxW7EAbf_wJZI0i6lk1RAMO5BZD-WTyqcA0wsxYW1/blog+banner+-+blackout.png"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                      <v-col cols="6" sm="3">
                        <v-responsive
                          class="text-center primary lighten-2 rounded-pill d-inline-flex align-center justify-center ma-3 pa-6"
                        >
                          <v-img
                            class="rounded-circle"
                            height="100"
                            width="100"
                            src="https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixlib=rb-1.2.1&w=1000&q=80"
                          ></v-img>
                          <p>{{role}}</p>
                          <p>{{number}}</p>
                          <p>{{name}}</p>
                        </v-responsive>
                      </v-col>
                    </v-row>
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
    title: "역대 간부",
    role: "회장",
    number: "20210000",
    name: "홍길동",
  }),

  components: {},
};
</script>

<style>
p {
  color: black;
}
</style>