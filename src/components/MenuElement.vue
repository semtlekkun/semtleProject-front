<template>
  <v-menu offset-y open-on-hover>
    <template v-slot:activator="{ on, attrs }">
      <v-btn class="child white--text" text v-bind="attrs" v-on="on">{{Attribute.Title}}</v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in Attribute.Items"
        :key="index"
        @mouseover="Attribute.Stop"
        @mouseout="Attribute.Start"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    Attribute: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>