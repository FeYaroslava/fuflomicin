<template>
  <div>
    <v-layout row wrap class="search">
      <v-flex xs12>
        <div class="search-wrapper">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
          <input type="text" v-model="search" placeholder="Пошук"/>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="main">
      <v-flex class="list" xs12 v-if="filteredList.length">
        <div v-for="(i, index ) in filteredList" :key="index">
          <ListItem v-if="!i.hidden" :item="i"/>
        </div>
      </v-flex>
      <v-flex class="list" xs12 v-else>
        <div class="empty">
          Нічого не знайдено
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4>
        <font-awesome-icon class='fuflomicine' icon="fa-solid fa-pills"/>
      </v-flex>
      <v-flex xs4>
        <font-awesome-icon class="forbid" icon="fa-solid fa-ban"/>
      </v-flex>
      <v-flex xs4>
        <font-awesome-icon class="homeopathy" icon="fa-solid fa-mortar-pestle"/>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4>
        фуфломіцин
      </v-flex>
      <v-flex xs4>
        заборонені ліки
      </v-flex>
      <v-flex xs4>
        гомеопатія
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import list from '../asserts/list.json'
import test from '../asserts/test.json'
import ListItem from '../atoms/ListItem.vue'

export default {
  name: 'List',
  components: {
    list,
    test,
    ListItem,
  },
  data() {
    return {
      search: '',
      list: list,
      test: test,
    }
  },
  computed: {
    filteredList() {
      return this.list.filter(med => {
        return med.names.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  created() {
    this.list.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
}
</script>


<style scoped>
.main {
  margin: 20px 20px;
  padding: 10px;
  border-radius: 15px;
  background: white;
  max-height: 100%;
}

.search {
  height: 45px;
  margin: 20px 20px;
  padding: 10px;
  border-radius: 15px;
  background: white;
}

.list {
  max-height: 78vh;
  font-size: 26px;
  font-weight: 700;
  overflow-y: scroll;
  overflow-x: hidden;
}

.search-wrapper input {
  width: 90%;
  border: none;
  height: 25px;
  font-family: Arial, FontAwesome
}

.search-wrapper input:focus {
  outline: none;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: black;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: black;
}

.empty {
  text-align: center;
  font-size: 19px;
  font-weight: 100;
}

.fuflomicine {
  color: #007bff;
}

.homeopathy {
  color: #ffc107;
}

.forbid {
  color: #dc3545;
}
</style>
