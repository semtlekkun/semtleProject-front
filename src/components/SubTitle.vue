<template>
    <v-container>
        <h1>
            {{subTitleObj.title}}
        </h1>
        <h2>
            {{subTitleObj.contents}}
        </h2>
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
    font-size: 3.0rem;
}
</style>