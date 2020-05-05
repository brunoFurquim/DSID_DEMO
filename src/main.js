import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueFloatLabel from 'vue-float-label'
Vue.use(VueFloatLabel);

import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css';
Vue.use(VueIziToast);

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


