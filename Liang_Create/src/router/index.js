import Vue from 'vue'
import Router from 'vue-router'
import Vcontent from '@/components/Vcontent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vcontent',
      component: Vcontent
    }
  ]
})
