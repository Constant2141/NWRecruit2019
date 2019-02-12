import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import IntroducePage from '@/components/IntroducePage'
import Fullstack from '@/components/Fullstack'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/introducePage',
      name: 'IntroducePage',
      component: IntroducePage
    },
    {
      path: '/fullstack',
      name: 'Fullstack',
      component: Fullstack
    }
  ]
})
