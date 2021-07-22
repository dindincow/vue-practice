import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/main.scss'


import {outsideHideClick} from "@/directive/outside-hide-click"
Vue.config.productionTip = false;

// 全域引用指令
Vue.directive('outsideHideClick',outsideHideClick);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
