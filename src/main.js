// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faPills, faMortarPestle, faBan, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

library.add(faPills, faMortarPestle, faBan, faMagnifyingGlass)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
