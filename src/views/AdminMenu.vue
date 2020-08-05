<template>
    <div>
        <v-row class="text-center">
            <v-col>
                <router-link to="/admin/notice">
                    <v-btn class="py-10" block>
                        공지사항 글쓰기
                    </v-btn>
                </router-link>
            </v-col>
            <v-col>
                <router-link to="/admin/member">
                    <v-btn class="py-10" block>
                        멤버관리
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
        <v-row class="text-center">
            <v-col>
                <router-link to="/admin/mentor">
                    <v-btn class="py-10" block>
                        역대 간부관리
                    </v-btn>
                </router-link>
            </v-col>
            <v-col>
                <router-link to="/">
                    <v-btn class="py-10" block>
                        기타
                    </v-btn>
                </router-link>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>