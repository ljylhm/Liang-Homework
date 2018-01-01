import Vue from 'vue'
import Router from 'vue-router'
import Vcontent from '@/components/Vcontent'
import haveChat from '@/components/haveChat'
import publish from '@/components/publish'
import editInfo from '@/components/editInfo'
import showArticle from '@/components/showArticle'

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
    },
    {
      path:'/publish',
      name: 'publish',
      component: publish
    },
    {
      path:'/editInfo',
      name: 'editInfo',
      component: editInfo
    },
    {
      path:'/showArticle',
      name: 'showArticle',
      component: showArticle
    }
  ]
})
