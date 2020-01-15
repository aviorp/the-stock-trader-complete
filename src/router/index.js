import Vue from 'vue'
import VueRouter from 'vue-router';
import Portfolio from '../views/Portfolio.vue';
import Stocks from '../views/Stocks.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    component: Stocks
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router