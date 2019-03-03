import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import IntroducePage from '@/components/IntroducePage'
// import Fullstack from '@/components/Fullstack'
import full from '@/components/full'
import EntryForm from '@/components/EntryForm'
import FormShow from '@/components/FormShow'
import RealHomePage from "@/components/RealHomePage"
import ToPhone from "@/components/ToPhone"
import We from '@/components/We'
import Picture from '@/components/Picture'
import Loading from '@/components/Loading'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path:'/',
      name:'base',
      redirect:'/loading'
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/realhomepage',
      name: 'RealHomePage',
      component: RealHomePage
    },
    {
      path:'/we',
      name:'We',
      component:We
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
      path: '/picture',
      name: 'Picture',
      component: Picture
    },
    // {
    //   path: '/s',
    //   name: 'Picture',
    //   component: HelloWorld
    // },
    // {
    //   path: '/fullstack',
    //   name: 'Fullstack',
    //   component: Fullstack
    // },
    {
      path: '/full',
      name: 'full',
      component: full
    },
    {
      path: '/entryform',
      name: 'EntryForm',
      component: EntryForm
    },
    {
      path: '/formshow',
      name: 'FormShow',
      component: FormShow
    },
    {
      path: '/tophone',
      name: 'ToPhone',
      component: ToPhone
    },

  ]
})
