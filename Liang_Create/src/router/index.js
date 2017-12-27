import Vue from 'vue'
import Router from 'vue-router'
import Vcontent from '@/components/Vcontent'
import haveChat from '@/components/haveChat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vcontent',
      component: Vcontent
    },
    {
      path: '/haveChat',
      name: 'haveChat',
      component: haveChat
    }
  ]
})
