import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/plugins/echarts";
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueApexCharts from 'vue-apexcharts'


Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

new Vue({
  el: '#app',
  render: function (h) { return h(App) },
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')

