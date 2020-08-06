<template>
    <router-link  :to="{name: 'projectView', params:{contentsObj: contentsObj}}">
        <v-card
            id="link"
            height="318"
            max-height="318"
            max-width="344"
            class="mx-auto"
        >
            <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="headline">{{contentsObj.title}}</v-list-item-title>
                    <v-list-item-subtitle>
                    by {{contentsObj.teamName}}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-img
            :src="contentsObj.imgSrc"
            height="194"
            ></v-img>

            <v-card-text>
                <span v-for="(text,index) in contentsObj.contents" :key="text.index"
                v-show="index < 10">
                    {{text}}
                </span>
                <span v-if="contentsObj.contents.length > 10">
                    ...
                </span>
            </v-card-text>
        </v-card>
    </router-link>
</template>

<script>
    export default {
        props:{
            contentsObj: Object
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>
#link{
    z-index: 0 !important;
}
</style>