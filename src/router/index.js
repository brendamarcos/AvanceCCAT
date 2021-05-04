import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  },
  {
    path: '/miembros',
    name: 'miembros',
    component: () => import(/* webpackChunkName: "miembros" */ '../views/Miembros.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
