<template>
  <v-layout row wrap>
      <v-flex xs12>
        <Select2  v-model="myValue" :options="list" :settings="{ settingOption: 'name', settingOption: 'name' }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
      </v-flex>
     <v-flex v-for="(i, index ) in list" :key="index" xs12>
       {{i.name}}
     </v-flex>
  </v-layout>
</template>

<script>
import list from '../asserts/list.json'
import Select2 from 'v-select2-component';
export default {
  name: 'List',
  components:{
    list,
    Select2
  },
  data () {
    return {
      myValue: '',
      list: list
    }
  },
  methods: {
    myChangeEvent(val){
      console.log(val);
    },
    mySelectEvent({id, text}){
      console.log({id, text})
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.select2 {
  width: 100%
}

</style>
