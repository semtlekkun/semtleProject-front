<template>
    <router-link to="/login">
    <v-card
        max-width="344"
        class="mx-auto"
    >
        <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-title class="headline">{{title}}</v-list-item-title>
            <v-list-item-subtitle>by {{teamName}}</v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>

        <v-img
        :src="imgSrc"
        height="194"
        ></v-img>

        <v-card-text>
        {{contents}}
        </v-card-text>
    </v-card>
    </router-link>
</template>

<script>
    export default {
        data(){
            return{
                title: "KUMOCraft",
                teamName: "셈틀꾼",
                imgSrc: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
                contents: "이시발 힘들었다."
            }
        }
    }
</script>

<style scoped>

</style>