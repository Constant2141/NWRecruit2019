import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import IntroducePage from '@/components/IntroducePage'
import Fullstack from '@/components/Fullstack'
import EntryForm from '@/components/EntryForm'
import RealHomePage from "@/components/RealHomePage"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/s',
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
    },
    {
      path: '/entryform',
      name: 'EntryForm',
      component: EntryForm
    },
    {
      path: '/',
      name: 'RealHomePage',
      component: RealHomePage
    }
  ]
})
