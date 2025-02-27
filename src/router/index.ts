import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[{
        path: '/messageWall',
        name: 'messageWall',
        component: () => import('@/views/MessageWall.vue'),
      },{
        path: '/pictureWall',
        name: 'pictureWall',
        component: () => import('@/views/PictureWall.vue'),
      },]
    },
  ],
})

export default router
