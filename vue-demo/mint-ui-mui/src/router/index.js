import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import list from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: home
    },
    {
      path: '/list',
      name: 'List',
      component: list
    },
  ]
})
