<template>
  <v-container>
    <v-row>
      <v-col>
        <CardView/>
      </v-col>

      <v-col>
        <CardView/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardView from '../components/CardView.vue';

export default {
  components: {
    CardView
  },
  data(){
    return{

    }
  }
}
</script>
