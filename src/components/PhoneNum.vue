<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{on, attrs}">
                <v-card height="200" light="light" class="pa-5">
                    <v-card-title primary="primary" class="title">Phone Number</v-card-title>
                    <v-card-text>{{Data.phoneNum}}</v-card-text>

                    <v-card-actions>
                        <v-btn v-bind="attrs" v-on="on" dark="dark" class="btn btn-dark m-3">
                            변경
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>

            <div class="white lighten-1">
                <v-card-title class="headline lighten-2">전화번호 변경</v-card-title>

                <v-divider></v-divider>

                <v-col>
                    <v-form ref="form" v-model="valid" lazy-validation="lazy-validation">

                        <v-text-field
                            v-model="after"
                            :rules="afterRules"
                            label="새 전화번호 입력"
                            required></v-text-field>
                    </v-form>

                </v-col>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="btn btn-dark" text="text" @click="check()">확인
                    </v-btn>
                </v-card-actions>

            </div>
        </v-dialog>
    </div>

</template>

<script>
    export default {
        data: () => ({
            Data : {
                phoneNum : '000-0000-0000'
            },
            dialog: false,
            valid: true,

            after: '',
            afterRules: [
                v => !!v || '전화번호를 입력해야합니다.',
            ]
        }),
        methods: {
            check() {
                return (this.Data.phoneNum = this.after),(this.dialog = false);
            }
        }
    }
</script>