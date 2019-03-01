import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import IntroducePage from '@/components/IntroducePage'
import Fullstack from '@/components/Fullstack'
import full from '@/components/full'
import EntryForm from '@/components/EntryForm'
import FormShow from '@/components/FormShow'
import RealHomePage from "@/components/RealHomePage"
import ToPhone from "@/components/ToPhone"
import We from '@/components/We'
import Picture from '@/components/Picture'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/picture',
      name: 'Picture',
      component: Picture
    },
    {
      path: '/s',
      name: 'Picture',
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
      path: '/formshow',
      name: 'FormShow',
      component: FormShow
    },
    {
      path: '/full',
      name: 'full',
      component: full
    },
    {
      path: '/tophone',
      name: 'ToPhone',
      component: ToPhone
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
    },
    {
      path:'/we',
      name:'We',
      component:We
    }
  ]
})
