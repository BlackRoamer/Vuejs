// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import Router from 'vue-router'
import Users from './components/Users'
import Test from './components/Test'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/users', component: Users
    },
    {
      path: '/test', component: Test
    },
    {
      path: '/', component: HelloWorld
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `<div id="app">
        <ul>
        <li>
        <router-link to="/users">Users</router-link>

        </li>
            <li>
        <router-link to="/test">Test</router-link>
               

                </li>
               <li> 
               <router-link to="/">Hello</router-link>
                     

</li>
        </ul>       
         <router-view></router-view> 
        </div>
`
}).$mount('#app')
