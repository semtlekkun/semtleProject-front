<template>
    <v-container>
        <h1>
            {{subTitleObj.title}}
        </h1>
        <h3>
            {{subTitleObj.contents}}
        </h3>
    </v-container>
</template>

<script>
    export default {
        props:{
            subTitleObj:Object
        }
    }
</script>

<style scoped>
h1{
    font-size: 2.185rem;
}
</style>