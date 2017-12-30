// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import Vitem from './components/Vitem.vue'
import foot from './components/common/foot'
import Vhead from './components/common/Vhead'
import './css/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

Vue.use(ElementUI)
Vue.component('v-item',Vitem)
Vue.component('page-foot',foot)
Vue.component('v-head',Vhead)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})
