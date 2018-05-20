import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/intro',
      name:'Introduction',
      component: Introduction
    },
    {
      path:'/skills',
      name: 'Skills',
      component: Skills
    }
  ]
})
