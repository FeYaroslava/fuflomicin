<template>
  <v-layout class="item">
    <v-flex xs11 class="item-name">{{item.name}}</v-flex>
    <v-flex xs1 class="item-type">
      <ItemType :type="item.type"/>
    </v-flex>
  </v-layout>
</template>


<script>
import ItemType from './ItemType.vue'

export default {
  name: "ListItem",
  props: ['item'],
  components:{
    ItemType
  }
}
</script>

<style scoped>
 .item-name {
   text-align: left;
   padding-top: 3px;
 }
 .item-type {
   text-align: center;
 }
 .item {
   background: rgba(255,245,215,0.3);
   border-radius: 5px;
   padding: 5px;
   margin-bottom: 10px;
 }
</style>
