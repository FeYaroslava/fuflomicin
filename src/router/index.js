import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Vuetify from 'Vuetify'

Vue.use(Router)
Vue.use(Vuetify)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    }
  ]
})
