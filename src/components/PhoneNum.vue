<template>
  <div>
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{on, attrs}">
        <v-card height="200" light="light" class="pa-5">
          <v-card-title primary="primary" class="title">Phone Number</v-card-title>
          <v-card-text>{{Data.phoneNum}}</v-card-text>

          <v-card-actions>
            <v-btn v-bind="attrs" v-on="on" dark="dark" class="btn btn-dark m-3">변경</v-btn>
          </v-card-actions>
        </v-card>
      </template>

      <div class="white lighten-1">
        <v-card-title class="headline lighten-2">전화번호 변경</v-card-title>

        <v-divider></v-divider>

        <v-col>
          <v-text-field
            v-model="after"
            solo
            maxlength="11"
            @keypress="checkNumber"
            @keyup="checkHan"
          ></v-text-field>
        </v-col>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="btn btn-dark" text="text" @click="check()">확인</v-btn>
        </v-card-actions>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    Data: {
      phoneNum: "000-0000-0000",
    },
    dialog: false,

    after: "",
  }),
  methods: {
    check() {
      return (this.Data.phoneNum = this.after), (this.dialog = false);
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
  },
};
</script>