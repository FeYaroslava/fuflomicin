<template>
  <div>
  <v-layout row wrap >
     <v-flex xs12 class="search">
       <div class="search-wrapper">
         <input type="text" v-model="search" placeholder="Пошук"/>
       </div>
     </v-flex>
  </v-layout>
  <v-layout row wrap class="main">
     <v-flex class="list" xs12>
       <div v-for="(i, index ) in filteredList" :key="index" >
         <ListItem :item="i"/>
       </div>
     </v-flex>
  </v-layout>
  </div>
</template>

<script>
import list from '../asserts/list.json'
import ListItem from '../atoms/ListItem.vue'
import Select2 from 'v-select2-component';
export default {
  name: 'List',
  components:{
    list,
    ListItem,
    Select2
  },
  data () {
    return {
      search: '',
      list: list
    }
  },
  computed: {
    filteredList() {
      return this.list.filter(med => {
        return med.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    const list = this.list.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    console.log(list)
  }
}
</script>


<style scoped>
.main {
  margin: 20px 20px;
  padding: 10px;
  border-radius: 8px;
  background: rgba(255,245,215,0.3);
  max-height: 100%;
}
.search {
  padding: 0;
  height: 45px;
}
.list {
  max-height: 78vh;
  font-size: 26px;
  font-weight: 700;
  overflow-y: scroll;
}
.search-wrapper {

}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}
</style>
