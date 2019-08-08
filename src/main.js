import Vue from 'vue'
import App from './App.vue'

import store from '@/store'
import router from '@/router'
import '@/vee-validate'

import ApexCharts from 'vue-apexcharts'

Vue.component('ApexChart', ApexCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
