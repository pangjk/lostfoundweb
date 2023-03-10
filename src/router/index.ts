import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LoginRegister',
    component: () => import('../views/LoginRegister.vue')
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
