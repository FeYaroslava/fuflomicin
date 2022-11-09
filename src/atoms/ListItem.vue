<template>
  <v-layout class="item">
    <v-flex xs11 class="item-name">{{ item.title }}</v-flex>
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
  components: {
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
  padding: 9px 10px 5px 10px;
  border-bottom: 1px solid #E7E7E7;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-decoration: none;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}
</style>
