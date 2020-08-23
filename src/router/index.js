import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pathOne',
    name: 'backTopOne',
    component: () => import ('../views/backTopOne')
  },
  {
    path: '/pathTwo',
    name: 'backTopTwo',
    component: () => import ('../views/backTopTwo')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
