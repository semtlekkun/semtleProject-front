<template>
    <div>
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{on, attrs}">
                <v-card height="200" light="light" class="pa-5">
                    <v-card-title primary="primary" class="title">PASSWORD</v-card-title>
                    <v-card-text>{{Data.pw}}</v-card-text>

                    <v-card-actions>
                        <v-btn v-bind="attrs" v-on="on" dark="dark" class="btn btn-dark m-3">
                            변경
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>

            <div class="white lighten-1">
                <v-card-title class="headline lighten-2">비밀번호 변경</v-card-title>

                <v-divider></v-divider>

                <v-alert type="error" v-model="alertBefore">
                    이전 비밀번호가 올바르지 않습니다.
                </v-alert>

                <v-alert type="error" v-model="alertSame">
                    이전 비밀번호와 새 비밀번호가 동일합니다.
                </v-alert>

                <v-alert type="error" v-model="alertNotsame">
                    새 비밀번호와 비밀번호 확인이 동일하지 않습니다.
                </v-alert>

                <v-col>
                    <v-form ref="form" v-model="valid" lazy-validation="lazy-validation">
                        <v-text-field
                            v-model="before"
                            :counter="12"
                            :rules="beforeRules"
                            label="이전 비밀번호"
                            required></v-text-field>

                        <v-text-field
                            v-model="after"
                            :counter="12"
                            :rules="afterRules"
                            label="새 비밀번호"
                            required></v-text-field>

                        <v-text-field
                            v-model="checkafter"
                            :counter="12"
                            :rules="checkRules"
                            label="비밀번호 확인"
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
                pw : '뀨뀨까까'
            },
            dialog: false,

            alertSame: false,
            alertNotsame: false,
            alertBefore: false,

            valid: true,

            before: '',
            beforeRules: [
                v => !!v || '이전 비밀번호를 입력해야합니다.',
                v => (v && v.length <= 12) || '비밀번호 길이는 최대 12자 입니다.'
            ],

            after: '',
            afterRules: [
                v => !!v || '새 비밀번호를 입력해야합니다.',
                v => (v && v.length <= 12) || '비밀번호 길이는 최대 12자 입니다.'
            ],

            checkafter: '',
            checkRules: [
                v => !!v || '새 비밀번호와 동일한 내용을 입력해야합니다.',
                v => (v && v.length <= 12) || '비밀번호 길이는 최대 12자 입니다.'
            ]
        }),
        methods: {
            check() {
                //좀 바꾸면 로직 더 깔끔하게 할 수 있을 거 같은데 ~~~ 빈 칸이 있을 경우 뷰티파이에서 모달/스냅바 등으로 바꾸기
                if (this.Data.pw != this.before){
                    return (this.alertBefore = true);
                }else if (this.before === this.after) { //이전 비밀번호와 새 비밀번호가 같을 경우
                    return (this.alertSame = true), (this.alertBefore = false);
                } else if (this.after != this.checkafter) {
                    return (this.alertNotsame = true),
                    (this.alertSame = false), (this.alertBefore = false);
                } else {
                    return (this.Data.pw = this.after),(this.dialog = false);
                }
            }
        }
    }
</script>