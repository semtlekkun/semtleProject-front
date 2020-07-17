<template>
    <v-app>
        <v-content>
            <v-container>
                <Comments></Comments>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import Comments from '../components/Comments.vue'
export default {
    components:{
        Comments
    }
}
</script>