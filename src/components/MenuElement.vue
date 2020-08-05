<template>
  <v-menu offset-y open-on-hover>
    <template v-slot:activator="{ on, attrs }">
      <router-link :to="Attribute.url">
        <v-btn
          id="menuBtn"
          class="child white--text"
          text
          large
          v-bind="attrs"
          v-on="on"
        >
        {{Attribute.Title}}
        </v-btn>
      </router-link>
    </template>
    <v-list flat class="pa-0 ma-0 text-center">
      <v-list-item-group>
        <router-link 
          v-for="(item, index) in Attribute.Items" 
          :key="index" :to="item.url">
          <v-list-item @mouseover="()=>{
            functions.subMenuOpen();
            functions.menuOpen();
          }" 
          @mouseleave="()=>{
            functions.subMenuClose();
            functions.menuClose();  
          }">
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    functions: Object,
    Attribute: {
      type: Object,
      required: true,
    },
  },
  methods: {
    
  },
};
</script>

<style scoped>
</style>