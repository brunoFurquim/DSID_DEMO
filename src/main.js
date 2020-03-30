import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueFloatLabel from 'vue-float-label'
Vue.use(VueFloatLabel);

import VueIziToast from 'vue-izitoast';
import 'izitoast/dist/css/iziToast.css';
Vue.use(VueIziToast);

Vue.config.productionTip = false

import Login from './screens/Login.vue';
import Recuperar from './screens/Recuperar.vue';

const router = new VueRouter({
  routes: [
      {
          path: '/', 
          component: Login
      },
      {
          path: '/Recuperar',
          component: Recuperar
      }
  ]
});

new Vue({
  router, //Roteador, serve para informar as rotas que o programa vai ter 
  render: h => h(App),
}).$mount('#app')


