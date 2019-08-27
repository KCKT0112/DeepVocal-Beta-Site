import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Usage from './views/Usage.vue'
import Eula from './views/Eula.vue'
import Product from './views/Product.vue'
import Downloading from './views/Downloading.vue'
import NotFound from './views/404.vue'
import Maintain from './views/Maintain.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Usage',
      name: 'Usage',
      component: Usage
    },
    {
      path: '/Eula',
      name: 'Eula',
      component: Eula
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Downloading',
      name: 'Downloading',
      component: Downloading
    },
    {
      name: 'NotFound',
      path: '/404',
      component: NotFound
    },
    {
      name: 'Maintain',
      path: '/Maintain',
      component: Maintain
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})