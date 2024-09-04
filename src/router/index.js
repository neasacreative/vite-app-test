import {createRouter, createWebHistory} from 'vue-router';

const routes = [
   {
     path : '/',
     name:'Main',
     component : () => import('../views/Main.vue')
   },
   {
    path : '/hello',
    name:'HelloWorld',
    component : () => import('../components/HelloWorld.vue')
  },
  {
    path : '/about',
    name:'About',
    component : () => import('../views/About.vue')
  },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router